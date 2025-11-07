"use client";
import type { ReactiveImageProps } from "./types";
import { HoverSwitch } from "./variants/HoverSwitch";
import { ZoomOnHover } from "./variants/zoomOnHover";
import { TiltOnHover } from "./variants/tiltOnHover";
import { ClickExpand } from "./variants/clickExpand";

export function ReactiveImage(props: ReactiveImageProps) {
  const { variant } = props as any;
  if (variant === "hoverSwitch") return <HoverSwitch {...(props as any)} />;
  if (variant === "zoomOnHover") return <ZoomOnHover {...(props as any)} />;
  if (variant === "tiltOnHover") return <TiltOnHover {...(props as any)} />;
  if (variant === "clickExpand") return <ClickExpand {...(props as any)} />;
  // default plain image
  const { src, alt, className, imgClassName, style, ...rest } = props as any;
  return (
    <span className={className} style={style}>
      <img
        src={src}
        alt={alt}
        className={imgClassName}
        loading={rest.loading}
        decoding={rest.decoding}
      />
    </span>
  );
}
