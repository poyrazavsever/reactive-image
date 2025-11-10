// src/variants/HoverSwitch/HoverSwitch.tsx
import { useMemo } from "react";

// src/variants/HoverSwitch/animations.ts
var animations = {
  slide: {
    container: {
      position: "relative",
      display: "inline-block",
      overflow: "hidden"
    },
    image: {
      transition: "transform var(--duration, 300ms) var(--easing, ease-out) var(--delay, 0ms)",
      display: "block",
      width: "100%",
      height: "auto",
      willChange: "transform"
    },
    hoverImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: "translateX(100%)",
      transition: "transform var(--duration, 300ms) var(--easing, ease-out) var(--delay, 0ms)",
      willChange: "transform"
    }
  },
  crossfade: {
    container: {
      position: "relative",
      display: "inline-block",
      overflow: "hidden"
    },
    image: {
      transition: "opacity var(--duration, 300ms) var(--easing, ease-out) var(--delay, 0ms)",
      display: "block",
      width: "100%",
      height: "auto",
      willChange: "opacity"
    },
    hoverImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0,
      transition: "opacity var(--duration, 400ms) var(--easing, ease-in-out) var(--delay, 0ms)"
    }
  },
  zoom: {
    container: {
      position: "relative",
      display: "inline-block",
      overflow: "hidden"
    },
    image: {
      transition: "transform var(--duration, 300ms) var(--easing, ease-out) var(--delay, 0ms), opacity var(--duration, 300ms) var(--easing, ease-out) var(--delay, 0ms)",
      display: "block",
      width: "100%",
      height: "auto"
    },
    hoverImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0,
      transform: "scale(1.1)",
      transition: "transform var(--duration, 300ms) var(--easing, ease-out) var(--delay, 0ms), opacity var(--duration, 300ms) var(--easing, ease-out) var(--delay, 0ms)"
    }
  },
  blur: {
    container: {
      position: "relative",
      display: "inline-block",
      overflow: "hidden"
    },
    image: {
      transition: "filter var(--duration, 300ms) var(--easing, ease-in-out) var(--delay, 0ms), opacity var(--duration, 300ms) var(--easing, ease-in-out) var(--delay, 0ms)",
      display: "block",
      width: "100%",
      height: "auto"
    },
    hoverImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0,
      filter: "blur(10px)",
      transition: "filter var(--duration, 300ms) var(--easing, ease-in-out) var(--delay, 0ms), opacity var(--duration, 300ms) var(--easing, ease-in-out) var(--delay, 0ms)"
    }
  },
  rotateY: {
    container: {
      position: "relative",
      display: "inline-block",
      overflow: "hidden",
      perspective: "1000px"
    },
    image: {
      transition: "transform var(--duration, 400ms) var(--easing, ease-in-out) var(--delay, 0ms)",
      display: "block",
      width: "100%",
      height: "auto",
      backfaceVisibility: "hidden"
    },
    hoverImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: "rotateY(180deg)",
      transition: "transform var(--duration, 400ms) var(--easing, ease-in-out) var(--delay, 0ms)",
      backfaceVisibility: "hidden"
    }
  },
  slideUp: {
    container: {
      position: "relative",
      display: "inline-block",
      overflow: "hidden"
    },
    image: {
      transition: "transform var(--duration, 300ms) var(--easing, ease-in-out) var(--delay, 0ms)",
      display: "block",
      width: "100%",
      height: "auto"
    },
    hoverImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: "translateY(100%)",
      transition: "transform var(--duration, 300ms) var(--easing, ease-in-out) var(--delay, 0ms)"
    }
  },
  slideDown: {
    container: {
      position: "relative",
      display: "inline-block",
      overflow: "hidden"
    },
    image: {
      transition: "transform var(--duration, 300ms) var(--easing, ease-in-out) var(--delay, 0ms)",
      display: "block",
      width: "100%",
      height: "auto"
    },
    hoverImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: "translateY(-100%)",
      transition: "transform var(--duration, 300ms) var(--easing, ease-in-out) var(--delay, 0ms)"
    }
  },
  scaleRotate: {
    container: {
      position: "relative",
      display: "inline-block",
      overflow: "hidden"
    },
    image: {
      transition: "transform var(--duration, 400ms) var(--easing, ease-in-out) var(--delay, 0ms), opacity var(--duration, 400ms) var(--easing, ease-in-out) var(--delay, 0ms)",
      display: "block",
      width: "100%",
      height: "auto"
    },
    hoverImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0,
      transform: "scale(0.8) rotate(-10deg)",
      transition: "transform var(--duration, 400ms) var(--easing, ease-in-out) var(--delay, 0ms), opacity var(--duration, 400ms) var(--easing, ease-in-out) var(--delay, 0ms)"
    }
  }
};

// src/variants/HoverSwitch/hooks.ts
import { useState, useCallback, useEffect, useRef } from "react";
function useHoverSwitch({
  hoverSrc,
  preloadHover = true,
  enableTouch = false,
  onAnimationStart,
  onAnimationEnd
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    if (hoverSrc && preloadHover && !isPreloaded) {
      const img = new Image();
      img.onload = () => setIsPreloaded(true);
      img.src = hoverSrc;
    }
  }, [hoverSrc, preloadHover, isPreloaded]);
  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (!isHovered) {
      setIsAnimating(true);
      setIsHovered(true);
      onAnimationStart?.();
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        onAnimationEnd?.();
      }, 400);
    }
  }, [isHovered, onAnimationStart, onAnimationEnd]);
  const handleMouseLeave = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (isHovered) {
      setIsAnimating(true);
      setIsHovered(false);
      onAnimationStart?.();
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        onAnimationEnd?.();
      }, 400);
    }
  }, [isHovered, onAnimationStart, onAnimationEnd]);
  const handleTouchStart = useCallback(() => {
    if (!enableTouch) return;
    handleMouseEnter();
  }, [enableTouch, handleMouseEnter]);
  const handleTouchEnd = useCallback(() => {
    if (!enableTouch) return;
    setTimeout(handleMouseLeave, 100);
  }, [enableTouch, handleMouseLeave]);
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return {
    isHovered,
    isPreloaded,
    isAnimating,
    containerRef,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd
    }
  };
}

