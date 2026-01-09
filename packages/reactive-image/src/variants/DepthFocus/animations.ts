import type { CSSProperties } from "react";

export const depthFocusStyles = {
  container: {
    position: "relative" as const,
    display: "block" as const,
    width: "100%",
    overflow: "hidden" as const,
    borderRadius: "16px",
    isolation: "isolate" as const,
    backgroundColor: "#030712",
    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
  },
  baseImage: {
    position: "absolute" as const,
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    transformOrigin: "center",
    transition:
      "transform 420ms cubic-bezier(0.22, 0.61, 0.36, 1), filter 360ms ease, opacity 260ms ease",
    willChange: "transform, filter",
  },
  focusImage: {
    position: "absolute" as const,
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    transformOrigin: "center",
    transition:
      "transform 420ms cubic-bezier(0.22, 0.61, 0.36, 1), filter 320ms ease, opacity 220ms ease",
    willChange: "transform, filter",
    backfaceVisibility: "hidden" as const,
  },
  glow: {
    position: "absolute" as const,
    inset: 0,
    pointerEvents: "none" as const,
    mixBlendMode: "screen" as const,
    opacity: 0.7,
    transition: "opacity 360ms ease, transform 420ms ease",
  },
  vignette: {
    position: "absolute" as const,
    inset: 0,
    pointerEvents: "none" as const,
    background:
      "radial-gradient(circle at 50% 45%, rgba(0,0,0,0.08), rgba(0,0,0,0.38) 65%)",
  },
} satisfies Record<string, CSSProperties>;

export const DEPTH_FOCUS_ANIMATION_CSS = `
@keyframes ri-depthfocus-glow {
  0% { opacity: 0.38; transform: scale(0.96); }
  45% { opacity: 0.85; transform: scale(1.02); }
  100% { opacity: 0.55; transform: scale(1); }
}
`;
