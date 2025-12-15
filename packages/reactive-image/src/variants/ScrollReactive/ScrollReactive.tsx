"use client";
import { useMemo, type CSSProperties } from "react";
import type { ScrollReactiveComponentProps } from "./types";
import { scrollAnimations } from "./animations";
import { useScrollReactive } from "./hooks";

const lerp = (start: number, end: number, t: number) =>
  start + (end - start) * t;

export function ScrollReactive({
  src,
  alt,
  animation = "parallax",
  parallaxOffset = 60,
  scaleFrom = 0.92,
  rotate = 8,
  opacityFrom = 0.35,
  triggerOffset = 0,
  once = false,
  enableTouch = false,
  className,
  imgClassName,
  style,
  onEnter,
  onExit,
  onProgress,
  loading,
  decoding,
  ...rest
}: ScrollReactiveComponentProps) {
  const { variant: _variant, ...imgRest } = rest as any;
  const { progress, isActive, containerRef } = useScrollReactive({
    triggerOffset,
    once,
    onEnter,
    onExit,
    onProgress,
  });

  const clampedProgress = Math.min(1, Math.max(0, progress));

  const containerStyle = useMemo(
    (): CSSProperties => ({
      ...scrollAnimations.container,
      ...(enableTouch ? { touchAction: "manipulation" } : {}),
      ...style,
      // Expose progress to consumers
      // @ts-ignore CSS custom property
      "--ri-scroll-progress": clampedProgress,
    }),
    [clampedProgress, enableTouch, style]
  );

  const imageStyle = useMemo((): CSSProperties => {
    const base: CSSProperties = {
      ...scrollAnimations.image,
      opacity: lerp(opacityFrom, 1, clampedProgress),
    };

    switch (animation) {
      case "fadeIn": {
        const translateY = parallaxOffset * (1 - clampedProgress);
        base.transform = `translate3d(0, ${translateY}px, 0)`;
        break;
      }
      case "scale": {
        const translateY = parallaxOffset * 0.4 * (1 - clampedProgress);
        const scale = lerp(scaleFrom, 1, clampedProgress);
        base.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
        break;
      }
      case "tilt": {
        const translateY = parallaxOffset * 0.5 * (1 - clampedProgress);
        const tiltX = (1 - clampedProgress) * (rotate * 0.4);
        const tiltY = (clampedProgress - 0.5) * rotate;
        const scale = lerp(scaleFrom, 1, clampedProgress);
        base.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(0, ${translateY}px, 0) scale(${scale})`;
        break;
      }
      case "parallax":
      default: {
        const translateY = parallaxOffset * (1 - clampedProgress);
        base.transform = `translate3d(0, ${translateY}px, 0)`;
        base.opacity = Math.max(base.opacity ?? 1, 0.9);
        break;
      }
    }

    return base;
  }, [
    animation,
    clampedProgress,
    opacityFrom,
    parallaxOffset,
    rotate,
    scaleFrom,
  ]);

  const containerClassName = useMemo(() => {
    const classes = ["ri-scroll-reactive", `ri-scroll-reactive--${animation}`];
    if (isActive) classes.push("ri-scroll-reactive--active");
    if (className) classes.push(className);
    return classes.join(" ");
  }, [animation, className, isActive]);

  return (
    <span ref={containerRef} className={containerClassName} style={containerStyle}>
      <img
        src={src}
        alt={alt}
        className={imgClassName}
        style={imageStyle}
        loading={loading}
        decoding={decoding}
        draggable={false}
        {...imgRest}
      />
    </span>
  );
}

export default ScrollReactive;
