"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useIsMobile } from "../../hooks/useIsMobile";

// Connecting lines expand symmetrically from center outward to left and right
export function FeaturesToHowItWorksDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  const disableMotion = isMobile || shouldReduceMotion;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.35, 0.7, 0.95], [0.2, 1, 1, 0.2]);

  // Symmetrical horizontal spread from center (720) outward to both sides
  const xLeft1 = useTransform(scrollYProgress, [0.2, 0.7], [720, 160]);
  const xRight1 = useTransform(scrollYProgress, [0.2, 0.7], [720, 1280]);

  const xLeft2 = useTransform(scrollYProgress, [0.25, 0.75], [720, 260]);
  const xRight2 = useTransform(scrollYProgress, [0.25, 0.75], [720, 1180]);

  const xLeft3 = useTransform(scrollYProgress, [0.3, 0.8], [720, 360]);
  const xRight3 = useTransform(scrollYProgress, [0.3, 0.8], [720, 1080]);

  // Center node pulse
  const centerScale = useTransform(scrollYProgress, [0.15, 0.5, 0.85], [0.5, 1.2, 0.8]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-28 sm:h-36 -my-2 overflow-visible pointer-events-none select-none z-20 flex items-center justify-center bg-void"
      style={{ contain: "paint" }}
    >
      {disableMotion ? (
        <svg
          className="absolute inset-0 w-full h-full overflow-visible opacity-50"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
        >
          <circle cx="720" cy="80" r="4" fill="#C8A27A" />
          <line x1="200" y1="80" x2="1240" y2="80" stroke="#C8A27A" strokeWidth="1.25" strokeOpacity="0.8" />
          <line x1="320" y1="55" x2="1120" y2="55" stroke="#6F4E37" strokeWidth="1" strokeOpacity="0.6" />
        </svg>
      ) : (
        <motion.svg
          style={{ opacity }}
          className="absolute inset-0 w-full h-full overflow-visible"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
        >
        {/* Central Origin Node */}
        <motion.circle
          cx="720"
          cy="80"
          r="4"
          fill="#C8A27A"
          style={{ scale: centerScale }}
        />
        <motion.circle
          cx="720"
          cy="80"
          r="12"
          fill="none"
          stroke="#C8A27A"
          strokeWidth="1"
          strokeOpacity="0.4"
          style={{ scale: centerScale }}
        />

        {/* Primary rail: expands symmetrically from center (720) left & right */}
        <motion.line
          x1={xLeft1}
          y1="80"
          x2={xRight1}
          y2="80"
          stroke="#C8A27A"
          strokeWidth="1.5"
          strokeOpacity="0.85"
        />

        {/* Upper secondary guide rail: expands symmetrically from center */}
        <motion.line
          x1={xLeft2}
          y1="55"
          x2={xRight2}
          y2="55"
          stroke="#6F4E37"
          strokeWidth="1"
          strokeOpacity="0.65"
        />

        {/* Lower tertiary guide rail: expands symmetrically from center */}
        <motion.line
          x1={xLeft3}
          y1="105"
          x2={xRight3}
          y2="105"
          stroke="#7B9B7A"
          strokeWidth="1"
          strokeOpacity="0.55"
        />

        {/* Subtle vertical tick marks at expanding ends */}
        <motion.line
          x1={xLeft1}
          y1="72"
          x2={xLeft1}
          y2="88"
          stroke="#C8A27A"
          strokeWidth="1.2"
          strokeOpacity="0.7"
        />
        <motion.line
          x1={xRight1}
          y1="72"
          x2={xRight1}
          y2="88"
          stroke="#C8A27A"
          strokeWidth="1.2"
          strokeOpacity="0.7"
        />

        <motion.line
          x1={xLeft2}
          y1="50"
          x2={xLeft2}
          y2="60"
          stroke="#6F4E37"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
        <motion.line
          x1={xRight2}
          y1="50"
          x2={xRight2}
          y2="60"
          stroke="#6F4E37"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
      </motion.svg>
      )}
    </div>
  );
}
