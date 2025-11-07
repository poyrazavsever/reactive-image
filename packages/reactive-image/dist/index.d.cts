import { ImgHTMLAttributes, CSSProperties } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type VariantName = "hoverSwitch" | "zoomOnHover" | "tiltOnHover" | "clickExpand";
type NativeImgProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "width" | "height" | "loading" | "decoding">;
type BaseProps = NativeImgProps & {
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
type HoverSwitchProps = {
    hoverSrc?: string;
    animation?: "fade" | "slide" | "crossfade" | "zoom" | "blur" | "rotateY" | "slideUp" | "slideDown" | "scaleRotate";
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
type ZoomOnHoverProps = {
    zoomScale?: number;
    origin?: string;
};
type TiltOnHoverProps = {
    tiltMax?: number;
    glare?: boolean;
};
type ClickExpandProps = {
    modalAnimation?: "scaleFade" | "slideUp" | "springPop";
    backdrop?: "dim" | "blur" | "glass";
    caption?: string;
    closeOnEsc?: boolean;
    closeOnBackdrop?: boolean;
};
type VariantProps = ({
    variant: "hoverSwitch";
} & HoverSwitchProps) | ({
    variant: "zoomOnHover";
} & ZoomOnHoverProps) | ({
    variant: "tiltOnHover";
} & TiltOnHoverProps) | ({
    variant: "clickExpand";
} & ClickExpandProps);
type ReactiveImageProps = BaseProps & (VariantProps | {
    variant?: undefined;
});

declare function ReactiveImage(props: ReactiveImageProps): react_jsx_runtime.JSX.Element;

export { type BaseProps, type ClickExpandProps, type HoverSwitchProps, ReactiveImage, type ReactiveImageProps, type TiltOnHoverProps, type VariantName, type VariantProps, type ZoomOnHoverProps };