// src/variants/HoverSwitch/HoverSwitch.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function HoverSwitch({
  src,
  alt,
  hoverSrc,
  animation = "slide",
  slideDirection = "right",
  timing = {},
  preloadHover = true,
  disableLazy = false,
  enableTouch = false,
  className,
  imgClassName,
  hoverClassName,
  style,
  onAnimationStart,
  onAnimationEnd,
  ...rest
}) {
  const { isHovered, isPreloaded, containerRef, handlers } = useHoverSwitch({
    hoverSrc,
    preloadHover,
    enableTouch,
    onAnimationStart,
    onAnimationEnd
  });
  const animationConfig = animations[animation];
  const timingVars = useMemo(
    () => ({
      "--duration": `${timing.duration || 300}ms`,
      "--delay": `${timing.delay || 0}ms`,
      "--easing": timing.easing || "ease-in-out"
    }),
    [timing]
  );
  const containerStyle = useMemo(
    () => ({
      ...animationConfig.container,
      ...timingVars,
      ...style
    }),
    [animationConfig.container, timingVars, style]
  );
  const imageStyle = useMemo(() => {
    const baseStyle = animationConfig.image;
    let animationStyle = {};
    if (isHovered) {
      switch (animation) {
        case "slide":
          switch (slideDirection) {
            case "left":
              animationStyle = { transform: "translateX(100%)" };
              break;
            case "right":
              animationStyle = { transform: "translateX(-100%)" };
              break;
            case "up":
              animationStyle = { transform: "translateY(100%)" };
              break;
            case "down":
              animationStyle = { transform: "translateY(-100%)" };
              break;
          }
          break;
        case "slideUp":
          animationStyle = { transform: "translateY(-100%)" };
          break;
        case "slideDown":
          animationStyle = { transform: "translateY(100%)" };
          break;
        case "zoom":
          animationStyle = { transform: "scale(0.9)", opacity: 0.7 };
          break;
        case "blur":
          animationStyle = { filter: "blur(5px)", opacity: 0.3 };
          break;
        case "rotateY":
          animationStyle = { transform: "rotateY(-180deg)" };
          break;
        case "scaleRotate":
          animationStyle = {
            transform: "scale(1.2) rotate(10deg)",
            opacity: 0.3
          };
          break;
        case "crossfade":
          animationStyle = { opacity: 0 };
          break;
        default:
          animationStyle = hoverSrc ? { opacity: 0 } : {};
          break;
      }
    }
    return { ...baseStyle, ...animationStyle };
  }, [animationConfig.image, isHovered, animation, slideDirection, hoverSrc]);
  const hoverImageStyle = useMemo(() => {
    let baseStyle = { ...animationConfig.hoverImage };
    if (animation === "slide") {
      switch (slideDirection) {
        case "left":
          baseStyle.transform = "translateX(-100%)";
          break;
        case "right":
          baseStyle.transform = "translateX(100%)";
          break;
        case "up":
          baseStyle.transform = "translateY(-100%)";
          break;
        case "down":
          baseStyle.transform = "translateY(100%)";
          break;
      }
    }
    let animationStyle = {};
    if (isHovered) {
      switch (animation) {
        case "slide":
          animationStyle = { transform: "translate(0%, 0%)" };
          break;
        case "crossfade":
        case "zoom":
          animationStyle = { transform: "scale(1)", opacity: 1 };
          break;
        case "blur":
          animationStyle = { filter: "blur(0px)", opacity: 1 };
          break;
        case "rotateY":
          animationStyle = { transform: "rotateY(0deg)" };
          break;
        case "slideUp":
          animationStyle = { transform: "translateY(0%)" };
          break;
        case "slideDown":
          animationStyle = { transform: "translateY(0%)" };
          break;
        case "scaleRotate":
          animationStyle = { transform: "scale(1) rotate(0deg)", opacity: 1 };
          break;
      }
    }
    return { ...baseStyle, ...animationStyle };
  }, [animationConfig.hoverImage, isHovered, animation, slideDirection]);
  const containerClassName = useMemo(() => {
    const classes = ["ri-hover-switch", `ri-hover-switch--${animation}`];
    if (className) classes.push(className);
    if (isHovered && hoverClassName) classes.push(hoverClassName);
    return classes.join(" ");
  }, [animation, className, isHovered, hoverClassName]);
  return /* @__PURE__ */ jsxs(
    "span",
    {
      ref: containerRef,
      className: containerClassName,
      style: containerStyle,
      ...handlers,
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src,
            alt,
            className: imgClassName,
            style: imageStyle,
            loading: disableLazy ? "eager" : rest.loading,
            decoding: rest.decoding,
            draggable: false
          }
        ),
        hoverSrc && (preloadHover ? isPreloaded : true) && /* @__PURE__ */ jsx(
          "img",
          {
            src: hoverSrc,
            alt,
            className: imgClassName,
            style: hoverImageStyle,
            loading: disableLazy ? "eager" : "lazy",
            decoding: "async",
            draggable: false,
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}

// src/variants/ZoomOnHover/ZoomOnHover.tsx
import { useMemo as useMemo2 } from "react";

// src/variants/ZoomOnHover/animations.ts
var zoomAnimations = {
  scale: {
    container: {
      display: "inline-block",
      overflow: "hidden",
      cursor: "zoom-in"
    },
    image: {
      display: "block",
      width: "100%",
      height: "auto",
      transition: "transform var(--duration, 300ms) var(--easing, ease-out)",
      transformOrigin: "var(--origin, center)",
      willChange: "transform"
    }
  },
  scaleRotate: {
    container: {
      display: "inline-block",
      overflow: "hidden",
      cursor: "zoom-in"
    },
    image: {
      display: "block",
      width: "100%",
      height: "auto",
      transition: "transform var(--duration, 400ms) var(--easing, ease-out)",
      transformOrigin: "var(--origin, center)"
    }
  },
  scaleBlur: {
    container: {
      display: "inline-block",
      overflow: "hidden",
      cursor: "zoom-in"
    },
    image: {
      display: "block",
      width: "100%",
      height: "auto",
      transition: "transform var(--duration, 300ms) var(--easing, ease-out), filter var(--duration, 300ms) var(--easing, ease-out)",
      transformOrigin: "var(--origin, center)"
    }
  },
  scaleFade: {
    container: {
      display: "inline-block",
      overflow: "hidden",
      cursor: "zoom-in"
    },
    image: {
      display: "block",
      width: "100%",
      height: "auto",
      transition: "transform var(--duration, 300ms) var(--easing, ease-out), opacity var(--duration, 300ms) var(--easing, ease-out)",
      transformOrigin: "var(--origin, center)"
    }
  },
  scaleSlide: {
    container: {
      display: "inline-block",
      overflow: "hidden",
      cursor: "zoom-in"
    },
    image: {
      display: "block",
      width: "100%",
      height: "auto",
      transition: "transform var(--duration, 350ms) var(--easing, ease-out)",
      transformOrigin: "var(--origin, center)"
    }
  },
  perspective: {
    container: {
      display: "inline-block",
      overflow: "hidden",
      cursor: "zoom-in",
      perspective: "1000px"
    },
    image: {
      display: "block",
      width: "100%",
      height: "auto",
      transition: "transform var(--duration, 400ms) var(--easing, ease-out)",
      transformOrigin: "var(--origin, center)"
    }
  },
  pulse: {
    container: {
      display: "inline-block",
      overflow: "hidden",
      cursor: "zoom-in"
    },
    image: {
      display: "block",
      width: "100%",
      height: "auto",
      transition: "transform var(--duration, 200ms) var(--easing, ease-in-out)",
      transformOrigin: "var(--origin, center)"
    }
  },
  bounce: {
    container: {
      display: "inline-block",
      overflow: "hidden",
      cursor: "zoom-in"
    },
    image: {
      display: "block",
      width: "100%",
      height: "auto",
      transition: "transform var(--duration, 600ms) var(--easing, cubic-bezier(0.68, -0.55, 0.265, 1.55))",
      transformOrigin: "var(--origin, center)"
    }
  },
  elastic: {
    container: {
      display: "inline-block",
      overflow: "hidden",
      cursor: "zoom-in"
    },
    image: {
      display: "block",
      width: "100%",
      height: "auto",
      transition: "transform var(--duration, 800ms) var(--easing, cubic-bezier(0.175, 0.885, 0.32, 1.275))",
      transformOrigin: "var(--origin, center)"
    }
  }
};

// src/variants/ZoomOnHover/hooks.ts
import { useState as useState2, useCallback as useCallback2, useEffect as useEffect2, useRef as useRef2 } from "react";
function useZoomOnHover({
  followCursor = false,
  origin = "center",
  enableTouch = false,
  onZoomStart,
  onZoomEnd
}) {
  const [isZoomed, setIsZoomed] = useState2(false);
  const [cursorPosition, setCursorPosition] = useState2({ x: 50, y: 50 });
  const [isAnimating, setIsAnimating] = useState2(false);
  const timeoutRef = useRef2(null);
  const containerRef = useRef2(null);
  const handleMouseEnter = useCallback2(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (!isZoomed) {
      setIsAnimating(true);
      setIsZoomed(true);
      onZoomStart?.();
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        onZoomEnd?.();
      }, 600);
    }
  }, [isZoomed, onZoomStart, onZoomEnd]);
  const handleMouseLeave = useCallback2(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (isZoomed) {
      setIsAnimating(true);
      setIsZoomed(false);
      onZoomStart?.();
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        onZoomEnd?.();
      }, 600);
    }
  }, [isZoomed, onZoomStart, onZoomEnd]);
  const handleMouseMove = useCallback2(
    (e) => {
      if (!followCursor || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width * 100;
      const y = (e.clientY - rect.top) / rect.height * 100;
      setCursorPosition({
        x: Math.max(0, Math.min(100, x)),
        y: Math.max(0, Math.min(100, y))
      });
    },
    [followCursor]
  );
  const handleTouchStart = useCallback2(() => {
    if (!enableTouch) return;
    handleMouseEnter();
  }, [enableTouch, handleMouseEnter]);
  const handleTouchEnd = useCallback2(() => {
    if (!enableTouch) return;
    setTimeout(handleMouseLeave, 150);
  }, [enableTouch, handleMouseLeave]);
  useEffect2(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  const getTransformOrigin = useCallback2(() => {
    if (origin === "cursor" && followCursor) {
      return `${cursorPosition.x}% ${cursorPosition.y}%`;
    }
    const originMap = {
      center: "center center",
      top: "center top",
      bottom: "center bottom",
      left: "left center",
      right: "right center",
      "top-left": "left top",
      "top-right": "right top",
      "bottom-left": "left bottom",
      "bottom-right": "right bottom"
    };
    return originMap[origin] || "center center";
  }, [origin, followCursor, cursorPosition]);
  return {
    isZoomed,
    isAnimating,
    cursorPosition,
    transformOrigin: getTransformOrigin(),
    containerRef,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onMouseMove: handleMouseMove,
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd
    }
  };
}

