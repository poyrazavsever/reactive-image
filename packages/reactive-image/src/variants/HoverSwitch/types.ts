import type { BaseProps } from "../../types";

export type HoverSwitchAnimationType =
  | "slide"
  | "crossfade"
  | "zoom"
  | "blur"
  | "rotateY"
  | "slideUp"
  | "slideDown"
  | "scaleRotate";

export type HoverSwitchTiming = {
  duration?: number;
  delay?: number;
  easing?: string;
};

export type SlideDirection = "left" | "right" | "up" | "down";

export type HoverSwitchProps = {
  /** Hover durumunda gösterilecek görsel */
  hoverSrc?: string;

  /** Animasyon türü */
  animation?: HoverSwitchAnimationType;

  /** Slide animasyonu yönü (slide, slideUp, slideDown için) */
  slideDirection?: SlideDirection;

  /** Animasyon timing ayarları */
  timing?: HoverSwitchTiming;

  /** Preload hover görseli (performans için) */
  preloadHover?: boolean;

  /** Lazy loading devre dışı bırak */
  disableLazy?: boolean;

  /** Touch cihazlarda da hover efekti göster */
  enableTouch?: boolean;

  /** Hover durumunda ek CSS class'ı */
  hoverClassName?: string;

  /** Animation sırasında callback */
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
};

export type HoverSwitchComponentProps = BaseProps & HoverSwitchProps;
