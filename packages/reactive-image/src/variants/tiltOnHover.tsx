"use client";
import React, { useRef } from "react";
import type { BaseProps, TiltOnHoverProps } from "../types";

type Props = BaseProps & TiltOnHoverProps;

export function TiltOnHover({
  src,
  alt,
  tiltMax = 10,
  className,
  imgClassName,
  style,
  ...rest
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = py * -2 * tiltMax;
    const ry = px * 2 * tiltMax;
    el.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const reset = () => {
    const el = ref.current;
    if (el)
      el.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <span
      ref={ref}
      className={`ri-tilt ${className ?? ""}`}
      style={{
        display: "inline-block",
        transition: "transform 120ms ease",
        ...style,
      }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      <img
        src={src}
        alt={alt}
        className={imgClassName}
        loading={rest.loading}
        decoding={rest.decoding}
        style={{ display: "block", width: "100%", height: "auto" }}
      />
    </span>
  );
}
