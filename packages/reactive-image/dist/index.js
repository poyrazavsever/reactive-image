// src/variants/HoverSwitch/HoverSwitch.tsx
import { useMemo } from "react";

// src/variants/HoverSwitch/animations.ts
var animations = {
  fade: {
    container: {
      position: "relative",
      display: "inline-block",
      overflow: "hidden"
    },
    image: {
      transition: "opacity var(--duration, 300ms) var(--easing, ease-in-out) var(--delay, 0ms)",
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
      transition: "opacity var(--duration, 300ms) var(--easing, ease-in-out) var(--delay, 0ms)"
    }
  },
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
  const handleMouseLeave = useCallback(() => {
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
  const handleTouchStart = useCallback(() => {
    if (!enableTouch) return;
    handleMouseEnter();
  }, [enableTouch, handleMouseEnter]);
  const handleTouchEnd = useCallback(() => {
    if (!enableTouch) return;
    setTimeout(handleMouseLeave, 150);
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
  animation = "fade",
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
        case "fade":
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
        case "fade":
          animationStyle = { opacity: 1 };
          break;
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

// src/variants/zoomOnHover.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function ZoomOnHover({
  src,
  alt,
  zoomScale = 1.15,
  origin = "center",
  className,
  imgClassName,
  style,
  ...rest
}) {
  return /* @__PURE__ */ jsx2(
    "span",
    {
      className: `ri-zoom ${className ?? ""}`,
      style: {
        display: "inline-block",
        overflow: "hidden",
        ...style
      },
      children: /* @__PURE__ */ jsx2(
        "img",
        {
          src,
          alt,
          className: imgClassName,
          loading: rest.loading,
          decoding: rest.decoding,
          style: {
            display: "block",
            width: "100%",
            height: "auto",
            transformOrigin: origin,
            transition: "transform 200ms ease"
          },
          onMouseEnter: (e) => e.currentTarget.style.transform = `scale(${zoomScale})`,
          onMouseLeave: (e) => e.currentTarget.style.transform = "scale(1)"
        }
      )
    }
  );
}

// src/variants/tiltOnHover.tsx
import { useRef as useRef2 } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
function TiltOnHover({
  src,
  alt,
  tiltMax = 10,
  className,
  imgClassName,
  style,
  ...rest
}) {
  const ref = useRef2(null);
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
  return /* @__PURE__ */ jsx3(
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
      children: /* @__PURE__ */ jsx3(
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
import { useEffect as useEffect2, useState as useState2 } from "react";
import { Fragment, jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
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
  const [open, setOpen] = useState2(false);
  useEffect2(() => {
    if (!open || !closeOnEsc) return;
    const h = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, closeOnEsc]);
  return /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx4(
      "span",
      {
        className: `ri-click ${className ?? ""}`,
        style: { display: "inline-block", ...style },
        children: /* @__PURE__ */ jsx4(
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
    open && /* @__PURE__ */ jsx4(
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
        children: /* @__PURE__ */ jsxs2(
          "figure",
          {
            onClick: (e) => e.stopPropagation(),
            style: {
              maxWidth: "95vw",
              maxHeight: "90vh",
              animation: modalAnimation === "slideUp" ? "ri-slideUp .18s ease" : modalAnimation === "springPop" ? "ri-spring .22s cubic-bezier(.2, .9, .2, 1.2)" : "ri-scaleFade .16s ease"
            },
            children: [
              /* @__PURE__ */ jsx4(
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
              caption && /* @__PURE__ */ jsx4(
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