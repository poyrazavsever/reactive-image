export const tiltAnimations = {
  basic: {
    container: {
      display: "inline-block" as const,
      transformStyle: "preserve-3d" as const,
      transition:
        "transform var(--reset-duration, 400ms) var(--easing, ease-out)",
    },
    image: {
      display: "block" as const,
      width: "100%",
      height: "auto",
    },
  },

  glare: {
    container: {
      display: "inline-block" as const,
      position: "relative" as const,
      transformStyle: "preserve-3d" as const,
      transition:
        "transform var(--reset-duration, 400ms) var(--easing, ease-out)",
      overflow: "hidden" as const,
    },
    image: {
      display: "block" as const,
      width: "100%",
      height: "auto",
    },
    glare: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(45deg, transparent 30%, var(--glare-color, rgba(255,255,255,0.3)) 50%, transparent 70%)",
      opacity: 0,
      transition:
        "opacity var(--duration, 200ms) ease-out, transform var(--duration, 200ms) ease-out",
      pointerEvents: "none" as const,
      mixBlendMode: "overlay" as const,
    },
  },

  scale: {
    container: {
      display: "inline-block" as const,
      transformStyle: "preserve-3d" as const,
      transition:
        "transform var(--reset-duration, 400ms) var(--easing, ease-out)",
      overflow: "hidden" as const,
    },
    image: {
      display: "block" as const,
      width: "100%",
      height: "auto",
      transition: "transform var(--duration, 200ms) ease-out",
    },
  },

  perspective: {
    container: {
      display: "inline-block" as const,
      transformStyle: "preserve-3d" as const,
      transition:
        "transform var(--reset-duration, 500ms) var(--easing, ease-out)",
      perspective: "var(--perspective, 1000px)",
    },
    image: {
      display: "block" as const,
      width: "100%",
      height: "auto",
      transform: "translateZ(0)",
    },
  },

  bounce: {
    container: {
      display: "inline-block" as const,
      transformStyle: "preserve-3d" as const,
      transition:
        "transform var(--reset-duration, 600ms) cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
    image: {
      display: "block" as const,
      width: "100%",
      height: "auto",
    },
  },

  elastic: {
    container: {
      display: "inline-block" as const,
      transformStyle: "preserve-3d" as const,
      transition:
        "transform var(--reset-duration, 800ms) cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    },
    image: {
      display: "block" as const,
      width: "100%",
      height: "auto",
    },
  },

  magnetic: {
    container: {
      display: "inline-block" as const,
      transformStyle: "preserve-3d" as const,
      transition:
        "transform var(--reset-duration, 300ms) var(--easing, ease-out)",
    },
    image: {
      display: "block" as const,
      width: "100%",
      height: "auto",
      transition: "transform var(--duration, 150ms) ease-out",
    },
  },

  float: {
    container: {
      display: "inline-block" as const,
      transformStyle: "preserve-3d" as const,
      transition:
        "transform var(--reset-duration, 400ms) var(--easing, ease-out), box-shadow var(--reset-duration, 400ms) ease-out",
    },
    image: {
      display: "block" as const,
      width: "100%",
      height: "auto",
    },
  },

  parallax: {
    container: {
      display: "inline-block" as const,
      transformStyle: "preserve-3d" as const,
      transition:
        "transform var(--reset-duration, 400ms) var(--easing, ease-out)",
      overflow: "hidden" as const,
    },
    image: {
      display: "block" as const,
      width: "110%", // Slightly larger for parallax effect
      height: "auto",
      transition: "transform var(--duration, 200ms) ease-out",
      marginLeft: "-5%",
      marginTop: "-5%",
    },
  },
} as const;

export const shadowPresets = {
  subtle: "0 5px 15px rgba(0,0,0,0.1)",
  medium: "0 10px 30px rgba(0,0,0,0.15)",
  strong: "0 15px 45px rgba(0,0,0,0.2)",
  dramatic: "0 25px 60px rgba(0,0,0,0.3)",
} as const;
