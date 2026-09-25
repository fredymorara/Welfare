"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Scene 05 (Yield / Harvest arcs) → Scene 06 (Pricing: 3 vertical tiered protocol pillars)
export function HarvestToPricingMorph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 0.95], [0.2, 1, 1, 0.2]);
  const pillarY1 = useTransform(scrollYProgress, [0.2, 0.7], [30, 0]);
  const pillarY2 = useTransform(scrollYProgress, [0.3, 0.8], [40, 0]);
  const pillarY3 = useTransform(scrollYProgress, [0.25, 0.75], [30, 0]);
  const arcFade = useTransform(scrollYProgress, [0.1, 0.5], [1, 0.3]);

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
        {/* Dissolving harvest arcs */}
        <motion.path
          d="M 360,20 Q 720,100 1080,20"
          stroke="#C8A27A"
          strokeWidth="1"
          fill="none"
          strokeDasharray="6 4"
          style={{ opacity: arcFade }}
        />

        {/* 3 Emerging vertical pillar guides for the 3 pricing tiers */}
        {/* Tier 1 (Hustle / Starter) */}
        <motion.line
          style={{ y: pillarY1 }}
          x1="360"
          y1="50"
          x2="360"
          y2="180"
          stroke="#6F4E37"
          strokeWidth="1"
          strokeOpacity="0.7"
        />
        <motion.circle cx="360" cy="50" r="3" fill="#6F4E37" style={{ y: pillarY1 }} />

        {/* Tier 2 (Chama / Standard - Featured center pillar) */}
        <motion.line
          style={{ y: pillarY2 }}
          x1="720"
          y1="25"
          x2="720"
          y2="180"
          stroke="#C8A27A"
          strokeWidth="1.5"
          strokeOpacity="0.8"
        />
        <motion.circle cx="720" cy="25" r="4" fill="#C8A27A" style={{ y: pillarY2 }} />

        {/* Tier 3 (Syndicate / Premium) */}
        <motion.line
          style={{ y: pillarY3 }}
          x1="1080"
          y1="50"
          x2="1080"
          y2="180"
          stroke="#7B9B7A"
          strokeWidth="1"
          strokeOpacity="0.7"
        />
        <motion.circle cx="1080" cy="50" r="3" fill="#7B9B7A" style={{ y: pillarY3 }} />
      </motion.svg>
    </div>
  );
}
