import type React from "react";
import type { BaseProps } from "../../types";

export type PanRevealAnimationType = "slide" | "mask" | "spotlight";

export type PanRevealDirection = "left" | "right" | "up" | "down" | "diagonal";

export type PanRevealMaskShape = "circle" | "ellipse" | "rectangle";

export type PanRevealTiming = {
  duration?: number;
  easing?: string;
};

export type PanRevealProps = {
  /** Alternate visual that gets revealed during the interaction */
  secondarySrc?: string;
  /** Animation preset */
  animation?: PanRevealAnimationType;
  /** Slide direction for the reveal animation */
  direction?: PanRevealDirection;
  /** How far the reveal image should travel (in %) */
  panAmount?: number;
  /** Mask shape for the mask/spotlight presets */
  maskShape?: PanRevealMaskShape;
  /** Mask size percentage (only for mask/spotlight) */
  maskSize?: number;
  /** Follow the cursor position for the reveal focus */
  followCursor?: boolean;
  /** Accent color used for gradients/glow */
  gradientColor?: string;
  /** Timing configuration */
  timing?: PanRevealTiming;
  /** Enable touch gestures */
  enableTouch?: boolean;
  /** Additional class when reveal state is active */
  revealClassName?: string;
  /** Lifecycle callbacks */
  onRevealStart?: () => void;
  onRevealEnd?: () => void;
};

export type PanRevealComponentProps = BaseProps & PanRevealProps;

export type PanRevealHookConfig = {
  followCursor?: boolean;
  enableTouch?: boolean;
  animationDuration: number;
  onRevealStart?: () => void;
  onRevealEnd?: () => void;
};

export type PanRevealHookReturn = {
  isRevealed: boolean;
  cursorPosition: {
    x: number;
    y: number;
  };
  containerRef: React.RefObject<HTMLSpanElement | null>;
  handlers: {
    onMouseEnter: React.MouseEventHandler<HTMLElement>;
    onMouseLeave: React.MouseEventHandler<HTMLElement>;
    onMouseMove: React.MouseEventHandler<HTMLElement>;
    onTouchStart: React.TouchEventHandler<HTMLElement>;
    onTouchMove: React.TouchEventHandler<HTMLElement>;
    onTouchEnd: React.TouchEventHandler<HTMLElement>;
  };
};
