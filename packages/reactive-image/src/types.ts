// packages/reactive-image/src/types.ts
import type { CSSProperties, ImgHTMLAttributes } from "react";

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
export type TiltOnHoverProps = { tiltMax?: number; glare?: boolean };
export type ClickExpandProps = {
  modalAnimation?: "scaleFade" | "slideUp" | "springPop";
  backdrop?: "dim" | "blur" | "glass";
  caption?: string;
  closeOnEsc?: boolean;
  closeOnBackdrop?: boolean;
};

export type VariantProps =
  | ({ variant: "hoverSwitch" } & HoverSwitchProps)
  | ({ variant: "zoomOnHover" } & ZoomOnHoverProps)
  | ({ variant: "tiltOnHover" } & TiltOnHoverProps)
  | ({ variant: "clickExpand" } & ClickExpandProps);

export type ReactiveImageProps = BaseProps &
  (VariantProps | { variant?: undefined });
