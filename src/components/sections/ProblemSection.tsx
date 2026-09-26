"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { SECTION_IDS } from "../../config/site";
import { useIsMobile } from "../../hooks/useIsMobile";

export function ProblemSection() {
  const containerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  const disableMotion = isMobile || shouldReduceMotion;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Differential parallax between left indictment and floating dialogue cards (desktop only)
  const leftX = useTransform(scrollYProgress, [0.1, 0.45], [disableMotion ? 0 : -40, 0]);
  const rightY = useTransform(scrollYProgress, [0, 1], [disableMotion ? 0 : 50, disableMotion ? 0 : -50]);

  // Dynamic Kintsugi Crack Expansion (GPU scale & opacity)
  const crackScale = useTransform(scrollYProgress, [0.1, 0.6], [0.95, 1.1]);
  const crackOpacity = useTransform(scrollYProgress, [0.1, 0.35, 0.8, 1], [0.15, 0.45, 0.45, 0.15]);

  return (
    <section
      ref={containerRef}
      id={SECTION_IDS.PROBLEM}
      className="relative min-h-screen flex flex-col justify-between px-6 sm:px-16 lg:px-24 pt-28 pb-16 w-full overflow-hidden select-none bg-[#1c130d]"
    >
      {/* Dynamic Parallax Kintsugi Golden Fissure */}
      {!disableMotion ? (
        <motion.svg
          style={{ scale: crackScale, opacity: crackOpacity }}
          className="absolute inset-0 w-full h-full pointer-events-none z-0 will-change-transform kintsugi-gold"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          {/* Main jagged fissure */}
          <path
            d="M 180 0 L 440 320 L 720 270 L 930 630 L 1220 900"
            stroke="#C8A27A"
            strokeWidth="2.5"
            fill="none"
            strokeDasharray="10 5"
          />
          {/* Lateral upper branch */}
          <path
            d="M 720 270 L 1120 190 L 1440 380"
            stroke="#C8A27A"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Downward connecting branch that bleeds into the next transition */}
          <path
            d="M 720 270 L 685 450 L 710 680 L 660 920"
            stroke="#C8A27A"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8 4"
          />
        </motion.svg>
      ) : (
        /* Static lightweight background on mobile devices */
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <path
            d="M 180 0 L 440 320 L 720 270 L 930 630 L 1220 900"
            stroke="#C8A27A"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="10 5"
          />
          <path
            d="M 720 270 L 1120 190 L 1440 380"
            stroke="#C8A27A"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      )}

      {/* Top Header Marker */}
      <div className="relative z-10 flex items-center justify-between border-b border-umber/40 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-ochre" />
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-ivory">
            THE REALITY OF MANUAL RECORDS
          </span>
        </div>

        <span className="text-[10px] font-mono text-ochre tracking-widest hidden sm:inline">
          VULNERABILITY OF PHYSICAL BOOKS & WHATSAPP
        </span>
      </div>

      {/* Main Drama: Left Indictment & Floating Dialogue Cards */}
      <div className="relative z-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Monolithic Indictment */}
        <motion.div style={{ x: leftX }} className="lg:col-span-7 will-change-transform">
          <span className="text-ochre font-mono text-[13px] tracking-[0.3em] uppercase block mb-4">
            [ THE PROBLEM WITH PAPER & CHATS ]
          </span>

          <h2 className="text-[48px] sm:text-[76px] lg:text-[98px] font-black tracking-[-0.04em] text-ivory leading-[0.92] uppercase mb-8">
            When the ink blurs, <br />
            <span className="text-ochre font-serif italic font-normal tracking-tight">
              brothers become strangers.
            </span>
          </h2>

          <p className="text-[18px] sm:text-[21px] font-extralight text-platinum leading-[1.65] max-w-xl mb-8 border-l-2 border-umber pl-6">
            A single spilled cup of chai on a physical ledger. A phone lost in a matatu.
            Suddenly, three years of collective sacrifice dissolves into suspicion,
            screaming matches, and broken friendships.
          </p>

          <div className="space-y-4 font-mono text-[13px] text-platinum/80">
            <div className="flex items-center gap-3">
              <span className="text-ochre">►</span>
              <span>400 unread WhatsApp messages of conflicting M-Pesa receipts.</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-ochre">►</span>
              <span>The treasurer accused of stealing because math was done by hand.</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-ochre">►</span>
              <span>End-of-year dividend meetings that end in police stations.</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Floating Dialogue Panels with Vertical Parallax */}
        <motion.div
          style={{ y: rightY }}
          className="lg:col-span-5 relative space-y-6 will-change-transform"
        >
          {/* Dialogue Callout 1 */}
          <div className="p-6 border-l-4 border-ochre bg-void font-mono text-[13px] text-ivory shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative">
            <div className="text-[10px] text-ochre uppercase tracking-widest mb-1">
              CHAMA CHAT // 11:42 PM
            </div>
            <p className="italic text-platinum">
              &ldquo;Madam Treasurer, I sent KES 10,000 on June 3rd! Why is my name on the defaulters list? Search your phone!&rdquo;
            </p>
          </div>

          {/* Dialogue Callout 2 */}
          <div className="p-6 border-l-4 border-umber bg-void font-mono text-[13px] text-ivory shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative">
            <div className="text-[10px] text-umber uppercase tracking-widest mb-1">
              DECEMBER ANNUAL MEETING // DISCREPANCY
            </div>
            <p className="italic text-platinum">
              &ldquo;The notebook has two missing pages. The interest formulas don&apos;t match. We are not leaving this room until our money is accounted for.&rdquo;
            </p>
          </div>

          {/* Graphic Statement */}
          <div className="p-4 border border-umber text-center font-mono text-[11px] uppercase tracking-[0.25em] text-ochre bg-void">
            YOUR GROUP DESERVES AN ACCURATE DIGITAL RECORD
          </div>
        </motion.div>
      </div>

      {/* Section Footer Flow Trigger */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-umber/30">
        <span className="text-[11px] font-mono tracking-widest uppercase text-ivory">
          A RELIABLE DIGITAL SYSTEM BUILT FOR CHAMA TRUST
        </span>

        <a
          href={`#${SECTION_IDS.FEATURES}`}
          className="inline-flex items-center gap-2 text-[12px] font-mono tracking-widest uppercase text-ochre hover:text-ivory transition-colors group cursor-pointer"
        >
          <span>HOW KIKOBA SOLVES THIS</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
