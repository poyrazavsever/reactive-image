"use client";
import { useMemo, type CSSProperties } from "react";
import type {
  PanRevealComponentProps,
  PanRevealDirection,
  PanRevealMaskShape,
} from "./types";
import { panAnimations } from "./animations";
import { usePanReveal } from "./hooks";

export function PanReveal({
  src,
  alt,
  secondarySrc,
  animation = "slide",
  direction = "right",
  panAmount = 35,
  maskShape = "circle",
  maskSize = 55,
  followCursor = false,
  gradientColor = "rgba(0,0,0,0.45)",
  timing = {},
  enableTouch = false,
  className,
  imgClassName,
  revealClassName,
  style,
  onRevealStart,
  onRevealEnd,
  loading,
  decoding,
  ...rest
}: PanRevealComponentProps) {
  const effectiveAnimation = animation;
  const effectiveDirection: PanRevealDirection =
    direction === "diagonal" ? "diagonal" : direction;
  const effectiveFollowCursor =
    effectiveAnimation === "spotlight" ? true : followCursor;
  const effectiveMaskShape: PanRevealMaskShape =
    effectiveAnimation === "spotlight" ? "circle" : maskShape;

  const computedDuration =
    timing.duration ??
    (effectiveAnimation === "slide" ? 650 : effectiveAnimation === "mask" ? 450 : 380);
  const computedEasing =
    timing.easing ?? "cubic-bezier(0.22, 0.61, 0.36, 1)";

  const {
    isRevealed,
    cursorPosition,
    containerRef,
    handlers,
  } = usePanReveal({
    followCursor: effectiveFollowCursor,
    enableTouch,
    animationDuration: computedDuration,
    onRevealStart,
    onRevealEnd,
  });

  const animationConfig = panAnimations[effectiveAnimation];
  const revealImageSrc = secondarySrc ?? src;
  const clampedPanAmount = Math.max(5, Math.min(100, panAmount));
  const clampedMaskSize = Math.max(5, Math.min(100, maskSize));

  const cssVars = useMemo(
    (): CSSProperties =>
      ({
        "--duration": `${computedDuration}ms`,
        "--easing": computedEasing,
        "--cursor-x": `${cursorPosition.x}%`,
        "--cursor-y": `${cursorPosition.y}%`,
        "--gradient-color": gradientColor,
        "--gradient-direction": directionToGradient(effectiveDirection),
      } as CSSProperties),
    [
      computedDuration,
      computedEasing,
      cursorPosition.x,
      cursorPosition.y,
      gradientColor,
      effectiveDirection,
    ]
  );

  const containerStyle = useMemo(
    (): CSSProperties => ({
      ...animationConfig.container,
      ...cssVars,
      ...style,
    }),
    [animationConfig.container, cssVars, style]
  );

  const baseImageStyle = useMemo((): CSSProperties => {
    const baseStyle = { ...animationConfig.baseImage } as CSSProperties;
    if (effectiveAnimation === "slide") {
      baseStyle.transform = isRevealed
        ? "translate3d(0, 0, 0)"
        : getCounterTransform(effectiveDirection, clampedPanAmount * 0.2);
    }
    return baseStyle;
  }, [
    animationConfig.baseImage,
    effectiveAnimation,
    effectiveDirection,
    clampedPanAmount,
    isRevealed,
  ]);

  const revealImageStyle = useMemo((): CSSProperties => {
    const baseStyle = { ...animationConfig.revealImage } as CSSProperties;

    if (effectiveAnimation === "slide") {
      baseStyle.transform = getSlideTransform(
        effectiveDirection,
        clampedPanAmount,
        isRevealed
      );
      baseStyle.opacity = 1;
    } else {
      baseStyle.clipPath = getMaskClipPath(
        effectiveMaskShape,
        clampedMaskSize,
        cursorPosition,
        isRevealed
      );
      baseStyle.opacity = isRevealed ? 1 : 0;
    }

    return baseStyle;
  }, [
    animationConfig.revealImage,
    effectiveAnimation,
    effectiveDirection,
    effectiveMaskShape,
    clampedMaskSize,
    clampedPanAmount,
    cursorPosition,
    isRevealed,
  ]);

  const overlayStyle = useMemo((): CSSProperties | undefined => {
    if (!animationConfig.overlay) return undefined;
    const style: CSSProperties = { ...animationConfig.overlay };
    if (effectiveAnimation === "slide") {
      style.opacity = isRevealed ? 0 : 1;
    } else {
      style.opacity = isRevealed ? 1 : 0.15;
    }
    return style;
  }, [animationConfig.overlay, effectiveAnimation, isRevealed]);

  const containerClassName = useMemo(() => {
    const classes = [
      "ri-pan-reveal",
      `ri-pan-reveal--${effectiveAnimation}`,
      `ri-pan-reveal--${effectiveDirection}`,
    ];
    if (className) classes.push(className);
    if (isRevealed && revealClassName) classes.push(revealClassName);
    return classes.join(" ");
  }, [
    className,
    revealClassName,
    isRevealed,
    effectiveAnimation,
    effectiveDirection,
  ]);

  return (
    <span
      ref={containerRef}
      className={containerClassName}
      style={containerStyle}
      {...handlers}
    >
      <img
        src={src}
        alt={alt}
        className={imgClassName}
        style={baseImageStyle}
        loading={loading}
        decoding={decoding}
        draggable={false}
        {...rest}
      />

      <img
        src={revealImageSrc}
        alt={alt}
        aria-hidden="true"
        className={imgClassName}
        style={revealImageStyle}
        loading="lazy"
        decoding="async"
        draggable={false}
      />

      {overlayStyle && (
        <span
          aria-hidden="true"
          className="ri-pan-reveal__overlay"
          style={overlayStyle}
        />
      )}
    </span>
  );
}

