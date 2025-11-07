"use client";
import { useMemo, CSSProperties } from "react";
import type { ZoomOnHoverComponentProps } from "./types";
import { zoomAnimations } from "./animations";
import { useZoomOnHover } from "./hooks";

export function ZoomOnHover({
  src,
  alt,
  zoomScale = 1.15,
  animation = "scale",
  origin = "center",
  timing = {},
  followCursor = false,
  opacityChange = 1,
  blurAmount = 0,
  rotation = 0,
  containZoom = false,
  enableTouch = false,
  className,
  imgClassName,
  zoomClassName,
  style,
  onZoomStart,
  onZoomEnd,
  ...rest
}: ZoomOnHoverComponentProps) {
  const { isZoomed, transformOrigin, containerRef, handlers } = useZoomOnHover({
    followCursor,
    origin,
    enableTouch,
    onZoomStart,
    onZoomEnd,
  });

  // Get animation configuration
  const animationConfig = zoomAnimations[animation];

  // Create CSS custom properties for timing and values
  const cssVars = useMemo(
    (): CSSProperties =>
      ({
        "--duration": `${timing.duration || 300}ms`,
        "--delay": `${timing.delay || 0}ms`,
        "--easing": timing.easing || "ease-out",
        "--origin": transformOrigin,
        "--zoom-scale": zoomScale.toString(),
        "--opacity": opacityChange.toString(),
        "--blur": `${blurAmount}px`,
        "--rotation": `${rotation}deg`,
      } as CSSProperties),
    [timing, transformOrigin, zoomScale, opacityChange, blurAmount, rotation]
  );

  // Container styles
  const containerStyle = useMemo(
    (): CSSProperties => ({
      ...animationConfig.container,
      ...cssVars,
      ...(containZoom && { overflow: "hidden" }),
      ...style,
    }),
    [animationConfig.container, cssVars, containZoom, style]
  );

  // Image styles with zoom transforms
  const imageStyle = useMemo((): CSSProperties => {
    const baseStyle = animationConfig.image;

    let zoomTransform = "";
    let additionalStyles: CSSProperties = {};

    if (isZoomed) {
      switch (animation) {
        case "scale":
          zoomTransform = `scale(${zoomScale})`;
          break;

        case "scaleRotate":
          zoomTransform = `scale(${zoomScale}) rotate(${rotation}deg)`;
          break;

        case "scaleBlur":
          zoomTransform = `scale(${zoomScale})`;
          additionalStyles.filter = `blur(${blurAmount}px)`;
          break;

        case "scaleFade":
          zoomTransform = `scale(${zoomScale})`;
          additionalStyles.opacity = opacityChange;
          break;

        case "scaleSlide":
          // Slight slide effect with scale
          const slideOffset = (zoomScale - 1) * 10;
          zoomTransform = `scale(${zoomScale}) translate(${slideOffset}px, ${slideOffset}px)`;
          break;

        case "perspective":
          zoomTransform = `scale(${zoomScale}) perspective(1000px) rotateX(${
            rotation / 4
          }deg) rotateY(${rotation / 4}deg)`;
          break;

        case "pulse":
          // Pulse effect with multiple scale steps
          zoomTransform = `scale(${zoomScale})`;
          break;

        case "bounce":
          zoomTransform = `scale(${zoomScale})`;
          break;

        case "elastic":
          zoomTransform = `scale(${zoomScale})`;
          break;

        default:
          zoomTransform = `scale(${zoomScale})`;
      }
    }

    return {
      ...baseStyle,
      ...additionalStyles,
      transform: zoomTransform,
      transformOrigin,
    };
  }, [
    animationConfig.image,
    isZoomed,
    animation,
    zoomScale,
    rotation,
    blurAmount,
    opacityChange,
    transformOrigin,
  ]);

  // Combine class names
  const containerClassName = useMemo(() => {
    const classes = ["ri-zoom", `ri-zoom--${animation}`];
    if (className) classes.push(className);
    if (isZoomed && zoomClassName) classes.push(zoomClassName);
    return classes.join(" ");
  }, [animation, className, isZoomed, zoomClassName]);

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
        style={imageStyle}
        loading={rest.loading}
        decoding={rest.decoding}
        draggable={false}
      />
    </span>
  );
}

// Default export
export default ZoomOnHover;
