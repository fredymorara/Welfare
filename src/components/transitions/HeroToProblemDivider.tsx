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

  // Hardware-accelerated GPU transforms: scale & opacity instead of mutating SVG 'r'
  const circleScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 0.8, 0.35]);
  const circleOpacity = useTransform(scrollYProgress, [0, 0.5, 0.9], [0.8, 0.5, 0]);
  const crackOpacity = useTransform(scrollYProgress, [0.15, 0.45, 0.85], [0.2, 0.9, 0.3]);
  const crackPathLength = useTransform(scrollYProgress, [0.2, 0.65], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-24 sm:h-36 lg:h-44 -my-2 overflow-visible pointer-events-none select-none z-20 flex items-center justify-center"
      style={{ contain: "paint" }}
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
          className="absolute inset-0 w-full h-full overflow-visible opacity-50"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,180 Q 720,240 1440,180"
            fill="none"
            stroke="#C8A27A"
            strokeWidth="1.25"
            strokeDasharray="6 6"
          />
        </svg>
      ) : (
        /* On desktop: GPU-accelerated golden arc morphing into technical fissures */
        <motion.svg
          style={{ opacity: crackOpacity }}
          className="absolute inset-0 w-full h-full overflow-visible will-change-transform"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
        >
          {/* Golden Circle Arc - Uses hardware scale & opacity */}
          <motion.circle
            cx="720"
            cy="20"
            r="65"
            fill="none"
            stroke="#C8A27A"
            strokeWidth="1.75"
            strokeDasharray="5 4"
            style={{
              scale: circleScale,
              opacity: circleOpacity,
              originX: "720px",
              originY: "20px",
            }}
          />

          {/* Underlay glow path: replicates kintsugi radiance with ZERO filter/drop-shadow overhead */}
          <motion.path
            d="M 720,40 L 685,85 L 735,115 L 710,160 L 660,220"
            fill="none"
            stroke="#C8A27A"
            strokeWidth="5"
            strokeOpacity="0.25"
            style={{ pathLength: crackPathLength }}
          />
          {/* Sharp core path */}
          <motion.path
            d="M 720,40 L 685,85 L 735,115 L 710,160 L 660,220"
            fill="none"
            stroke="#C8A27A"
            strokeWidth="2"
            style={{ pathLength: crackPathLength }}
          />

          <motion.path
            d="M 720,40 L 765,80 L 745,125 L 805,170"
            fill="none"
            stroke="#C8A27A"
            strokeWidth="1.5"
            strokeOpacity="0.85"
            style={{ pathLength: crackPathLength }}
          />
          <motion.path
            d="M 685,85 L 620,115 L 590,170"
            fill="none"
            stroke="#C8A27A"
            strokeWidth="1"
            strokeDasharray="4 4"
            strokeOpacity="0.6"
            style={{ pathLength: crackPathLength }}
          />
        </motion.svg>
      )}
    </div>
  );
}
