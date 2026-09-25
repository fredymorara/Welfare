"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import { sound } from "../../utils/audio";

export function Scene01TheCircle() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax shifts: Retain full solid color, only differential translation
  const sealY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const sealScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section
      ref={containerRef}
      id="heritage"
      className="relative min-h-screen flex flex-col justify-between px-6 sm:px-16 lg:px-24 pt-32 pb-16 w-full overflow-hidden select-none bg-void"
    >
      {/* Parallax Rotating Golden Baobab Seal */}
      <motion.div
        style={{ y: sealY, scale: sealScale }}
        className="absolute -right-24 sm:-right-12 top-1/2 -translate-y-1/2 w-130 sm:w-195 lg:w-235 h-130 sm:h-195 lg:h-235 pointer-events-none z-0 will-change-transform opacity-35"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="w-full h-full rounded-full border border-ochre/80 flex items-center justify-center p-12 shadow-[0_0_80px_rgba(200,162,122,0.15)]"
        >
          <div className="w-full h-full rounded-full border border-dashed border-ochre/50 flex items-center justify-center p-16">
            <div className="w-full h-full rounded-full border border-umber flex items-center justify-center">
              <span className="text-[12px] font-mono tracking-[0.45em] uppercase text-ochre rotate-45 select-none">
                UMOJA NI NGUVU · HARAMBEE · KIKOBA
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Top Narrative Anchor Marker */}
      <div className="relative z-10 flex items-center justify-between border-b border-umber/40 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-ochre" />
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-ivory">
            EAST AFRICAN WEALTH TRADITION
          </span>
        </div>

        <span className="text-[10px] font-mono text-sage tracking-widest hidden sm:inline">
          ESTABLISHED ON SACRED SOCIAL TRUST
        </span>
      </div>

      {/* Center Monolithic Narrative - 100% Solid, Opaque, Rich Color, Clean Canvas */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 my-auto max-w-5xl will-change-transform"
      >
        <span className="text-ochre font-mono text-[13px] tracking-[0.3em] uppercase block mb-4">
          [ BEFORE SPREADSHEETS WERE BORN ]
        </span>

        <h1 className="text-[54px] sm:text-[88px] lg:text-[120px] font-black tracking-[-0.04em] text-ivory leading-[0.88] uppercase mb-8">
          A Thousand Hands. <br />
          <span className="text-ochre font-serif italic font-normal tracking-tight">
            One Sacred Vault.
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <p className="md:col-span-8 text-[18px] sm:text-[22px] font-extralight text-platinum leading-[1.65] border-l-2 border-ochre pl-6">
            Our elders did not build wealth with lawyers or banks. They gathered in
            circles under the baobab tree, pooled their shillings on a cloth, and
            anchored their community on one foundation: <strong>Sacred Human Trust</strong>.
          </p>

          <div className="md:col-span-4 space-y-3 font-mono text-[11px] uppercase tracking-widest text-platinum/70 pt-2">
            <div>{"// THE CHAMA"}</div>
            <div>{"// THE VIKOBA"}</div>
            <div>{"// THE MERRY-GO-ROUND"}</div>
            <div className="text-sage">✓ KES 480B+ POOLED ANNUALLY</div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Scene Flow Trigger */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-umber/30">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-ochre animate-ping" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-ivory">
            WHY SOCIAL TRUST BREAKS UNDER MANUAL CALCULATION
          </span>
        </div>

        <a
          href="#the-shift"
          onClick={() => sound.playClick(320)}
          className="inline-flex items-center gap-2 text-[12px] font-mono tracking-widest uppercase text-ochre hover:text-ivory transition-colors group cursor-pointer"
        >
          <span>SEE THE CHALLENGE</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
