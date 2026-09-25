"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface TransitionSeamProps {
  fromChapter: string;
  toChapter: string;
  descriptor: string;
  coordinate?: string;
}

export function SceneTransitionSeam({
  fromChapter,
  toChapter,
  descriptor,
  coordinate = "LAT -1.286389 // LON 36.817223",
}: TransitionSeamProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax beam expansions
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5, 0.9], ["0%", "100%", "15%"]);
  const flareScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.3, 1.4, 0.2]);
  const flareOpacity = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0, 0.85, 0]);
  const coreRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const telemetryX = useTransform(scrollYProgress, [0.1, 0.9], [-40, 40]);
  const telemetryOpacity = useTransform(scrollYProgress, [0.15, 0.45, 0.55, 0.85], [0.2, 1, 1, 0.2]);

  return (
    <div
      ref={containerRef}
      className="relative w-full py-20 sm:py-28 flex flex-col items-center justify-center overflow-hidden pointer-events-none select-none z-20"
    >
      {/* Volumetric Horizon Glow Wash */}
      <motion.div
        style={{ opacity: flareOpacity, scale: flareScale }}
        className="absolute w-150 sm:w-225 h-24 bg-linear-to-r from-transparent via-ochre/25 to-transparent blur-3xl rounded-full will-change-transform"
      />

      {/* Central Golden Laser Horizon Beam */}
      <div className="relative w-full flex items-center justify-center">
        <motion.div
          style={{ width: lineWidth }}
          className="h-[1.5px] bg-linear-to-r from-transparent via-ochre to-transparent shadow-[0_0_20px_#C8A27A] will-change-transform"
        />

        {/* Center Optical Lens Flare Sigil */}
        <motion.div
          style={{ rotate: coreRotate, opacity: flareOpacity }}
          className="absolute w-8 h-8 rounded-full border border-ochre bg-void flex items-center justify-center shadow-[0_0_30px_rgba(200,162,122,0.8)] will-change-transform"
        >
          <div className="w-2.5 h-2.5 bg-ivory rotate-45 shadow-[0_0_12px_#ffffff]" />
        </motion.div>
      </div>

      {/* Narrative Threshold Telemetry & Directional Indicator */}
      <motion.div
        style={{ x: telemetryX, opacity: telemetryOpacity }}
        className="mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 font-mono text-[10px] tracking-[0.3em] uppercase text-platinum/60 will-change-transform"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-umber" />
          <span className="text-platinum/50">{fromChapter}</span>
          <span className="text-ochre">►►</span>
          <span className="text-ivory font-bold">{toChapter}</span>
        </div>

        <span className="hidden sm:inline text-umber">{"///"}</span>

        <span className="text-ochre font-medium tracking-[0.25em]">{descriptor}</span>

        <span className="hidden md:inline text-umber">{"///"}</span>

        <span className="hidden md:inline text-[9px] text-sage tracking-widest">{coordinate}</span>
      </motion.div>
    </div>
  );
}