// src/variants/ZoomOnHover/ZoomOnHover.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function ZoomOnHover({
  src,
  alt,
  zoomScale = 1.15,
  animation = "scale",
  origin = "center",
  timing = {},
  followCursor = false,
  opacityChange = 1,
  blurAmount = 0,
  rotation = 0,
  containZoom = false,
  enableTouch = false,
  className,
  imgClassName,
  zoomClassName,
  style,
  onZoomStart,
  onZoomEnd,
  ...rest
}) {
  const { isZoomed, transformOrigin, containerRef, handlers } = useZoomOnHover({
    followCursor,
    origin,
    enableTouch,
    onZoomStart,
    onZoomEnd
  });
  const animationConfig = zoomAnimations[animation];
  const cssVars = useMemo2(
    () => ({
      "--duration": `${timing.duration || 300}ms`,
      "--delay": `${timing.delay || 0}ms`,
      "--easing": timing.easing || "ease-out",
      "--origin": transformOrigin,
      "--zoom-scale": zoomScale.toString(),
      "--opacity": opacityChange.toString(),
      "--blur": `${blurAmount}px`,
      "--rotation": `${rotation}deg`
    }),
    [timing, transformOrigin, zoomScale, opacityChange, blurAmount, rotation]
  );
  const containerStyle = useMemo2(
    () => ({
      ...animationConfig.container,
      ...cssVars,
      ...containZoom && { overflow: "hidden" },
      ...style
    }),
    [animationConfig.container, cssVars, containZoom, style]
  );
  const imageStyle = useMemo2(() => {
    const baseStyle = animationConfig.image;
    let zoomTransform = "";
    let additionalStyles = {};
    if (isZoomed) {
      switch (animation) {
        case "scale":
          zoomTransform = `scale(${zoomScale})`;
          break;
        case "scaleRotate":
          zoomTransform = `scale(${zoomScale}) rotate(${rotation}deg)`;
          break;
        case "scaleBlur":
          zoomTransform = `scale(${zoomScale})`;
          additionalStyles.filter = `blur(${blurAmount}px)`;
          break;
        case "scaleFade":
          zoomTransform = `scale(${zoomScale})`;
          additionalStyles.opacity = opacityChange;
          break;
        case "scaleSlide":
          const slideOffset = (zoomScale - 1) * 10;
          zoomTransform = `scale(${zoomScale}) translate(${slideOffset}px, ${slideOffset}px)`;
          break;
        case "perspective":
          zoomTransform = `scale(${zoomScale}) perspective(1000px) rotateX(${rotation / 4}deg) rotateY(${rotation / 4}deg)`;
          break;
        case "pulse":
          zoomTransform = `scale(${zoomScale})`;
          break;
        case "bounce":
          zoomTransform = `scale(${zoomScale})`;
          break;
        case "elastic":
          zoomTransform = `scale(${zoomScale})`;
          break;
        default:
          zoomTransform = `scale(${zoomScale})`;
      }
    }
    return {
      ...baseStyle,
      ...additionalStyles,
      transform: zoomTransform,
      transformOrigin
    };
  }, [
    animationConfig.image,
    isZoomed,
    animation,
    zoomScale,
    rotation,
    blurAmount,
    opacityChange,
    transformOrigin
  ]);
  const containerClassName = useMemo2(() => {
    const classes = ["ri-zoom", `ri-zoom--${animation}`];
    if (className) classes.push(className);
    if (isZoomed && zoomClassName) classes.push(zoomClassName);
    return classes.join(" ");
  }, [animation, className, isZoomed, zoomClassName]);
  return /* @__PURE__ */ jsx2(
    "span",
    {
      ref: containerRef,
      className: containerClassName,
      style: containerStyle,
      ...handlers,
      children: /* @__PURE__ */ jsx2(
        "img",
        {
          src,
          alt,
          className: imgClassName,
          style: imageStyle,
          loading: rest.loading,
          decoding: rest.decoding,
          draggable: false
        }
      )
    }
  );
}

