"use client";
import { useMemo, type CSSProperties } from "react";
import type { PolaroidStackComponentProps } from "./types";
import { polaroidStyles, shadowMap } from "./animations";
import { usePolaroidStack } from "./hooks";

export function PolaroidStack({
  src,
  alt,
  stack = [],
  stackDepth,
  spreadAngle = 32,
  offsetStep = 14,
  lift = 14,
  rotationJitter = 4,
  shadow = "medium",
  aspectRatio,
  enableTouch = false,
  className,
  imgClassName,
  style,
  onStackEnter,
  onStackLeave,
  loading,
  decoding,
  ...rest
}: PolaroidStackComponentProps) {
  const { variant: _variant, ...imgRest } = rest as any;
  const { isActive, containerRef, handlers } = usePolaroidStack({
    enableTouch,
    onStackEnter,
    onStackLeave,
  });

  const items = useMemo(() => {
    const combined = [...(stack ?? []), { src, alt }];
    const depth =
      typeof stackDepth === "number"
        ? Math.max(1, Math.min(stackDepth, combined.length))
        : Math.min(4, combined.length || 1);
    return combined.slice(0, depth);
  }, [alt, src, stack, stackDepth]);

  const ratioFromStyle =
    (style as CSSProperties | undefined)?.aspectRatio ?? undefined;
  const frameAspect = aspectRatio ?? ratioFromStyle ?? "4 / 3";

  const containerStyle = useMemo(
    (): CSSProperties => ({
      ...polaroidStyles.container,
      ...style,
    }),
    [style]
  );

  const frameStyle = useMemo(
    (): CSSProperties => ({
      ...polaroidStyles.frame,
      aspectRatio: frameAspect as CSSProperties["aspectRatio"],
    }),
    [frameAspect]
  );

  const cardStyles = useMemo(() => {
    const count = items.length || 1;
    const center = (count - 1) / 2;
    const totalSpread = Math.max(4, spreadAngle);
    const angleStep = count > 1 ? totalSpread / (count - 1) : 0;

    return items.map((_, index) => {
      const angle = count > 1 ? -totalSpread / 2 + angleStep * index : 0;
      const jitter =
        ((index - center) * rotationJitter * (isActive ? 0.6 : 1)) / 1.8;
      const rotation = isActive ? angle : jitter;
      const translateX = isActive
        ? (index - center) * offsetStep
        : index * offsetStep * 0.4;
      const translateY = isActive
        ? -lift + Math.abs(index - center) * -2
        : index * offsetStep * 0.55;
      const scale = isActive ? 1 : 0.985;
      const boxShadow = shadowMap[shadow] ?? shadowMap.medium;

      return {
        transform: `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotation}deg) scale(${scale})`,
        zIndex: 100 + index,
        boxShadow,
        filter: isActive && index === count - 1 ? "saturate(1.05)" : "saturate(0.96)",
      } satisfies CSSProperties;
    });
  }, [isActive, items.length, lift, offsetStep, rotationJitter, shadow, spreadAngle]);

  const containerClassName = useMemo(() => {
    const classes = ["ri-polaroid-stack"];
    if (isActive) classes.push("ri-polaroid-stack--active");
    if (className) classes.push(className);
    return classes.join(" ");
  }, [className, isActive]);

  return (
    <span
      ref={containerRef}
      className={containerClassName}
      style={containerStyle}
      {...handlers}
    >
      <span style={frameStyle} className="ri-polaroid-stack__frame block">
        {items.map((item, index) => (
          <img
            key={`${item.src}-${index}`}
            src={item.src}
            alt={index === items.length - 1 ? item.alt ?? alt : ""}
            aria-hidden={index !== items.length - 1}
            className={imgClassName}
            style={{
              ...polaroidStyles.card,
              ...cardStyles[index],
            }}
            loading={index === items.length - 1 ? loading : "lazy"}
            decoding={index === items.length - 1 ? decoding : "async"}
            draggable={false}
            {...imgRest}
          />
        ))}
      </span>
    </span>
  );
}

export default PolaroidStack;
