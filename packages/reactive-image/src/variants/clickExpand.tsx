"use client";
import React, { useEffect, useState } from "react";
import type { BaseProps, ClickExpandProps } from "../types";

type Props = BaseProps & ClickExpandProps;

export function ClickExpand({
  src,
  alt,
  className,
  imgClassName,
  style,
  caption,
  backdrop = "dim",
  modalAnimation = "scaleFade",
  closeOnEsc = true,
  closeOnBackdrop = true,
  ...rest
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open || !closeOnEsc) return;
    const h = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, closeOnEsc]);

  return (
    <>
      <span
        className={`ri-click ${className ?? ""}`}
        style={{ display: "inline-block", ...style }}
      >
        <img
          src={src}
          alt={alt}
          className={imgClassName}
          onClick={() => setOpen(true)}
          loading={rest.loading}
          decoding={rest.decoding}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            cursor: "zoom-in",
          }}
        />
      </span>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className={`ri-modal ri-${backdrop} ri-${modalAnimation}`}
          onClick={() => closeOnBackdrop && setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            display: "grid",
            placeItems: "center",
            background:
              backdrop === "blur" ? "rgba(0,0,0,.35)" : "rgba(0,0,0,.6)",
            backdropFilter: backdrop === "blur" ? "blur(6px)" : undefined,
            zIndex: 9999,
          }}
        >
          <figure
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "95vw",
              maxHeight: "90vh",
              animation:
                modalAnimation === "slideUp"
                  ? "ri-slideUp .18s ease"
                  : modalAnimation === "springPop"
                  ? "ri-spring .22s cubic-bezier(.2, .9, .2, 1.2)"
                  : "ri-scaleFade .16s ease",
            }}
          >
            <img
              src={src}
              alt={alt}
              style={{
                display: "block",
                maxWidth: "100%",
                maxHeight: "80vh",
                borderRadius: 8,
              }}
            />
            {caption && (
              <figcaption
                style={{ color: "#fff", marginTop: 8, textAlign: "center" }}
              >
                {caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
}