// src/variants/TiltOnHover/TiltOnHover.tsx
import { useMemo as useMemo3 } from "react";

// src/variants/TiltOnHover/animations.ts
var tiltAnimations = {
  basic: {
    container: {
      display: "inline-block",
      transformStyle: "preserve-3d",
      transition: "transform var(--reset-duration, 400ms) var(--easing, ease-out)"
    },
    image: {
      display: "block",
      width: "100%",
      height: "auto"
    }
  },
  glare: {
    container: {
      display: "inline-block",
      position: "relative",
      transformStyle: "preserve-3d",
      transition: "transform var(--reset-duration, 400ms) var(--easing, ease-out)",
      overflow: "hidden"
    },
    image: {
      display: "block",
      width: "100%",
      height: "auto"
    },
    glare: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(45deg, transparent 30%, var(--glare-color, rgba(255,255,255,0.3)) 50%, transparent 70%)",
      opacity: 0,
      transition: "opacity var(--duration, 200ms) ease-out, transform var(--duration, 200ms) ease-out",
      pointerEvents: "none",
      mixBlendMode: "overlay"
    }
  },
  scale: {
    container: {
      display: "inline-block",
      transformStyle: "preserve-3d",
      transition: "transform var(--reset-duration, 400ms) var(--easing, ease-out)",
      overflow: "hidden"
    },
    image: {
      display: "block",
      width: "100%",
      height: "auto",
      transition: "transform var(--duration, 200ms) ease-out"
    }
  },
  perspective: {
    container: {
      display: "inline-block",
      transformStyle: "preserve-3d",
      transition: "transform var(--reset-duration, 500ms) var(--easing, ease-out)",
      perspective: "var(--perspective, 1000px)"
    },
    image: {
      display: "block",
      width: "100%",
      height: "auto",
      transform: "translateZ(0)"
    }
  },
  bounce: {
    container: {
      display: "inline-block",
      transformStyle: "preserve-3d",
      transition: "transform var(--reset-duration, 600ms) cubic-bezier(0.68, -0.55, 0.265, 1.55)"
    },
    image: {
      display: "block",
      width: "100%",
      height: "auto"
    }
  },
  elastic: {
    container: {
      display: "inline-block",
      transformStyle: "preserve-3d",
      transition: "transform var(--reset-duration, 800ms) cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    },
    image: {
      display: "block",
      width: "100%",
      height: "auto"
    }
  },
  magnetic: {
    container: {
      display: "inline-block",
      transformStyle: "preserve-3d",
      transition: "transform var(--reset-duration, 300ms) var(--easing, ease-out)"
    },
    image: {
      display: "block",
      width: "100%",
      height: "auto",
      transition: "transform var(--duration, 150ms) ease-out"
    }
  },
  float: {
    container: {
      display: "inline-block",
      transformStyle: "preserve-3d",
      transition: "transform var(--reset-duration, 400ms) var(--easing, ease-out), box-shadow var(--reset-duration, 400ms) ease-out"
    },
    image: {
      display: "block",
      width: "100%",
      height: "auto"
    }
  },
  parallax: {
    container: {
      display: "inline-block",
      transformStyle: "preserve-3d",
      transition: "transform var(--reset-duration, 400ms) var(--easing, ease-out)",
      overflow: "hidden"
    },
    image: {
      display: "block",
      width: "110%",
      // Slightly larger for parallax effect
      height: "auto",
      transition: "transform var(--duration, 200ms) ease-out",
      marginLeft: "-5%",
      marginTop: "-5%"
    }
  }
};

