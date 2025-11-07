// packages/reactive-image/src/variants/ClickExpand/types.ts
import type { CSSProperties } from "react";

export type ModalAnimationType =
  | "scaleFade"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "springPop"
  | "zoomBounce"
  | "rotateIn"
  | "flipIn";

export type BackdropType = "dim" | "blur" | "glass" | "dark" | "none";

export type ModalSize = "sm" | "md" | "lg" | "xl" | "full" | "auto";

export type ClickExpandConfig = {
  modalAnimation?: ModalAnimationType;
  backdrop?: BackdropType;
  caption?: string;
  closeOnEsc?: boolean;
  closeOnBackdrop?: boolean;
  modalSize?: ModalSize;
  animationDuration?: number;
  enableKeyboard?: boolean;
  preventScroll?: boolean;
  customBackdrop?: CSSProperties;
  modalClassName?: string;
  captionClassName?: string;
  onOpen?: () => void;
  onClose?: () => void;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
};

export type ClickExpandProps = ClickExpandConfig;

export interface ClickExpandState {
  isOpen: boolean;
  isAnimating: boolean;
  animationPhase: "entering" | "entered" | "exiting" | "exited";
}

export interface ClickExpandHandlers {
  open: () => void;
  close: () => void;
  toggle: () => void;
  handleKeyDown: (event: KeyboardEvent) => void;
  handleBackdropClick: () => void;
}

export interface UseClickExpandReturn {
  state: ClickExpandState;
  handlers: ClickExpandHandlers;
  modalProps: {
    "aria-modal": boolean;
    role: string;
    tabIndex: number;
  };
}
