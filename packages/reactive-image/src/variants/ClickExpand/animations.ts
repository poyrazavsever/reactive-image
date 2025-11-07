// packages/reactive-image/src/variants/ClickExpand/animations.ts
import type { CSSProperties } from "react";
import type { ModalAnimationType, BackdropType, ModalSize } from "./types";

export const MODAL_ANIMATIONS: Record<ModalAnimationType, CSSProperties> = {
  scaleFade: {
    animation:
      "ri-scaleFade var(--ri-duration, 200ms) var(--ri-easing, ease-out) forwards",
  },
  slideUp: {
    animation:
      "ri-slideUp var(--ri-duration, 250ms) var(--ri-easing, cubic-bezier(0.2, 0.8, 0.2, 1)) forwards",
  },
  slideDown: {
    animation:
      "ri-slideDown var(--ri-duration, 250ms) var(--ri-easing, cubic-bezier(0.2, 0.8, 0.2, 1)) forwards",
  },
  slideLeft: {
    animation:
      "ri-slideLeft var(--ri-duration, 250ms) var(--ri-easing, cubic-bezier(0.2, 0.8, 0.2, 1)) forwards",
  },
  slideRight: {
    animation:
      "ri-slideRight var(--ri-duration, 250ms) var(--ri-easing, cubic-bezier(0.2, 0.8, 0.2, 1)) forwards",
  },
  springPop: {
    animation:
      "ri-springPop var(--ri-duration, 300ms) var(--ri-easing, cubic-bezier(0.2, 0.9, 0.2, 1.2)) forwards",
  },
  zoomBounce: {
    animation:
      "ri-zoomBounce var(--ri-duration, 400ms) var(--ri-easing, cubic-bezier(0.68, -0.55, 0.265, 1.55)) forwards",
  },
  rotateIn: {
    animation:
      "ri-rotateIn var(--ri-duration, 350ms) var(--ri-easing, cubic-bezier(0.25, 0.46, 0.45, 0.94)) forwards",
  },
  flipIn: {
    animation:
      "ri-flipIn var(--ri-duration, 400ms) var(--ri-easing, cubic-bezier(0.25, 0.46, 0.45, 0.94)) forwards",
  },
};

export const BACKDROP_STYLES: Record<BackdropType, CSSProperties> = {
  dim: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "none",
  },
  blur: {
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    backdropFilter: "blur(6px)",
  },
  glass: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  dark: {
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    backdropFilter: "none",
  },
  none: {
    backgroundColor: "transparent",
    backdropFilter: "none",
  },
};

export const MODAL_SIZES: Record<ModalSize, CSSProperties> = {
  sm: {
    maxWidth: "400px",
    maxHeight: "300px",
  },
  md: {
    maxWidth: "600px",
    maxHeight: "450px",
  },
  lg: {
    maxWidth: "800px",
    maxHeight: "600px",
  },
  xl: {
    maxWidth: "1200px",
    maxHeight: "800px",
  },
  full: {
    maxWidth: "95vw",
    maxHeight: "95vh",
  },
  auto: {
    maxWidth: "95vw",
    maxHeight: "90vh",
  },
};

export const ANIMATION_CSS = `
@keyframes ri-scaleFade {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes ri-slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes ri-slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes ri-slideLeft {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes ri-slideRight {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes ri-springPop {
  from {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes ri-zoomBounce {
  from {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.1);
  }
  70% {
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes ri-rotateIn {
  from {
    opacity: 0;
    transform: rotate(-180deg) scale(0.5);
  }
  to {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
}

@keyframes ri-flipIn {
  from {
    opacity: 0;
    transform: perspective(400px) rotateY(-90deg);
  }
  40% {
    transform: perspective(400px) rotateY(-10deg);
  }
  70% {
    transform: perspective(400px) rotateY(10deg);
  }
  to {
    opacity: 1;
    transform: perspective(400px) rotateY(0deg);
  }
}
`;

export function getAnimationStyle(
  animation: ModalAnimationType,
  duration?: number
): CSSProperties {
  const baseStyle = MODAL_ANIMATIONS[animation];

  if (duration && duration !== 200) {
    return {
      ...baseStyle,
      // @ts-ignore - CSS custom properties
      "--ri-duration": `${duration}ms`,
    };
  }

  return baseStyle;
}

export function getBackdropStyle(
  backdrop: BackdropType,
  customStyle?: CSSProperties
): CSSProperties {
  const baseStyle = BACKDROP_STYLES[backdrop];

  return {
    ...baseStyle,
    ...customStyle,
  };
}

export function getModalSizeStyle(size: ModalSize): CSSProperties {
  return MODAL_SIZES[size];
}
