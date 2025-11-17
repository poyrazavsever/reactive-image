export const panAnimations = {
  slide: {
    container: {
      position: "relative" as const,
      display: "inline-block" as const,
      overflow: "hidden" as const,
    },
    baseImage: {
      display: "block" as const,
      width: "100%",
      height: "auto",
      transition:
        "transform var(--duration, 500ms) var(--easing, cubic-bezier(0.22, 0.61, 0.36, 1))",
      willChange: "transform" as const,
    },
    revealImage: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover" as const,
      transition:
        "transform var(--duration, 600ms) var(--easing, cubic-bezier(0.22, 0.61, 0.36, 1)), clip-path var(--duration, 600ms) var(--easing, ease-out)",
      willChange: "transform" as const,
    },
    overlay: {
      position: "absolute" as const,
      inset: 0,
      pointerEvents: "none" as const,
      background:
        "linear-gradient(var(--gradient-direction, to right), rgba(0,0,0,0.4), transparent 60%)",
      mixBlendMode: "multiply" as const,
      opacity: 0,
      transition: "opacity 200ms ease-out",
    },
  },
  mask: {
    container: {
      position: "relative" as const,
      display: "inline-block" as const,
      overflow: "hidden" as const,
    },
    baseImage: {
      display: "block" as const,
      width: "100%",
      height: "auto",
    },
    revealImage: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover" as const,
      opacity: 0,
      transition:
        "clip-path var(--duration, 450ms) var(--easing, ease-out), opacity var(--duration, 350ms) ease-out",
      filter: "drop-shadow(0 12px 25px rgba(0,0,0,0.25))",
      willChange: "clip-path, opacity" as const,
    },
    overlay: {
      position: "absolute" as const,
      inset: 0,
      pointerEvents: "none" as const,
      background:
        "radial-gradient(circle at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(0,0,0,0) 40%, var(--gradient-color, rgba(0,0,0,0.55)) 100%)",
      opacity: 0,
      transition: "opacity var(--duration, 350ms) ease-out",
    },
  },
  spotlight: {
    container: {
      position: "relative" as const,
      display: "inline-block" as const,
      overflow: "hidden" as const,
    },
    baseImage: {
      display: "block" as const,
      width: "100%",
      height: "auto",
      filter: "grayscale(30%)",
    },
    revealImage: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover" as const,
      opacity: 0,
      transition:
        "clip-path var(--duration, 350ms) var(--easing, ease-out), opacity var(--duration, 250ms) ease-out",
      willChange: "clip-path, opacity" as const,
    },
    overlay: {
      position: "absolute" as const,
      inset: 0,
      pointerEvents: "none" as const,
      mixBlendMode: "screen" as const,
      background:
        "radial-gradient(circle at var(--cursor-x, 50%) var(--cursor-y, 50%), var(--gradient-color, rgba(255,255,255,0.35)), transparent 60%)",
      opacity: 0,
      transition: "opacity var(--duration, 250ms) ease-out",
    },
  },
} as const;
