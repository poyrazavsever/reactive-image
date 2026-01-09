import { useCallback, useEffect, useRef, useState } from "react";
import type React from "react";
import type { SplitLayersProps } from "./types";

type Pointer = { x: number; y: number };

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function useSplitLayers({
  enableTouch = false,
  onLayerEnter,
  onLayerLeave,
  onLayerMove,
}: SplitLayersProps) {
  const [pointer, setPointer] = useState<Pointer>({ x: 0.5, y: 0.5 });
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);
  const pendingRef = useRef<Pointer | null>(null);

  const commitPointer = useCallback(
    (coords: Pointer) => {
      setPointer((prev) => {
        if (
          Math.abs(prev.x - coords.x) < 0.01 &&
          Math.abs(prev.y - coords.y) < 0.01
        ) {
          return prev;
        }
        return coords;
      });
      onLayerMove?.(coords);
    },
    [onLayerMove]
  );

  const scheduleUpdate = useCallback(
    (clientX: number, clientY: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clamp((clientX - rect.left) / rect.width, 0, 1);
      const y = clamp((clientY - rect.top) / rect.height, 0, 1);
      pendingRef.current = { x, y };
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        if (pendingRef.current) {
          commitPointer(pendingRef.current);
          pendingRef.current = null;
        }
        rafRef.current = null;
      });
    },
    [commitPointer]
  );

  const handlePointerEnter = useCallback(() => {
    setIsActive(true);
    onLayerEnter?.();
  }, [onLayerEnter]);

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      if (!enableTouch && event.pointerType === "touch") return;
      scheduleUpdate(event.clientX, event.clientY);
    },
    [enableTouch, scheduleUpdate]
  );

  const handlePointerLeave = useCallback(() => {
    setIsActive(false);
    commitPointer({ x: 0.5, y: 0.5 });
    onLayerLeave?.();
  }, [commitPointer, onLayerLeave]);

  const handleTouchStart = useCallback(
    (event: React.TouchEvent<HTMLElement>) => {
      if (!enableTouch) return;
      const touch = event.touches[0];
      setIsActive(true);
      scheduleUpdate(touch.clientX, touch.clientY);
      onLayerEnter?.();
    },
    [enableTouch, onLayerEnter, scheduleUpdate]
  );

  const handleTouchMove = useCallback(
    (event: React.TouchEvent<HTMLElement>) => {
      if (!enableTouch) return;
      const touch = event.touches[0];
      scheduleUpdate(touch.clientX, touch.clientY);
    },
    [enableTouch, scheduleUpdate]
  );

  const handleTouchEnd = useCallback(() => {
    if (!enableTouch) return;
    setIsActive(false);
    commitPointer({ x: 0.5, y: 0.5 });
    onLayerLeave?.();
  }, [commitPointer, enableTouch, onLayerLeave]);

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return {
    pointer,
    isActive,
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
