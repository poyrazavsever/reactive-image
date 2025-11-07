export const animations = {

  slide: {
    container: {
      position: "relative" as const,
      display: "inline-block" as const,
      overflow: "hidden" as const,
    },
    image: {
      transition:
        "transform var(--duration, 300ms) var(--easing, ease-in-out) var(--delay, 0ms)",
      display: "block" as const,
      width: "100%",
      height: "auto",
    },
    hoverImage: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover" as const,
      transform: "translateX(100%)",
      transition:
        "transform var(--duration, 300ms) var(--easing, ease-in-out) var(--delay, 0ms)",
    },
  },

  crossfade: {
    container: {
      position: "relative" as const,
      display: "inline-block" as const,
      overflow: "hidden" as const,
    },
    image: {
      transition:
        "opacity var(--duration, 400ms) var(--easing, ease-in-out) var(--delay, 0ms)",
      display: "block" as const,
      width: "100%",
      height: "auto",
    },
    hoverImage: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover" as const,
      opacity: 0,
      transition:
        "opacity var(--duration, 400ms) var(--easing, ease-in-out) var(--delay, 0ms)",
    },
  },

  zoom: {
    container: {
      position: "relative" as const,
      display: "inline-block" as const,
      overflow: "hidden" as const,
    },
    image: {
      transition:
        "transform var(--duration, 300ms) var(--easing, ease-out) var(--delay, 0ms), opacity var(--duration, 300ms) var(--easing, ease-out) var(--delay, 0ms)",
      display: "block" as const,
      width: "100%",
      height: "auto",
    },
    hoverImage: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover" as const,
      opacity: 0,
      transform: "scale(1.1)",
      transition:
        "transform var(--duration, 300ms) var(--easing, ease-out) var(--delay, 0ms), opacity var(--duration, 300ms) var(--easing, ease-out) var(--delay, 0ms)",
    },
  },

  blur: {
    container: {
      position: "relative" as const,
      display: "inline-block" as const,
      overflow: "hidden" as const,
    },
    image: {
      transition:
        "filter var(--duration, 300ms) var(--easing, ease-in-out) var(--delay, 0ms), opacity var(--duration, 300ms) var(--easing, ease-in-out) var(--delay, 0ms)",
      display: "block" as const,
      width: "100%",
      height: "auto",
    },
    hoverImage: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover" as const,
      opacity: 0,
      filter: "blur(10px)",
      transition:
        "filter var(--duration, 300ms) var(--easing, ease-in-out) var(--delay, 0ms), opacity var(--duration, 300ms) var(--easing, ease-in-out) var(--delay, 0ms)",
    },
  },

  rotateY: {
    container: {
      position: "relative" as const,
      display: "inline-block" as const,
      overflow: "hidden" as const,
      perspective: "1000px",
    },
    image: {
      transition:
        "transform var(--duration, 400ms) var(--easing, ease-in-out) var(--delay, 0ms)",
      display: "block" as const,
      width: "100%",
      height: "auto",
      backfaceVisibility: "hidden" as const,
    },
    hoverImage: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover" as const,
      transform: "rotateY(180deg)",
      transition:
        "transform var(--duration, 400ms) var(--easing, ease-in-out) var(--delay, 0ms)",
      backfaceVisibility: "hidden" as const,
    },
  },

  slideUp: {
    container: {
      position: "relative" as const,
      display: "inline-block" as const,
      overflow: "hidden" as const,
    },
    image: {
      transition:
        "transform var(--duration, 300ms) var(--easing, ease-in-out) var(--delay, 0ms)",
      display: "block" as const,
      width: "100%",
      height: "auto",
    },
    hoverImage: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover" as const,
      transform: "translateY(100%)",
      transition:
        "transform var(--duration, 300ms) var(--easing, ease-in-out) var(--delay, 0ms)",
    },
  },

  slideDown: {
    container: {
      position: "relative" as const,
      display: "inline-block" as const,
      overflow: "hidden" as const,
    },
    image: {
      transition:
        "transform var(--duration, 300ms) var(--easing, ease-in-out) var(--delay, 0ms)",
      display: "block" as const,
      width: "100%",
      height: "auto",
    },
    hoverImage: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover" as const,
      transform: "translateY(-100%)",
      transition:
        "transform var(--duration, 300ms) var(--easing, ease-in-out) var(--delay, 0ms)",
    },
  },

  scaleRotate: {
    container: {
      position: "relative" as const,
      display: "inline-block" as const,
      overflow: "hidden" as const,
    },
    image: {
      transition:
        "transform var(--duration, 400ms) var(--easing, ease-in-out) var(--delay, 0ms), opacity var(--duration, 400ms) var(--easing, ease-in-out) var(--delay, 0ms)",
      display: "block" as const,
      width: "100%",
      height: "auto",
    },
    hoverImage: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover" as const,
      opacity: 0,
      transform: "scale(0.8) rotate(-10deg)",
      transition:
        "transform var(--duration, 400ms) var(--easing, ease-in-out) var(--delay, 0ms), opacity var(--duration, 400ms) var(--easing, ease-in-out) var(--delay, 0ms)",
    },
  },
} as const;
