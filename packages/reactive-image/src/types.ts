// packages/reactive-image/src/types.ts
import type { CSSProperties, ImgHTMLAttributes } from "react";
import type React from "react";

export type VariantName =
  | "hoverSwitch"
  | "zoomOnHover"
  | "tiltOnHover"
  | "clickExpand";

type NativeImgProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "alt" | "width" | "height" | "loading" | "decoding"
>;

export type BaseProps = NativeImgProps & {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  style?: CSSProperties;
  width?: number | string;
  height?: number | string;
  loading?: "eager" | "lazy";
  decoding?: "auto" | "sync" | "async";
};

export type HoverSwitchProps = {
  hoverSrc?: string;
  animation?:
    | "fade"
    | "slide"
    | "crossfade"
    | "zoom"
    | "blur"
    | "rotateY"
    | "slideUp"
    | "slideDown"
    | "scaleRotate";
  slideDirection?: "left" | "right" | "up" | "down";
  timing?: {
    duration?: number;
    delay?: number;
    easing?: string;
  };
  preloadHover?: boolean;
  disableLazy?: boolean;
  enableTouch?: boolean;
  hoverClassName?: string;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
};
export type ZoomOnHoverProps = {
  zoomScale?: number;
  animation?:
    | "scale"
    | "scaleRotate"
    | "scaleBlur"
    | "scaleFade"
    | "scaleSlide"
    | "perspective"
    | "pulse"
    | "bounce"
    | "elastic";
  origin?:
    | "center"
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "cursor";
  timing?: {
    duration?: number;
    delay?: number;
    easing?: string;
  };
  followCursor?: boolean;
  opacityChange?: number;
  blurAmount?: number;
  rotation?: number;
  containZoom?: boolean;
  enableTouch?: boolean;
  zoomClassName?: string;
  onZoomStart?: () => void;
  onZoomEnd?: () => void;
};
export type TiltOnHoverProps = {
  tiltMax?: number;
  animation?:
    | "basic"
    | "glare"
    | "scale"
    | "perspective"
    | "bounce"
    | "elastic"
    | "magnetic"
    | "float"
    | "parallax";
  axis?: "both" | "x" | "y";
  timing?: {
    duration?: number;
    easing?: string;
    reset?: number;
  };
  perspective?: number;
  scale?: number;
  glare?: {
    enabled?: boolean;
    maxOpacity?: number;
    color?: string;
    position?: "center" | "mouse";
  };
  shadow?: boolean;
  reverse?: boolean;
  resetOnLeave?: boolean;
  gyroscope?: boolean;
  enableTouch?: boolean;
  tiltClassName?: string;
  onTiltStart?: (data: { tiltX: number; tiltY: number }) => void;
  onTiltMove?: (data: {
    tiltX: number;
    tiltY: number;
    mouseX: number;
    mouseY: number;
  }) => void;
  onTiltEnd?: () => void;
};
export type ClickExpandProps = {
  modalAnimation?:
    | "scaleFade"
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "springPop"
    | "zoomBounce"
    | "rotateIn"
    | "flipIn";
  backdrop?: "dim" | "blur" | "glass" | "dark" | "none";
  caption?: string;
  closeOnEsc?: boolean;
  closeOnBackdrop?: boolean;
  modalSize?: "sm" | "md" | "lg" | "xl" | "full" | "auto";
  animationDuration?: number;
  enableKeyboard?: boolean;
  preventScroll?: boolean;
  customBackdrop?: React.CSSProperties;
  modalClassName?: string;
  captionClassName?: string;
  onOpen?: () => void;
  onClose?: () => void;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
};

export type VariantProps =
  | ({ variant: "hoverSwitch" } & HoverSwitchProps)
  | ({ variant: "zoomOnHover" } & ZoomOnHoverProps)
  | ({ variant: "tiltOnHover" } & TiltOnHoverProps)
  | ({ variant: "clickExpand" } & ClickExpandProps);

export type ReactiveImageProps = BaseProps &
  (VariantProps | { variant?: undefined });
