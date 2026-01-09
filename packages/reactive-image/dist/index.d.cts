import React, { ImgHTMLAttributes, CSSProperties } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type VariantName = "hoverSwitch" | "zoomOnHover" | "tiltOnHover" | "clickExpand" | "panReveal" | "kenBurnsSequence" | "polaroidStack" | "scrollReactive" | "depthFocus" | "splitLayers";
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
type PanRevealProps = {
    secondarySrc?: string;
    animation?: "slide" | "mask" | "spotlight";
    direction?: "left" | "right" | "up" | "down" | "diagonal";
    panAmount?: number;
    maskShape?: "circle" | "ellipse" | "rectangle";
    maskSize?: number;
    followCursor?: boolean;
    gradientColor?: string;
    timing?: {
        duration?: number;
        easing?: string;
    };
    enableTouch?: boolean;
    revealClassName?: string;
    onRevealStart?: () => void;
    onRevealEnd?: () => void;
};
type KenBurnsSequenceFrame = {
    src?: string;
    zoom?: number;
    panX?: number;
    panY?: number;
    rotate?: number;
    duration?: number;
    easing?: string;
};
type KenBurnsSequenceProps = {
    animation?: "classic" | "slowPan" | "dramatic";
    frames?: KenBurnsSequenceFrame[];
    crossfadeDuration?: number;
    pauseOnHover?: boolean;
    autoplay?: boolean;
    loop?: boolean;
    overlayGradient?: string;
    enableTouch?: boolean;
    timing?: {
        duration?: number;
        easing?: string;
    };
    onSequenceStart?: () => void;
    onSequenceEnd?: () => void;
    onFrameChange?: (index: number) => void;
};
type PolaroidStackItem = {
    src: string;
    alt?: string;
};
type PolaroidStackProps = {
    stack?: PolaroidStackItem[];
    stackDepth?: number;
    spreadAngle?: number;
    offsetStep?: number;
    lift?: number;
    rotationJitter?: number;
    shadow?: "soft" | "medium" | "strong";
    aspectRatio?: number | string;
    enableTouch?: boolean;
    onStackEnter?: () => void;
    onStackLeave?: () => void;
};
type ScrollReactiveProps = {
    animation?: "fadeIn" | "parallax" | "scale" | "tilt";
    parallaxOffset?: number;
    scaleFrom?: number;
    rotate?: number;
    opacityFrom?: number;
    triggerOffset?: number;
    once?: boolean;
    enableTouch?: boolean;
    onEnter?: () => void;
    onExit?: () => void;
    onProgress?: (value: number) => void;
};
type DepthFocusProps = {
    animation?: "rackFocus" | "spotlight" | "drift" | "pulseGlow";
    focusMode?: "cursor" | "auto" | "scroll";
    blurRange?: {
        min?: number;
        max?: number;
    };
    focusSize?: number;
    edgeSoftness?: number;
    tiltAmount?: number;
    glowColor?: string;
    parallaxDepth?: number;
    enableTouch?: boolean;
    focusClassName?: string;
    onFocusStart?: () => void;
    onFocusMove?: (coords: {
        x: number;
        y: number;
    }) => void;
    onFocusEnd?: () => void;
};
type SplitLayerItem = {
    src: string;
    alt?: string;
    depth?: number;
    opacity?: number;
    blendMode?: CSSProperties["mixBlendMode"];
};
type SplitLayersProps = {
    layers?: SplitLayerItem[];
    animation?: "parallax" | "peel" | "rippleReveal" | "glassSlide";
    parallaxIntensity?: number;
    peelDirection?: "left" | "right" | "up" | "down";
    peelLift?: number;
    rippleRadius?: number;
    glassOpacity?: number;
    baseScale?: number;
    perspective?: number;
    enableTouch?: boolean;
    onLayerEnter?: () => void;
    onLayerLeave?: () => void;
    onLayerMove?: (coords: {
        x: number;
        y: number;
    }) => void;
};
type VariantProps = ({
    variant: "hoverSwitch";
} & HoverSwitchProps) | ({
    variant: "zoomOnHover";
} & ZoomOnHoverProps) | ({
    variant: "tiltOnHover";
} & TiltOnHoverProps) | ({
    variant: "clickExpand";
} & ClickExpandProps) | ({
    variant: "panReveal";
} & PanRevealProps) | ({
    variant: "kenBurnsSequence";
} & KenBurnsSequenceProps) | ({
    variant: "polaroidStack";
} & PolaroidStackProps) | ({
    variant: "scrollReactive";
} & ScrollReactiveProps) | ({
    variant: "depthFocus";
} & DepthFocusProps) | ({
    variant: "splitLayers";
} & SplitLayersProps);
type ReactiveImageProps = BaseProps & (VariantProps | {
    variant?: undefined;
});

declare function ReactiveImage(props: ReactiveImageProps): react_jsx_runtime.JSX.Element;

export { type BaseProps, type ClickExpandProps, type DepthFocusProps, type HoverSwitchProps, type KenBurnsSequenceFrame, type KenBurnsSequenceProps, type PanRevealProps, type PolaroidStackItem, type PolaroidStackProps, ReactiveImage, type ReactiveImageProps, type ScrollReactiveProps, type SplitLayerItem, type SplitLayersProps, type TiltOnHoverProps, type VariantName, type VariantProps, type ZoomOnHoverProps };
