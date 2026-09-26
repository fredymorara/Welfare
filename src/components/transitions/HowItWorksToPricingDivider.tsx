"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function HowItWorksToPricingDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.35, 0.7, 1], [0, 1, 1, 0]);
  const railsOpacity = useTransform(scrollYProgress, [0.1, 0.45], [0.6, 0]);
  const blocksOpacity = useTransform(scrollYProgress, [0.4, 0.75], [0, 0.7]);
  const blocksY = useTransform(scrollYProgress, [0.4, 0.75], [30, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[35vh] overflow-hidden bg-[#1c130d] flex items-center justify-center"
    >
      <motion.svg
        style={{ opacity }}
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 280"
        preserveAspectRatio="none"
      >
        {/* Dissolving horizontal rails */}
        <motion.g style={{ opacity: railsOpacity }}>
          <line x1="0" y1="90" x2="1440" y2="90" stroke="#6F4E37" strokeWidth="1" />
          <line x1="0" y1="130" x2="1440" y2="130" stroke="#C8A27A" strokeWidth="1.5" />
          <line x1="0" y1="170" x2="1440" y2="170" stroke="#6F4E37" strokeWidth="1" />
          <line x1="0" y1="210" x2="1440" y2="210" stroke="#C8A27A" strokeWidth="1.5" />
        </motion.g>
        {/* 3 tier block outlines crystallising */}
        <motion.g style={{ opacity: blocksOpacity, y: blocksY }}>
          <rect x="240" y="80" width="300" height="120" fill="none" stroke="#6F4E37" strokeWidth="1.5" />
          <rect x="570" y="60" width="300" height="160" fill="none" stroke="#C8A27A" strokeWidth="2" />
          <rect x="900" y="80" width="300" height="120" fill="none" stroke="#6F4E37" strokeWidth="1.5" />
        </motion.g>
      </motion.svg>
    </div>
  );
}
