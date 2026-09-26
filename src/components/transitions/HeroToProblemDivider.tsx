"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useIsMobile } from "../../hooks/useIsMobile";

export function HeroToProblemDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  const disableMotion = isMobile || shouldReduceMotion;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Rotation while shrinking: centered at (720, 20) with zero horizontal shift
  const circleRadius = useTransform(scrollYProgress, [0, 0.5, 1], [110, 60, 20]);
  const circleRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const circleOpacity = useTransform(scrollYProgress, [0, 0.5, 0.95], [0.8, 0.6, 0]);

  // Dynamic Kintsugi fracture expansion & downward stretch that bleeds into the next section
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

      {/* On mobile: clean, static golden seam with zero scroll lag */}
      {disableMotion ? (
        <svg
          className="absolute inset-0 w-full h-full overflow-visible opacity-60"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
        >
          <circle
            cx="720"
            cy="20"
            r="45"
            fill="none"
            stroke="#C8A27A"
            strokeWidth="1.5"
            strokeDasharray="5 4"
            className="opacity-70"
          />
          <path
            d="M 720,40 L 685,85 L 735,115 L 710,160 L 660,220"
            fill="none"
            stroke="#C8A27A"
            strokeWidth="2"
            className="kintsugi-gold"
          />
        </svg>
      ) : (
        /* On desktop: Dotted circle rotating while shrinking, and glowing kintsugi fracture bleeding down */
        <motion.svg
          className="absolute inset-0 w-full h-full overflow-visible"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
        >
          {/* Compact Golden Dotted Circle Arc - Rotates around center while shrinking */}
          <g transform="translate(720, 20)">
            <motion.circle
              cx="0"
              cy="0"
              r={circleRadius}
              fill="none"
              stroke="#C8A27A"
              strokeWidth="1.75"
              strokeDasharray="5 4"
              style={{
                rotate: circleRotate,
                opacity: circleOpacity,
              }}
              className="opacity-75"
            />
          </g>

          {/* Dynamic Fracturing Lightning Paths that erupt and stretch down, bleeding into Problem section */}
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
            className="kintsugi-gold"
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
        </motion.svg>
      )}
    </div>
  );
}
