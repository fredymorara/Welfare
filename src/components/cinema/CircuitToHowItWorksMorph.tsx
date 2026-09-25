"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Scene 03 (Engine circuits) → Scene 04 (How It Works: 4 process guide rails)
export function CircuitToHowItWorksMorph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 0.95], [0.2, 1, 1, 0.2]);
  const circuitLength = useTransform(scrollYProgress, [0.15, 0.6], [0, 1]);
  const railExtend = useTransform(scrollYProgress, [0.35, 0.85], [0, 1]);

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
        {/* Converging circuit lines from Engine */}
        <motion.path
          d="M 360,0 L 360,40 L 520,70 L 720,70"
          stroke="#C8A27A"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
          style={{ pathLength: circuitLength }}
        />
        <motion.path
          d="M 1080,0 L 1080,40 L 920,70 L 720,70"
          stroke="#C8A27A"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
          style={{ pathLength: circuitLength }}
        />

        {/* Central Quorum Core Node */}
        <motion.circle
          cx="720"
          cy="70"
          r="6"
          fill="#C8A27A"
          style={{ scale: circuitLength }}
        />

        {/* 4 Process Rails emerging from the core node for How-It-Works */}
        <motion.line
          x1="200"
          y1="105"
          x2="1240"
          y2="105"
          stroke="#6F4E37"
          strokeWidth="1"
          strokeOpacity="0.6"
          style={{ pathLength: railExtend }}
        />
        <motion.line
          x1="120"
          y1="130"
          x2="1320"
          y2="130"
          stroke="#C8A27A"
          strokeWidth="1.5"
          strokeOpacity="0.7"
          style={{ pathLength: railExtend }}
        />
        <motion.line
          x1="200"
          y1="155"
          x2="1240"
          y2="155"
          stroke="#6F4E37"
          strokeWidth="1"
          strokeOpacity="0.6"
          style={{ pathLength: railExtend }}
        />
        <motion.line
          x1="280"
          y1="175"
          x2="1160"
          y2="175"
          stroke="#7B9B7A"
          strokeWidth="1"
          strokeOpacity="0.5"
          style={{ pathLength: railExtend }}
        />
      </motion.svg>
    </div>
  );
}
