"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useIsMobile } from "../../hooks/useIsMobile";

export function ProblemToFeaturesDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  const disableMotion = isMobile || shouldReduceMotion;

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
      className="relative w-full h-36 sm:h-48 -mt-20 sm:-mt-28 -mb-2 overflow-visible pointer-events-none select-none z-20 flex items-center justify-center"
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
        {/* Angled architectural transition cut that bleeds seamlessly from ProblemSection */}
        <polygon
          points="0,0 1440,0 1440,80 0,160"
          fill="#1c130d"
        />
      </svg>

      {/* Morphing Visual Continuity: Jagged Cracks Aligning into Orthogonal Circuit Bus */}
      {disableMotion ? (
        <svg
          className="absolute inset-0 w-full h-full overflow-visible opacity-80"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
        >
          {/* Chaotic input line bleeding directly out of ProblemSection */}
          <path
            d="M 660,-70 L 685,-20 L 650,25 L 720,70 L 720,180"
            fill="none"
            stroke="#C8A27A"
            strokeWidth="2"
            className="kintsugi-gold"
          />
          <path
            d="M 720,70 L 480,70 L 480,180"
            fill="none"
            stroke="#C8A27A"
            strokeWidth="1.25"
          />
          <path
            d="M 720,70 L 960,70 L 960,180"
            fill="none"
            stroke="#C8A27A"
            strokeWidth="1.25"
          />
          <circle cx="720" cy="70" r="4" fill="#F8F4EE" stroke="#C8A27A" strokeWidth="2" />
          <circle cx="480" cy="70" r="3" fill="#C8A27A" />
          <circle cx="960" cy="70" r="3" fill="#C8A27A" />
        </svg>
      ) : (
        <svg
          className="absolute inset-0 w-full h-full overflow-visible"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
        >
          {/* Chaotic input line bleeding directly out of ProblemSection and snapping into orthogonal bus */}
          <motion.path
            d="M 660,-70 L 685,-20 L 650,25 L 720,70 L 720,180"
            fill="none"
            stroke="#C8A27A"
            strokeWidth="2.5"
            style={{ pathLength: circuitLength }}
            className="kintsugi-gold"
          />

          {/* Bus branch 1 to left node */}
          <motion.path
            d="M 720,70 L 480,70 L 480,180"
            fill="none"
            stroke="#C8A27A"
            strokeWidth="1.5"
            style={{ pathLength: circuitLength }}
          />

          {/* Bus branch 2 to right node */}
          <motion.path
            d="M 720,70 L 960,70 L 960,180"
            fill="none"
            stroke="#C8A27A"
            strokeWidth="1.5"
            style={{ pathLength: circuitLength }}
          />

          {/* Circuit Intersection Pins / Nodes */}
          <motion.circle
            cx="720"
            cy="70"
            r="4"
            fill="#F8F4EE"
            stroke="#C8A27A"
            strokeWidth="2"
            style={{ scale: nodeScale, opacity: circuitGlow }}
          />
          <motion.circle
            cx="480"
            cy="70"
            r="3"
            fill="#C8A27A"
            style={{ scale: nodeScale, opacity: circuitGlow }}
          />
          <motion.circle
            cx="960"
            cy="70"
            r="3"
            fill="#C8A27A"
            style={{ scale: nodeScale, opacity: circuitGlow }}
          />
        </svg>
      )}
    </div>
  );
}
