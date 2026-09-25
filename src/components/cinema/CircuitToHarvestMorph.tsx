"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function CircuitToHarvestMorph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Morphing transforms: Orthogonal circuits bloom outward into radiant curved arcs
  const bloomScale = useTransform(scrollYProgress, [0.2, 0.8], [0.6, 1.25]);
  const bloomOpacity = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.2, 0.9, 0.3]);
  const arcLength = useTransform(scrollYProgress, [0.2, 0.75], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-32 sm:h-44 -my-2 overflow-visible pointer-events-none select-none z-20 flex items-center justify-center"
    >
      {/* Background Morphing Curve: Solid Brown (#2E2118) to Dark Harvest (#160e0a) */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,0 L 1440,0 L 1440,180 Q 720,120 0,180 Z"
          fill="#160e0a"
        />
      </svg>

      {/* Morphing Visual Continuity: Circuits Blossoming into Sunburst Harvest Mandala */}
      <svg
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
      >
        {/* Converging circuit feed lines */}
        <motion.line
          x1="480"
          y1="-20"
          x2="650"
          y2="70"
          stroke="#C8A27A"
          strokeWidth="1.5"
          style={{ pathLength: arcLength }}
        />
        <motion.line
          x1="960"
          y1="-20"
          x2="790"
          y2="70"
          stroke="#C8A27A"
          strokeWidth="1.5"
          style={{ pathLength: arcLength }}
        />
        <motion.line
          x1="720"
          y1="-20"
          x2="720"
          y2="70"
          stroke="#C8A27A"
          strokeWidth="2"
          style={{ pathLength: arcLength }}
        />

        {/* Blooming Concentric Harvest Arcs */}
        <motion.path
          d="M 520,140 Q 720,40 920,140"
          fill="none"
          stroke="#C8A27A"
          strokeWidth="2"
          style={{
            scale: bloomScale,
            opacity: bloomOpacity,
            pathLength: arcLength,
          }}
        />
        <motion.path
          d="M 440,165 Q 720,20 1000,165"
          fill="none"
          stroke="#7B9B7A"
          strokeWidth="1.5"
          strokeDasharray="8 6"
          style={{
            scale: bloomScale,
            opacity: bloomOpacity,
            pathLength: arcLength,
          }}
        />
        <motion.path
          d="M 580,115 Q 720,65 860,115"
          fill="none"
          stroke="#C8A27A"
          strokeWidth="1"
          style={{
            scale: bloomScale,
            opacity: bloomOpacity,
          }}
        />
      </svg>
    </div>
  );
}
