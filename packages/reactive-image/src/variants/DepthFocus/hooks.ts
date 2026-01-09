import { useCallback, useEffect, useRef, useState } from "react";
import type React from "react";
import type { DepthFocusProps } from "./types";

type FocusPoint = { x: number; y: number };

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function useDepthFocus({
  focusMode = "cursor",
  animation = "rackFocus",
  enableTouch = false,
  onFocusStart,
  onFocusMove,
  onFocusEnd,
}: DepthFocusProps) {
  const [focusPoint, setFocusPoint] = useState<FocusPoint>({ x: 50, y: 50 });
  const [isActive, setIsActive] = useState(focusMode !== "cursor");
  const [intensity, setIntensity] = useState(
    focusMode !== "cursor" ? 1 : 0.9
  );
  const containerRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);
  const driftRef = useRef<number | null>(null);
  const pendingPointRef = useRef<FocusPoint | null>(null);
  const hasStartedRef = useRef<boolean>(focusMode !== "cursor");

  const commitFocus = useCallback(
    (point: FocusPoint, fireMove = true) => {
      setFocusPoint((prev) => {
        if (
          Math.abs(prev.x - point.x) < 0.1 &&
          Math.abs(prev.y - point.y) < 0.1
        ) {
          return prev;
        }
        return point;
      });
      if (fireMove) {
        onFocusMove?.(point);
      }
    },
    [onFocusMove]
  );

  const schedulePointerUpdate = useCallback(
    (clientX: number, clientY: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clamp(((clientX - rect.left) / rect.width) * 100, 0, 100);
      const y = clamp(((clientY - rect.top) / rect.height) * 100, 0, 100);

      pendingPointRef.current = { x, y };
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        if (pendingPointRef.current) {
          commitFocus(pendingPointRef.current);
          pendingPointRef.current = null;
        }
        rafRef.current = null;
      });
    },
    [commitFocus]
  );

  const handlePointerEnter = useCallback(() => {
    if (!hasStartedRef.current) {
      onFocusStart?.();
      hasStartedRef.current = true;
    }
    setIsActive(true);
    setIntensity(1);
  }, [onFocusStart]);

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      if (!enableTouch && event.pointerType === "touch") return;
      if (focusMode !== "cursor") return;
      schedulePointerUpdate(event.clientX, event.clientY);
    },
    [enableTouch, focusMode, schedulePointerUpdate]
  );

  const handlePointerLeave = useCallback(() => {
    if (focusMode !== "cursor") return;
    setIsActive(false);
    setIntensity(0.86);
    commitFocus({ x: 50, y: 50 }, false);
    onFocusEnd?.();
    hasStartedRef.current = false;
  }, [commitFocus, focusMode, onFocusEnd]);

  const handleTouchStart = useCallback(
    (event: React.TouchEvent<HTMLElement>) => {
      if (!enableTouch) return;
      if (!hasStartedRef.current) {
        onFocusStart?.();
        hasStartedRef.current = true;
      }
      setIsActive(true);
      setIntensity(1);
      if (focusMode === "cursor") {
        const touch = event.touches[0];
        schedulePointerUpdate(touch.clientX, touch.clientY);
      }
    },
    [enableTouch, focusMode, onFocusStart, schedulePointerUpdate]
  );

  const handleTouchMove = useCallback(
    (event: React.TouchEvent<HTMLElement>) => {
      if (!enableTouch) return;
      if (focusMode !== "cursor") return;
      const touch = event.touches[0];
      schedulePointerUpdate(touch.clientX, touch.clientY);
    },
    [enableTouch, focusMode, schedulePointerUpdate]
  );

  const handleTouchEnd = useCallback(() => {
    if (!enableTouch) return;
    if (focusMode !== "cursor") return;
    setIsActive(false);
    setIntensity(0.9);
    commitFocus({ x: 50, y: 50 }, false);
    onFocusEnd?.();
    hasStartedRef.current = false;
  }, [commitFocus, enableTouch, focusMode, onFocusEnd]);

  // Auto / drift focus animation
  useEffect(() => {
    if (!(focusMode === "auto" || animation === "drift")) return undefined;
    setIsActive(true);
    setIntensity(1);
    if (!hasStartedRef.current) {
      onFocusStart?.();
      hasStartedRef.current = true;
    }
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = (now - start) / 1000;
      const x = 50 + 20 * Math.sin(elapsed * 0.9);
      const y = 50 + 14 * Math.cos(elapsed * 1.05 + 0.35);
      commitFocus({ x, y }, false);
      driftRef.current = requestAnimationFrame(animate);
    };
    driftRef.current = requestAnimationFrame(animate);

    return () => {
      if (driftRef.current) {
        cancelAnimationFrame(driftRef.current);
        driftRef.current = null;
      }
    };
  }, [animation, focusMode, commitFocus, onFocusStart]);

  // Scroll-driven focus
  useEffect(() => {
    if (focusMode !== "scroll") return undefined;
    setIsActive(true);
    setIntensity(1);
    if (!hasStartedRef.current) {
      onFocusStart?.();
      hasStartedRef.current = true;
    }
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const center = rect.top + rect.height / 2;
      const distance = Math.abs(center - viewport / 2);
      const span = viewport / 2 + rect.height / 2;
      const progress = clamp(1 - distance / span, 0, 1);
      const x = 35 + progress * 45;
      const y = 62 - progress * 20;
      commitFocus({ x, y }, false);
      setIntensity(0.75 + progress * 0.25);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [commitFocus, focusMode, onFocusStart]);

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (driftRef.current) {
        cancelAnimationFrame(driftRef.current);
      }
    };
  }, []);

  return {
    focusPoint,
    isActive,
    intensity,
    containerRef,
    handlers: {
      onPointerEnter: handlePointerEnter,
      onPointerMove: handlePointerMove,
      onPointerLeave: handlePointerLeave,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
    },
  };
}
