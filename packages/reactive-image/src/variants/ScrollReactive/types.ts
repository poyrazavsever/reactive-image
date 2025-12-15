import type {
  BaseProps,
  ScrollReactiveProps as RootScrollReactiveProps,
} from "../../types";

export type ScrollReactiveAnimationType =
  | "fadeIn"
  | "parallax"
  | "scale"
  | "tilt";

export type ScrollReactiveProps = RootScrollReactiveProps;
export type ScrollReactiveComponentProps = BaseProps & ScrollReactiveProps;
