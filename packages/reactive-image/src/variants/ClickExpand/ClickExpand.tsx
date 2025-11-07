"use client";
import React from "react";
import type { BaseProps } from "../../types";
import type { ClickExpandProps } from "./types";
import { useClickExpand, useScrollLock, useFocusTrap } from "./hooks";
import {
  getAnimationStyle,
  getBackdropStyle,
  getModalSizeStyle,
  ANIMATION_CSS,
} from "./animations";

type Props = BaseProps & ClickExpandProps;

export function ClickExpand({
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
}: Props) {
  const { state, handlers, modalProps } = useClickExpand({
    closeOnEsc,
    closeOnBackdrop,
    enableKeyboard,
    preventScroll,
    onOpen,
    onClose,
    onAnimationStart,
    onAnimationEnd,
  });

  // Custom hooks for additional functionality
  useScrollLock(state.isOpen);
  const modalRef = useFocusTrap(
    state.isOpen
  ) as React.RefObject<HTMLDivElement>;

  // Inject animation CSS if not already present
  React.useEffect(() => {
    const styleId = "ri-click-expand-animations";
    if (!document.getElementById(styleId)) {
      const styleElement = document.createElement("style");
      styleElement.id = styleId;
      styleElement.textContent = ANIMATION_CSS;
      document.head.appendChild(styleElement);
    }
  }, []);

  // Animation styles
  const animationStyle = getAnimationStyle(modalAnimation, animationDuration);
  const backdropStyle = getBackdropStyle(backdrop, customBackdrop);
  const sizeStyle = getModalSizeStyle(modalSize);

  return (
    <>
      {/* Trigger Image */}
      <span
        className={`ri-click-expand ${className ?? ""}`}
        style={{
          display: "inline-block",
          cursor: "zoom-in",
          ...style,
        }}
        {...rest}
      >
        <img
          src={src}
          alt={alt}
          className={`ri-click-expand__image ${imgClassName ?? ""}`}
          onClick={handlers.open}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handlers.open();
            }
          }}
          loading={loading}
          decoding={decoding}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            transition: "transform 0.2s ease",
          }}
          tabIndex={0}
          role="button"
          aria-label={`Open ${alt} in fullscreen`}
        />
      </span>

      {/* Modal Portal */}
      {state.isOpen && (
        <div
          {...modalProps}
          ref={modalRef}
          className={`ri-modal ri-modal--${backdrop} ri-modal--${modalAnimation} ${
            modalClassName ?? ""
          }`}
          onClick={handlers.handleBackdropClick}
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            opacity: state.animationPhase === "exiting" ? 0 : 1,
            transition:
              state.animationPhase === "exiting"
                ? `opacity ${animationDuration * 0.8}ms ease-out`
                : `opacity ${animationDuration}ms ease-in`,
            ...backdropStyle,
          }}
        >
          {/* Modal Content */}
          <figure
            className="ri-modal__content"
            onClick={(e) => e.stopPropagation()}
            style={{
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
              "--ri-easing": "cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          >
            {/* Modal Image */}
            <img
              src={src}
              alt={alt}
              className="ri-modal__image"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
              loading="eager"
              decoding="sync"
            />

            {/* Caption */}
            {caption && (
              <figcaption
                className={`ri-modal__caption ${captionClassName ?? ""}`}
                style={{
                  color: "#fff",
                  padding: "16px 20px",
                  textAlign: "center",
                  fontSize: "14px",
                  lineHeight: 1.4,
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
              >
                {caption}
              </figcaption>
            )}
          </figure>

          {/* Close Button */}
          <button
            type="button"
            className="ri-modal__close"
            onClick={handlers.close}
            aria-label="Close modal"
            style={{
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
              zIndex: 1,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}

export default ClickExpand;
