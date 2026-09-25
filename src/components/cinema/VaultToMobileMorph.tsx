"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Scene 08 (Vault: concentric rings) → Scene 09 (Mobile App: phone silhouette and mobile signal beams)
export function VaultToMobileMorph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 0.95], [0.2, 1, 1, 0.2]);
  const ringScale = useTransform(scrollYProgress, [0.15, 0.6], [1.1, 0.4]);
  const phoneScale = useTransform(scrollYProgress, [0.35, 0.85], [0.6, 1]);
  const phoneY = useTransform(scrollYProgress, [0.35, 0.85], [30, 0]);

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
        {/* Dissolving gateway circle */}
        <motion.circle
          cx="720"
          cy="90"
          r="80"
          stroke="#C8A27A"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 4"
          strokeOpacity="0.4"
          style={{ scale: ringScale }}
        />

        {/* Emerging phone outline */}
        <motion.g style={{ scale: phoneScale, y: phoneY }}>
          {/* Outer phone rounded bezel */}
          <rect
            x="670"
            y="30"
            width="100"
            height="130"
            rx="18"
            fill="none"
            stroke="#C8A27A"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
          {/* Phone dynamic island pill */}
          <rect
            x="705"
            y="42"
            width="30"
            height="5"
            rx="2.5"
            fill="#C8A27A"
            fillOpacity="0.9"
          />
          {/* Signal wave arcs radiating left and right */}
          <path
            d="M 640,75 A 25 25 0 0 0 640,115"
            stroke="#7B9B7A"
            strokeWidth="1.5"
            fill="none"
            strokeOpacity="0.6"
          />
          <path
            d="M 800,75 A 25 25 0 0 1 800,115"
            stroke="#7B9B7A"
            strokeWidth="1.5"
            fill="none"
            strokeOpacity="0.6"
          />
        </motion.g>
      </motion.svg>
    </div>
  );
}
