import type { KenBurnsAnimationType, KenBurnsFrame } from "./types";

export const kenBurnsStyles = {
  container: {
    position: "relative" as const,
    display: "inline-block" as const,
    overflow: "hidden" as const,
  },
  image: {
    display: "block" as const,
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    willChange: "transform, opacity" as const,
    transformOrigin: "center center",
    backfaceVisibility: "hidden" as const,
  },
  overlay: {
    position: "absolute" as const,
    inset: 0,
    pointerEvents: "none" as const,
    mixBlendMode: "multiply" as const,
  },
} as const;

export const kenBurnsPresets: Record<KenBurnsAnimationType, KenBurnsFrame[]> = {
  classic: [
    { zoom: 1.12, panX: -8, panY: -6, duration: 6400 },
    { zoom: 1.18, panX: 6, panY: 2, duration: 6200 },
    { zoom: 1.08, panX: 0, panY: 8, duration: 6000 },
  ],
  slowPan: [
    { zoom: 1.08, panX: -12, panY: 4, duration: 7200 },
    { zoom: 1.08, panX: 12, panY: -6, duration: 7200 },
    { zoom: 1.05, panX: 0, panY: 6, duration: 6800 },
  ],
  dramatic: [
    { zoom: 1.22, panX: -6, panY: 0, rotate: -1, duration: 5200 },
    { zoom: 1.28, panX: 4, panY: 6, rotate: 1, duration: 5000 },
    { zoom: 1.18, panX: -3, panY: -8, rotate: -0.5, duration: 5400 },
  ],
};