// src/variants/TiltOnHover/hooks.ts
import { useState as useState3, useCallback as useCallback3, useEffect as useEffect3, useRef as useRef3 } from "react";
function useTiltOnHover({
  tiltMax = 10,
  axis = "both",
  reverse = false,
  resetOnLeave = true,
  gyroscope = false,
  enableTouch = false,
  onTiltStart,
  onTiltMove,
  onTiltEnd
}) {
  const [tiltState, setTiltState] = useState3({
    tiltX: 0,
    tiltY: 0,
    mouseX: 0,
    mouseY: 0,
    isActive: false
  });
  const containerRef = useRef3(null);
  const resetTimeoutRef = useRef3(null);
  const animationFrameRef = useRef3(null);
  const calculateTilt = useCallback3(
    (clientX, clientY, rect) => {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseXPct = (clientX - centerX) / rect.width;
      const mouseYPct = (clientY - centerY) / rect.height;
      let tiltX = mouseYPct * tiltMax * (reverse ? 1 : -1);
      let tiltY = mouseXPct * tiltMax * (reverse ? -1 : 1);
      if (axis === "x") tiltY = 0;
      if (axis === "y") tiltX = 0;
      tiltX = Math.max(-tiltMax, Math.min(tiltMax, tiltX));
      tiltY = Math.max(-tiltMax, Math.min(tiltMax, tiltY));
      return {
        tiltX,
        tiltY,
        mouseX: (mouseXPct + 0.5) * 100,
        // Convert to percentage
        mouseY: (mouseYPct + 0.5) * 100
      };
    },
    [tiltMax, axis, reverse]
  );
  const handleMouseEnter = useCallback3(() => {
    if (!containerRef.current) return;
    setTiltState((prev) => ({ ...prev, isActive: true }));
    onTiltStart?.({ tiltX: 0, tiltY: 0 });
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = null;
    }
  }, [onTiltStart]);
  const handleMouseMove = useCallback3(
    (e) => {
      if (!containerRef.current || !tiltState.isActive) return;
      const rect = containerRef.current.getBoundingClientRect();
      const newTilt = calculateTilt(e.clientX, e.clientY, rect);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(() => {
        setTiltState((prev) => ({
          ...prev,
          ...newTilt
        }));
        onTiltMove?.({
          tiltX: newTilt.tiltX,
          tiltY: newTilt.tiltY,
          mouseX: newTilt.mouseX,
          mouseY: newTilt.mouseY
        });
      });
    },
    [tiltState.isActive, calculateTilt, onTiltMove]
  );
  const handleMouseLeave = useCallback3(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = null;
    }
    setTiltState((prev) => ({
      ...prev,
      isActive: false
    }));
    if (resetOnLeave) {
      setTiltState((prev) => ({
        ...prev,
        tiltX: 0,
        tiltY: 0,
        mouseX: 50,
        mouseY: 50
      }));
      resetTimeoutRef.current = setTimeout(() => {
        onTiltEnd?.();
      }, 100);
    }
  }, [resetOnLeave, onTiltEnd]);
  const handleTouchStart = useCallback3(
    (e) => {
      if (!enableTouch || !containerRef.current) return;
      handleMouseEnter();
      const touch = e.touches[0];
      const rect = containerRef.current.getBoundingClientRect();
      const newTilt = calculateTilt(touch.clientX, touch.clientY, rect);
      setTiltState((prev) => ({
        ...prev,
        ...newTilt
      }));
    },
    [enableTouch, handleMouseEnter, calculateTilt]
  );
  const handleTouchMove = useCallback3(
    (e) => {
      if (!enableTouch || !containerRef.current || !tiltState.isActive) return;
      e.preventDefault();
      const touch = e.touches[0];
      const rect = containerRef.current.getBoundingClientRect();
      const newTilt = calculateTilt(touch.clientX, touch.clientY, rect);
      setTiltState((prev) => ({
        ...prev,
        ...newTilt
      }));
    },
    [enableTouch, tiltState.isActive, calculateTilt]
  );
  const handleTouchEnd = useCallback3(() => {
    if (!enableTouch) return;
    handleMouseLeave();
  }, [enableTouch, handleMouseLeave]);
  useEffect3(() => {
    if (!gyroscope) return;
    const handleOrientation = (event) => {
      if (!containerRef.current || !tiltState.isActive) return;
      const beta = event.beta || 0;
      const gamma = event.gamma || 0;
      const tiltX = Math.max(
        -tiltMax,
        Math.min(tiltMax, beta / 45 * tiltMax)
      );
      const tiltY = Math.max(
        -tiltMax,
        Math.min(tiltMax, gamma / 45 * tiltMax)
      );
      setTiltState((prev) => ({
        ...prev,
        tiltX: axis === "y" ? 0 : tiltX,
        tiltY: axis === "x" ? 0 : tiltY
      }));
    };
    window.addEventListener("deviceorientation", handleOrientation);
    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, [gyroscope, tiltMax, axis, tiltState.isActive]);
  useEffect3(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);
  return {
    tiltState,
    containerRef,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd
    }
  };
}

