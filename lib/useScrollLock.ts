"use client";

import { useEffect } from "react";

/**
 * Custom hook to lock body scrolling and halt Lenis smooth scrolling when a modal or lightbox is active.
 * Also handles the standard Escape key press to dismiss the modal.
 */
export function useScrollLock(isLocked: boolean, onEscape?: () => void) {
  useEffect(() => {
    if (!isLocked) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("lenis-stopped");

    // Stop Lenis instance if available globally
    if (typeof window !== "undefined" && (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis) {
      (window as unknown as { __lenis: { stop: () => void; start: () => void } }).__lenis.stop();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onEscape) {
        e.preventDefault();
        onEscape();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.documentElement.classList.remove("lenis-stopped");

      if (typeof window !== "undefined" && (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis) {
        (window as unknown as { __lenis: { stop: () => void; start: () => void } }).__lenis.start();
      }

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLocked, onEscape]);
}
