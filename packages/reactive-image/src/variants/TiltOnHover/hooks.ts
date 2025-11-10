import { useState, useCallback, useEffect, useRef } from "react";
import type { TiltOnHoverProps, TiltAxis } from "./types";

interface TiltState {
  tiltX: number;
  tiltY: number;
  mouseX: number;
  mouseY: number;
  isActive: boolean;
}

export function useTiltOnHover({
  tiltMax = 10,
  axis = "both",
  reverse = false,
  resetOnLeave = true,
  gyroscope = false,
  enableTouch = false,
  onTiltStart,
  onTiltMove,
  onTiltEnd,
}: TiltOnHoverProps) {
  const [tiltState, setTiltState] = useState<TiltState>({
    tiltX: 0,
    tiltY: 0,
    mouseX: 0,
    mouseY: 0,
    isActive: false,
  });

  const containerRef = useRef<HTMLElement>(null);
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Calculate tilt values based on mouse position
  const calculateTilt = useCallback(
    (clientX: number, clientY: number, rect: DOMRect) => {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalize mouse position (-0.5 to 0.5)
      const mouseXPct = (clientX - centerX) / rect.width;
      const mouseYPct = (clientY - centerY) / rect.height;

      // Calculate tilt angles
      let tiltX = mouseYPct * tiltMax * (reverse ? 1 : -1);
      let tiltY = mouseXPct * tiltMax * (reverse ? -1 : 1);

      // Apply axis restrictions
      if (axis === "x") tiltY = 0;
      if (axis === "y") tiltX = 0;

      // Clamp values
      tiltX = Math.max(-tiltMax, Math.min(tiltMax, tiltX));
      tiltY = Math.max(-tiltMax, Math.min(tiltMax, tiltY));

      return {
        tiltX,
        tiltY,
        mouseX: (mouseXPct + 0.5) * 100, // Convert to percentage
        mouseY: (mouseYPct + 0.5) * 100,
      };
    },
    [tiltMax, axis, reverse]
  );

  const handleMouseEnter = useCallback(() => {
    if (!containerRef.current) return;

    setTiltState((prev) => ({ ...prev, isActive: true }));
    onTiltStart?.({ tiltX: 0, tiltY: 0 });

    // Clear any pending reset
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = null;
    }
  }, [onTiltStart]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!containerRef.current || !tiltState.isActive) return;

      const rect = containerRef.current.getBoundingClientRect();
      const newTilt = calculateTilt(e.clientX, e.clientY, rect);

      // Use RAF for smooth animation, but don't block multiple calls
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        setTiltState((prev) => ({
          ...prev,
          ...newTilt,
        }));

        onTiltMove?.({
          tiltX: newTilt.tiltX,
          tiltY: newTilt.tiltY,
          mouseX: newTilt.mouseX,
          mouseY: newTilt.mouseY,
        });
      });
    },
    [tiltState.isActive, calculateTilt, onTiltMove]
  );

  const handleMouseLeave = useCallback(() => {
    // Always clear any pending animations
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    // Clear any pending reset timeout
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = null;
    }

    // Immediately set inactive state
    setTiltState((prev) => ({
      ...prev,
      isActive: false,
    }));

    if (resetOnLeave) {
      // Immediate reset for better responsiveness
      setTiltState((prev) => ({
        ...prev,
        tiltX: 0,
        tiltY: 0,
        mouseX: 50,
        mouseY: 50,
      }));

      // Call end callback after a short delay
      resetTimeoutRef.current = setTimeout(() => {
        onTiltEnd?.();
      }, 100);
    }
  }, [resetOnLeave, onTiltEnd]);

  // Touch handlers for mobile
  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLElement>) => {
      if (!enableTouch || !containerRef.current) return;

      handleMouseEnter();

      const touch = e.touches[0];
      const rect = containerRef.current.getBoundingClientRect();
      const newTilt = calculateTilt(touch.clientX, touch.clientY, rect);

      setTiltState((prev) => ({
        ...prev,
        ...newTilt,
      }));
    },
    [enableTouch, handleMouseEnter, calculateTilt]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLElement>) => {
      if (!enableTouch || !containerRef.current || !tiltState.isActive) return;

      e.preventDefault();
      const touch = e.touches[0];
      const rect = containerRef.current.getBoundingClientRect();
      const newTilt = calculateTilt(touch.clientX, touch.clientY, rect);

      setTiltState((prev) => ({
        ...prev,
        ...newTilt,
      }));
    },
    [enableTouch, tiltState.isActive, calculateTilt]
  );

  const handleTouchEnd = useCallback(() => {
    if (!enableTouch) return;
    handleMouseLeave();
  }, [enableTouch, handleMouseLeave]);

  // Gyroscope support for mobile
  useEffect(() => {
    if (!gyroscope) return;

    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (!containerRef.current || !tiltState.isActive) return;

      const beta = event.beta || 0; // X-axis rotation
      const gamma = event.gamma || 0; // Y-axis rotation

      // Normalize gyroscope values to tilt range
      const tiltX = Math.max(
        -tiltMax,
        Math.min(tiltMax, (beta / 45) * tiltMax)
      );
      const tiltY = Math.max(
        -tiltMax,
        Math.min(tiltMax, (gamma / 45) * tiltMax)
      );

      setTiltState((prev) => ({
        ...prev,
        tiltX: axis === "y" ? 0 : tiltX,
        tiltY: axis === "x" ? 0 : tiltY,
      }));
    };

    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, [gyroscope, tiltMax, axis, tiltState.isActive]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return {
    tiltState,
    containerRef,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
    },
  };
}