// src/variants/TiltOnHover/TiltOnHover.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function TiltOnHover({
  src,
  alt,
  tiltMax = 10,
  animation = "basic",
  axis = "both",
  timing = {},
  perspective = 1e3,
  scale = 1,
  glare = {},
  shadow = false,
  reverse = false,
  resetOnLeave = true,
  gyroscope = false,
  enableTouch = false,
  className,
  imgClassName,
  tiltClassName,
  style,
  onTiltStart,
  onTiltMove,
  onTiltEnd,
  ...rest
}) {
  const { tiltState, containerRef, handlers } = useTiltOnHover({
    tiltMax,
    axis,
    reverse,
    resetOnLeave,
    gyroscope,
    enableTouch,
    onTiltStart,
    onTiltMove,
    onTiltEnd
  });
  const animationConfig = tiltAnimations[animation];
  const cssVars = useMemo3(
    () => ({
      "--duration": `${timing.duration || 200}ms`,
      "--reset-duration": `${timing.reset || 400}ms`,
      "--easing": timing.easing || "ease-out",
      "--perspective": `${perspective}px`,
      "--tilt-x": `${tiltState.tiltX}deg`,
      "--tilt-y": `${tiltState.tiltY}deg`,
      "--mouse-x": `${tiltState.mouseX}%`,
      "--mouse-y": `${tiltState.mouseY}%`,
      "--scale": scale.toString(),
      "--glare-color": glare.color || "rgba(255,255,255,0.3)"
    }),
    [timing, perspective, tiltState, scale, glare.color]
  );
  const containerStyle = useMemo3(() => {
    const baseStyle = { ...animationConfig.container };
    let transform = `perspective(${perspective}px)`;
    let boxShadow = "";
    if (tiltState.isActive) {
      transform += ` rotateX(${tiltState.tiltX}deg) rotateY(${tiltState.tiltY}deg)`;
      if (animation === "scale" && tiltState.isActive) {
        transform += ` scale(${scale})`;
      }
      if (animation === "float" && shadow) {
        const intensity = Math.abs(tiltState.tiltX) + Math.abs(tiltState.tiltY);
        const shadowOffset = intensity / 2;
        boxShadow = `0 ${5 + shadowOffset}px ${15 + shadowOffset * 2}px rgba(0,0,0,${0.1 + intensity * 0.01})`;
      }
      if (animation === "magnetic") {
        const magneticStrength = 2;
        const offsetX = (tiltState.mouseX - 50) / 50 * magneticStrength;
        const offsetY = (tiltState.mouseY - 50) / 50 * magneticStrength;
        transform += ` translate(${offsetX}px, ${offsetY}px)`;
      }
    }
    return {
      ...baseStyle,
      ...cssVars,
      transform,
      ...boxShadow && { boxShadow },
      ...style
    };
  }, [
    animationConfig.container,
    cssVars,
    perspective,
    tiltState,
    animation,
    scale,
    shadow,
    style
  ]);
  const imageStyle = useMemo3(() => {
    const baseStyle = animationConfig.image;
    let additionalStyles = {};
    if (tiltState.isActive) {
      switch (animation) {
        case "scale":
          break;
        case "magnetic":
          const counterX = -(tiltState.mouseX - 50) / 50 * 1;
          const counterY = -(tiltState.mouseY - 50) / 50 * 1;
          additionalStyles.transform = `translate(${counterX}px, ${counterY}px)`;
          break;
        case "parallax":
          const parallaxX = (tiltState.mouseX - 50) / 50 * 5;
          const parallaxY = (tiltState.mouseY - 50) / 50 * 5;
          additionalStyles.transform = `translate(${parallaxX}px, ${parallaxY}px)`;
          break;
        case "perspective":
          additionalStyles.transform = "translateZ(20px)";
          break;
      }
    }
    return {
      ...baseStyle,
      ...additionalStyles
    };
  }, [animationConfig.image, tiltState, animation]);
  const glareStyle = useMemo3(() => {
    if (!glare.enabled || animation !== "glare") return { display: "none" };
    const baseStyle = tiltAnimations.glare.glare;
    let glareTransform = "";
    let glareOpacity = 0;
    if (tiltState.isActive) {
      const intensity = (Math.abs(tiltState.tiltX) + Math.abs(tiltState.tiltY)) / (tiltMax * 2);
      glareOpacity = Math.min(
        intensity * (glare.maxOpacity || 0.3),
        glare.maxOpacity || 0.3
      );
      if (glare.position === "mouse") {
        const glareX = tiltState.mouseX - 50;
        const glareY = tiltState.mouseY - 50;
        glareTransform = `translate(${glareX}px, ${glareY}px) rotate(${Math.atan2(glareY, glareX) * 180 / Math.PI}deg)`;
      } else {
        glareTransform = `rotate(${tiltState.tiltY}deg)`;
      }
    }
    return {
      ...baseStyle,
      opacity: glareOpacity,
      transform: glareTransform
    };
  }, [glare, animation, tiltState, tiltMax]);
  const containerClassName = useMemo3(() => {
    const classes = ["ri-tilt", `ri-tilt--${animation}`];
    if (className) classes.push(className);
    if (tiltState.isActive && tiltClassName) classes.push(tiltClassName);
    return classes.join(" ");
  }, [animation, className, tiltState.isActive, tiltClassName]);
  return /* @__PURE__ */ jsxs2(
    "span",
    {
      ref: containerRef,
      className: containerClassName,
      style: containerStyle,
      ...handlers,
      children: [
        /* @__PURE__ */ jsx3(
          "img",
          {
            src,
            alt,
            className: imgClassName,
            style: imageStyle,
            loading: rest.loading,
            decoding: rest.decoding,
            draggable: false
          }
        ),
        animation === "glare" && glare.enabled && /* @__PURE__ */ jsx3("div", { style: glareStyle })
      ]
    }
  );
}

// src/variants/ClickExpand/ClickExpand.tsx
import React from "react";

