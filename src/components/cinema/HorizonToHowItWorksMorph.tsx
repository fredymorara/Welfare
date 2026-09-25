"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Scene 05 (vault rings close) → Scene 06 (how-it-works: 4 ascending horizontal rails)
export function HorizonToHowItWorksMorph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 1], [0, 1, 1, 0]);
  const ringScale = useTransform(scrollYProgress, [0.1, 0.5], [1.1, 0.5]);
  const railY1 = useTransform(scrollYProgress, [0.3, 0.7], [40, 0]);
  const railY2 = useTransform(scrollYProgress, [0.35, 0.75], [40, 0]);
  const railY3 = useTransform(scrollYProgress, [0.4, 0.8], [40, 0]);
  const railY4 = useTransform(scrollYProgress, [0.45, 0.85], [40, 0]);

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
        {/* Dissolving vault ring */}
        <motion.circle
          style={{ scale: ringScale }}
          cx="720" cy="140" r="90"
          stroke="#C8A27A"
          strokeWidth="1"
          fill="none"
          strokeDasharray="6 4"
          strokeOpacity="0.3"
        />
        {/* 4 ascending rails emerging */}
        <motion.line style={{ y: railY1 }} x1="0" y1="80" x2="1440" y2="80" stroke="#6F4E37" strokeWidth="1" strokeOpacity="0.6" />
        <motion.line style={{ y: railY2 }} x1="0" y1="120" x2="1440" y2="120" stroke="#C8A27A" strokeWidth="1.5" strokeOpacity="0.5" />
        <motion.line style={{ y: railY3 }} x1="0" y1="160" x2="1440" y2="160" stroke="#6F4E37" strokeWidth="1" strokeOpacity="0.6" />
        <motion.line style={{ y: railY4 }} x1="0" y1="200" x2="1440" y2="200" stroke="#C8A27A" strokeWidth="1.5" strokeOpacity="0.5" />
      </motion.svg>
    </div>
  );
}
