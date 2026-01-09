"use client";
import { useMemo } from "react";
import type { SplitLayerItem, SplitLayersComponentProps } from "./types";
import { splitLayersStyles } from "./animations";
import { useSplitLayers } from "./hooks";

export function SplitLayers({
  src,
  alt,
  layers = [],
  animation = "parallax",
  parallaxIntensity = 18,
  peelDirection = "right",
  peelLift = 16,
  rippleRadius = 240,
  glassOpacity = 0.34,
  baseScale = 1.02,
  perspective = 980,
  enableTouch = false,
  className,
  imgClassName,
  style,
  onLayerEnter,
  onLayerLeave,
  onLayerMove,
  loading,
  decoding,
  ...rest
}: SplitLayersComponentProps) {
  const { variant: _variant, ...imgRest } = rest as any;
  const { pointer, isActive, containerRef, handlers } = useSplitLayers({
    enableTouch,
    onLayerEnter,
    onLayerLeave,
    onLayerMove,
  });

  const mergedLayers = useMemo<SplitLayerItem[]>(() => {
    const baseLayer: SplitLayerItem = { src, alt, depth: 1, opacity: 1 };
    return [baseLayer, ...(layers ?? [])].map(
      (layer: SplitLayerItem, index: number) => ({
        ...layer,
        depth: layer.depth ?? index + 1,
        opacity: layer.opacity ?? 1,
      })
    );
  }, [alt, layers, src]);

  const containerClassName = useMemo(() => {
    const classes = ["ri-split-layers"];
    if (isActive) classes.push("ri-split-layers--active");
    if (className) classes.push(className);
    return classes.join(" ");
  }, [className, isActive]);

  const offsetX = (pointer.x - 0.5) * 2;
  const offsetY = (pointer.y - 0.5) * 2;
  const pointerXPercent = pointer.x * 100;
  const pointerYPercent = pointer.y * 100;

  const containerStyle = useMemo(
    () => ({
      ...splitLayersStyles.container,
      ...style,
      perspective: `${perspective}px`,
      transform: `translate3d(${offsetX * 3}px, ${offsetY * 3}px, 0)`,
    }),
    [offsetX, offsetY, perspective, style]
  );

  const layerStyles = useMemo(
    () =>
      mergedLayers.map((layer, index) => {
        const depth = Math.max(1, layer.depth ?? index + 1);
        const baseOpacity =
          (layer.opacity ?? 1) * (isActive ? 1 : 0.94 - index * 0.02);

        const translateX = offsetX * parallaxIntensity * depth;
        const translateY = offsetY * parallaxIntensity * depth * 0.72;
        let peelX = 0;
        let peelY = 0;
        let rotateZ = offsetX * 2.4;

        if (animation === "peel") {
          const distance = peelLift + depth * 5;
          const factor = isActive ? 1 : 0.35;
          switch (peelDirection) {
            case "left":
              peelX = -distance * factor;
              rotateZ -= 4 * factor;
              break;
            case "right":
              peelX = distance * factor;
              rotateZ += 4 * factor;
              break;
            case "up":
              peelY = -distance * factor;
              rotateZ -= 2 * factor;
              break;
            case "down":
              peelY = distance * factor;
              rotateZ += 2 * factor;
              break;
          }
        }

        const clipPath =
          animation === "rippleReveal"
            ? `circle(${isActive ? rippleRadius : 0}px at ${pointerXPercent}% ${pointerYPercent}%)`
            : "none";

        const scale = baseScale + depth * 0.015 + (isActive ? 0.01 : 0);

        return {
          ...splitLayersStyles.layer,
          transform: `translate3d(${translateX + peelX}px, ${
            translateY + peelY
          }px, 0) rotate(${rotateZ}deg) scale(${scale})`,
          clipPath,
          WebkitClipPath: clipPath,
          opacity: Math.max(0, Math.min(1, baseOpacity)),
          mixBlendMode: layer.blendMode,
        } as const;
      }),
    [
      animation,
      baseScale,
      isActive,
      mergedLayers,
      offsetX,
      offsetY,
      parallaxIntensity,
      peelDirection,
      peelLift,
      pointerXPercent,
      pointerYPercent,
      rippleRadius,
    ]
  );

  const glassStyle = useMemo(
    () => ({
      ...splitLayersStyles.glass,
      opacity: glassOpacity * (isActive ? 1 : 0.75),
      background:
        "linear-gradient(120deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.16) 45%, rgba(255,255,255,0.05) 100%)",
      filter: "blur(9px) saturate(140%)",
      transform: `translate3d(${offsetX * 12}px, ${
        offsetY * 6
      }px, 0) scale(${1 + (isActive ? 0.02 : 0)})`,
    }),
    [glassOpacity, isActive, offsetX, offsetY]
  );

  return (
    <span
      ref={containerRef}
      className={containerClassName}
      style={containerStyle}
      {...handlers}
    >
      <span style={splitLayersStyles.frame} className="ri-split-layers__frame">
        {mergedLayers.map((layer, index) => {
          const isTop = index === mergedLayers.length - 1;
          return (
            <img
              key={`${layer.src}-${index}`}
              src={layer.src}
              alt={isTop ? layer.alt ?? alt : ""}
              aria-hidden={!isTop}
              className={imgClassName}
              style={layerStyles[index]}
              loading={isTop ? loading : "lazy"}
              decoding={isTop ? decoding : "async"}
              draggable={false}
              {...imgRest}
            />
          );
        })}
      </span>
      {animation === "glassSlide" && <span aria-hidden style={glassStyle} />}
      <span aria-hidden style={splitLayersStyles.vignette} />
    </span>
  );
}

export default SplitLayers;
