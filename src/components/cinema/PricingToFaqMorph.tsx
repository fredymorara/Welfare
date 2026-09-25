"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Scene 07 (pricing blocks) → Scene 08 (FAQ: fragmenting into open question arcs)
export function PricingToFaqMorph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.35, 0.7, 1], [0, 1, 1, 0]);
  const blocksOpacity = useTransform(scrollYProgress, [0.1, 0.45], [0.6, 0]);
  const arcsOpacity = useTransform(scrollYProgress, [0.4, 0.75], [0, 0.65]);
  const arcsScale = useTransform(scrollYProgress, [0.4, 0.75], [0.85, 1]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[35vh] overflow-hidden bg-void flex items-center justify-center"
    >
      <motion.svg
        style={{ opacity }}
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 280"
        preserveAspectRatio="none"
      >
        {/* Dissolving tier blocks */}
        <motion.g style={{ opacity: blocksOpacity }}>
          <rect x="240" y="80" width="300" height="120" fill="none" stroke="#6F4E37" strokeWidth="1.5" />
          <rect x="570" y="60" width="300" height="160" fill="none" stroke="#C8A27A" strokeWidth="2" />
          <rect x="900" y="80" width="300" height="120" fill="none" stroke="#6F4E37" strokeWidth="1.5" />
        </motion.g>
        {/* Open question-mark arcs fragmenting out */}
        <motion.g style={{ opacity: arcsOpacity, scale: arcsScale, transformOrigin: "720px 140px" }}>
          <path d="M 300 140 Q 300 60 400 100" stroke="#C8A27A" strokeWidth="1.5" fill="none" strokeDasharray="6 3" />
          <path d="M 580 140 Q 580 60 680 100" stroke="#6F4E37" strokeWidth="1" fill="none" strokeDasharray="4 4" />
          <path d="M 860 140 Q 860 60 960 100" stroke="#C8A27A" strokeWidth="1.5" fill="none" strokeDasharray="6 3" />
          <path d="M 1140 140 Q 1140 60 1240 100" stroke="#6F4E37" strokeWidth="1" fill="none" strokeDasharray="4 4" />
        </motion.g>
      </motion.svg>
    </div>
  );
}