// src/variants/ClickExpand/hooks.ts
import { useState as useState4, useEffect as useEffect4, useCallback as useCallback4, useRef as useRef4 } from "react";
function useClickExpand(config = {}) {
  const {
    closeOnEsc = true,
    closeOnBackdrop = true,
    enableKeyboard = true,
    preventScroll = true,
    onOpen,
    onClose,
    onAnimationStart,
    onAnimationEnd
  } = config;
  const [state, setState] = useState4({
    isOpen: false,
    isAnimating: false,
    animationPhase: "exited"
  });
  const timeoutRef = useRef4(null);
  const originalOverflowRef = useRef4(null);
  useEffect4(() => {
    if (!preventScroll) return;
    if (state.isOpen) {
      originalOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    } else if (originalOverflowRef.current !== null) {
      document.body.style.overflow = originalOverflowRef.current;
      originalOverflowRef.current = null;
    }
    return () => {
      if (originalOverflowRef.current !== null) {
        document.body.style.overflow = originalOverflowRef.current;
      }
    };
  }, [state.isOpen, preventScroll]);
  useEffect4(() => {
    if (!state.isOpen || !enableKeyboard) return;
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "Escape":
          if (closeOnEsc) {
            event.preventDefault();
            handlers.close();
          }
          break;
        case "Tab":
          event.preventDefault();
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [state.isOpen, enableKeyboard, closeOnEsc]);
  const startAnimation = useCallback4(
    (phase) => {
      setState((prev) => ({
        ...prev,
        isAnimating: true,
        animationPhase: phase
      }));
      onAnimationStart?.();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      const duration = phase === "entering" ? 300 : 200;
      timeoutRef.current = setTimeout(() => {
        setState((prev) => ({
          ...prev,
          isAnimating: false,
          animationPhase: phase === "entering" ? "entered" : "exited"
        }));
        onAnimationEnd?.();
      }, duration);
    },
    [onAnimationStart, onAnimationEnd]
  );
  const handlers = {
    open: useCallback4(() => {
      if (state.isOpen || state.isAnimating) return;
      setState((prev) => ({ ...prev, isOpen: true }));
      startAnimation("entering");
      onOpen?.();
    }, [state.isOpen, state.isAnimating, startAnimation, onOpen]),
    close: useCallback4(() => {
      if (!state.isOpen || state.isAnimating) return;
      startAnimation("exiting");
      setTimeout(() => {
        setState((prev) => ({ ...prev, isOpen: false }));
        onClose?.();
      }, 200);
    }, [state.isOpen, state.isAnimating, startAnimation, onClose]),
    toggle: useCallback4(() => {
      if (state.isOpen) {
        handlers.close();
      } else {
        handlers.open();
      }
    }, [state.isOpen]),
    handleKeyDown: useCallback4(
      (event) => {
        if (event.key === "Escape" && closeOnEsc) {
          handlers.close();
        }
      },
      [closeOnEsc]
    ),
    handleBackdropClick: useCallback4(() => {
      if (closeOnBackdrop && state.isOpen && !state.isAnimating) {
        startAnimation("exiting");
        setTimeout(() => {
          setState((prev) => ({ ...prev, isOpen: false }));
          onClose?.();
        }, 200);
      }
    }, [
      closeOnBackdrop,
      state.isOpen,
      state.isAnimating,
      startAnimation,
      onClose
    ])
  };
  useEffect4(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return {
    state,
    handlers,
    modalProps: {
      "aria-modal": true,
      role: "dialog",
      tabIndex: -1
    }
  };
}
function useScrollLock(isOpen) {
  useEffect4(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);
}
function useFocusTrap(isOpen) {
  const modalRef = useRef4(null);
  useEffect4(() => {
    if (!isOpen || !modalRef.current) return;
    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length === 0) return;
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    const handleTabKey = (event) => {
      if (event.key !== "Tab") return;
      if (event.shiftKey) {
        if (document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable.focus();
        }
      }
    };
    firstFocusable.focus();
    modal.addEventListener("keydown", handleTabKey);
    return () => modal.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);
  return modalRef;
}

// src/variants/ClickExpand/animations.ts
var MODAL_ANIMATIONS = {
  scaleFade: {
    animation: "ri-scaleFade var(--ri-duration, 200ms) var(--ri-easing, ease-out) forwards"
  },
  slideUp: {
    animation: "ri-slideUp var(--ri-duration, 250ms) var(--ri-easing, cubic-bezier(0.2, 0.8, 0.2, 1)) forwards"
  },
  slideDown: {
    animation: "ri-slideDown var(--ri-duration, 250ms) var(--ri-easing, cubic-bezier(0.2, 0.8, 0.2, 1)) forwards"
  },
  slideLeft: {
    animation: "ri-slideLeft var(--ri-duration, 250ms) var(--ri-easing, cubic-bezier(0.2, 0.8, 0.2, 1)) forwards"
  },
  slideRight: {
    animation: "ri-slideRight var(--ri-duration, 250ms) var(--ri-easing, cubic-bezier(0.2, 0.8, 0.2, 1)) forwards"
  },
  springPop: {
    animation: "ri-springPop var(--ri-duration, 300ms) var(--ri-easing, cubic-bezier(0.2, 0.9, 0.2, 1.2)) forwards"
  },
  zoomBounce: {
    animation: "ri-zoomBounce var(--ri-duration, 400ms) var(--ri-easing, cubic-bezier(0.68, -0.55, 0.265, 1.55)) forwards"
  },
  rotateIn: {
    animation: "ri-rotateIn var(--ri-duration, 350ms) var(--ri-easing, cubic-bezier(0.25, 0.46, 0.45, 0.94)) forwards"
  },
  flipIn: {
    animation: "ri-flipIn var(--ri-duration, 400ms) var(--ri-easing, cubic-bezier(0.25, 0.46, 0.45, 0.94)) forwards"
  }
};
var BACKDROP_STYLES = {
  dim: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "none"
  },
  blur: {
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    backdropFilter: "blur(6px)"
  },
  glass: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.2)"
  },
  dark: {
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    backdropFilter: "none"
  },
  none: {
    backgroundColor: "transparent",
    backdropFilter: "none"
  }
};
var MODAL_SIZES = {
  sm: {
    maxWidth: "400px",
    maxHeight: "300px"
  },
  md: {
    maxWidth: "600px",
    maxHeight: "450px"
  },
  lg: {
    maxWidth: "800px",
    maxHeight: "600px"
  },
  xl: {
    maxWidth: "1200px",
    maxHeight: "800px"
  },
  full: {
    maxWidth: "95vw",
    maxHeight: "95vh"
  },
  auto: {
    maxWidth: "95vw",
    maxHeight: "90vh"
  }
};
var ANIMATION_CSS = `
@keyframes ri-scaleFade {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes ri-slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes ri-slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes ri-slideLeft {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes ri-slideRight {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes ri-springPop {
  from {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes ri-zoomBounce {
  from {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.1);
  }
  70% {
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes ri-rotateIn {
  from {
    opacity: 0;
    transform: rotate(-180deg) scale(0.5);
  }
  to {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
}

@keyframes ri-flipIn {
  from {
    opacity: 0;
    transform: perspective(400px) rotateY(-90deg);
  }
  40% {
    transform: perspective(400px) rotateY(-10deg);
  }
  70% {
    transform: perspective(400px) rotateY(10deg);
  }
  to {
    opacity: 1;
    transform: perspective(400px) rotateY(0deg);
  }
}
`;
function getAnimationStyle(animation, duration) {
  const baseStyle = MODAL_ANIMATIONS[animation];
  if (duration && duration !== 200) {
    return {
      ...baseStyle,
      // @ts-ignore - CSS custom properties
      "--ri-duration": `${duration}ms`
    };
  }
  return baseStyle;
}
function getBackdropStyle(backdrop, customStyle) {
  const baseStyle = BACKDROP_STYLES[backdrop];
  return {
    ...baseStyle,
    ...customStyle
  };
}
function getModalSizeStyle(size) {
  return MODAL_SIZES[size];
}