function getSlideTransform(
  direction: PanRevealDirection,
  amount: number,
  isRevealed: boolean
) {
  if (isRevealed) return "translate3d(0, 0, 0)";
  const offset = `${amount}%`;

  switch (direction) {
    case "left":
      return `translate3d(-${offset}, 0, 0)`;
    case "right":
      return `translate3d(${offset}, 0, 0)`;
    case "up":
      return `translate3d(0, -${offset}, 0)`;
    case "down":
      return `translate3d(0, ${offset}, 0)`;
    case "diagonal":
      return `translate3d(${offset}, ${offset}, 0)`;
    default:
      return "translate3d(0, 0, 0)";
  }
}

function getCounterTransform(direction: PanRevealDirection, amount: number) {
  const offset = `${amount}%`;
  switch (direction) {
    case "left":
      return `translate3d(${offset}, 0, 0)`;
    case "right":
      return `translate3d(-${offset}, 0, 0)`;
    case "up":
      return `translate3d(0, ${offset}, 0)`;
    case "down":
      return `translate3d(0, -${offset}, 0)`;
    case "diagonal":
      return `translate3d(-${offset}, -${offset}, 0)`;
    default:
      return "translate3d(0, 0, 0)";
  }
}

function getMaskClipPath(
  shape: PanRevealMaskShape,
  size: number,
  cursor: { x: number; y: number },
  isRevealed: boolean
) {
  const center = `${cursor.x}% ${cursor.y}%`;
  if (!isRevealed) {
    if (shape === "rectangle") {
      return "inset(0% 50% 0% 50%)";
    }
    return `circle(0% at ${center})`;
  }

  switch (shape) {
    case "ellipse":
      return `ellipse(${size * 1.2}% ${Math.max(size * 0.8, 5)}% at ${center})`;
    case "rectangle": {
      const gap = Math.max(0, (100 - size) / 2);
      return `inset(0% ${gap}% 0% ${gap}%)`;
    }
    default:
      return `circle(${size}% at ${center})`;
  }
}

function directionToGradient(direction: PanRevealDirection) {
  switch (direction) {
    case "left":
      return "to left";
    case "right":
      return "to right";
    case "up":
      return "to top";
    case "down":
      return "to bottom";
    case "diagonal":
      return "135deg";
    default:
      return "to right";
  }
}
