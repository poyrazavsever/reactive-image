import { useState, useCallback, useEffect, useRef } from "react";
import type { HoverSwitchProps } from "./types";

export function useHoverSwitch({
  hoverSrc,
  preloadHover = true,
  enableTouch = false,
  onAnimationStart,
  onAnimationEnd,
}: HoverSwitchProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  // Preload hover image for better performance
  useEffect(() => {
    if (hoverSrc && preloadHover && !isPreloaded) {
      const img = new Image();
      img.onload = () => setIsPreloaded(true);
      img.src = hoverSrc;
    }
  }, [hoverSrc, preloadHover, isPreloaded]);

  const handleMouseEnter = useCallback(() => {
    // Always clear any pending timeout first
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Don't block on animation state - allow immediate state changes
    if (!isHovered) {
      setIsAnimating(true);
      setIsHovered(true);
      onAnimationStart?.();

      // Set animation end callback
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        onAnimationEnd?.();
      }, 400); // Max animation duration
    }
  }, [isHovered, onAnimationStart, onAnimationEnd]);

  const handleMouseLeave = useCallback(() => {
    // Always clear any pending timeout first
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Don't block on animation state - allow immediate state changes
    if (isHovered) {
      setIsAnimating(true);
      setIsHovered(false);
      onAnimationStart?.();

      // Set animation end callback
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        onAnimationEnd?.();
      }, 400); // Max animation duration
    }
  }, [isHovered, onAnimationStart, onAnimationEnd]);

  // Touch handlers for mobile
  const handleTouchStart = useCallback(() => {
    if (!enableTouch) return;
    handleMouseEnter();
  }, [enableTouch, handleMouseEnter]);

  const handleTouchEnd = useCallback(() => {
    if (!enableTouch) return;
    // Shorter delay for better mobile experience
    setTimeout(handleMouseLeave, 100);
  }, [enableTouch, handleMouseLeave]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    isHovered,
    isPreloaded,
    isAnimating,
    containerRef,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
    },
  };
}
