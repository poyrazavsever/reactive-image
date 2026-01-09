"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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
  const handleMouseLeave = (0, import_react.useCallback)(() => {
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
  const handleTouchStart = (0, import_react.useCallback)(() => {
    if (!enableTouch) return;
    handleMouseEnter();
  }, [enableTouch, handleMouseEnter]);
  const handleTouchEnd = (0, import_react.useCallback)(() => {
    if (!enableTouch) return;
    setTimeout(handleMouseLeave, 100);
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
  const handleMouseLeave = (0, import_react3.useCallback)(() => {
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
    setTimeout(handleMouseLeave, 150);
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

// src/variants/TiltOnHover/TiltOnHover.tsx
var import_react6 = require("react");

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
var import_react5 = require("react");
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
  const [tiltState, setTiltState] = (0, import_react5.useState)({
    tiltX: 0,
    tiltY: 0,
    mouseX: 0,
    mouseY: 0,
    isActive: false
  });
  const containerRef = (0, import_react5.useRef)(null);
  const resetTimeoutRef = (0, import_react5.useRef)(null);
  const animationFrameRef = (0, import_react5.useRef)(null);
  const calculateTilt = (0, import_react5.useCallback)(
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
  const handleMouseEnter = (0, import_react5.useCallback)(() => {
    if (!containerRef.current) return;
    setTiltState((prev) => ({ ...prev, isActive: true }));
    onTiltStart?.({ tiltX: 0, tiltY: 0 });
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = null;
    }
  }, [onTiltStart]);
  const handleMouseMove = (0, import_react5.useCallback)(
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
  const handleMouseLeave = (0, import_react5.useCallback)(() => {
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
  const handleTouchStart = (0, import_react5.useCallback)(
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
  const handleTouchMove = (0, import_react5.useCallback)(
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
  const handleTouchEnd = (0, import_react5.useCallback)(() => {
    if (!enableTouch) return;
    handleMouseLeave();
  }, [enableTouch, handleMouseLeave]);
  (0, import_react5.useEffect)(() => {
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
  (0, import_react5.useEffect)(() => {
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
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  const cssVars = (0, import_react6.useMemo)(
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
  const containerStyle = (0, import_react6.useMemo)(() => {
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
  const imageStyle = (0, import_react6.useMemo)(() => {
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
  const glareStyle = (0, import_react6.useMemo)(() => {
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
  const containerClassName = (0, import_react6.useMemo)(() => {
    const classes = ["ri-tilt", `ri-tilt--${animation}`];
    if (className) classes.push(className);
    if (tiltState.isActive && tiltClassName) classes.push(tiltClassName);
    return classes.join(" ");
  }, [animation, className, tiltState.isActive, tiltClassName]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "span",
    {
      ref: containerRef,
      className: containerClassName,
      style: containerStyle,
      ...handlers,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
        animation === "glare" && glare.enabled && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: glareStyle })
      ]
    }
  );
}

// src/variants/ClickExpand/ClickExpand.tsx
var import_react8 = __toESM(require("react"), 1);

// src/variants/ClickExpand/hooks.ts
var import_react7 = require("react");
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
  const [state, setState] = (0, import_react7.useState)({
    isOpen: false,
    isAnimating: false,
    animationPhase: "exited"
  });
  const timeoutRef = (0, import_react7.useRef)(null);
  const originalOverflowRef = (0, import_react7.useRef)(null);
  (0, import_react7.useEffect)(() => {
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
  (0, import_react7.useEffect)(() => {
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
  const startAnimation = (0, import_react7.useCallback)(
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
    open: (0, import_react7.useCallback)(() => {
      if (state.isOpen || state.isAnimating) return;
      setState((prev) => ({ ...prev, isOpen: true }));
      startAnimation("entering");
      onOpen?.();
    }, [state.isOpen, state.isAnimating, startAnimation, onOpen]),
    close: (0, import_react7.useCallback)(() => {
      if (!state.isOpen || state.isAnimating) return;
      startAnimation("exiting");
      setTimeout(() => {
        setState((prev) => ({ ...prev, isOpen: false }));
        onClose?.();
      }, 200);
    }, [state.isOpen, state.isAnimating, startAnimation, onClose]),
    toggle: (0, import_react7.useCallback)(() => {
      if (state.isOpen) {
        handlers.close();
      } else {
        handlers.open();
      }
    }, [state.isOpen]),
    handleKeyDown: (0, import_react7.useCallback)(
      (event) => {
        if (event.key === "Escape" && closeOnEsc) {
          handlers.close();
        }
      },
      [closeOnEsc]
    ),
    handleBackdropClick: (0, import_react7.useCallback)(() => {
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
  (0, import_react7.useEffect)(() => {
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
  (0, import_react7.useEffect)(() => {
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
  const modalRef = (0, import_react7.useRef)(null);
  (0, import_react7.useEffect)(() => {
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
var import_jsx_runtime4 = require("react/jsx-runtime");
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
  import_react8.default.useEffect(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "span",
      {
        className: `ri-click-expand ${className ?? ""}`,
        style: {
          display: "inline-block",
          cursor: "zoom-in",
          ...style
        },
        ...rest,
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
    state.isOpen && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
                caption && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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

// src/variants/PanReveal/PanReveal.tsx
var import_react10 = require("react");

// src/variants/PanReveal/animations.ts
var panAnimations = {
  slide: {
    container: {
      position: "relative",
      display: "inline-block",
      overflow: "hidden"
    },
    baseImage: {
      display: "block",
      width: "100%",
      height: "auto",
      transition: "transform var(--duration, 500ms) var(--easing, cubic-bezier(0.22, 0.61, 0.36, 1))",
      willChange: "transform"
    },
    revealImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform var(--duration, 600ms) var(--easing, cubic-bezier(0.22, 0.61, 0.36, 1)), clip-path var(--duration, 600ms) var(--easing, ease-out)",
      willChange: "transform"
    },
    overlay: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "linear-gradient(var(--gradient-direction, to right), rgba(0,0,0,0.4), transparent 60%)",
      mixBlendMode: "multiply",
      opacity: 0,
      transition: "opacity 200ms ease-out"
    }
  },
  mask: {
    container: {
      position: "relative",
      display: "inline-block",
      overflow: "hidden"
    },
    baseImage: {
      display: "block",
      width: "100%",
      height: "auto"
    },
    revealImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0,
      transition: "clip-path var(--duration, 450ms) var(--easing, ease-out), opacity var(--duration, 350ms) ease-out",
      filter: "drop-shadow(0 12px 25px rgba(0,0,0,0.25))",
      willChange: "clip-path, opacity"
    },
    overlay: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "radial-gradient(circle at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(0,0,0,0) 40%, var(--gradient-color, rgba(0,0,0,0.55)) 100%)",
      opacity: 0,
      transition: "opacity var(--duration, 350ms) ease-out"
    }
  },
  spotlight: {
    container: {
      position: "relative",
      display: "inline-block",
      overflow: "hidden"
    },
    baseImage: {
      display: "block",
      width: "100%",
      height: "auto",
      filter: "grayscale(30%)"
    },
    revealImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0,
      transition: "clip-path var(--duration, 350ms) var(--easing, ease-out), opacity var(--duration, 250ms) ease-out",
      willChange: "clip-path, opacity"
    },
    overlay: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      mixBlendMode: "screen",
      background: "radial-gradient(circle at var(--cursor-x, 50%) var(--cursor-y, 50%), var(--gradient-color, rgba(255,255,255,0.35)), transparent 60%)",
      opacity: 0,
      transition: "opacity var(--duration, 250ms) ease-out"
    }
  }
};

// src/variants/PanReveal/hooks.ts
var import_react9 = require("react");
function usePanReveal({
  followCursor = false,
  enableTouch = false,
  animationDuration,
  onRevealStart,
  onRevealEnd
}) {
  const [isRevealed, setIsRevealed] = (0, import_react9.useState)(false);
  const [cursorPosition, setCursorPosition] = (0, import_react9.useState)({ x: 50, y: 50 });
  const containerRef = (0, import_react9.useRef)(null);
  const timeoutRef = (0, import_react9.useRef)(null);
  const scheduleAnimationEnd = (0, import_react9.useCallback)(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      onRevealEnd?.();
      timeoutRef.current = null;
    }, animationDuration);
  }, [animationDuration, onRevealEnd]);
  const handleMouseEnter = (0, import_react9.useCallback)(() => {
    setIsRevealed((prev) => {
      if (prev) return prev;
      onRevealStart?.();
      scheduleAnimationEnd();
      return true;
    });
  }, [onRevealStart, scheduleAnimationEnd]);
  const handleMouseLeave = (0, import_react9.useCallback)(() => {
    setIsRevealed((prev) => {
      if (!prev) return prev;
      onRevealStart?.();
      scheduleAnimationEnd();
      return false;
    });
  }, [onRevealStart, scheduleAnimationEnd]);
  const updateCursor = (0, import_react9.useCallback)((clientX, clientY) => {
    if (!followCursor || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width * 100;
    const y = (clientY - rect.top) / rect.height * 100;
    setCursorPosition({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y))
    });
  }, [followCursor]);
  const handleMouseMove = (0, import_react9.useCallback)(
    (event) => {
      if (!followCursor) return;
      updateCursor(event.clientX, event.clientY);
    },
    [followCursor, updateCursor]
  );
  const handleTouchStart = (0, import_react9.useCallback)(
    (event) => {
      if (!enableTouch) return;
      handleMouseEnter();
      if (followCursor) {
        const touch = event.touches[0];
        updateCursor(touch.clientX, touch.clientY);
      }
    },
    [enableTouch, followCursor, handleMouseEnter, updateCursor]
  );
  const handleTouchMove = (0, import_react9.useCallback)(
    (event) => {
      if (!enableTouch || !followCursor) return;
      const touch = event.touches[0];
      updateCursor(touch.clientX, touch.clientY);
    },
    [enableTouch, followCursor, updateCursor]
  );
  const handleTouchEnd = (0, import_react9.useCallback)(() => {
    if (!enableTouch) return;
    handleMouseLeave();
  }, [enableTouch, handleMouseLeave]);
  (0, import_react9.useEffect)(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return {
    isRevealed,
    cursorPosition,
    containerRef,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onMouseMove: handleMouseMove,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd
    }
  };
}

// src/variants/PanReveal/PanReveal.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function PanReveal({
  src,
  alt,
  secondarySrc,
  animation = "slide",
  direction = "right",
  panAmount = 35,
  maskShape = "circle",
  maskSize = 55,
  followCursor = false,
  gradientColor = "rgba(0,0,0,0.45)",
  timing = {},
  enableTouch = false,
  className,
  imgClassName,
  revealClassName,
  style,
  onRevealStart,
  onRevealEnd,
  loading,
  decoding,
  ...rest
}) {
  const effectiveAnimation = animation;
  const effectiveDirection = direction === "diagonal" ? "diagonal" : direction;
  const effectiveFollowCursor = effectiveAnimation === "spotlight" ? true : followCursor;
  const effectiveMaskShape = effectiveAnimation === "spotlight" ? "circle" : maskShape;
  const computedDuration = timing.duration ?? (effectiveAnimation === "slide" ? 650 : effectiveAnimation === "mask" ? 450 : 380);
  const computedEasing = timing.easing ?? "cubic-bezier(0.22, 0.61, 0.36, 1)";
  const {
    isRevealed,
    cursorPosition,
    containerRef,
    handlers
  } = usePanReveal({
    followCursor: effectiveFollowCursor,
    enableTouch,
    animationDuration: computedDuration,
    onRevealStart,
    onRevealEnd
  });
  const animationConfig = panAnimations[effectiveAnimation];
  const revealImageSrc = secondarySrc ?? src;
  const clampedPanAmount = Math.max(5, Math.min(100, panAmount));
  const clampedMaskSize = Math.max(5, Math.min(100, maskSize));
  const cssVars = (0, import_react10.useMemo)(
    () => ({
      "--duration": `${computedDuration}ms`,
      "--easing": computedEasing,
      "--cursor-x": `${cursorPosition.x}%`,
      "--cursor-y": `${cursorPosition.y}%`,
      "--gradient-color": gradientColor,
      "--gradient-direction": directionToGradient(effectiveDirection)
    }),
    [
      computedDuration,
      computedEasing,
      cursorPosition.x,
      cursorPosition.y,
      gradientColor,
      effectiveDirection
    ]
  );
  const containerStyle = (0, import_react10.useMemo)(
    () => ({
      ...animationConfig.container,
      ...cssVars,
      ...style
    }),
    [animationConfig.container, cssVars, style]
  );
  const baseImageStyle = (0, import_react10.useMemo)(() => {
    const baseStyle = { ...animationConfig.baseImage };
    if (effectiveAnimation === "slide") {
      baseStyle.transform = isRevealed ? "translate3d(0, 0, 0)" : getCounterTransform(effectiveDirection, clampedPanAmount * 0.2);
    }
    return baseStyle;
  }, [
    animationConfig.baseImage,
    effectiveAnimation,
    effectiveDirection,
    clampedPanAmount,
    isRevealed
  ]);
  const revealImageStyle = (0, import_react10.useMemo)(() => {
    const baseStyle = { ...animationConfig.revealImage };
    if (effectiveAnimation === "slide") {
      baseStyle.transform = getSlideTransform(
        effectiveDirection,
        clampedPanAmount,
        isRevealed
      );
      baseStyle.opacity = 1;
    } else {
      baseStyle.clipPath = getMaskClipPath(
        effectiveMaskShape,
        clampedMaskSize,
        cursorPosition,
        isRevealed
      );
      baseStyle.opacity = isRevealed ? 1 : 0;
    }
    return baseStyle;
  }, [
    animationConfig.revealImage,
    effectiveAnimation,
    effectiveDirection,
    effectiveMaskShape,
    clampedMaskSize,
    clampedPanAmount,
    cursorPosition,
    isRevealed
  ]);
  const overlayStyle = (0, import_react10.useMemo)(() => {
    if (!animationConfig.overlay) return void 0;
    const style2 = { ...animationConfig.overlay };
    if (effectiveAnimation === "slide") {
      style2.opacity = isRevealed ? 0 : 1;
    } else {
      style2.opacity = isRevealed ? 1 : 0.15;
    }
    return style2;
  }, [animationConfig.overlay, effectiveAnimation, isRevealed]);
  const containerClassName = (0, import_react10.useMemo)(() => {
    const classes = [
      "ri-pan-reveal",
      `ri-pan-reveal--${effectiveAnimation}`,
      `ri-pan-reveal--${effectiveDirection}`
    ];
    if (className) classes.push(className);
    if (isRevealed && revealClassName) classes.push(revealClassName);
    return classes.join(" ");
  }, [
    className,
    revealClassName,
    isRevealed,
    effectiveAnimation,
    effectiveDirection
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "span",
    {
      ref: containerRef,
      className: containerClassName,
      style: containerStyle,
      ...handlers,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "img",
          {
            src,
            alt,
            className: imgClassName,
            style: baseImageStyle,
            loading,
            decoding,
            draggable: false,
            ...rest
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "img",
          {
            src: revealImageSrc,
            alt,
            "aria-hidden": "true",
            className: imgClassName,
            style: revealImageStyle,
            loading: "lazy",
            decoding: "async",
            draggable: false
          }
        ),
        overlayStyle && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "span",
          {
            "aria-hidden": "true",
            className: "ri-pan-reveal__overlay",
            style: overlayStyle
          }
        )
      ]
    }
  );
}
function getSlideTransform(direction, amount, isRevealed) {
  if (isRevealed) return "translate3d(0, 0, 0)";
  const offset = `${amount}%`;
  switch (direction) {
    case "left":
      return `translate3d(-${offset}, 0, 0)`;
    case "right":
      return `translate3d(${offset}, 0, 0)`;
    case "up":
      return `translate3d(0, -${offset}, 0)`;
    case "down":
      return `translate3d(0, ${offset}, 0)`;
    case "diagonal":
      return `translate3d(${offset}, ${offset}, 0)`;
    default:
      return "translate3d(0, 0, 0)";
  }
}
function getCounterTransform(direction, amount) {
  const offset = `${amount}%`;
  switch (direction) {
    case "left":
      return `translate3d(${offset}, 0, 0)`;
    case "right":
      return `translate3d(-${offset}, 0, 0)`;
    case "up":
      return `translate3d(0, ${offset}, 0)`;
    case "down":
      return `translate3d(0, -${offset}, 0)`;
    case "diagonal":
      return `translate3d(-${offset}, -${offset}, 0)`;
    default:
      return "translate3d(0, 0, 0)";
  }
}
function getMaskClipPath(shape, size, cursor, isRevealed) {
  const center = `${cursor.x}% ${cursor.y}%`;
  if (!isRevealed) {
    if (shape === "rectangle") {
      return "inset(0% 50% 0% 50%)";
    }
    return `circle(0% at ${center})`;
  }
  switch (shape) {
    case "ellipse":
      return `ellipse(${size * 1.2}% ${Math.max(size * 0.8, 5)}% at ${center})`;
    case "rectangle": {
      const gap = Math.max(0, (100 - size) / 2);
      return `inset(0% ${gap}% 0% ${gap}%)`;
    }
    default:
      return `circle(${size}% at ${center})`;
  }
}
function directionToGradient(direction) {
  switch (direction) {
    case "left":
      return "to left";
    case "right":
      return "to right";
    case "up":
      return "to top";
    case "down":
      return "to bottom";
    case "diagonal":
      return "135deg";
    default:
      return "to right";
  }
}

// src/variants/KenBurnsSequence/KenBurnsSequence.tsx
var import_react12 = require("react");

// src/variants/KenBurnsSequence/animations.ts
var kenBurnsStyles = {
  container: {
    position: "relative",
    display: "inline-block",
    overflow: "hidden"
  },
  image: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    willChange: "transform, opacity",
    transformOrigin: "center center",
    backfaceVisibility: "hidden"
  },
  overlay: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    mixBlendMode: "multiply"
  }
};
var kenBurnsPresets = {
  classic: [
    { zoom: 1.12, panX: -8, panY: -6, duration: 6400 },
    { zoom: 1.18, panX: 6, panY: 2, duration: 6200 },
    { zoom: 1.08, panX: 0, panY: 8, duration: 6e3 }
  ],
  slowPan: [
    { zoom: 1.08, panX: -12, panY: 4, duration: 7200 },
    { zoom: 1.08, panX: 12, panY: -6, duration: 7200 },
    { zoom: 1.05, panX: 0, panY: 6, duration: 6800 }
  ],
  dramatic: [
    { zoom: 1.22, panX: -6, panY: 0, rotate: -1, duration: 5200 },
    { zoom: 1.28, panX: 4, panY: 6, rotate: 1, duration: 5e3 },
    { zoom: 1.18, panX: -3, panY: -8, rotate: -0.5, duration: 5400 }
  ]
};

// src/variants/KenBurnsSequence/hooks.ts
var import_react11 = require("react");
function useKenBurnsSequence({
  frameDurations,
  autoplay,
  loop,
  pauseOnHover,
  enableTouch = false,
  framesKey,
  onSequenceStart,
  onSequenceEnd,
  onFrameChange
}) {
  const [activeIndex, setActiveIndex] = (0, import_react11.useState)(0);
  const [isPlaying, setIsPlaying] = (0, import_react11.useState)(autoplay);
  const containerRef = (0, import_react11.useRef)(null);
  const timerRef = (0, import_react11.useRef)(null);
  const startedRef = (0, import_react11.useRef)(false);
  const frameCount = frameDurations.length;
  const clearTimer = (0, import_react11.useCallback)(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);
  const resetState = (0, import_react11.useCallback)(() => {
    clearTimer();
    setActiveIndex(0);
    setIsPlaying(autoplay);
    startedRef.current = false;
  }, [autoplay, clearTimer]);
  (0, import_react11.useEffect)(() => {
    resetState();
  }, [framesKey, resetState]);
  (0, import_react11.useEffect)(() => {
    return () => {
      clearTimer();
    };
  }, [clearTimer]);
  (0, import_react11.useEffect)(() => {
    if (!isPlaying || frameCount <= 1) return;
    if (!startedRef.current) {
      startedRef.current = true;
      onSequenceStart?.();
    }
    const duration = frameDurations[activeIndex] ?? frameDurations[0] ?? 6e3;
    timerRef.current = setTimeout(() => {
      setActiveIndex((prev) => {
        const next = prev + 1;
        const reachedEnd = next >= frameCount;
        if (reachedEnd && !loop) {
          setIsPlaying(false);
          onSequenceEnd?.();
          return prev;
        }
        if (frameCount === 0) {
          return prev;
        }
        const target = next % frameCount;
        onFrameChange?.(target);
        return target;
      });
    }, duration);
    return () => {
      clearTimer();
    };
  }, [
    activeIndex,
    clearTimer,
    frameCount,
    frameDurations,
    isPlaying,
    loop,
    onFrameChange,
    onSequenceEnd,
    onSequenceStart
  ]);
  const handleMouseEnter = (0, import_react11.useCallback)(() => {
    if (!pauseOnHover) return;
    setIsPlaying(false);
  }, [pauseOnHover]);
  const handleMouseLeave = (0, import_react11.useCallback)(() => {
    if (!pauseOnHover) return;
    if (frameCount <= 1) return;
    if (!loop && activeIndex === frameCount - 1) return;
    setIsPlaying(true);
  }, [pauseOnHover, frameCount, loop, activeIndex]);
  const handleTouchStart = (0, import_react11.useCallback)(() => {
    if (!enableTouch) return;
    setIsPlaying(false);
  }, [enableTouch]);
  const handleTouchEnd = (0, import_react11.useCallback)(() => {
    if (!enableTouch) return;
    if (frameCount <= 1) return;
    if (!loop && activeIndex === frameCount - 1) return;
    setIsPlaying(true);
  }, [enableTouch, frameCount, loop, activeIndex]);
  return {
    activeIndex,
    isPlaying,
    containerRef,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd
    }
  };
}

// src/variants/KenBurnsSequence/KenBurnsSequence.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var DEFAULT_DURATION = 6500;
var DEFAULT_EASING = "cubic-bezier(0.33, 1, 0.68, 1)";
function KenBurnsSequence({
  src,
  alt,
  frames,
  animation = "classic",
  crossfadeDuration = 900,
  pauseOnHover = true,
  autoplay = true,
  loop = true,
  overlayGradient = "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.55) 100%)",
  enableTouch = false,
  timing = {},
  className,
  imgClassName,
  style,
  onSequenceStart,
  onSequenceEnd,
  onFrameChange,
  loading,
  decoding,
  ...rest
}) {
  const fallbackDuration = timing.duration ?? DEFAULT_DURATION;
  const fallbackEasing = timing.easing ?? DEFAULT_EASING;
  const resolvedFrames = (0, import_react12.useMemo)(() => {
    if (frames && frames.length > 0) {
      return frames;
    }
    return kenBurnsPresets[animation] ?? kenBurnsPresets.classic;
  }, [animation, frames]);
  const normalizedFrames = (0, import_react12.useMemo)(() => {
    const source = resolvedFrames.length ? resolvedFrames : kenBurnsPresets.classic;
    return source.map(
      (frame) => normalizeFrame(frame, src, fallbackDuration, fallbackEasing)
    );
  }, [resolvedFrames, src, fallbackDuration, fallbackEasing]);
  const framesKey = (0, import_react12.useMemo)(
    () => normalizedFrames.map(
      (frame) => `${frame.src}-${frame.zoom}-${frame.panX}-${frame.panY}-${frame.rotate}-${frame.duration}-${frame.easing}`
    ).join("|"),
    [normalizedFrames]
  );
  const frameDurations = (0, import_react12.useMemo)(
    () => normalizedFrames.map((frame) => frame.duration),
    [normalizedFrames]
  );
  const { activeIndex, isPlaying, containerRef, handlers } = useKenBurnsSequence({
    frameDurations,
    autoplay,
    loop,
    pauseOnHover,
    enableTouch,
    framesKey,
    onSequenceStart,
    onSequenceEnd,
    onFrameChange
  });
  const activeFrame = normalizedFrames[activeIndex] ?? normalizedFrames[0] ?? normalizeFrame(
    void 0,
    src,
    fallbackDuration,
    fallbackEasing
  );
  const [leavingFrame, setLeavingFrame] = (0, import_react12.useState)(null);
  const [isLeavingVisible, setIsLeavingVisible] = (0, import_react12.useState)(false);
  const leaveTimeoutRef = (0, import_react12.useRef)(null);
  const rafRef = (0, import_react12.useRef)(null);
  const previousFrameRef = (0, import_react12.useRef)(null);
  (0, import_react12.useEffect)(() => {
    previousFrameRef.current = normalizedFrames[0] ?? null;
    setLeavingFrame(null);
    setIsLeavingVisible(false);
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, [framesKey, normalizedFrames]);
  (0, import_react12.useEffect)(() => {
    if (!previousFrameRef.current) {
      previousFrameRef.current = activeFrame;
      return;
    }
    if (crossfadeDuration <= 0) {
      previousFrameRef.current = activeFrame;
      setLeavingFrame(null);
      setIsLeavingVisible(false);
      return;
    }
    setLeavingFrame(previousFrameRef.current);
    setIsLeavingVisible(true);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(() => {
      setIsLeavingVisible(false);
      rafRef.current = null;
    });
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    leaveTimeoutRef.current = setTimeout(() => {
      setLeavingFrame(null);
      leaveTimeoutRef.current = null;
    }, crossfadeDuration);
    previousFrameRef.current = activeFrame;
  }, [activeFrame, crossfadeDuration]);
  (0, import_react12.useEffect)(() => {
    return () => {
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);
  const containerClassName = (0, import_react12.useMemo)(() => {
    const classes = [
      "ri-kenburns-sequence",
      `ri-kenburns-sequence--${animation}`
    ];
    if (!isPlaying) {
      classes.push("ri-kenburns-sequence--paused");
    }
    if (className) {
      classes.push(className);
    }
    return classes.join(" ");
  }, [animation, className, isPlaying]);
  const containerStyle = (0, import_react12.useMemo)(
    () => ({
      ...kenBurnsStyles.container,
      ...style
    }),
    [style]
  );
  const activeImageStyle = (0, import_react12.useMemo)(
    () => ({
      ...kenBurnsStyles.image,
      transition: `transform ${activeFrame.duration}ms ${activeFrame.easing}`,
      transform: activeFrame.transform
    }),
    [activeFrame]
  );
  const leavingImageStyle = (0, import_react12.useMemo)(() => {
    if (!leavingFrame) return void 0;
    return {
      ...kenBurnsStyles.image,
      position: "absolute",
      inset: 0,
      opacity: isLeavingVisible ? 1 : 0,
      transition: `opacity ${crossfadeDuration}ms ease`,
      transform: leavingFrame.transform,
      pointerEvents: "none"
    };
  }, [crossfadeDuration, isLeavingVisible, leavingFrame]);
  const overlayStyle = (0, import_react12.useMemo)(() => {
    if (!overlayGradient) return void 0;
    return {
      ...kenBurnsStyles.overlay,
      background: overlayGradient
    };
  }, [overlayGradient]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "span",
    {
      ref: containerRef,
      className: containerClassName,
      style: containerStyle,
      ...handlers,
      children: [
        leavingFrame && leavingImageStyle && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "img",
          {
            src: leavingFrame.src,
            alt,
            "aria-hidden": "true",
            className: imgClassName,
            style: leavingImageStyle,
            loading: "lazy",
            decoding: "async",
            draggable: false
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "img",
          {
            src: activeFrame.src,
            alt,
            className: imgClassName,
            style: activeImageStyle,
            loading,
            decoding,
            draggable: false,
            ...rest
          }
        ),
        overlayStyle && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { "aria-hidden": "true", className: "ri-kenburns-sequence__overlay", style: overlayStyle })
      ]
    }
  );
}
function normalizeFrame(frame, fallbackSrc, fallbackDuration, fallbackEasing) {
  const zoom = clamp(frame?.zoom ?? 1.12, 1, 1.6);
  const panX = clamp(frame?.panX ?? 0, -30, 30);
  const panY = clamp(frame?.panY ?? 0, -30, 30);
  const rotate = clamp(frame?.rotate ?? 0, -6, 6);
  const duration = Math.max(1200, frame?.duration ?? fallbackDuration);
  const easing = frame?.easing ?? fallbackEasing;
  const src = frame?.src ?? fallbackSrc;
  return {
    src,
    zoom,
    panX,
    panY,
    rotate,
    duration,
    easing,
    transform: createTransform(panX, panY, zoom, rotate)
  };
}
function createTransform(panX, panY, zoom, rotate) {
  return `translate3d(${panX}%, ${panY}%, 0) scale(${zoom}) rotate(${rotate}deg)`;
}
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

// src/variants/PolaroidStack/PolaroidStack.tsx
var import_react14 = require("react");

// src/variants/PolaroidStack/animations.ts
var polaroidStyles = {
  container: {
    position: "relative",
    display: "block",
    width: "100%",
    perspective: "900px"
  },
  frame: {
    position: "relative",
    display: "block",
    width: "100%",
    aspectRatio: "4 / 3",
    padding: "12px"
  },
  card: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    backgroundColor: "#fff",
    borderRadius: "12px",
    border: "10px solid #fff",
    boxShadow: "var(--shadow, 0 14px 30px rgba(0,0,0,0.18))",
    transition: "transform 320ms cubic-bezier(0.22, 0.61, 0.36, 1), box-shadow 220ms ease, filter 200ms ease",
    transformOrigin: "center center",
    willChange: "transform, box-shadow",
    backfaceVisibility: "hidden"
  }
};
var shadowMap = {
  soft: "0 10px 24px rgba(0,0,0,0.12)",
  medium: "0 14px 30px rgba(0,0,0,0.18)",
  strong: "0 18px 40px rgba(0,0,0,0.22)"
};

// src/variants/PolaroidStack/hooks.ts
var import_react13 = require("react");
function usePolaroidStack({
  enableTouch = false,
  onStackEnter,
  onStackLeave
}) {
  const [isActive, setIsActive] = (0, import_react13.useState)(false);
  const containerRef = (0, import_react13.useRef)(null);
  const touchTimeoutRef = (0, import_react13.useRef)(null);
  const activate = (0, import_react13.useCallback)(() => {
    setIsActive(true);
    onStackEnter?.();
  }, [onStackEnter]);
  const deactivate = (0, import_react13.useCallback)(() => {
    setIsActive(false);
    onStackLeave?.();
  }, [onStackLeave]);
  const handleMouseEnter = (0, import_react13.useCallback)(() => {
    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
      touchTimeoutRef.current = null;
    }
    activate();
  }, [activate]);
  const handleMouseLeave = (0, import_react13.useCallback)(() => {
    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
      touchTimeoutRef.current = null;
    }
    deactivate();
  }, [deactivate]);
  const handleTouchStart = (0, import_react13.useCallback)(() => {
    if (!enableTouch) return;
    activate();
  }, [activate, enableTouch]);
  const handleTouchEnd = (0, import_react13.useCallback)(() => {
    if (!enableTouch) return;
    touchTimeoutRef.current = setTimeout(deactivate, 150);
  }, [deactivate, enableTouch]);
  (0, import_react13.useEffect)(() => {
    return () => {
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
      }
    };
  }, []);
  return {
    isActive,
    containerRef,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd
    }
  };
}

// src/variants/PolaroidStack/PolaroidStack.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function PolaroidStack({
  src,
  alt,
  stack = [],
  stackDepth,
  spreadAngle = 32,
  offsetStep = 14,
  lift = 14,
  rotationJitter = 4,
  shadow = "medium",
  aspectRatio,
  enableTouch = false,
  className,
  imgClassName,
  style,
  onStackEnter,
  onStackLeave,
  loading,
  decoding,
  ...rest
}) {
  const { variant: _variant, ...imgRest } = rest;
  const { isActive, containerRef, handlers } = usePolaroidStack({
    enableTouch,
    onStackEnter,
    onStackLeave
  });
  const items = (0, import_react14.useMemo)(() => {
    const combined = [...stack ?? [], { src, alt }];
    const depth = typeof stackDepth === "number" ? Math.max(1, Math.min(stackDepth, combined.length)) : Math.min(4, combined.length || 1);
    return combined.slice(0, depth);
  }, [alt, src, stack, stackDepth]);
  const ratioFromStyle = style?.aspectRatio ?? void 0;
  const frameAspect = aspectRatio ?? ratioFromStyle ?? "4 / 3";
  const containerStyle = (0, import_react14.useMemo)(
    () => ({
      ...polaroidStyles.container,
      ...style
    }),
    [style]
  );
  const frameStyle = (0, import_react14.useMemo)(
    () => ({
      ...polaroidStyles.frame,
      aspectRatio: frameAspect
    }),
    [frameAspect]
  );
  const cardStyles = (0, import_react14.useMemo)(() => {
    const count = items.length || 1;
    const center = (count - 1) / 2;
    const totalSpread = Math.max(4, spreadAngle);
    const angleStep = count > 1 ? totalSpread / (count - 1) : 0;
    return items.map((_, index) => {
      const angle = count > 1 ? -totalSpread / 2 + angleStep * index : 0;
      const jitter = (index - center) * rotationJitter * (isActive ? 0.6 : 1) / 1.8;
      const rotation = isActive ? angle : jitter;
      const translateX = isActive ? (index - center) * offsetStep : index * offsetStep * 0.4;
      const translateY = isActive ? -lift + Math.abs(index - center) * -2 : index * offsetStep * 0.55;
      const scale = isActive ? 1 : 0.985;
      const boxShadow = shadowMap[shadow] ?? shadowMap.medium;
      return {
        transform: `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotation}deg) scale(${scale})`,
        zIndex: 100 + index,
        boxShadow,
        filter: isActive && index === count - 1 ? "saturate(1.05)" : "saturate(0.96)"
      };
    });
  }, [isActive, items.length, lift, offsetStep, rotationJitter, shadow, spreadAngle]);
  const containerClassName = (0, import_react14.useMemo)(() => {
    const classes = ["ri-polaroid-stack"];
    if (isActive) classes.push("ri-polaroid-stack--active");
    if (className) classes.push(className);
    return classes.join(" ");
  }, [className, isActive]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "span",
    {
      ref: containerRef,
      className: containerClassName,
      style: containerStyle,
      ...handlers,
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { style: frameStyle, className: "ri-polaroid-stack__frame block", children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "img",
        {
          src: item.src,
          alt: index === items.length - 1 ? item.alt ?? alt : "",
          "aria-hidden": index !== items.length - 1,
          className: imgClassName,
          style: {
            ...polaroidStyles.card,
            ...cardStyles[index]
          },
          loading: index === items.length - 1 ? loading : "lazy",
          decoding: index === items.length - 1 ? decoding : "async",
          draggable: false,
          ...imgRest
        },
        `${item.src}-${index}`
      )) })
    }
  );
}

// src/variants/ScrollReactive/ScrollReactive.tsx
var import_react16 = require("react");

// src/variants/ScrollReactive/animations.ts
var scrollAnimations = {
  container: {
    position: "relative",
    display: "inline-block",
    overflow: "hidden"
  },
  image: {
    display: "block",
    width: "100%",
    height: "auto",
    willChange: "transform, opacity",
    transformOrigin: "center center",
    transition: "transform 90ms linear, opacity 90ms linear"
  }
};

// src/variants/ScrollReactive/hooks.ts
var import_react15 = require("react");
var clamp2 = (value, min, max) => Math.min(Math.max(value, min), max);
function useScrollReactive({
  triggerOffset = 0,
  once = false,
  onEnter,
  onExit,
  onProgress
}) {
  const [progress, setProgress] = (0, import_react15.useState)(0);
  const [isActive, setIsActive] = (0, import_react15.useState)(false);
  const hasEnteredRef = (0, import_react15.useRef)(false);
  const containerRef = (0, import_react15.useRef)(null);
  const rafRef = (0, import_react15.useRef)(null);
  const calculateProgress = (0, import_react15.useCallback)(() => {
    const el = containerRef.current;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 1;
    const total = rect.height + viewportHeight - triggerOffset;
    if (total <= 0) return 0;
    const raw = (viewportHeight - rect.top - triggerOffset) / total;
    return clamp2(raw, 0, 1);
  }, [triggerOffset]);
  const scheduleUpdate = (0, import_react15.useCallback)(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(() => {
      const next = calculateProgress();
      setProgress((prev) => {
        const value = once && hasEnteredRef.current ? Math.max(prev, next) : next;
        if (value !== prev) {
          onProgress?.(value);
        }
        return value;
      });
      rafRef.current = null;
    });
  }, [calculateProgress, onProgress, once]);
  (0, import_react15.useEffect)(() => {
    scheduleUpdate();
  }, [scheduleUpdate]);
  (0, import_react15.useEffect)(() => {
    const handle = () => scheduleUpdate();
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, [scheduleUpdate]);
  (0, import_react15.useEffect)(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          if (!hasEnteredRef.current) {
            hasEnteredRef.current = true;
            onEnter?.();
          }
          setIsActive(true);
        } else {
          if (!once || !hasEnteredRef.current) {
            setIsActive(false);
            onExit?.();
          }
        }
        scheduleUpdate();
      },
      {
        threshold: [0, 0.15, 0.35, 0.6, 1],
        rootMargin: `0px 0px ${-triggerOffset}px 0px`
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once, onEnter, onExit, scheduleUpdate, triggerOffset]);
  (0, import_react15.useEffect)(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);
  return {
    progress,
    isActive,
    containerRef
  };
}

// src/variants/ScrollReactive/ScrollReactive.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var lerp = (start, end, t) => start + (end - start) * t;
function ScrollReactive({
  src,
  alt,
  animation = "parallax",
  parallaxOffset = 60,
  scaleFrom = 0.92,
  rotate = 8,
  opacityFrom = 0.35,
  triggerOffset = 0,
  once = false,
  enableTouch = false,
  className,
  imgClassName,
  style,
  onEnter,
  onExit,
  onProgress,
  loading,
  decoding,
  ...rest
}) {
  const { variant: _variant, ...imgRest } = rest;
  const { progress, isActive, containerRef } = useScrollReactive({
    triggerOffset,
    once,
    onEnter,
    onExit,
    onProgress
  });
  const clampedProgress = Math.min(1, Math.max(0, progress));
  const containerStyle = (0, import_react16.useMemo)(
    () => ({
      ...scrollAnimations.container,
      ...enableTouch ? { touchAction: "manipulation" } : {},
      ...style,
      // Expose progress to consumers
      // @ts-ignore CSS custom property
      "--ri-scroll-progress": clampedProgress
    }),
    [clampedProgress, enableTouch, style]
  );
  const imageStyle = (0, import_react16.useMemo)(() => {
    const base = {
      ...scrollAnimations.image,
      opacity: lerp(opacityFrom, 1, clampedProgress)
    };
    switch (animation) {
      case "fadeIn": {
        const translateY = parallaxOffset * (1 - clampedProgress);
        base.transform = `translate3d(0, ${translateY}px, 0)`;
        break;
      }
      case "scale": {
        const translateY = parallaxOffset * 0.4 * (1 - clampedProgress);
        const scale = lerp(scaleFrom, 1, clampedProgress);
        base.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
        break;
      }
      case "tilt": {
        const translateY = parallaxOffset * 0.5 * (1 - clampedProgress);
        const tiltX = (1 - clampedProgress) * (rotate * 0.4);
        const tiltY = (clampedProgress - 0.5) * rotate;
        const scale = lerp(scaleFrom, 1, clampedProgress);
        base.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(0, ${translateY}px, 0) scale(${scale})`;
        break;
      }
      case "parallax":
      default: {
        const translateY = parallaxOffset * (1 - clampedProgress);
        base.transform = `translate3d(0, ${translateY}px, 0)`;
        base.opacity = Math.max(
          typeof base.opacity === "number" ? base.opacity : 1,
          0.9
        );
        break;
      }
    }
    return base;
  }, [
    animation,
    clampedProgress,
    opacityFrom,
    parallaxOffset,
    rotate,
    scaleFrom
  ]);
  const containerClassName = (0, import_react16.useMemo)(() => {
    const classes = ["ri-scroll-reactive", `ri-scroll-reactive--${animation}`];
    if (isActive) classes.push("ri-scroll-reactive--active");
    if (className) classes.push(className);
    return classes.join(" ");
  }, [animation, className, isActive]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { ref: containerRef, className: containerClassName, style: containerStyle, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "img",
    {
      src,
      alt,
      className: imgClassName,
      style: imageStyle,
      loading,
      decoding,
      draggable: false,
      ...imgRest
    }
  ) });
}

// src/variants/DepthFocus/DepthFocus.tsx
var import_react18 = require("react");

// src/variants/DepthFocus/animations.ts
var depthFocusStyles = {
  container: {
    position: "relative",
    display: "block",
    width: "100%",
    overflow: "hidden",
    borderRadius: "16px",
    isolation: "isolate",
    backgroundColor: "#030712",
    boxShadow: "0 20px 60px rgba(0,0,0,0.35)"
  },
  baseImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transformOrigin: "center",
    transition: "transform 420ms cubic-bezier(0.22, 0.61, 0.36, 1), filter 360ms ease, opacity 260ms ease",
    willChange: "transform, filter"
  },
  focusImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transformOrigin: "center",
    transition: "transform 420ms cubic-bezier(0.22, 0.61, 0.36, 1), filter 320ms ease, opacity 220ms ease",
    willChange: "transform, filter",
    backfaceVisibility: "hidden"
  },
  glow: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    mixBlendMode: "screen",
    opacity: 0.7,
    transition: "opacity 360ms ease, transform 420ms ease"
  },
  vignette: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background: "radial-gradient(circle at 50% 45%, rgba(0,0,0,0.08), rgba(0,0,0,0.38) 65%)"
  }
};
var DEPTH_FOCUS_ANIMATION_CSS = `
@keyframes ri-depthfocus-glow {
  0% { opacity: 0.38; transform: scale(0.96); }
  45% { opacity: 0.85; transform: scale(1.02); }
  100% { opacity: 0.55; transform: scale(1); }
}
`;

// src/variants/DepthFocus/hooks.ts
var import_react17 = require("react");
var clamp3 = (value, min, max) => Math.min(max, Math.max(min, value));
function useDepthFocus({
  focusMode = "cursor",
  animation = "rackFocus",
  enableTouch = false,
  onFocusStart,
  onFocusMove,
  onFocusEnd
}) {
  const [focusPoint, setFocusPoint] = (0, import_react17.useState)({ x: 50, y: 50 });
  const [isActive, setIsActive] = (0, import_react17.useState)(focusMode !== "cursor");
  const [intensity, setIntensity] = (0, import_react17.useState)(
    focusMode !== "cursor" ? 1 : 0.9
  );
  const containerRef = (0, import_react17.useRef)(null);
  const rafRef = (0, import_react17.useRef)(null);
  const driftRef = (0, import_react17.useRef)(null);
  const pendingPointRef = (0, import_react17.useRef)(null);
  const hasStartedRef = (0, import_react17.useRef)(focusMode !== "cursor");
  const commitFocus = (0, import_react17.useCallback)(
    (point, fireMove = true) => {
      setFocusPoint((prev) => {
        if (Math.abs(prev.x - point.x) < 0.1 && Math.abs(prev.y - point.y) < 0.1) {
          return prev;
        }
        return point;
      });
      if (fireMove) {
        onFocusMove?.(point);
      }
    },
    [onFocusMove]
  );
  const schedulePointerUpdate = (0, import_react17.useCallback)(
    (clientX, clientY) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clamp3((clientX - rect.left) / rect.width * 100, 0, 100);
      const y = clamp3((clientY - rect.top) / rect.height * 100, 0, 100);
      pendingPointRef.current = { x, y };
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        if (pendingPointRef.current) {
          commitFocus(pendingPointRef.current);
          pendingPointRef.current = null;
        }
        rafRef.current = null;
      });
    },
    [commitFocus]
  );
  const handlePointerEnter = (0, import_react17.useCallback)(() => {
    if (!hasStartedRef.current) {
      onFocusStart?.();
      hasStartedRef.current = true;
    }
    setIsActive(true);
    setIntensity(1);
  }, [onFocusStart]);
  const handlePointerMove = (0, import_react17.useCallback)(
    (event) => {
      if (!enableTouch && event.pointerType === "touch") return;
      if (focusMode !== "cursor") return;
      schedulePointerUpdate(event.clientX, event.clientY);
    },
    [enableTouch, focusMode, schedulePointerUpdate]
  );
  const handlePointerLeave = (0, import_react17.useCallback)(() => {
    if (focusMode !== "cursor") return;
    setIsActive(false);
    setIntensity(0.86);
    commitFocus({ x: 50, y: 50 }, false);
    onFocusEnd?.();
    hasStartedRef.current = false;
  }, [commitFocus, focusMode, onFocusEnd]);
  const handleTouchStart = (0, import_react17.useCallback)(
    (event) => {
      if (!enableTouch) return;
      if (!hasStartedRef.current) {
        onFocusStart?.();
        hasStartedRef.current = true;
      }
      setIsActive(true);
      setIntensity(1);
      if (focusMode === "cursor") {
        const touch = event.touches[0];
        schedulePointerUpdate(touch.clientX, touch.clientY);
      }
    },
    [enableTouch, focusMode, onFocusStart, schedulePointerUpdate]
  );
  const handleTouchMove = (0, import_react17.useCallback)(
    (event) => {
      if (!enableTouch) return;
      if (focusMode !== "cursor") return;
      const touch = event.touches[0];
      schedulePointerUpdate(touch.clientX, touch.clientY);
    },
    [enableTouch, focusMode, schedulePointerUpdate]
  );
  const handleTouchEnd = (0, import_react17.useCallback)(() => {
    if (!enableTouch) return;
    if (focusMode !== "cursor") return;
    setIsActive(false);
    setIntensity(0.9);
    commitFocus({ x: 50, y: 50 }, false);
    onFocusEnd?.();
    hasStartedRef.current = false;
  }, [commitFocus, enableTouch, focusMode, onFocusEnd]);
  (0, import_react17.useEffect)(() => {
    if (!(focusMode === "auto" || animation === "drift")) return void 0;
    setIsActive(true);
    setIntensity(1);
    if (!hasStartedRef.current) {
      onFocusStart?.();
      hasStartedRef.current = true;
    }
    const start = performance.now();
    const animate = (now) => {
      const elapsed = (now - start) / 1e3;
      const x = 50 + 20 * Math.sin(elapsed * 0.9);
      const y = 50 + 14 * Math.cos(elapsed * 1.05 + 0.35);
      commitFocus({ x, y }, false);
      driftRef.current = requestAnimationFrame(animate);
    };
    driftRef.current = requestAnimationFrame(animate);
    return () => {
      if (driftRef.current) {
        cancelAnimationFrame(driftRef.current);
        driftRef.current = null;
      }
    };
  }, [animation, focusMode, commitFocus, onFocusStart]);
  (0, import_react17.useEffect)(() => {
    if (focusMode !== "scroll") return void 0;
    setIsActive(true);
    setIntensity(1);
    if (!hasStartedRef.current) {
      onFocusStart?.();
      hasStartedRef.current = true;
    }
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const center = rect.top + rect.height / 2;
      const distance = Math.abs(center - viewport / 2);
      const span = viewport / 2 + rect.height / 2;
      const progress = clamp3(1 - distance / span, 0, 1);
      const x = 35 + progress * 45;
      const y = 62 - progress * 20;
      commitFocus({ x, y }, false);
      setIntensity(0.75 + progress * 0.25);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [commitFocus, focusMode, onFocusStart]);
  (0, import_react17.useEffect)(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (driftRef.current) {
        cancelAnimationFrame(driftRef.current);
      }
    };
  }, []);
  return {
    focusPoint,
    isActive,
    intensity,
    containerRef,
    handlers: {
      onPointerEnter: handlePointerEnter,
      onPointerMove: handlePointerMove,
      onPointerLeave: handlePointerLeave,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd
    }
  };
}

// src/variants/DepthFocus/DepthFocus.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function DepthFocus({
  src,
  alt,
  animation = "rackFocus",
  focusMode = "cursor",
  blurRange,
  focusSize = 260,
  edgeSoftness = 140,
  tiltAmount = 8,
  glowColor = "rgba(255, 255, 255, 0.52)",
  parallaxDepth = 18,
  enableTouch = false,
  className,
  imgClassName,
  focusClassName,
  style,
  onFocusStart,
  onFocusMove,
  onFocusEnd,
  loading,
  decoding,
  ...rest
}) {
  const { variant: _variant, ...imgRest } = rest;
  const { focusPoint, isActive, intensity, containerRef, handlers } = useDepthFocus({
    focusMode,
    animation,
    enableTouch,
    onFocusStart,
    onFocusMove,
    onFocusEnd
  });
  (0, import_react18.useEffect)(() => {
    const styleId = "ri-depth-focus-animations";
    if (typeof document !== "undefined" && !document.getElementById(styleId)) {
      const styleElement = document.createElement("style");
      styleElement.id = styleId;
      styleElement.textContent = DEPTH_FOCUS_ANIMATION_CSS;
      document.head.appendChild(styleElement);
    }
  }, []);
  const blurMin = blurRange?.min ?? 1.5;
  const blurMax = Math.max(blurMin + 2, blurRange?.max ?? 12);
  const normalizedIntensity = Math.min(1, Math.max(0, intensity));
  const backgroundBlur = blurMin + (blurMax - blurMin) * (1 - normalizedIntensity);
  const focusBlur = Math.max(0, blurMin - 0.6);
  const focusSizeValue = focusSize ?? 260;
  const softnessValue = edgeSoftness ?? Math.max(90, Math.round(focusSizeValue * 0.45));
  const offsetX = (focusPoint.x - 50) / 50 * parallaxDepth;
  const offsetY = (focusPoint.y - 50) / 50 * parallaxDepth;
  const rotateY = (focusPoint.x - 50) / 50 * -tiltAmount;
  const rotateX = (focusPoint.y - 50) / 50 * tiltAmount;
  const scale = 1 + normalizedIntensity * 0.015 + (isActive ? 6e-3 : 0);
  const cssVars = (0, import_react18.useMemo)(
    () => ({
      "--ri-focus-x": `${focusPoint.x}%`,
      "--ri-focus-y": `${focusPoint.y}%`,
      "--ri-focus-size": `${focusSizeValue}px`,
      "--ri-edge-softness": `${softnessValue}px`,
      "--ri-glow-strength": `${animation === "pulseGlow" ? 0.85 : 0.58 + normalizedIntensity * 0.25}`,
      "--ri-glow-color": glowColor,
      "--ri-bg-blur": `${backgroundBlur}px`,
      "--ri-fg-blur": `${focusBlur}px`
    }),
    [
      animation,
      backgroundBlur,
      focusBlur,
      focusPoint.x,
      focusPoint.y,
      focusSizeValue,
      softnessValue,
      normalizedIntensity,
      glowColor
    ]
  );
  const containerClassName = (0, import_react18.useMemo)(() => {
    const classes = ["ri-depth-focus"];
    if (isActive) classes.push("ri-depth-focus--active");
    if (className) classes.push(className);
    return classes.join(" ");
  }, [className, isActive]);
  const mask = (0, import_react18.useMemo)(
    () => `radial-gradient(circle at var(--ri-focus-x) var(--ri-focus-y), rgba(0,0,0,1) calc(var(--ri-focus-size) * 0.58), rgba(0,0,0,0) calc(var(--ri-focus-size) * 0.58 + var(--ri-edge-softness)))`,
    []
  );
  const containerStyle = (0, import_react18.useMemo)(
    () => ({
      ...depthFocusStyles.container,
      ...style,
      transform: `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${offsetX * 0.3}px, ${offsetY * 0.3}px, 0)`
    }),
    [offsetX, offsetY, rotateX, rotateY, style]
  );
  const baseImageStyle = (0, import_react18.useMemo)(
    () => ({
      ...depthFocusStyles.baseImage,
      filter: `blur(${backgroundBlur}px) saturate(${0.9 + normalizedIntensity * 0.08})`,
      transform: `translate3d(${offsetX * 0.14}px, ${offsetY * 0.14}px, 0) scale(${1 + normalizedIntensity * 0.012})`,
      opacity: 0.98
    }),
    [backgroundBlur, normalizedIntensity, offsetX, offsetY]
  );
  const focusImageStyle = (0, import_react18.useMemo)(
    () => ({
      ...depthFocusStyles.focusImage,
      filter: `blur(${focusBlur}px) saturate(${1.05 + normalizedIntensity * 0.08})`,
      transform: `translate3d(${offsetX * 0.24}px, ${offsetY * 0.24}px, 0) scale(${scale})`,
      maskImage: mask,
      WebkitMaskImage: mask,
      opacity: isActive ? 1 : 0.96
    }),
    [focusBlur, normalizedIntensity, offsetX, offsetY, scale, mask, isActive]
  );
  const glowStyle = (0, import_react18.useMemo)(
    () => ({
      ...depthFocusStyles.glow,
      background: `radial-gradient(circle at var(--ri-focus-x) var(--ri-focus-y), var(--ri-glow-color) 0%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 72%)`,
      filter: "blur(18px)",
      animation: animation === "pulseGlow" ? "ri-depthfocus-glow 2.4s ease-in-out infinite" : void 0,
      transform: `translate3d(${offsetX * 0.18}px, ${offsetY * 0.18}px, 0) scale(${1 + normalizedIntensity * 0.02})`,
      opacity: animation === "pulseGlow" ? 0.9 : 0.62 + normalizedIntensity * (isActive ? 0.22 : 0.1)
    }),
    [animation, isActive, normalizedIntensity, offsetX, offsetY]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    "span",
    {
      ref: containerRef,
      className: containerClassName,
      style: { ...containerStyle, ...cssVars },
      ...handlers,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "img",
          {
            src,
            alt: "",
            "aria-hidden": true,
            className: imgClassName,
            style: baseImageStyle,
            loading: loading ?? "lazy",
            decoding: decoding ?? "async",
            draggable: false,
            ...imgRest
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "img",
          {
            src,
            alt,
            className: focusClassName ?? imgClassName,
            style: focusImageStyle,
            loading,
            decoding,
            draggable: false,
            ...imgRest
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { "aria-hidden": true, style: glowStyle }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { "aria-hidden": true, style: depthFocusStyles.vignette })
      ]
    }
  );
}

// src/variants/SplitLayers/SplitLayers.tsx
var import_react20 = require("react");

// src/variants/SplitLayers/animations.ts
var splitLayersStyles = {
  container: {
    position: "relative",
    display: "block",
    width: "100%",
    overflow: "hidden",
    borderRadius: "18px",
    backgroundColor: "#05070d",
    boxShadow: "0 22px 60px rgba(0,0,0,0.32)"
  },
  frame: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "block"
  },
  layer: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 360ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 260ms ease, clip-path 420ms ease",
    willChange: "transform, opacity, clip-path",
    backfaceVisibility: "hidden"
  },
  glass: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    mixBlendMode: "screen",
    transition: "opacity 320ms ease, transform 360ms ease"
  },
  vignette: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background: "radial-gradient(circle at 50% 45%, rgba(0,0,0,0.05), rgba(0,0,0,0.32) 70%)"
  }
};

// src/variants/SplitLayers/hooks.ts
var import_react19 = require("react");
var clamp4 = (value, min, max) => Math.min(max, Math.max(min, value));
function useSplitLayers({
  enableTouch = false,
  onLayerEnter,
  onLayerLeave,
  onLayerMove
}) {
  const [pointer, setPointer] = (0, import_react19.useState)({ x: 0.5, y: 0.5 });
  const [isActive, setIsActive] = (0, import_react19.useState)(false);
  const containerRef = (0, import_react19.useRef)(null);
  const rafRef = (0, import_react19.useRef)(null);
  const pendingRef = (0, import_react19.useRef)(null);
  const commitPointer = (0, import_react19.useCallback)(
    (coords) => {
      setPointer((prev) => {
        if (Math.abs(prev.x - coords.x) < 0.01 && Math.abs(prev.y - coords.y) < 0.01) {
          return prev;
        }
        return coords;
      });
      onLayerMove?.(coords);
    },
    [onLayerMove]
  );
  const scheduleUpdate = (0, import_react19.useCallback)(
    (clientX, clientY) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clamp4((clientX - rect.left) / rect.width, 0, 1);
      const y = clamp4((clientY - rect.top) / rect.height, 0, 1);
      pendingRef.current = { x, y };
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        if (pendingRef.current) {
          commitPointer(pendingRef.current);
          pendingRef.current = null;
        }
        rafRef.current = null;
      });
    },
    [commitPointer]
  );
  const handlePointerEnter = (0, import_react19.useCallback)(() => {
    setIsActive(true);
    onLayerEnter?.();
  }, [onLayerEnter]);
  const handlePointerMove = (0, import_react19.useCallback)(
    (event) => {
      if (!enableTouch && event.pointerType === "touch") return;
      scheduleUpdate(event.clientX, event.clientY);
    },
    [enableTouch, scheduleUpdate]
  );
  const handlePointerLeave = (0, import_react19.useCallback)(() => {
    setIsActive(false);
    commitPointer({ x: 0.5, y: 0.5 });
    onLayerLeave?.();
  }, [commitPointer, onLayerLeave]);
  const handleTouchStart = (0, import_react19.useCallback)(
    (event) => {
      if (!enableTouch) return;
      const touch = event.touches[0];
      setIsActive(true);
      scheduleUpdate(touch.clientX, touch.clientY);
      onLayerEnter?.();
    },
    [enableTouch, onLayerEnter, scheduleUpdate]
  );
  const handleTouchMove = (0, import_react19.useCallback)(
    (event) => {
      if (!enableTouch) return;
      const touch = event.touches[0];
      scheduleUpdate(touch.clientX, touch.clientY);
    },
    [enableTouch, scheduleUpdate]
  );
  const handleTouchEnd = (0, import_react19.useCallback)(() => {
    if (!enableTouch) return;
    setIsActive(false);
    commitPointer({ x: 0.5, y: 0.5 });
    onLayerLeave?.();
  }, [commitPointer, enableTouch, onLayerLeave]);
  (0, import_react19.useEffect)(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);
  return {
    pointer,
    isActive,
    containerRef,
    handlers: {
      onPointerEnter: handlePointerEnter,
      onPointerMove: handlePointerMove,
      onPointerLeave: handlePointerLeave,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd
    }
  };
}

// src/variants/SplitLayers/SplitLayers.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function SplitLayers({
  src,
  alt,
  layers = [],
  animation = "parallax",
  parallaxIntensity = 18,
  peelDirection = "right",
  peelLift = 16,
  rippleRadius = 240,
  glassOpacity = 0.34,
  baseScale = 1.02,
  perspective = 980,
  enableTouch = false,
  className,
  imgClassName,
  style,
  onLayerEnter,
  onLayerLeave,
  onLayerMove,
  loading,
  decoding,
  ...rest
}) {
  const { variant: _variant, ...imgRest } = rest;
  const { pointer, isActive, containerRef, handlers } = useSplitLayers({
    enableTouch,
    onLayerEnter,
    onLayerLeave,
    onLayerMove
  });
  const mergedLayers = (0, import_react20.useMemo)(() => {
    const baseLayer = { src, alt, depth: 1, opacity: 1 };
    return [baseLayer, ...layers ?? []].map(
      (layer, index) => ({
        ...layer,
        depth: layer.depth ?? index + 1,
        opacity: layer.opacity ?? 1
      })
    );
  }, [alt, layers, src]);
  const containerClassName = (0, import_react20.useMemo)(() => {
    const classes = ["ri-split-layers"];
    if (isActive) classes.push("ri-split-layers--active");
    if (className) classes.push(className);
    return classes.join(" ");
  }, [className, isActive]);
  const offsetX = (pointer.x - 0.5) * 2;
  const offsetY = (pointer.y - 0.5) * 2;
  const pointerXPercent = pointer.x * 100;
  const pointerYPercent = pointer.y * 100;
  const containerStyle = (0, import_react20.useMemo)(
    () => ({
      ...splitLayersStyles.container,
      ...style,
      perspective: `${perspective}px`,
      transform: `translate3d(${offsetX * 3}px, ${offsetY * 3}px, 0)`
    }),
    [offsetX, offsetY, perspective, style]
  );
  const layerStyles = (0, import_react20.useMemo)(
    () => mergedLayers.map((layer, index) => {
      const depth = Math.max(1, layer.depth ?? index + 1);
      const baseOpacity = (layer.opacity ?? 1) * (isActive ? 1 : 0.94 - index * 0.02);
      const translateX = offsetX * parallaxIntensity * depth;
      const translateY = offsetY * parallaxIntensity * depth * 0.72;
      let peelX = 0;
      let peelY = 0;
      let rotateZ = offsetX * 2.4;
      if (animation === "peel") {
        const distance = peelLift + depth * 5;
        const factor = isActive ? 1 : 0.35;
        switch (peelDirection) {
          case "left":
            peelX = -distance * factor;
            rotateZ -= 4 * factor;
            break;
          case "right":
            peelX = distance * factor;
            rotateZ += 4 * factor;
            break;
          case "up":
            peelY = -distance * factor;
            rotateZ -= 2 * factor;
            break;
          case "down":
            peelY = distance * factor;
            rotateZ += 2 * factor;
            break;
        }
      }
      const clipPath = animation === "rippleReveal" ? `circle(${isActive ? rippleRadius : 0}px at ${pointerXPercent}% ${pointerYPercent}%)` : "none";
      const scale = baseScale + depth * 0.015 + (isActive ? 0.01 : 0);
      return {
        ...splitLayersStyles.layer,
        transform: `translate3d(${translateX + peelX}px, ${translateY + peelY}px, 0) rotate(${rotateZ}deg) scale(${scale})`,
        clipPath,
        WebkitClipPath: clipPath,
        opacity: Math.max(0, Math.min(1, baseOpacity)),
        mixBlendMode: layer.blendMode
      };
    }),
    [
      animation,
      baseScale,
      isActive,
      mergedLayers,
      offsetX,
      offsetY,
      parallaxIntensity,
      peelDirection,
      peelLift,
      pointerXPercent,
      pointerYPercent,
      rippleRadius
    ]
  );
  const glassStyle = (0, import_react20.useMemo)(
    () => ({
      ...splitLayersStyles.glass,
      opacity: glassOpacity * (isActive ? 1 : 0.75),
      background: "linear-gradient(120deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.16) 45%, rgba(255,255,255,0.05) 100%)",
      filter: "blur(9px) saturate(140%)",
      transform: `translate3d(${offsetX * 12}px, ${offsetY * 6}px, 0) scale(${1 + (isActive ? 0.02 : 0)})`
    }),
    [glassOpacity, isActive, offsetX, offsetY]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    "span",
    {
      ref: containerRef,
      className: containerClassName,
      style: containerStyle,
      ...handlers,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { style: splitLayersStyles.frame, className: "ri-split-layers__frame", children: mergedLayers.map((layer, index) => {
          const isTop = index === mergedLayers.length - 1;
          return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "img",
            {
              src: layer.src,
              alt: isTop ? layer.alt ?? alt : "",
              "aria-hidden": !isTop,
              className: imgClassName,
              style: layerStyles[index],
              loading: isTop ? loading : "lazy",
              decoding: isTop ? decoding : "async",
              draggable: false,
              ...imgRest
            },
            `${layer.src}-${index}`
          );
        }) }),
        animation === "glassSlide" && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { "aria-hidden": true, style: glassStyle }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { "aria-hidden": true, style: splitLayersStyles.vignette })
      ]
    }
  );
}

// src/ReactiveImage.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function ReactiveImage(props) {
  const { variant } = props;
  if (variant === "hoverSwitch") return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(HoverSwitch, { ...props });
  if (variant === "zoomOnHover") return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ZoomOnHover, { ...props });
  if (variant === "tiltOnHover") return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TiltOnHover, { ...props });
  if (variant === "clickExpand") return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ClickExpand, { ...props });
  if (variant === "panReveal") return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(PanReveal, { ...props });
  if (variant === "kenBurnsSequence")
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(KenBurnsSequence, { ...props });
  if (variant === "polaroidStack")
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(PolaroidStack, { ...props });
  if (variant === "scrollReactive")
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ScrollReactive, { ...props });
  if (variant === "depthFocus") return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(DepthFocus, { ...props });
  if (variant === "splitLayers") return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SplitLayers, { ...props });
  const { src, alt, className, imgClassName, style, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className, style, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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