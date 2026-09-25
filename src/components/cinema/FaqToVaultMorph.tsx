"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Scene 07 (FAQ: query brackets) → Scene 08 (Vault: concentric glowing gateway rings)
export function FaqToVaultMorph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 0.95], [0.2, 1, 1, 0.2]);
  const ringScale = useTransform(scrollYProgress, [0.2, 0.8], [0.5, 1.15]);
  const ringRotate = useTransform(scrollYProgress, [0.2, 0.8], [0, 45]);
  const bracketSpread = useTransform(scrollYProgress, [0.1, 0.6], [80, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-32 sm:h-44 -my-2 overflow-visible pointer-events-none select-none z-20 flex items-center justify-center bg-void"
    >
      <motion.svg
        style={{ opacity }}
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
      >
        {/* Converging query brackets */}
        <motion.path
          d="M 520,30 L 620,90 L 520,150"
          stroke="#C8A27A"
          strokeWidth="1.5"
          fill="none"
          strokeOpacity="0.4"
          style={{ x: bracketSpread }}
        />
        <motion.path
          d="M 920,30 L 820,90 L 920,150"
          stroke="#C8A27A"
          strokeWidth="1.5"
          fill="none"
          strokeOpacity="0.4"
          style={{ x: useTransform(bracketSpread, (v) => -v) }}
        />

        {/* Outer Concentric Gateway Ring */}
        <motion.circle
          cx="720"
          cy="90"
          r="65"
          stroke="#C8A27A"
          strokeWidth="1"
          fill="none"
          strokeDasharray="6 4"
          strokeOpacity="0.6"
          style={{ scale: ringScale, rotate: ringRotate }}
        />

        {/* Inner Solid Gateway Ring */}
        <motion.circle
          cx="720"
          cy="90"
          r="40"
          stroke="#6F4E37"
          strokeWidth="1.5"
          fill="none"
          strokeOpacity="0.7"
          style={{ scale: ringScale }}
        />

        {/* Core Gateway Center Key */}
        <motion.circle
          cx="720"
          cy="90"
          r="8"
          fill="#C8A27A"
          style={{ scale: ringScale }}
        />
      </motion.svg>
    </div>
  );
}
