"use client";

import { useSyncExternalStore } from "react";

/**
 * Hook to detect mobile viewports for performance optimization.
 * Uses useSyncExternalStore for tear-free, hydration-safe subscription to matchMedia without cascading renders.
 */
export function useIsMobile(breakpoint = 768): boolean {
  return useSyncExternalStore(
    (onStoreChange) => {
      if (typeof window === "undefined") return () => {};
      const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
      mql.addEventListener("change", onStoreChange);
      return () => mql.removeEventListener("change", onStoreChange);
    },
    () => {
      if (typeof window === "undefined") return false;
      return window.matchMedia(`(max-width: ${breakpoint - 1}px)`).matches;
    },
    () => false
  );
}
