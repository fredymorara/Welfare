"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { SIGN_IN_URL, SIGN_UP_URL } from "../../config/api";
import { SECTION_IDS, SITE_CONFIG } from "../../config/site";

export function HeroSection() {
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
      id={SECTION_IDS.HERO}
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
                {SITE_CONFIG.culturalQuote.swahili} · HARAMBEE · {SITE_CONFIG.name.toUpperCase()}
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
            DIGITAL ACCOUNTING FOR SAVINGS GROUPS
          </span>
        </div>

        <span className="text-[10px] font-mono text-sage tracking-widest hidden sm:inline">
          LIVE ON WEB · MOBILE APP COMING SOON
        </span>
      </div>

      {/* Center Monolithic Narrative - 100% Solid, Opaque, Rich Color, Clean Canvas */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 my-auto max-w-5xl will-change-transform"
      >
        <span className="text-ochre font-mono text-[13px] tracking-[0.3em] uppercase block mb-4">
          [ SIMPLE ACCOUNTING FOR EVERY CHAMA & SAVINGS GROUP ]
        </span>

        <h1 className="text-[54px] sm:text-[88px] lg:text-[120px] font-black tracking-[-0.04em] text-ivory leading-[0.88] uppercase mb-8">
          A Thousand Hands. <br />
          <span className="text-ochre font-serif italic font-normal tracking-tight">
            One Trusted Chama.
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <p className="md:col-span-8 text-[18px] sm:text-[22px] font-extralight text-platinum leading-[1.65] border-l-2 border-ochre pl-6">
            Kikoba brings simple, transparent online accounting to your savings group.
            Track every member&apos;s contribution, manage table banking loans, and
            share real-time reports — directly from your phone or laptop browser.
          </p>

          <div className="md:col-span-4 space-y-3 font-mono text-[11px] uppercase tracking-widest text-platinum/70 pt-2">
            <div>{"// THE CHAMA"}</div>
            <div>{"// THE VIKOBA"}</div>
            <div>{"// TABLE BANKING"}</div>
            <div className="text-sage">✓ ACCESSIBLE 24/7 ON ANY BROWSER</div>
          </div>
        </div>

        {/* Uniform Hero Actions: Sign Up & Sign In */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={SIGN_UP_URL}
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-ochre hover:bg-[#d8b894] text-void font-black text-[12px] font-mono tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(200,162,122,0.35)] active:scale-95 cursor-pointer"
          >
            <span>Sign Up</span>
            <ArrowRight className="w-4 h-4 stroke-3" />
          </a>

          <a
            href={SIGN_IN_URL}
            className="px-7 py-4 rounded-full border border-umber hover:border-ochre text-ivory hover:text-ochre font-mono text-[12px] tracking-widest uppercase transition-colors cursor-pointer"
          >
            Sign In
          </a>

          <a
            href={`#${SECTION_IDS.HOW_IT_WORKS}`}
            className="text-[12px] font-mono tracking-wider text-platinum/60 hover:text-ochre transition-colors pl-2 flex items-center gap-1.5"
          >
            <span>See How It Works</span>
            <span>↓</span>
          </a>
        </div>
      </motion.div>

      {/* Bottom Scene Flow Trigger */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-umber/30">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-ochre animate-ping" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-ivory">
            WHY MANUAL NOTEBOOKS & CHATS RISK YOUR SAVINGS
          </span>
        </div>

        <a
          href={`#${SECTION_IDS.PROBLEM}`}
          className="inline-flex items-center gap-2 text-[12px] font-mono tracking-widest uppercase text-ochre hover:text-ivory transition-colors group cursor-pointer"
        >
          <span>SEE THE CHALLENGE</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
