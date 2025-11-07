import React, { ImgHTMLAttributes, CSSProperties } from 'react';
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
    animation?: "scale" | "scaleRotate" | "scaleBlur" | "scaleFade" | "scaleSlide" | "perspective" | "pulse" | "bounce" | "elastic";
    origin?: "center" | "top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | "cursor";
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
type TiltOnHoverProps = {
    tiltMax?: number;
    animation?: "basic" | "glare" | "scale" | "perspective" | "bounce" | "elastic" | "magnetic" | "float" | "parallax";
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
    onTiltStart?: (data: {
        tiltX: number;
        tiltY: number;
    }) => void;
    onTiltMove?: (data: {
        tiltX: number;
        tiltY: number;
        mouseX: number;
        mouseY: number;
    }) => void;
    onTiltEnd?: () => void;
};
type ClickExpandProps = {
    modalAnimation?: "scaleFade" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "springPop" | "zoomBounce" | "rotateIn" | "flipIn";
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