// src/variants/ClickExpand/ClickExpand.tsx
import { Fragment, jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function ClickExpand({
  src,
  alt,
  className,
  imgClassName,
  style,
  modalAnimation = "scaleFade",
  backdrop = "dim",
  caption,
  closeOnEsc = true,
  closeOnBackdrop = true,
  modalSize = "auto",
  animationDuration = 200,
  enableKeyboard = true,
  preventScroll = true,
  customBackdrop,
  modalClassName,
  captionClassName,
  onOpen,
  onClose,
  onAnimationStart,
  onAnimationEnd,
  loading,
  decoding,
  ...rest
}) {
  const { state, handlers, modalProps } = useClickExpand({
    closeOnEsc,
    closeOnBackdrop,
    enableKeyboard,
    preventScroll,
    onOpen,
    onClose,
    onAnimationStart,
    onAnimationEnd
  });
  useScrollLock(state.isOpen);
  const modalRef = useFocusTrap(
    state.isOpen
  );
  React.useEffect(() => {
    const styleId = "ri-click-expand-animations";
    if (!document.getElementById(styleId)) {
      const styleElement = document.createElement("style");
      styleElement.id = styleId;
      styleElement.textContent = ANIMATION_CSS;
      document.head.appendChild(styleElement);
    }
  }, []);
  const animationStyle = getAnimationStyle(modalAnimation, animationDuration);
  const backdropStyle = getBackdropStyle(backdrop, customBackdrop);
  const sizeStyle = getModalSizeStyle(modalSize);
  return /* @__PURE__ */ jsxs3(Fragment, { children: [
    /* @__PURE__ */ jsx4(
      "span",
      {
        className: `ri-click-expand ${className ?? ""}`,
        style: {
          display: "inline-block",
          cursor: "zoom-in",
          ...style
        },
        ...rest,
        children: /* @__PURE__ */ jsx4(
          "img",
          {
            src,
            alt,
            className: `ri-click-expand__image ${imgClassName ?? ""}`,
            onClick: handlers.open,
            onKeyDown: (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handlers.open();
              }
            },
            loading,
            decoding,
            style: {
              display: "block",
              width: "100%",
              height: "auto",
              transition: "transform 0.2s ease"
            },
            tabIndex: 0,
            role: "button",
            "aria-label": `Open ${alt} in fullscreen`
          }
        )
      }
    ),
    state.isOpen && /* @__PURE__ */ jsxs3(
      "div",
      {
        ...modalProps,
        ref: modalRef,
        className: `ri-modal ri-modal--${backdrop} ri-modal--${modalAnimation} ${modalClassName ?? ""}`,
        onClick: handlers.handleBackdropClick,
        style: {
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          opacity: state.animationPhase === "exiting" ? 0 : 1,
          transition: state.animationPhase === "exiting" ? `opacity ${animationDuration * 0.8}ms ease-out` : `opacity ${animationDuration}ms ease-in`,
          ...backdropStyle
        },
        children: [
          /* @__PURE__ */ jsxs3(
            "figure",
            {
              className: "ri-modal__content",
              onClick: (e) => e.stopPropagation(),
              style: {
                margin: 0,
                padding: 0,
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                ...sizeStyle,
                ...animationStyle,
                // Custom CSS properties for animation control
                // @ts-ignore
                "--ri-duration": `${animationDuration}ms`,
                "--ri-easing": "cubic-bezier(0.2, 0.8, 0.2, 1)"
              },
              children: [
                /* @__PURE__ */ jsx4(
                  "img",
                  {
                    src,
                    alt,
                    className: "ri-modal__image",
                    style: {
                      display: "block",
                      width: "100%",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "80vh",
                      objectFit: "contain"
                    },
                    loading: "eager",
                    decoding: "sync"
                  }
                ),
                caption && /* @__PURE__ */ jsx4(
                  "figcaption",
                  {
                    className: `ri-modal__caption ${captionClassName ?? ""}`,
                    style: {
                      color: "#fff",
                      padding: "16px 20px",
                      textAlign: "center",
                      fontSize: "14px",
                      lineHeight: 1.4,
                      backgroundColor: "rgba(0, 0, 0, 0.7)"
                    },
                    children: caption
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx4(
            "button",
            {
              type: "button",
              className: "ri-modal__close",
              onClick: handlers.close,
              "aria-label": "Close modal",
              style: {
                position: "absolute",
                top: 20,
                right: 20,
                width: 40,
                height: 40,
                border: "none",
                borderRadius: "50%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: "bold",
                transition: "all 0.2s ease",
                zIndex: 1
              },
              onMouseEnter: (e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
                e.currentTarget.style.transform = "scale(1.1)";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
                e.currentTarget.style.transform = "scale(1)";
              },
              children: "\xD7"
            }
          )
        ]
      }
    )
  ] });
}

// src/ReactiveImage.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
function ReactiveImage(props) {
  const { variant } = props;
  if (variant === "hoverSwitch") return /* @__PURE__ */ jsx5(HoverSwitch, { ...props });
  if (variant === "zoomOnHover") return /* @__PURE__ */ jsx5(ZoomOnHover, { ...props });
  if (variant === "tiltOnHover") return /* @__PURE__ */ jsx5(TiltOnHover, { ...props });
  if (variant === "clickExpand") return /* @__PURE__ */ jsx5(ClickExpand, { ...props });
  const { src, alt, className, imgClassName, style, ...rest } = props;
  return /* @__PURE__ */ jsx5("span", { className, style, children: /* @__PURE__ */ jsx5(
    "img",
    {
      src,
      alt,
      className: imgClassName,
      loading: rest.loading,
      decoding: rest.decoding
    }
  ) });
}
export {
  ReactiveImage
};
//# sourceMappingURL=index.js.map