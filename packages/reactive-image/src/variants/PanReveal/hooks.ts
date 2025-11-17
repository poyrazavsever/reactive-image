import { useState, useEffect, useRef, useCallback } from "react";
import type React from "react";
import type { PanRevealHookConfig, PanRevealHookReturn } from "./types";

export function usePanReveal({
  followCursor = false,
  enableTouch = false,
  animationDuration,
  onRevealStart,
  onRevealEnd,
}: PanRevealHookConfig): PanRevealHookReturn {
  const [isRevealed, setIsRevealed] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scheduleAnimationEnd = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      onRevealEnd?.();
      timeoutRef.current = null;
    }, animationDuration);
  }, [animationDuration, onRevealEnd]);

  const handleMouseEnter = useCallback(() => {
    setIsRevealed((prev) => {
      if (prev) return prev;
      onRevealStart?.();
      scheduleAnimationEnd();
      return true;
    });
  }, [onRevealStart, scheduleAnimationEnd]);

  const handleMouseLeave = useCallback(() => {
    setIsRevealed((prev) => {
      if (!prev) return prev;
      onRevealStart?.();
      scheduleAnimationEnd();
      return false;
    });
  }, [onRevealStart, scheduleAnimationEnd]);

  const updateCursor = useCallback((clientX: number, clientY: number) => {
    if (!followCursor || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    setCursorPosition({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  }, [followCursor]);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (!followCursor) return;
      updateCursor(event.clientX, event.clientY);
    },
    [followCursor, updateCursor]
  );

  const handleTouchStart = useCallback(
    (event: React.TouchEvent<HTMLElement>) => {
      if (!enableTouch) return;
      handleMouseEnter();
      if (followCursor) {
        const touch = event.touches[0];
        updateCursor(touch.clientX, touch.clientY);
      }
    },
    [enableTouch, followCursor, handleMouseEnter, updateCursor]
  );

  const handleTouchMove = useCallback(
    (event: React.TouchEvent<HTMLElement>) => {
      if (!enableTouch || !followCursor) return;
      const touch = event.touches[0];
      updateCursor(touch.clientX, touch.clientY);
    },
    [enableTouch, followCursor, updateCursor]
  );

  const handleTouchEnd = useCallback(() => {
    if (!enableTouch) return;
    handleMouseLeave();
  }, [enableTouch, handleMouseLeave]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    isRevealed,
    cursorPosition,
    containerRef,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onMouseMove: handleMouseMove,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
    },
  };
}
