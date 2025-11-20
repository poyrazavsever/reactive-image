import type React from "react";
import type { BaseProps } from "../../types";

export type KenBurnsAnimationType = "classic" | "slowPan" | "dramatic";

export type KenBurnsFrame = {
  /** Optional source to override the base image for this frame */
  src?: string;
  /** Target zoom multiplier */
  zoom?: number;
  /** Target horizontal pan in percentages */
  panX?: number;
  /** Target vertical pan in percentages */
  panY?: number;
  /** Slight rotation per frame */
  rotate?: number;
  /** Duration of the transform animation */
  duration?: number;
  /** Timing function for the transform */
  easing?: string;
};

export type KenBurnsSequenceTiming = {
  duration?: number;
  easing?: string;
};

export type KenBurnsSequenceProps = {
  /** Prebuilt animation preset */
  animation?: KenBurnsAnimationType;
  /** Custom frames to override presets */
  frames?: KenBurnsFrame[];
  /** Crossfade duration between frames */
  crossfadeDuration?: number;
  /** Pause when the user hovers the container */
  pauseOnHover?: boolean;
  /** Automatically start the sequence */
  autoplay?: boolean;
  /** Loop the entire sequence */
  loop?: boolean;
  /** Optional overlay gradient */
  overlayGradient?: string;
  /** Enable touch based pause/resume */
  enableTouch?: boolean;
  /** Fallback timing for frames */
  timing?: KenBurnsSequenceTiming;
  /** Lifecycle callbacks */
  onSequenceStart?: () => void;
  onSequenceEnd?: () => void;
  onFrameChange?: (frameIndex: number) => void;
};

export type KenBurnsSequenceComponentProps = BaseProps & KenBurnsSequenceProps;

export type KenBurnsHookConfig = {
  frameDurations: number[];
  autoplay: boolean;
  loop: boolean;
  pauseOnHover: boolean;
  enableTouch?: boolean;
  framesKey: string;
  onSequenceStart?: () => void;
  onSequenceEnd?: () => void;
  onFrameChange?: (frameIndex: number) => void;
};

export type KenBurnsHookReturn = {
  activeIndex: number;
  isPlaying: boolean;
  containerRef: React.RefObject<HTMLSpanElement | null>;
  handlers: {
    onMouseEnter: React.MouseEventHandler<HTMLElement>;
    onMouseLeave: React.MouseEventHandler<HTMLElement>;
    onTouchStart: React.TouchEventHandler<HTMLElement>;
    onTouchEnd: React.TouchEventHandler<HTMLElement>;
  };
};
