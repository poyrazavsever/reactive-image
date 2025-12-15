export const scrollAnimations = {
  container: {
    position: "relative" as const,
    display: "inline-block" as const,
    overflow: "hidden" as const,
  },
  image: {
    display: "block" as const,
    width: "100%",
    height: "auto",
    willChange: "transform, opacity" as const,
    transformOrigin: "center center",
    transition: "transform 90ms linear, opacity 90ms linear",
  },
} as const;
