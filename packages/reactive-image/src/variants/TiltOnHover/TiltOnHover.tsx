"use client";
import { useMemo, CSSProperties } from "react";
import type { TiltOnHoverComponentProps } from "./types";
import { tiltAnimations, shadowPresets } from "./animations";
import { useTiltOnHover } from "./hooks";

export function TiltOnHover({
  src,
  alt,
  tiltMax = 10,
  animation = "basic",
  axis = "both",
  timing = {},
  perspective = 1000,
  scale = 1,
  glare = {},
  shadow = false,
  reverse = false,
  resetOnLeave = true,
  gyroscope = false,
  enableTouch = false,
  className,
  imgClassName,
  tiltClassName,
  style,
  onTiltStart,
  onTiltMove,
  onTiltEnd,
  ...rest
}: TiltOnHoverComponentProps) {
  const { tiltState, containerRef, handlers } = useTiltOnHover({
    tiltMax,
    axis,
    reverse,
    resetOnLeave,
    gyroscope,
    enableTouch,
    onTiltStart,
    onTiltMove,
    onTiltEnd,
  });

  // Get animation configuration
  const animationConfig = tiltAnimations[animation];

  // Create CSS custom properties
  const cssVars = useMemo(
    (): CSSProperties =>
      ({
        "--duration": `${timing.duration || 200}ms`,
        "--reset-duration": `${timing.reset || 400}ms`,
        "--easing": timing.easing || "ease-out",
        "--perspective": `${perspective}px`,
        "--tilt-x": `${tiltState.tiltX}deg`,
        "--tilt-y": `${tiltState.tiltY}deg`,
        "--mouse-x": `${tiltState.mouseX}%`,
        "--mouse-y": `${tiltState.mouseY}%`,
        "--scale": scale.toString(),
        "--glare-color": glare.color || "rgba(255,255,255,0.3)",
      } as CSSProperties),
    [timing, perspective, tiltState, scale, glare.color]
  );

  // Container styles with tilt transform
  const containerStyle = useMemo((): CSSProperties => {
    const baseStyle = { ...animationConfig.container };
    let transform = `perspective(${perspective}px)`;
    let boxShadow = "";

    if (tiltState.isActive) {
      // Apply tilt transformation
      transform += ` rotateX(${tiltState.tiltX}deg) rotateY(${tiltState.tiltY}deg)`;

      // Add scale effect for scale animation
      if (animation === "scale" && tiltState.isActive) {
        transform += ` scale(${scale})`;
      }

      // Add floating shadow for float animation
      if (animation === "float" && shadow) {
        const intensity = Math.abs(tiltState.tiltX) + Math.abs(tiltState.tiltY);
        const shadowOffset = intensity / 2;
        boxShadow = `0 ${5 + shadowOffset}px ${
          15 + shadowOffset * 2
        }px rgba(0,0,0,${0.1 + intensity * 0.01})`;
      }

      // Add magnetic effect
      if (animation === "magnetic") {
        const magneticStrength = 2;
        const offsetX = ((tiltState.mouseX - 50) / 50) * magneticStrength;
        const offsetY = ((tiltState.mouseY - 50) / 50) * magneticStrength;
        transform += ` translate(${offsetX}px, ${offsetY}px)`;
      }
    }

    return {
      ...baseStyle,
      ...cssVars,
      transform,
      ...(boxShadow && { boxShadow }),
      ...style,
    };
  }, [
    animationConfig.container,
    cssVars,
    perspective,
    tiltState,
    animation,
    scale,
    shadow,
    style,
  ]);

  // Image styles with additional effects
  const imageStyle = useMemo((): CSSProperties => {
    const baseStyle = animationConfig.image;
    let additionalStyles: CSSProperties = {};

    if (tiltState.isActive) {
      switch (animation) {
        case "scale":
          // Image scale is handled by container
          break;

        case "magnetic":
          // Subtle counter-movement for magnetic effect
          const counterX = (-(tiltState.mouseX - 50) / 50) * 1;
          const counterY = (-(tiltState.mouseY - 50) / 50) * 1;
          additionalStyles.transform = `translate(${counterX}px, ${counterY}px)`;
          break;

        case "parallax":
          // Parallax movement effect
          const parallaxX = ((tiltState.mouseX - 50) / 50) * 5;
          const parallaxY = ((tiltState.mouseY - 50) / 50) * 5;
          additionalStyles.transform = `translate(${parallaxX}px, ${parallaxY}px)`;
          break;

        case "perspective":
          // Enhanced depth effect
          additionalStyles.transform = "translateZ(20px)";
          break;
      }
    }

    return {
      ...baseStyle,
      ...additionalStyles,
    };
  }, [animationConfig.image, tiltState, animation]);

  // Glare effect styles
  const glareStyle = useMemo((): CSSProperties => {
    if (!glare.enabled || animation !== "glare") return { display: "none" };

    const baseStyle = tiltAnimations.glare.glare;
    let glareTransform = "";
    let glareOpacity = 0;

    if (tiltState.isActive) {
      // Calculate glare position and intensity
      const intensity =
        (Math.abs(tiltState.tiltX) + Math.abs(tiltState.tiltY)) / (tiltMax * 2);
      glareOpacity = Math.min(
        intensity * (glare.maxOpacity || 0.3),
        glare.maxOpacity || 0.3
      );

      if (glare.position === "mouse") {
        // Follow mouse position
        const glareX = tiltState.mouseX - 50;
        const glareY = tiltState.mouseY - 50;
        glareTransform = `translate(${glareX}px, ${glareY}px) rotate(${
          (Math.atan2(glareY, glareX) * 180) / Math.PI
        }deg)`;
      } else {
        // Center position with tilt-based rotation
        glareTransform = `rotate(${tiltState.tiltY}deg)`;
      }
    }

    return {
      ...baseStyle,
      opacity: glareOpacity,
      transform: glareTransform,
    };
  }, [glare, animation, tiltState, tiltMax]);

  // Combine class names
  const containerClassName = useMemo(() => {
    const classes = ["ri-tilt", `ri-tilt--${animation}`];
    if (className) classes.push(className);
    if (tiltState.isActive && tiltClassName) classes.push(tiltClassName);
    return classes.join(" ");
  }, [animation, className, tiltState.isActive, tiltClassName]);

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

      {/* Glare Effect */}
      {animation === "glare" && glare.enabled && <div style={glareStyle} />}
    </span>
  );
}

// Default export
export default TiltOnHover;
