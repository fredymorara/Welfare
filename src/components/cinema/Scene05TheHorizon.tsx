"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles, ArrowDown } from "lucide-react";
import Image from "next/image";
import { SIGN_UP_URL, SIGN_IN_URL } from "../../config/api";

export function Scene05TheHorizon() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Background Horizon Parallax Rings
  const ringScale = useTransform(scrollYProgress, [0, 1], [0.85, 1.3]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section
      ref={containerRef}
      id="vault"
      className="relative min-h-screen flex flex-col justify-between px-6 sm:px-16 lg:px-24 pt-28 pb-20 w-full overflow-hidden select-none bg-void"
      style={{ perspective: "1200px" }}
    >
      {/* Background Horizon Gateway Vortex Rings */}
      <motion.div
        style={{ scale: ringScale, rotate: ringRotate }}
        className="absolute inset-0 pointer-events-none z-0 will-change-transform flex items-center justify-center opacity-25"
      >
        <div className="w-150 sm:w-225 h-150 sm:h-225 rounded-full border border-ochre/40 flex items-center justify-center p-20 shadow-[0_0_100px_rgba(200,162,122,0.12)]">
          <div className="w-full h-full rounded-full border border-dashed border-ochre/50 flex items-center justify-center p-20">
            <div className="w-full h-full rounded-full border border-umber/60" />
          </div>
        </div>
      </motion.div>

      {/* Top Narrative Anchor */}
      <div className="relative z-10 flex items-center justify-between border-b border-umber/40 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-ochre" />
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-ivory">
            START YOUR GROUP ON WEB TODAY
          </span>
        </div>

        <span className="text-[10px] font-mono text-sage tracking-widest hidden sm:inline">
          ● FREE 14-DAY TRIAL · WORKS ON ANY BROWSER
        </span>
      </div>

      {/* Center Monolithic Card */}
      <div className="relative z-10 my-auto w-full max-w-4xl mx-auto text-center">
        {/* Official Brand Emblem */}
        <div className="inline-flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-umber/50 border border-ochre/50 flex items-center justify-center p-3 shadow-[0_0_35px_rgba(200,162,122,0.25)]">
            <Image
              src="/brand/icon-main.png"
              alt="Kikoba Emblem"
              width={50}
              height={50}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ochre/15 border border-ochre/40 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-ochre" />
          <span className="text-ochre font-mono text-[11px] font-semibold tracking-[0.2em] uppercase">
            Start Your Free Trial
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="text-[44px] sm:text-[72px] lg:text-[96px] font-black tracking-[-0.03em] text-ivory leading-[0.94] uppercase mb-6">
          Ready to transform <br />
          <span className="text-ochre font-serif italic font-normal tracking-tight">
            your group?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-[17px] sm:text-[21px] font-extralight text-platinum leading-[1.65] max-w-2xl mx-auto mb-10">
          Join over 120+ groups already using Kikoba. Start your free trial today and
          bring complete transparency to your group&apos;s contributions, loans, and expenses.
          No hidden fees.
        </p>

        {/* Direct Action Button - No Forms, Pure CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href={SIGN_UP_URL}
            whileHover={{ scale: 1.04, boxShadow: "0 0 50px rgba(200,162,122,0.55)" }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 rounded-full bg-ochre hover:bg-[#d8b894] text-void font-black text-[14px] font-mono tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(200,162,122,0.35)] cursor-pointer"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-5 h-5 stroke-2.5" />
          </motion.a>
        </div>

        {/* Secondary Sign In Link */}
        <div className="mt-5 text-center font-mono text-[12px] text-platinum/70">
          Already have an account?{" "}
          <a
            href={SIGN_IN_URL}
            className="text-ochre hover:text-ivory underline font-bold uppercase tracking-wider ml-1 transition-colors"
          >
            Sign In
          </a>
        </div>

        {/* Trust Badges Row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 font-mono text-[11px] uppercase tracking-widest text-platinum/80">
          <span className="flex items-center gap-2 text-sage">
            ✓ 14-DAY FREE TRIAL
          </span>
          <span className="flex items-center gap-2 text-sage">
            ✓ WORKS ON ANY BROWSER
          </span>
          <span className="flex items-center gap-2 text-sage">
            ✓ CANCEL ANYTIME
          </span>
        </div>
      </div>

      {/* Bottom Scene Anchor Flow */}
      <div className="relative z-10 pt-6 border-t border-umber/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-platinum/60 uppercase tracking-widest">
        <div className="flex items-center gap-3">
          <span className="text-ochre">● KIKOBA WEB PLATFORM</span>
          <span className="text-sage hidden sm:inline">LIVE ON WEB TODAY · MOBILE APP COMING SOON</span>
        </div>
        <a
          href="#mobile-app"
          className="inline-flex items-center gap-2 text-[12px] font-mono tracking-widest uppercase text-ochre hover:text-ivory transition-colors group cursor-pointer"
        >
          <span>THE MOBILE APP IS COMING</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
