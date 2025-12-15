import { useState, useCallback, useRef, useEffect } from "react";
import type { PolaroidStackProps } from "./types";

export function usePolaroidStack({
  enableTouch = false,
  onStackEnter,
  onStackLeave,
}: PolaroidStackProps) {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const touchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activate = useCallback(() => {
    setIsActive(true);
    onStackEnter?.();
  }, [onStackEnter]);

  const deactivate = useCallback(() => {
    setIsActive(false);
    onStackLeave?.();
  }, [onStackLeave]);

  const handleMouseEnter = useCallback(() => {
    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
      touchTimeoutRef.current = null;
    }
    activate();
  }, [activate]);

  const handleMouseLeave = useCallback(() => {
    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
      touchTimeoutRef.current = null;
    }
    deactivate();
  }, [deactivate]);

  const handleTouchStart = useCallback(() => {
    if (!enableTouch) return;
    activate();
  }, [activate, enableTouch]);

  const handleTouchEnd = useCallback(() => {
    if (!enableTouch) return;
    // slight delay so users can see the spread before it collapses
    touchTimeoutRef.current = setTimeout(deactivate, 150);
  }, [deactivate, enableTouch]);

  useEffect(() => {
    return () => {
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
      }
    };
  }, []);

  return {
    isActive,
    containerRef,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
    },
  };
}
