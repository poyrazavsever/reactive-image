import type { BaseProps } from "../../types";

export type ZoomAnimationType =
  | "scale"
  | "scaleRotate"
  | "scaleBlur"
  | "scaleFade"
  | "scaleSlide"
  | "perspective"
  | "pulse"
  | "bounce"
  | "elastic";

export type ZoomOrigin =
  | "center"
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "cursor"; // Mouse pozisyonuna göre

export type ZoomTiming = {
  duration?: number;
  delay?: number;
  easing?: string;
};

export type ZoomOnHoverProps = {
  /** Zoom oranı (1.0 = orijinal boyut) */
  zoomScale?: number;

  /** Zoom animasyon türü */
  animation?: ZoomAnimationType;

  /** Transform origin noktası */
  origin?: ZoomOrigin;

  /** Animasyon timing ayarları */
  timing?: ZoomTiming;

  /** Mouse pozisyonuna göre dinamik origin (cursor origin için) */
  followCursor?: boolean;

  /** Zoom sırasında opacity değişimi */
  opacityChange?: number;

  /** Zoom sırasında blur efekti */
  blurAmount?: number;

  /** Zoom sırasında rotasyon */
  rotation?: number;

  /** Sınır dışına çıkmayı engelle */
  containZoom?: boolean;

  /** Touch cihazlarda da zoom efekti göster */
  enableTouch?: boolean;

  /** Zoom durumunda ek CSS class'ı */
  zoomClassName?: string;

  /** Animation sırasında callback */
  onZoomStart?: () => void;
  onZoomEnd?: () => void;
};

export type ZoomOnHoverComponentProps = BaseProps & ZoomOnHoverProps;
