export const polaroidStyles = {
  container: {
    position: "relative" as const,
    display: "block" as const,
    width: "100%",
    perspective: "900px",
  },
  frame: {
    position: "relative" as const,
    display: "block" as const,
    width: "100%",
    aspectRatio: "4 / 3",
    padding: "12px",
  },
  card: {
    position: "absolute" as const,
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    backgroundColor: "#fff",
    borderRadius: "12px",
    border: "10px solid #fff",
    boxShadow: "var(--shadow, 0 14px 30px rgba(0,0,0,0.18))",
    transition:
      "transform 320ms cubic-bezier(0.22, 0.61, 0.36, 1), box-shadow 220ms ease, filter 200ms ease",
    transformOrigin: "center center",
    willChange: "transform, box-shadow",
    backfaceVisibility: "hidden" as const,
  },
} as const;

export const shadowMap = {
  soft: "0 10px 24px rgba(0,0,0,0.12)",
  medium: "0 14px 30px rgba(0,0,0,0.18)",
  strong: "0 18px 40px rgba(0,0,0,0.22)",
} as const;
