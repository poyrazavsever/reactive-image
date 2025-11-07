"use client";
import { useMemo, CSSProperties } from "react";
import type { HoverSwitchComponentProps } from "./types";
import { animations } from "./animations";
import { useHoverSwitch } from "./hooks";

export function HoverSwitch({
  src,
  alt,
  hoverSrc,
  animation = "slide",
  slideDirection = "right",
  timing = {},
  preloadHover = true,
  disableLazy = false,
  enableTouch = false,
  className,
  imgClassName,
  hoverClassName,
  style,
  onAnimationStart,
  onAnimationEnd,
  ...rest
}: HoverSwitchComponentProps) {
  const { isHovered, isPreloaded, containerRef, handlers } = useHoverSwitch({
    hoverSrc,
    preloadHover,
    enableTouch,
    onAnimationStart,
    onAnimationEnd,
  });

  // Get animation styles
  const animationConfig = animations[animation];

  // Create CSS custom properties for timing
  const timingVars = useMemo(
    () =>
      ({
        "--duration": `${timing.duration || 300}ms`,
        "--delay": `${timing.delay || 0}ms`,
        "--easing": timing.easing || "ease-in-out",
      } as CSSProperties),
    [timing]
  );

  // Container styles
  const containerStyle = useMemo(
    (): CSSProperties => ({
      ...animationConfig.container,
      ...timingVars,
      ...style,
    }),
    [animationConfig.container, timingVars, style]
  );

  // Main image styles
  const imageStyle = useMemo((): CSSProperties => {
    const baseStyle = animationConfig.image;

    // Apply animation-specific transforms for main image
    let animationStyle: CSSProperties = {};

    if (isHovered) {
      switch (animation) {
        case "slide":
          // Slide direction'a göre transform
          switch (slideDirection) {
            case "left":
              animationStyle = { transform: "translateX(100%)" };
              break;
            case "right":
              animationStyle = { transform: "translateX(-100%)" };
              break;
            case "up":
              animationStyle = { transform: "translateY(100%)" };
              break;
            case "down":
              animationStyle = { transform: "translateY(-100%)" };
              break;
          }
          break;
        case "slideUp":
          animationStyle = { transform: "translateY(-100%)" };
          break;
        case "slideDown":
          animationStyle = { transform: "translateY(100%)" };
          break;
        case "zoom":
          animationStyle = { transform: "scale(0.9)", opacity: 0.7 };
          break;
        case "blur":
          animationStyle = { filter: "blur(5px)", opacity: 0.3 };
          break;
        case "rotateY":
          animationStyle = { transform: "rotateY(-180deg)" };
          break;
        case "scaleRotate":
          animationStyle = {
            transform: "scale(1.2) rotate(10deg)",
            opacity: 0.3,
          };
          break;
        case "crossfade":
          animationStyle = { opacity: 0 };
          break;
        default:
          // Fade için sadece opacity değişimi, hoverSrc varsa
          animationStyle = hoverSrc ? { opacity: 0 } : {};
          break;
      }
    }

    return { ...baseStyle, ...animationStyle };
  }, [animationConfig.image, isHovered, animation, slideDirection, hoverSrc]);

  // Hover image styles
  const hoverImageStyle = useMemo((): CSSProperties => {
    let baseStyle = { ...animationConfig.hoverImage } as CSSProperties;

    // Slide animasyonu için başlangıç pozisyonunu direction'a göre ayarla
    if (animation === "slide") {
      switch (slideDirection) {
        case "left":
          baseStyle.transform = "translateX(-100%)";
          break;
        case "right":
          baseStyle.transform = "translateX(100%)";
          break;
        case "up":
          baseStyle.transform = "translateY(-100%)";
          break;
        case "down":
          baseStyle.transform = "translateY(100%)";
          break;
      }
    }

    // Apply animation-specific transforms for hover image
    let animationStyle: CSSProperties = {};

    if (isHovered) {
      switch (animation) {
        case "slide":
          // Final pozisyon - tüm direction'lar için merkez
          animationStyle = { transform: "translate(0%, 0%)" };
          break;
        case "crossfade":
        case "zoom":
          animationStyle = { transform: "scale(1)", opacity: 1 };
          break;
        case "blur":
          animationStyle = { filter: "blur(0px)", opacity: 1 };
          break;
        case "rotateY":
          animationStyle = { transform: "rotateY(0deg)" };
          break;
        case "slideUp":
          animationStyle = { transform: "translateY(0%)" };
          break;
        case "slideDown":
          animationStyle = { transform: "translateY(0%)" };
          break;
        case "scaleRotate":
          animationStyle = { transform: "scale(1) rotate(0deg)", opacity: 1 };
          break;
      }
    }

    return { ...baseStyle, ...animationStyle };
  }, [animationConfig.hoverImage, isHovered, animation, slideDirection]);

  // Combine class names
  const containerClassName = useMemo(() => {
    const classes = ["ri-hover-switch", `ri-hover-switch--${animation}`];
    if (className) classes.push(className);
    if (isHovered && hoverClassName) classes.push(hoverClassName);
    return classes.join(" ");
  }, [animation, className, isHovered, hoverClassName]);

  return (
    <span
      ref={containerRef}
      className={containerClassName}
      style={containerStyle}
      {...handlers}
    >
      {/* Main Image */}
      <img
        src={src}
        alt={alt}
        className={imgClassName}
        style={imageStyle}
        loading={disableLazy ? "eager" : rest.loading}
        decoding={rest.decoding}
        draggable={false}
      />

      {/* Hover Image */}
      {hoverSrc && (preloadHover ? isPreloaded : true) && (
        <img
          src={hoverSrc}
          alt={alt}
          className={imgClassName}
          style={hoverImageStyle}
          loading={disableLazy ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
          aria-hidden="true"
        />
      )}
    </span>
  );
}

// Default export
export default HoverSwitch;
