"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function HarvestToVaultMorph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Morphing transforms: Curved harvest arcs close into concentric cryptographic vault rings
  const ringScale = useTransform(scrollYProgress, [0.2, 0.8], [0.7, 1.15]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const vaultGlow = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.2, 0.8, 0.3]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-32 sm:h-44 -my-2 overflow-visible pointer-events-none select-none z-20 flex items-center justify-center"
    >
      {/* Background Morphing Curve: Dark Harvest (#160e0a) to Solid Brown (#2E2118) */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,0 L 1440,0 L 1440,180 L 0,180 Z"
          fill="#2E2118"
        />
        {/* Soft inverse curve blending from dark harvest into solid brown */}
        <path
          d="M 0,0 Q 720,120 1440,0 L 1440,0 L 0,0 Z"
          fill="#160e0a"
          opacity="0.9"
        />
      </svg>

      {/* Morphing Visual Continuity: Arcs Closing into Concentric Vault Dial */}
      <svg
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
      >
        {/* Outer Vault Ring Morph */}
        <motion.circle
          cx="720"
          cy="90"
          r="70"
          fill="none"
          stroke="#C8A27A"
          strokeWidth="1.5"
          strokeDasharray="12 6"
          style={{
            scale: ringScale,
            rotate: ringRotate,
            opacity: vaultGlow,
          }}
        />

        {/* Inner Solid Ring */}
        <motion.circle
          cx="720"
          cy="90"
          r="48"
          fill="none"
          stroke="#C8A27A"
          strokeWidth="2"
          style={{
            scale: ringScale,
            opacity: vaultGlow,
          }}
        />

        {/* Center Key Lock Diamond */}
        <motion.rect
          x="714"
          y="84"
          width="12"
          height="12"
          fill="#F8F4EE"
          className="rotate-45"
          style={{
            scale: ringScale,
            opacity: vaultGlow,
          }}
        />
      </svg>
    </div>
  );
}
