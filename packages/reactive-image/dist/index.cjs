"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ReactiveImage: () => ReactiveImage
});
module.exports = __toCommonJS(index_exports);

// src/variants/HoverSwitch/HoverSwitch.tsx
var import_react2 = require("react");

// src/variants/HoverSwitch/animations.ts
var animations = {
  slide: {
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
      transform: "translateX(100%)",
      transition: "transform var(--duration, 300ms) var(--easing, ease-in-out) var(--delay, 0ms)"
    }
  },
  crossfade: {
    container: {
      position: "relative",
      display: "inline-block",
      overflow: "hidden"
    },
    image: {
      transition: "opacity var(--duration, 400ms) var(--easing, ease-in-out) var(--delay, 0ms)",
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
var import_react = require("react");
function useHoverSwitch({
  hoverSrc,
  preloadHover = true,
  enableTouch = false,
  onAnimationStart,
  onAnimationEnd
}) {
  const [isHovered, setIsHovered] = (0, import_react.useState)(false);
  const [isPreloaded, setIsPreloaded] = (0, import_react.useState)(false);
  const [isAnimating, setIsAnimating] = (0, import_react.useState)(false);
  const timeoutRef = (0, import_react.useRef)(null);
  const containerRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (hoverSrc && preloadHover && !isPreloaded) {
      const img = new Image();
      img.onload = () => setIsPreloaded(true);
      img.src = hoverSrc;
    }
  }, [hoverSrc, preloadHover, isPreloaded]);
  const handleMouseEnter = (0, import_react.useCallback)(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsHovered(true);
    onAnimationStart?.();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
      onAnimationEnd?.();
    }, 400);
  }, [isAnimating, onAnimationStart, onAnimationEnd]);
  const handleMouseLeave = (0, import_react.useCallback)(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsHovered(false);
    onAnimationStart?.();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
      onAnimationEnd?.();
    }, 400);
  }, [isAnimating, onAnimationStart, onAnimationEnd]);
  const handleTouchStart = (0, import_react.useCallback)(() => {
    if (!enableTouch) return;
    handleMouseEnter();
  }, [enableTouch, handleMouseEnter]);
  const handleTouchEnd = (0, import_react.useCallback)(() => {
    if (!enableTouch) return;
    setTimeout(handleMouseLeave, 150);
  }, [enableTouch, handleMouseLeave]);
  (0, import_react.useEffect)(() => {
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
var import_jsx_runtime = require("react/jsx-runtime");
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
  const timingVars = (0, import_react2.useMemo)(
    () => ({
      "--duration": `${timing.duration || 300}ms`,
      "--delay": `${timing.delay || 0}ms`,
      "--easing": timing.easing || "ease-in-out"
    }),
    [timing]
  );
  const containerStyle = (0, import_react2.useMemo)(
    () => ({
      ...animationConfig.container,
      ...timingVars,
      ...style
    }),
    [animationConfig.container, timingVars, style]
  );
  const imageStyle = (0, import_react2.useMemo)(() => {
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
  const hoverImageStyle = (0, import_react2.useMemo)(() => {
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
  const containerClassName = (0, import_react2.useMemo)(() => {
    const classes = ["ri-hover-switch", `ri-hover-switch--${animation}`];
    if (className) classes.push(className);
    if (isHovered && hoverClassName) classes.push(hoverClassName);
    return classes.join(" ");
  }, [animation, className, isHovered, hoverClassName]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "span",
    {
      ref: containerRef,
      className: containerClassName,
      style: containerStyle,
      ...handlers,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
        hoverSrc && (preloadHover ? isPreloaded : true) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_react4 = require("react");

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
      transformOrigin: "var(--origin, center)"
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
var import_react3 = require("react");
function useZoomOnHover({
  followCursor = false,
  origin = "center",
  enableTouch = false,
  onZoomStart,
  onZoomEnd
}) {
  const [isZoomed, setIsZoomed] = (0, import_react3.useState)(false);
  const [cursorPosition, setCursorPosition] = (0, import_react3.useState)({ x: 50, y: 50 });
  const [isAnimating, setIsAnimating] = (0, import_react3.useState)(false);
  const timeoutRef = (0, import_react3.useRef)(null);
  const containerRef = (0, import_react3.useRef)(null);
  const handleMouseEnter = (0, import_react3.useCallback)(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsZoomed(true);
    onZoomStart?.();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
      onZoomEnd?.();
    }, 800);
  }, [isAnimating, onZoomStart, onZoomEnd]);
  const handleMouseLeave = (0, import_react3.useCallback)(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsZoomed(false);
    onZoomStart?.();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
      onZoomEnd?.();
    }, 800);
  }, [isAnimating, onZoomStart, onZoomEnd]);
  const handleMouseMove = (0, import_react3.useCallback)(
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
  const handleTouchStart = (0, import_react3.useCallback)(() => {
    if (!enableTouch) return;
    handleMouseEnter();
  }, [enableTouch, handleMouseEnter]);
  const handleTouchEnd = (0, import_react3.useCallback)(() => {
    if (!enableTouch) return;
    setTimeout(handleMouseLeave, 200);
  }, [enableTouch, handleMouseLeave]);
  (0, import_react3.useEffect)(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  const getTransformOrigin = (0, import_react3.useCallback)(() => {
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
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  const cssVars = (0, import_react4.useMemo)(
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
  const containerStyle = (0, import_react4.useMemo)(
    () => ({
      ...animationConfig.container,
      ...cssVars,
      ...containZoom && { overflow: "hidden" },
      ...style
    }),
    [animationConfig.container, cssVars, containZoom, style]
  );
  const imageStyle = (0, import_react4.useMemo)(() => {
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
  const containerClassName = (0, import_react4.useMemo)(() => {
    const classes = ["ri-zoom", `ri-zoom--${animation}`];
    if (className) classes.push(className);
    if (isZoomed && zoomClassName) classes.push(zoomClassName);
    return classes.join(" ");
  }, [animation, className, isZoomed, zoomClassName]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "span",
    {
      ref: containerRef,
      className: containerClassName,
      style: containerStyle,
      ...handlers,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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

// src/variants/tiltOnHover.tsx
var import_react5 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
function TiltOnHover({
  src,
  alt,
  tiltMax = 10,
  className,
  imgClassName,
  style,
  ...rest
}) {
  const ref = (0, import_react5.useRef)(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = py * -2 * tiltMax;
    const ry = px * 2 * tiltMax;
    el.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const reset = () => {
    const el = ref.current;
    if (el)
      el.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg)`;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "span",
    {
      ref,
      className: `ri-tilt ${className ?? ""}`,
      style: {
        display: "inline-block",
        transition: "transform 120ms ease",
        ...style
      },
      onMouseMove: onMove,
      onMouseLeave: reset,
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "img",
        {
          src,
          alt,
          className: imgClassName,
          loading: rest.loading,
          decoding: rest.decoding,
          style: { display: "block", width: "100%", height: "auto" }
        }
      )
    }
  );
}

// src/variants/clickExpand.tsx
var import_react6 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
function ClickExpand({
  src,
  alt,
  className,
  imgClassName,
  style,
  caption,
  backdrop = "dim",
  modalAnimation = "scaleFade",
  closeOnEsc = true,
  closeOnBackdrop = true,
  ...rest
}) {
  const [open, setOpen] = (0, import_react6.useState)(false);
  (0, import_react6.useEffect)(() => {
    if (!open || !closeOnEsc) return;
    const h = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, closeOnEsc]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "span",
      {
        className: `ri-click ${className ?? ""}`,
        style: { display: "inline-block", ...style },
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "img",
          {
            src,
            alt,
            className: imgClassName,
            onClick: () => setOpen(true),
            loading: rest.loading,
            decoding: rest.decoding,
            style: {
              display: "block",
              width: "100%",
              height: "auto",
              cursor: "zoom-in"
            }
          }
        )
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        className: `ri-modal ri-${backdrop} ri-${modalAnimation}`,
        onClick: () => closeOnBackdrop && setOpen(false),
        style: {
          position: "fixed",
          inset: 0,
          display: "grid",
          placeItems: "center",
          background: backdrop === "blur" ? "rgba(0,0,0,.35)" : "rgba(0,0,0,.6)",
          backdropFilter: backdrop === "blur" ? "blur(6px)" : void 0,
          zIndex: 9999
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "figure",
          {
            onClick: (e) => e.stopPropagation(),
            style: {
              maxWidth: "95vw",
              maxHeight: "90vh",
              animation: modalAnimation === "slideUp" ? "ri-slideUp .18s ease" : modalAnimation === "springPop" ? "ri-spring .22s cubic-bezier(.2, .9, .2, 1.2)" : "ri-scaleFade .16s ease"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "img",
                {
                  src,
                  alt,
                  style: {
                    display: "block",
                    maxWidth: "100%",
                    maxHeight: "80vh",
                    borderRadius: 8
                  }
                }
              ),
              caption && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "figcaption",
                {
                  style: { color: "#fff", marginTop: 8, textAlign: "center" },
                  children: caption
                }
              )
            ]
          }
        )
      }
    )
  ] });
}

// src/ReactiveImage.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function ReactiveImage(props) {
  const { variant } = props;
  if (variant === "hoverSwitch") return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(HoverSwitch, { ...props });
  if (variant === "zoomOnHover") return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ZoomOnHover, { ...props });
  if (variant === "tiltOnHover") return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TiltOnHover, { ...props });
  if (variant === "clickExpand") return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ClickExpand, { ...props });
  const { src, alt, className, imgClassName, style, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className, style, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ReactiveImage
});
//# sourceMappingURL=index.cjs.map