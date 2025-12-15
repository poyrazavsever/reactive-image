import { useState, useRef, useEffect, useCallback } from "react";
import type { ScrollReactiveProps } from "./types";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function useScrollReactive({
  triggerOffset = 0,
  once = false,
  onEnter,
  onExit,
  onProgress,
}: ScrollReactiveProps) {
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const hasEnteredRef = useRef(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);

  const calculateProgress = useCallback(() => {
    const el = containerRef.current;
    if (!el) return 0;

    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 1;
    const total = rect.height + viewportHeight - triggerOffset;

    if (total <= 0) return 0;

    const raw = (viewportHeight - rect.top - triggerOffset) / total;
    return clamp(raw, 0, 1);
  }, [triggerOffset]);

  const scheduleUpdate = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(() => {
      const next = calculateProgress();
      setProgress((prev) => {
        const value =
          once && hasEnteredRef.current ? Math.max(prev, next) : next;
        if (value !== prev) {
          onProgress?.(value);
        }
        return value;
      });
      rafRef.current = null;
    });
  }, [calculateProgress, onProgress, once]);

  useEffect(() => {
    scheduleUpdate();
  }, [scheduleUpdate]);

  useEffect(() => {
    const handle = () => scheduleUpdate();
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);

    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, [scheduleUpdate]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          if (!hasEnteredRef.current) {
            hasEnteredRef.current = true;
            onEnter?.();
          }
          setIsActive(true);
        } else {
          if (!once || !hasEnteredRef.current) {
            setIsActive(false);
            onExit?.();
          }
        }
        scheduleUpdate();
      },
      {
        threshold: [0, 0.15, 0.35, 0.6, 1],
        rootMargin: `0px 0px ${-triggerOffset}px 0px`,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, onEnter, onExit, scheduleUpdate, triggerOffset]);

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return {
    progress,
    isActive,
    containerRef,
  };
}
