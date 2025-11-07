// packages/reactive-image/src/variants/ClickExpand/hooks.ts
import { useState, useEffect, useCallback, useRef } from "react";
import type {
  ClickExpandConfig,
  ClickExpandState,
  ClickExpandHandlers,
  UseClickExpandReturn,
} from "./types";

export function useClickExpand(
  config: ClickExpandConfig = {}
): UseClickExpandReturn {
  const {
    closeOnEsc = true,
    closeOnBackdrop = true,
    enableKeyboard = true,
    preventScroll = true,
    onOpen,
    onClose,
    onAnimationStart,
    onAnimationEnd,
  } = config;

  const [state, setState] = useState<ClickExpandState>({
    isOpen: false,
    isAnimating: false,
    animationPhase: "exited",
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const originalOverflowRef = useRef<string | null>(null);

  // Handle body scroll prevention
  useEffect(() => {
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

  // Handle keyboard events
  useEffect(() => {
    if (!state.isOpen || !enableKeyboard) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          if (closeOnEsc) {
            event.preventDefault();
            handlers.close();
          }
          break;
        case "Tab":
          // Trap focus within modal
          event.preventDefault();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [state.isOpen, enableKeyboard, closeOnEsc]);

  // Animation handlers
  const startAnimation = useCallback(
    (phase: "entering" | "exiting") => {
      setState((prev) => ({
        ...prev,
        isAnimating: true,
        animationPhase: phase,
      }));

      onAnimationStart?.();

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set timeout based on animation phase
      const duration = phase === "entering" ? 300 : 200;
      timeoutRef.current = setTimeout(() => {
        setState((prev) => ({
          ...prev,
          isAnimating: false,
          animationPhase: phase === "entering" ? "entered" : "exited",
        }));
        onAnimationEnd?.();
      }, duration);
    },
    [onAnimationStart, onAnimationEnd]
  );

  const handlers: ClickExpandHandlers = {
    open: useCallback(() => {
      if (state.isOpen || state.isAnimating) return;

      setState((prev) => ({ ...prev, isOpen: true }));
      startAnimation("entering");
      onOpen?.();
    }, [state.isOpen, state.isAnimating, startAnimation, onOpen]),

    close: useCallback(() => {
      if (!state.isOpen || state.isAnimating) return;

      startAnimation("exiting");

      // Close after animation
      setTimeout(() => {
        setState((prev) => ({ ...prev, isOpen: false }));
        onClose?.();
      }, 200);
    }, [state.isOpen, state.isAnimating, startAnimation, onClose]),

    toggle: useCallback(() => {
      if (state.isOpen) {
        handlers.close();
      } else {
        handlers.open();
      }
    }, [state.isOpen]),

    handleKeyDown: useCallback(
      (event: KeyboardEvent) => {
        if (event.key === "Escape" && closeOnEsc) {
          handlers.close();
        }
      },
      [closeOnEsc]
    ),

    handleBackdropClick: useCallback(() => {
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
      onClose,
    ]),
  };

  // Cleanup on unmount
  useEffect(() => {
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
      tabIndex: -1,
    },
  };
}

export function useKeyboardNavigation(isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          event.preventDefault();
          onClose();
          break;
        case "Tab":
          // Simple focus trap - prevent tabbing outside modal
          event.preventDefault();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);
}

export function useScrollLock(isOpen: boolean) {
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);
}

export function useFocusTrap(isOpen: boolean) {
  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTabKey = (event: KeyboardEvent) => {
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

    // Focus first element
    firstFocusable.focus();

    modal.addEventListener("keydown", handleTabKey);
    return () => modal.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  return modalRef;
}
