"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Scene 08 (FAQ fragments) → Scene 09 (mobile: crystallize into phone outline)
export function FaqToMobileMorph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.35, 0.7, 1], [0, 1, 1, 0]);
  const arcsOpacity = useTransform(scrollYProgress, [0.1, 0.45], [0.6, 0]);
  const phoneOpacity = useTransform(scrollYProgress, [0.4, 0.75], [0, 0.7]);
  const phoneScale = useTransform(scrollYProgress, [0.4, 0.75], [0.7, 1]);

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
        {/* Dissolving FAQ question arcs */}
        <motion.g style={{ opacity: arcsOpacity }}>
          <path d="M 300 140 Q 300 60 400 100" stroke="#C8A27A" strokeWidth="1.5" fill="none" strokeDasharray="6 3" />
          <path d="M 580 140 Q 580 60 680 100" stroke="#6F4E37" strokeWidth="1" fill="none" strokeDasharray="4 4" />
          <path d="M 860 140 Q 860 60 960 100" stroke="#C8A27A" strokeWidth="1.5" fill="none" strokeDasharray="6 3" />
          <path d="M 1140 140 Q 1140 60 1240 100" stroke="#6F4E37" strokeWidth="1" fill="none" strokeDasharray="4 4" />
        </motion.g>
        {/* Phone outline crystallising at center */}
        <motion.g style={{ opacity: phoneOpacity, scale: phoneScale, transformOrigin: "720px 140px" }}>
          <rect x="665" y="40" width="110" height="200" rx="16" ry="16" fill="none" stroke="#C8A27A" strokeWidth="2" />
          <line x1="690" y1="58" x2="750" y2="58" stroke="#C8A27A" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="720" cy="222" r="6" fill="none" stroke="#6F4E37" strokeWidth="1.5" />
          {/* Glow lines emanating from phone */}
          <line x1="580" y1="140" x2="665" y2="140" stroke="#C8A27A" strokeWidth="0.8" strokeOpacity="0.4" />
          <line x1="775" y1="140" x2="860" y2="140" stroke="#C8A27A" strokeWidth="0.8" strokeOpacity="0.4" />
        </motion.g>
      </motion.svg>
    </div>
  );
}
