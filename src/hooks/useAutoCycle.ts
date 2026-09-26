"use client";

import { useState, useEffect, useCallback, type RefObject } from "react";

interface UseAutoCycleOptions {
  containerRef: RefObject<HTMLElement | null>;
  totalItems: number;
  defaultInterval?: number;
  overrideInterval?: number;
  initialIndex?: number;
}

/**
 * Reusable hook to auto-advance steps/features with in-view detection
 * and manual selection override loop.
 *
 * - Auto-switches every 5s by default ONLY when viewing the section.
 * - When a user explicitly selects a step, dwell time switches to 10s
 *   for that step and subsequent steps until a full loop finishes.
 * - After a full loop finishes, returns to the 5s default interval.
 */
export function useAutoCycle({
  containerRef,
  totalItems,
  defaultInterval = 5000,
  overrideInterval = 10000,
  initialIndex = 0,
}: UseAutoCycleOptions) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [remainingOverrideSteps, setRemainingOverrideSteps] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // In-view observer: only activate timers when section is in active view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [containerRef]);

  // Tab visibility: pause when user switches browser tab
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsInView(false);
      } else if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight * 0.9 && rect.bottom > window.innerHeight * 0.1;
        setIsInView(inViewport);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [containerRef]);

  // Calculate current active interval
  const isOverrideActive = remainingOverrideSteps > 0;
  const currentInterval = isOverrideActive ? overrideInterval : defaultInterval;

  // Manual selection handler
  const handleSelect = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      // Trigger a 10s cycle for a full loop of totalItems
      setRemainingOverrideSteps(totalItems);
      setCycleKey((k) => k + 1);
    },
    [totalItems]
  );

  // Auto-switch timer effect
  useEffect(() => {
    if (!isInView || totalItems <= 1) return;

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
      setRemainingOverrideSteps((prev) => (prev > 0 ? prev - 1 : 0));
      setCycleKey((k) => k + 1);
    }, currentInterval);

    return () => clearTimeout(timer);
  }, [isInView, totalItems, currentInterval, cycleKey]);

  return {
    currentIndex,
    setCurrentIndex,
    handleSelect,
    isInView,
    isOverrideActive,
    currentInterval,
    cycleKey,
  };
}
