import { useState, useRef, useEffect, useCallback } from "react";
import type { KenBurnsHookConfig, KenBurnsHookReturn } from "./types";

export function useKenBurnsSequence({
  frameDurations,
  autoplay,
  loop,
  pauseOnHover,
  enableTouch = false,
  framesKey,
  onSequenceStart,
  onSequenceEnd,
  onFrameChange,
}: KenBurnsHookConfig): KenBurnsHookReturn {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const containerRef = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startedRef = useRef(false);
  const frameCount = frameDurations.length;

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const resetState = useCallback(() => {
    clearTimer();
    setActiveIndex(0);
    setIsPlaying(autoplay);
    startedRef.current = false;
  }, [autoplay, clearTimer]);

  useEffect(() => {
    resetState();
  }, [framesKey, resetState]);

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  useEffect(() => {
    if (!isPlaying || frameCount <= 1) return;
    if (!startedRef.current) {
      startedRef.current = true;
      onSequenceStart?.();
    }

    const duration =
      frameDurations[activeIndex] ??
      frameDurations[0] ??
      6000;

    timerRef.current = setTimeout(() => {
      setActiveIndex((prev) => {
        const next = prev + 1;
        const reachedEnd = next >= frameCount;

        if (reachedEnd && !loop) {
          setIsPlaying(false);
          onSequenceEnd?.();
          return prev;
        }

        if (frameCount === 0) {
          return prev;
        }

        const target = next % frameCount;
        onFrameChange?.(target);
        return target;
      });
    }, duration);

    return () => {
      clearTimer();
    };
  }, [
    activeIndex,
    clearTimer,
    frameCount,
    frameDurations,
    isPlaying,
    loop,
    onFrameChange,
    onSequenceEnd,
    onSequenceStart,
  ]);

  const handleMouseEnter = useCallback(() => {
    if (!pauseOnHover) return;
    setIsPlaying(false);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (!pauseOnHover) return;
    if (frameCount <= 1) return;
    if (!loop && activeIndex === frameCount - 1) return;
    setIsPlaying(true);
  }, [pauseOnHover, frameCount, loop, activeIndex]);

  const handleTouchStart = useCallback(() => {
    if (!enableTouch) return;
    setIsPlaying(false);
  }, [enableTouch]);

  const handleTouchEnd = useCallback(() => {
    if (!enableTouch) return;
    if (frameCount <= 1) return;
    if (!loop && activeIndex === frameCount - 1) return;
    setIsPlaying(true);
  }, [enableTouch, frameCount, loop, activeIndex]);

  return {
    activeIndex,
    isPlaying,
    containerRef,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
    },
  };
}
