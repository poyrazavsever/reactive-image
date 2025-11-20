"use client";
import {
  useMemo,
  useState,
  useRef,
  useEffect,
  type CSSProperties,
} from "react";
import type {
  KenBurnsSequenceComponentProps,
  KenBurnsFrame,
} from "./types";
import { kenBurnsPresets, kenBurnsStyles } from "./animations";
import { useKenBurnsSequence } from "./hooks";

type NormalizedFrame = {
  src: string;
  zoom: number;
  panX: number;
  panY: number;
  rotate: number;
  duration: number;
  easing: string;
  transform: string;
};

const DEFAULT_DURATION = 6500;
const DEFAULT_EASING = "cubic-bezier(0.33, 1, 0.68, 1)";

export function KenBurnsSequence({
  src,
  alt,
  frames,
  animation = "classic",
  crossfadeDuration = 900,
  pauseOnHover = true,
  autoplay = true,
  loop = true,
  overlayGradient = "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.55) 100%)",
  enableTouch = false,
  timing = {},
  className,
  imgClassName,
  style,
  onSequenceStart,
  onSequenceEnd,
  onFrameChange,
  loading,
  decoding,
  ...rest
}: KenBurnsSequenceComponentProps) {
  const fallbackDuration = timing.duration ?? DEFAULT_DURATION;
  const fallbackEasing = timing.easing ?? DEFAULT_EASING;

  const resolvedFrames = useMemo(() => {
    if (frames && frames.length > 0) {
      return frames;
    }
    return kenBurnsPresets[animation] ?? kenBurnsPresets.classic;
  }, [animation, frames]);

  const normalizedFrames = useMemo<NormalizedFrame[]>(() => {
    const source = resolvedFrames.length
      ? resolvedFrames
      : kenBurnsPresets.classic;
    return source.map((frame) =>
      normalizeFrame(frame, src, fallbackDuration, fallbackEasing)
    );
  }, [resolvedFrames, src, fallbackDuration, fallbackEasing]);

  const framesKey = useMemo(
    () =>
      normalizedFrames
        .map(
          (frame) =>
            `${frame.src}-${frame.zoom}-${frame.panX}-${frame.panY}-${frame.rotate}-${frame.duration}-${frame.easing}`
        )
        .join("|"),
    [normalizedFrames]
  );

  const frameDurations = useMemo(
    () => normalizedFrames.map((frame) => frame.duration),
    [normalizedFrames]
  );

  const { activeIndex, isPlaying, containerRef, handlers } =
    useKenBurnsSequence({
      frameDurations,
      autoplay,
      loop,
      pauseOnHover,
      enableTouch,
      framesKey,
      onSequenceStart,
      onSequenceEnd,
      onFrameChange,
    });

  const activeFrame =
    normalizedFrames[activeIndex] ?? normalizedFrames[0] ?? normalizeFrame(
      undefined,
      src,
      fallbackDuration,
      fallbackEasing
    );

  const [leavingFrame, setLeavingFrame] = useState<NormalizedFrame | null>(null);
  const [isLeavingVisible, setIsLeavingVisible] = useState(false);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rafRef = useRef<number | null>(null);
  const previousFrameRef = useRef<NormalizedFrame | null>(null);

  useEffect(() => {
    previousFrameRef.current = normalizedFrames[0] ?? null;
    setLeavingFrame(null);
    setIsLeavingVisible(false);
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, [framesKey, normalizedFrames]);

  useEffect(() => {
    if (!previousFrameRef.current) {
      previousFrameRef.current = activeFrame;
      return;
    }
    if (crossfadeDuration <= 0) {
      previousFrameRef.current = activeFrame;
      setLeavingFrame(null);
      setIsLeavingVisible(false);
      return;
    }

    setLeavingFrame(previousFrameRef.current);
    setIsLeavingVisible(true);

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(() => {
      setIsLeavingVisible(false);
      rafRef.current = null;
    });

    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    leaveTimeoutRef.current = setTimeout(() => {
      setLeavingFrame(null);
      leaveTimeoutRef.current = null;
    }, crossfadeDuration);

    previousFrameRef.current = activeFrame;
  }, [activeFrame, crossfadeDuration]);

  useEffect(() => {
    return () => {
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const containerClassName = useMemo(() => {
    const classes = [
      "ri-kenburns-sequence",
      `ri-kenburns-sequence--${animation}`,
    ];
    if (!isPlaying) {
      classes.push("ri-kenburns-sequence--paused");
    }
    if (className) {
      classes.push(className);
    }
    return classes.join(" ");
  }, [animation, className, isPlaying]);

  const containerStyle = useMemo(
    (): CSSProperties => ({
      ...kenBurnsStyles.container,
      ...style,
    }),
    [style]
  );

  const activeImageStyle = useMemo(
    (): CSSProperties => ({
      ...kenBurnsStyles.image,
      transition: `transform ${activeFrame.duration}ms ${activeFrame.easing}`,
      transform: activeFrame.transform,
    }),
    [activeFrame]
  );

  const leavingImageStyle = useMemo((): CSSProperties | undefined => {
    if (!leavingFrame) return undefined;
    return {
      ...kenBurnsStyles.image,
      position: "absolute",
      inset: 0,
      opacity: isLeavingVisible ? 1 : 0,
      transition: `opacity ${crossfadeDuration}ms ease`,
      transform: leavingFrame.transform,
      pointerEvents: "none",
    };
  }, [crossfadeDuration, isLeavingVisible, leavingFrame]);

  const overlayStyle = useMemo((): CSSProperties | undefined => {
    if (!overlayGradient) return undefined;
    return {
      ...kenBurnsStyles.overlay,
      background: overlayGradient,
    };
  }, [overlayGradient]);

  return (
    <span
      ref={containerRef}
      className={containerClassName}
      style={containerStyle}
      {...handlers}
    >
      {leavingFrame && leavingImageStyle && (
        <img
          src={leavingFrame.src}
          alt={alt}
          aria-hidden="true"
          className={imgClassName}
          style={leavingImageStyle}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      )}

      <img
        src={activeFrame.src}
        alt={alt}
        className={imgClassName}
        style={activeImageStyle}
        loading={loading}
        decoding={decoding}
        draggable={false}
        {...rest}
      />

      {overlayStyle && (
        <span aria-hidden="true" className="ri-kenburns-sequence__overlay" style={overlayStyle} />
      )}
    </span>
  );
}

function normalizeFrame(
  frame: KenBurnsFrame | undefined,
  fallbackSrc: string,
  fallbackDuration: number,
  fallbackEasing: string
): NormalizedFrame {
  const zoom = clamp(frame?.zoom ?? 1.12, 1, 1.6);
  const panX = clamp(frame?.panX ?? 0, -30, 30);
  const panY = clamp(frame?.panY ?? 0, -30, 30);
  const rotate = clamp(frame?.rotate ?? 0, -6, 6);
  const duration = Math.max(1200, frame?.duration ?? fallbackDuration);
  const easing = frame?.easing ?? fallbackEasing;
  const src = frame?.src ?? fallbackSrc;

  return {
    src,
    zoom,
    panX,
    panY,
    rotate,
    duration,
    easing,
    transform: createTransform(panX, panY, zoom, rotate),
  };
}

function createTransform(panX: number, panY: number, zoom: number, rotate: number) {
  return `translate3d(${panX}%, ${panY}%, 0) scale(${zoom}) rotate(${rotate}deg)`;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
