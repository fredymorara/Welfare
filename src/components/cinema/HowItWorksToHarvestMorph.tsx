"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Scene 04 (How It Works: 4 rails) → Scene 05 (Yield / Harvest: golden radiant sunburst arcs)
export function HowItWorksToHarvestMorph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 0.95], [0.2, 1, 1, 0.2]);
  const curveMorph = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  const haloScale = useTransform(scrollYProgress, [0.2, 0.8], [0.6, 1.2]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-32 sm:h-44 -my-2 overflow-visible pointer-events-none select-none z-20 flex items-center justify-center"
    >
      {/* Background fill gradient blend into harvest dark tone */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,0 L 1440,0 L 1440,180 Q 720,120 0,180 Z"
          fill="#160e0a"
          fillOpacity="0.8"
        />
      </svg>

      <motion.svg
        style={{ opacity }}
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
      >
        {/* Horizontal rails curving outward into harvest arcs */}
        <motion.path
          d="M 120,40 Q 720,130 1320,40"
          stroke="#C8A27A"
          strokeWidth="1.5"
          fill="none"
          strokeOpacity="0.5"
          style={{ pathLength: curveMorph }}
        />
        <motion.path
          d="M 240,70 Q 720,150 1200,70"
          stroke="#6F4E37"
          strokeWidth="1"
          fill="none"
          strokeOpacity="0.6"
          style={{ pathLength: curveMorph }}
        />
        <motion.path
          d="M 360,100 Q 720,170 1080,100"
          stroke="#7B9B7A"
          strokeWidth="1.5"
          fill="none"
          strokeOpacity="0.4"
          style={{ pathLength: curveMorph }}
        />

        {/* Central Sunburst Bloom */}
        <motion.circle
          cx="720"
          cy="120"
          r="45"
          stroke="#C8A27A"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 4"
          strokeOpacity="0.5"
          style={{ scale: haloScale }}
        />
        <motion.circle
          cx="720"
          cy="120"
          r="20"
          fill="url(#harvestRadial)"
          style={{ scale: haloScale }}
        />

        <defs>
          <radialGradient id="harvestRadial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C8A27A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6F4E37" stopOpacity="0" />
          </radialGradient>
        </defs>
      </motion.svg>
    </div>
  );
}
