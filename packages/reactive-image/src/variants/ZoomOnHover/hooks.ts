import { useState, useCallback, useEffect, useRef } from "react";
import type { ZoomOnHoverProps, ZoomOrigin } from "./types";

export function useZoomOnHover({
  followCursor = false,
  origin = "center",
  enableTouch = false,
  onZoomStart,
  onZoomEnd,
}: ZoomOnHoverProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 });
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  const handleMouseEnter = useCallback(() => {
    // Always clear any pending timeout first
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Don't block on animation state - allow immediate state changes
    if (!isZoomed) {
      setIsAnimating(true);
      setIsZoomed(true);
      onZoomStart?.();

      // Set animation end callback
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        onZoomEnd?.();
      }, 600); // Reduced timeout for better responsiveness
    }
  }, [isZoomed, onZoomStart, onZoomEnd]);

  const handleMouseLeave = useCallback(() => {
    // Always clear any pending timeout first
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Don't block on animation state - allow immediate state changes
    if (isZoomed) {
      setIsAnimating(true);
      setIsZoomed(false);
      onZoomStart?.();

      // Set animation end callback
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        onZoomEnd?.();
      }, 600); // Reduced timeout for better responsiveness
    }
  }, [isZoomed, onZoomStart, onZoomEnd]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!followCursor || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      setCursorPosition({
        x: Math.max(0, Math.min(100, x)),
        y: Math.max(0, Math.min(100, y)),
      });
    },
    [followCursor]
  );

  // Touch handlers for mobile
  const handleTouchStart = useCallback(() => {
    if (!enableTouch) return;
    handleMouseEnter();
  }, [enableTouch, handleMouseEnter]);

  const handleTouchEnd = useCallback(() => {
    if (!enableTouch) return;
    // Shorter delay for better mobile experience
    setTimeout(handleMouseLeave, 150);
  }, [enableTouch, handleMouseLeave]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Calculate transform origin based on cursor position
  const getTransformOrigin = useCallback((): string => {
    if (origin === "cursor" && followCursor) {
      return `${cursorPosition.x}% ${cursorPosition.y}%`;
    }

    const originMap = {
      center: "center center",
      top: "center top",
      bottom: "center bottom",
      left: "left center",
      right: "right center",
      "top-left": "left top",
      "top-right": "right top",
      "bottom-left": "left bottom",
      "bottom-right": "right bottom",
    };

    return originMap[origin as keyof typeof originMap] || "center center";
  }, [origin, followCursor, cursorPosition]);

  return {
    isZoomed,
    isAnimating,
    cursorPosition,
    transformOrigin: getTransformOrigin(),
    containerRef,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onMouseMove: handleMouseMove,
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
    },
  };
}
