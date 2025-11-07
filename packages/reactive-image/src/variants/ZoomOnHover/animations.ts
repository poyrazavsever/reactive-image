export const zoomAnimations = {
  scale: {
    container: {
      display: "inline-block" as const,
      overflow: "hidden" as const,
      cursor: "zoom-in" as const,
    },
    image: {
      display: "block" as const,
      width: "100%",
      height: "auto",
      transition: "transform var(--duration, 300ms) var(--easing, ease-out)",
      transformOrigin: "var(--origin, center)",
    },
  },

  scaleRotate: {
    container: {
      display: "inline-block" as const,
      overflow: "hidden" as const,
      cursor: "zoom-in" as const,
    },
    image: {
      display: "block" as const,
      width: "100%",
      height: "auto",
      transition: "transform var(--duration, 400ms) var(--easing, ease-out)",
      transformOrigin: "var(--origin, center)",
    },
  },

  scaleBlur: {
    container: {
      display: "inline-block" as const,
      overflow: "hidden" as const,
      cursor: "zoom-in" as const,
    },
    image: {
      display: "block" as const,
      width: "100%",
      height: "auto",
      transition:
        "transform var(--duration, 300ms) var(--easing, ease-out), filter var(--duration, 300ms) var(--easing, ease-out)",
      transformOrigin: "var(--origin, center)",
    },
  },

  scaleFade: {
    container: {
      display: "inline-block" as const,
      overflow: "hidden" as const,
      cursor: "zoom-in" as const,
    },
    image: {
      display: "block" as const,
      width: "100%",
      height: "auto",
      transition:
        "transform var(--duration, 300ms) var(--easing, ease-out), opacity var(--duration, 300ms) var(--easing, ease-out)",
      transformOrigin: "var(--origin, center)",
    },
  },

  scaleSlide: {
    container: {
      display: "inline-block" as const,
      overflow: "hidden" as const,
      cursor: "zoom-in" as const,
    },
    image: {
      display: "block" as const,
      width: "100%",
      height: "auto",
      transition: "transform var(--duration, 350ms) var(--easing, ease-out)",
      transformOrigin: "var(--origin, center)",
    },
  },

  perspective: {
    container: {
      display: "inline-block" as const,
      overflow: "hidden" as const,
      cursor: "zoom-in" as const,
      perspective: "1000px",
    },
    image: {
      display: "block" as const,
      width: "100%",
      height: "auto",
      transition: "transform var(--duration, 400ms) var(--easing, ease-out)",
      transformOrigin: "var(--origin, center)",
    },
  },

  pulse: {
    container: {
      display: "inline-block" as const,
      overflow: "hidden" as const,
      cursor: "zoom-in" as const,
    },
    image: {
      display: "block" as const,
      width: "100%",
      height: "auto",
      transition: "transform var(--duration, 200ms) var(--easing, ease-in-out)",
      transformOrigin: "var(--origin, center)",
    },
  },

  bounce: {
    container: {
      display: "inline-block" as const,
      overflow: "hidden" as const,
      cursor: "zoom-in" as const,
    },
    image: {
      display: "block" as const,
      width: "100%",
      height: "auto",
      transition:
        "transform var(--duration, 600ms) var(--easing, cubic-bezier(0.68, -0.55, 0.265, 1.55))",
      transformOrigin: "var(--origin, center)",
    },
  },

  elastic: {
    container: {
      display: "inline-block" as const,
      overflow: "hidden" as const,
      cursor: "zoom-in" as const,
    },
    image: {
      display: "block" as const,
      width: "100%",
      height: "auto",
      transition:
        "transform var(--duration, 800ms) var(--easing, cubic-bezier(0.175, 0.885, 0.32, 1.275))",
      transformOrigin: "var(--origin, center)",
    },
  },
} as const;

export const originMap = {
  center: "center center",
  top: "center top",
  bottom: "center bottom",
  left: "left center",
  right: "right center",
  "top-left": "left top",
  "top-right": "right top",
  "bottom-left": "left bottom",
  "bottom-right": "right bottom",
  cursor: "center center", // Bu dinamik olarak değişecek
} as const;
