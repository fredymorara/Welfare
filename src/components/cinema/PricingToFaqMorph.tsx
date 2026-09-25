"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Scene 06 (Pricing) → Scene 07 (FAQ)
// Pure connecting lines expanding symmetrically from center outward like other transitions
export function PricingToFaqMorph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.35, 0.7, 0.95], [0.2, 1, 1, 0.2]);

  // Symmetrical horizontal spread from center (720) outward
  const xLeft1 = useTransform(scrollYProgress, [0.2, 0.7], [720, 160]);
  const xRight1 = useTransform(scrollYProgress, [0.2, 0.7], [720, 1280]);

  const xLeft2 = useTransform(scrollYProgress, [0.25, 0.75], [720, 260]);
  const xRight2 = useTransform(scrollYProgress, [0.25, 0.75], [720, 1180]);

  const centerPulse = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.6, 1.2, 0.8]);

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
        {/* Center Pivot Marker */}
        <motion.circle
          cx="720"
          cy="80"
          r="4"
          fill="#C8A27A"
          style={{ scale: centerPulse }}
        />

        {/* Primary Connecting Line: Expanding from center to both sides */}
        <motion.line
          x1={xLeft1}
          y1="80"
          x2={xRight1}
          y2="80"
          stroke="#C8A27A"
          strokeWidth="1.5"
          strokeOpacity="0.85"
        />

        {/* Secondary Upper Guide Line */}
        <motion.line
          x1={xLeft2}
          y1="60"
          x2={xRight2}
          y2="60"
          stroke="#6F4E37"
          strokeWidth="1"
          strokeOpacity="0.65"
        />

        {/* Secondary Lower Guide Line */}
        <motion.line
          x1={xLeft2}
          y1="100"
          x2={xRight2}
          y2="100"
          stroke="#6F4E37"
          strokeWidth="1"
          strokeOpacity="0.65"
        />

        {/* End ticks on primary line */}
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
      </motion.svg>
    </div>
  );
}
