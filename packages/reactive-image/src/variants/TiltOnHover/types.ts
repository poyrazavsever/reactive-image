import type { BaseProps } from "../../types";

export type TiltAnimationType =
  | "basic"
  | "glare"
  | "scale"
  | "perspective"
  | "bounce"
  | "elastic"
  | "magnetic"
  | "float"
  | "parallax";

export type TiltAxis = "both" | "x" | "y";

export type GlareSettings = {
  enabled?: boolean;
  maxOpacity?: number;
  color?: string;
  position?: "center" | "mouse";
};

export type TiltTiming = {
  duration?: number;
  easing?: string;
  reset?: number; // Reset animation duration
};

export type TiltOnHoverProps = {
  /** Maksimum tilt açısı (derece) */
  tiltMax?: number;

  /** Tilt animasyon türü */
  animation?: TiltAnimationType;

  /** Tilt ekseni */
  axis?: TiltAxis;

  /** Animasyon timing ayarları */
  timing?: TiltTiming;

  /** Perspective değeri */
  perspective?: number;

  /** Scale efekti */
  scale?: number;

  /** Glare (parıltı) efekt ayarları */
  glare?: GlareSettings;

  /** Tilt sırasında gölge efekti */
  shadow?: boolean;

  /** Reverse tilt yönü */
  reverse?: boolean;

  /** Reset on leave */
  resetOnLeave?: boolean;

  /** Gyroscope desteği (mobil) */
  gyroscope?: boolean;

  /** Touch cihazlarda da tilt efekti göster */
  enableTouch?: boolean;

  /** Tilt durumunda ek CSS class'ı */
  tiltClassName?: string;

  /** Animation sırasında callback */
  onTiltStart?: (data: { tiltX: number; tiltY: number }) => void;
  onTiltMove?: (data: {
    tiltX: number;
    tiltY: number;
    mouseX: number;
    mouseY: number;
  }) => void;
  onTiltEnd?: () => void;
};

export type TiltOnHoverComponentProps = BaseProps & TiltOnHoverProps;
