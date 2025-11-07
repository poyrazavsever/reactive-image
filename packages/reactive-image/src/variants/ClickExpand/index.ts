// packages/reactive-image/src/variants/ClickExpand/index.ts
export { ClickExpand, default } from "./ClickExpand";
export type {
  ClickExpandProps,
  ClickExpandConfig,
  ClickExpandState,
  ClickExpandHandlers,
  UseClickExpandReturn,
  ModalAnimationType,
  BackdropType,
  ModalSize,
} from "./types";
export {
  useClickExpand,
  useKeyboardNavigation,
  useScrollLock,
  useFocusTrap,
} from "./hooks";
export {
  getAnimationStyle,
  getBackdropStyle,
  getModalSizeStyle,
  MODAL_ANIMATIONS,
  BACKDROP_STYLES,
  MODAL_SIZES,
  ANIMATION_CSS,
} from "./animations";
