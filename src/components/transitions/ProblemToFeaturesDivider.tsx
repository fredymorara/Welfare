"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function ProblemToFeaturesDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Morphing transforms: Jagged cracks straighten into 90-degree technical circuit traces
  const circuitLength = useTransform(scrollYProgress, [0.15, 0.75], [0, 1]);
  const circuitGlow = useTransform(scrollYProgress, [0.3, 0.6, 0.9], [0.2, 0.85, 0.3]);
  const nodeScale = useTransform(scrollYProgress, [0.4, 0.8], [0.4, 1]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-32 sm:h-44 -my-2 overflow-visible pointer-events-none select-none z-20 flex items-center justify-center"
    >
      {/* Background Morphing Curve: Dark Obsidian (#1c130d) to Solid Brown (#2E2118) */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,0 L 1440,0 L 1440,180 L 0,180 Z"
          fill="#2E2118"
        />
        {/* Angled architectural transition cut */}
        <polygon
          points="0,0 1440,0 1440,70 0,140"
          fill="#1c130d"
          opacity="0.9"
        />
      </svg>

      {/* Morphing Visual Continuity: Jagged Cracks Aligning into Orthogonal Circuit Bus */}
      <svg
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
      >
        {/* Chaotic input line from above that snaps into 90° right angles */}
        <motion.path
          d="M 660,-20 L 685,30 L 650,60 L 720,90 L 720,190"
          fill="none"
          stroke="#C8A27A"
          strokeWidth="2"
          style={{ pathLength: circuitLength }}
        />

        {/* Bus branch 1 to left node */}
        <motion.path
          d="M 720,90 L 480,90 L 480,190"
          fill="none"
          stroke="#C8A27A"
          strokeWidth="1.5"
          style={{ pathLength: circuitLength }}
        />

        {/* Bus branch 2 to right node */}
        <motion.path
          d="M 720,90 L 960,90 L 960,190"
          fill="none"
          stroke="#C8A27A"
          strokeWidth="1.5"
          style={{ pathLength: circuitLength }}
        />

        {/* Circuit Intersection Pins / Nodes */}
        <motion.circle
          cx="720"
          cy="90"
          r="4"
          fill="#F8F4EE"
          stroke="#C8A27A"
          strokeWidth="2"
          style={{ scale: nodeScale, opacity: circuitGlow }}
        />
        <motion.circle
          cx="480"
          cy="90"
          r="3"
          fill="#C8A27A"
          style={{ scale: nodeScale, opacity: circuitGlow }}
        />
        <motion.circle
          cx="960"
          cy="90"
          r="3"
          fill="#C8A27A"
          style={{ scale: nodeScale, opacity: circuitGlow }}
        />
      </svg>
    </div>
  );
}
