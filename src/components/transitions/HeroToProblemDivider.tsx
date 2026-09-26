"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function HeroToProblemDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Morphing transforms: Compact sacred circle arc that morphs and splinters into jagged fractures
  // Scaled down so it stays strictly within the seam and never intrudes behind hero text
  const circleRadius = useTransform(scrollYProgress, [0, 0.5, 1], [110, 60, 20]);
  const fractureStretch = useTransform(scrollYProgress, [0.2, 0.8], [0, 90]);
  const crackOpacity = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.15, 0.85, 1]);
  const crackPathLength = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-32 sm:h-44 -my-2 overflow-visible pointer-events-none select-none z-20 flex items-center justify-center"
    >
      {/* Background Morphing Curve: Solid Brown (#2E2118) to Dark Obsidian (#1c130d) */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,0 L 1440,0 L 1440,180 Q 720,240 0,180 Z"
          fill="#1c130d"
        />
      </svg>

      {/* Morphing Visual Continuity: Compact Golden Arc Morphing into Splintered Cracks */}
      <svg
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
      >
        {/* Compact Golden Circle Arc - Stays cleanly below hero text */}
        <motion.circle
          cx="720"
          cy="20"
          r={circleRadius}
          fill="none"
          stroke="#C8A27A"
          strokeWidth="1.75"
          strokeDasharray="5 4"
          className="opacity-70"
        />

        {/* Dynamic Fracturing Lightning Paths that erupt from the circle */}
        <motion.path
          d="M 720,40 L 685,85 L 735,115 L 710,160 L 660,220"
          fill="none"
          stroke="#C8A27A"
          strokeWidth="2.5"
          style={{
            pathLength: crackPathLength,
            opacity: crackOpacity,
            translateY: fractureStretch,
          }}
          className="kintsugi-gold"
        />
        <motion.path
          d="M 720,40 L 765,80 L 745,125 L 805,170"
          fill="none"
          stroke="#C8A27A"
          strokeWidth="1.5"
          style={{
            pathLength: crackPathLength,
            opacity: crackOpacity,
          }}
        />
        <motion.path
          d="M 685,85 L 620,115 L 590,170"
          fill="none"
          stroke="#C8A27A"
          strokeWidth="1"
          strokeDasharray="4 4"
          style={{
            pathLength: crackPathLength,
            opacity: crackOpacity,
          }}
        />
      </svg>
    </div>
  );
}
