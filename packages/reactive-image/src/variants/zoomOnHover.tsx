"use client";
import React from "react";
import type { BaseProps, ZoomOnHoverProps } from "../types";

type Props = BaseProps & ZoomOnHoverProps;

export function ZoomOnHover({
  src,
  alt,
  zoomScale = 1.15,
  origin = "center",
  className,
  imgClassName,
  style,
  ...rest
}: Props) {
  return (
    <span
      className={`ri-zoom ${className ?? ""}`}
      style={{
        display: "inline-block",
        overflow: "hidden",
        ...style,
      }}
    >
      <img
        src={src}
        alt={alt}
        className={imgClassName}
        loading={rest.loading}
        decoding={rest.decoding}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          transformOrigin: origin,
          transition: "transform 200ms ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = `scale(${zoomScale})`)
        }
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    </span>
  );
}
