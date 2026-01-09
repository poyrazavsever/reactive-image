"use client";
import { useEffect, useMemo } from "react";
import type { DepthFocusComponentProps } from "./types";
import { depthFocusStyles, DEPTH_FOCUS_ANIMATION_CSS } from "./animations";
import { useDepthFocus } from "./hooks";

export function DepthFocus({
  src,
  alt,
  animation = "rackFocus",
  focusMode = "cursor",
  blurRange,
  focusSize = 260,
  edgeSoftness = 140,
  tiltAmount = 8,
  glowColor = "rgba(255, 255, 255, 0.52)",
  parallaxDepth = 18,
  enableTouch = false,
  className,
  imgClassName,
  focusClassName,
  style,
  onFocusStart,
  onFocusMove,
  onFocusEnd,
  loading,
  decoding,
  ...rest
}: DepthFocusComponentProps) {
  const { variant: _variant, ...imgRest } = rest as any;
  const { focusPoint, isActive, intensity, containerRef, handlers } =
    useDepthFocus({
      focusMode,
      animation,
      enableTouch,
      onFocusStart,
      onFocusMove,
      onFocusEnd,
    });

  useEffect(() => {
    const styleId = "ri-depth-focus-animations";
    if (typeof document !== "undefined" && !document.getElementById(styleId)) {
      const styleElement = document.createElement("style");
      styleElement.id = styleId;
      styleElement.textContent = DEPTH_FOCUS_ANIMATION_CSS;
      document.head.appendChild(styleElement);
    }
  }, []);

  const blurMin = blurRange?.min ?? 1.5;
  const blurMax = Math.max(blurMin + 2, blurRange?.max ?? 12);
  const normalizedIntensity = Math.min(1, Math.max(0, intensity));
  const backgroundBlur =
    blurMin + (blurMax - blurMin) * (1 - normalizedIntensity);
  const focusBlur = Math.max(0, blurMin - 0.6);
  const focusSizeValue = focusSize ?? 260;
  const softnessValue =
    edgeSoftness ?? Math.max(90, Math.round(focusSizeValue * 0.45));

  const offsetX = ((focusPoint.x - 50) / 50) * parallaxDepth;
  const offsetY = ((focusPoint.y - 50) / 50) * parallaxDepth;
  const rotateY = ((focusPoint.x - 50) / 50) * -tiltAmount;
  const rotateX = ((focusPoint.y - 50) / 50) * tiltAmount;
  const scale = 1 + normalizedIntensity * 0.015 + (isActive ? 0.006 : 0);

  const cssVars = useMemo(
    () => ({
      "--ri-focus-x": `${focusPoint.x}%`,
      "--ri-focus-y": `${focusPoint.y}%`,
      "--ri-focus-size": `${focusSizeValue}px`,
      "--ri-edge-softness": `${softnessValue}px`,
      "--ri-glow-strength": `${
        animation === "pulseGlow"
          ? 0.85
          : 0.58 + normalizedIntensity * 0.25
      }`,
      "--ri-glow-color": glowColor,
      "--ri-bg-blur": `${backgroundBlur}px`,
      "--ri-fg-blur": `${focusBlur}px`,
    }),
    [
      animation,
      backgroundBlur,
      focusBlur,
      focusPoint.x,
      focusPoint.y,
      focusSizeValue,
      softnessValue,
      normalizedIntensity,
      glowColor,
    ]
  );

  const containerClassName = useMemo(() => {
    const classes = ["ri-depth-focus"];
    if (isActive) classes.push("ri-depth-focus--active");
    if (className) classes.push(className);
    return classes.join(" ");
  }, [className, isActive]);

  const mask = useMemo(
    () =>
      `radial-gradient(circle at var(--ri-focus-x) var(--ri-focus-y), rgba(0,0,0,1) calc(var(--ri-focus-size) * 0.58), rgba(0,0,0,0) calc(var(--ri-focus-size) * 0.58 + var(--ri-edge-softness)))`,
    []
  );

  const containerStyle = useMemo(
    () => ({
      ...depthFocusStyles.container,
      ...style,
      transform: `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${offsetX * 0.3}px, ${offsetY * 0.3}px, 0)`,
    }),
    [offsetX, offsetY, rotateX, rotateY, style]
  );

  const baseImageStyle = useMemo(
    () => ({
      ...depthFocusStyles.baseImage,
      filter: `blur(${backgroundBlur}px) saturate(${
        0.9 + normalizedIntensity * 0.08
      })`,
      transform: `translate3d(${offsetX * 0.14}px, ${
        offsetY * 0.14
      }px, 0) scale(${1 + normalizedIntensity * 0.012})`,
      opacity: 0.98,
    }),
    [backgroundBlur, normalizedIntensity, offsetX, offsetY]
  );

  const focusImageStyle = useMemo(
    () => ({
      ...depthFocusStyles.focusImage,
      filter: `blur(${focusBlur}px) saturate(${
        1.05 + normalizedIntensity * 0.08
      })`,
      transform: `translate3d(${offsetX * 0.24}px, ${
        offsetY * 0.24
      }px, 0) scale(${scale})`,
      maskImage: mask,
      WebkitMaskImage: mask,
      opacity: isActive ? 1 : 0.96,
    }),
    [focusBlur, normalizedIntensity, offsetX, offsetY, scale, mask, isActive]
  );

  const glowStyle = useMemo(
    () => ({
      ...depthFocusStyles.glow,
      background: `radial-gradient(circle at var(--ri-focus-x) var(--ri-focus-y), var(--ri-glow-color) 0%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 72%)`,
      filter: "blur(18px)",
      animation:
        animation === "pulseGlow"
          ? "ri-depthfocus-glow 2.4s ease-in-out infinite"
          : undefined,
      transform: `translate3d(${offsetX * 0.18}px, ${
        offsetY * 0.18
      }px, 0) scale(${1 + normalizedIntensity * 0.02})`,
      opacity:
        animation === "pulseGlow"
          ? 0.9
          : 0.62 + normalizedIntensity * (isActive ? 0.22 : 0.1),
    }),
    [animation, isActive, normalizedIntensity, offsetX, offsetY]
  );

  return (
    <span
      ref={containerRef}
      className={containerClassName}
      style={{ ...containerStyle, ...cssVars }}
      {...handlers}
    >
      <img
        src={src}
        alt=""
        aria-hidden
        className={imgClassName}
        style={baseImageStyle}
        loading={loading ?? "lazy"}
        decoding={decoding ?? "async"}
        draggable={false}
        {...imgRest}
      />
      <img
        src={src}
        alt={alt}
        className={focusClassName ?? imgClassName}
        style={focusImageStyle}
        loading={loading}
        decoding={decoding}
        draggable={false}
        {...imgRest}
      />
      <span aria-hidden style={glowStyle} />
      <span aria-hidden style={depthFocusStyles.vignette} />
    </span>
  );
}

export default DepthFocus;
