import type { CSSProperties } from "react";

export const splitLayersStyles = {
  container: {
    position: "relative" as const,
    display: "block" as const,
    width: "100%",
    overflow: "hidden" as const,
    borderRadius: "18px",
    backgroundColor: "#05070d",
    boxShadow: "0 22px 60px rgba(0,0,0,0.32)",
  },
  frame: {
    position: "relative" as const,
    width: "100%",
    height: "100%",
    display: "block" as const,
  },
  layer: {
    position: "absolute" as const,
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    transition:
      "transform 360ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 260ms ease, clip-path 420ms ease",
    willChange: "transform, opacity, clip-path",
    backfaceVisibility: "hidden" as const,
  },
  glass: {
    position: "absolute" as const,
    inset: 0,
    pointerEvents: "none" as const,
    mixBlendMode: "screen" as const,
    transition: "opacity 320ms ease, transform 360ms ease",
  },
  vignette: {
    position: "absolute" as const,
    inset: 0,
    pointerEvents: "none" as const,
    background:
      "radial-gradient(circle at 50% 45%, rgba(0,0,0,0.05), rgba(0,0,0,0.32) 70%)",
  },
} satisfies Record<string, CSSProperties>;
