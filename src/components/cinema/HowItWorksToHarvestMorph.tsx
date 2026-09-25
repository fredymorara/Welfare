"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Scene 04 (How It Works) → Scene 05 (Yield)
// Pure lines expanding symmetrically from center outward without circles or sun glow
export function HowItWorksToHarvestMorph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.35, 0.7, 0.95], [0.2, 1, 1, 0.2]);

  // Symmetrical horizontal expansion from center (720) outward
  const xLeftCenter = useTransform(scrollYProgress, [0.2, 0.7], [720, 140]);
  const xRightCenter = useTransform(scrollYProgress, [0.2, 0.7], [720, 1300]);

  const xLeftUpper = useTransform(scrollYProgress, [0.25, 0.75], [720, 240]);
  const xRightUpper = useTransform(scrollYProgress, [0.25, 0.75], [720, 1200]);

  const xLeftLower = useTransform(scrollYProgress, [0.3, 0.8], [720, 320]);
  const xRightLower = useTransform(scrollYProgress, [0.3, 0.8], [720, 1120]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-28 sm:h-36 -my-2 overflow-visible pointer-events-none select-none z-20 flex items-center justify-center bg-void"
    >
      <motion.svg
        style={{ opacity }}
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
      >
        {/* Center Main Line: expanding from center (720) outward to both left and right */}
        <motion.line
          x1={xLeftCenter}
          y1="80"
          x2={xRightCenter}
          y2="80"
          stroke="#C8A27A"
          strokeWidth="1.5"
          strokeOpacity="0.85"
        />

        {/* Upper accent line: expanding from center outward */}
        <motion.line
          x1={xLeftUpper}
          y1="55"
          x2={xRightUpper}
          y2="55"
          stroke="#6F4E37"
          strokeWidth="1"
          strokeOpacity="0.65"
        />

        {/* Lower accent line: expanding from center outward */}
        <motion.line
          x1={xLeftLower}
          y1="105"
          x2={xRightLower}
          y2="105"
          stroke="#7B9B7A"
          strokeWidth="1"
          strokeOpacity="0.55"
        />

        {/* Subtle center marker tick */}
        <line
          x1="720"
          y1="72"
          x2="720"
          y2="88"
          stroke="#C8A27A"
          strokeWidth="1.5"
          strokeOpacity="0.7"
        />

        {/* Expanding end ticks */}
        <motion.line
          x1={xLeftCenter}
          y1="72"
          x2={xLeftCenter}
          y2="88"
          stroke="#C8A27A"
          strokeWidth="1.2"
          strokeOpacity="0.7"
        />
        <motion.line
          x1={xRightCenter}
          y1="72"
          x2={xRightCenter}
          y2="88"
          stroke="#C8A27A"
          strokeWidth="1.2"
          strokeOpacity="0.7"
        />
      </motion.svg>
    </div>
  );
}
