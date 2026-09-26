"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";

export function Scene04TheHarvest() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [members, setMembers] = useState(30);

  // Golden Sunburst Parallax
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "20%"]);
  const sunburstScale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.85, 1.25, 1.1]);
  const sunburstOpacity = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.25, 0.5, 0.25]);

  const monthlyPool = members * 5000;
  const annualCapital = monthlyPool * 12;
  const loanVolume = annualCapital * 0.45;
  const dividendPool = loanVolume * 0.12;
  const dividendPerMember = Math.round(dividendPool / members);

  return (
    <section
      ref={containerRef}
      id="yield"
      className="relative min-h-screen flex flex-col justify-between px-6 sm:px-16 lg:px-24 pt-28 pb-16 w-full overflow-hidden select-none bg-[#160e0a]/85 backdrop-blur-md"
    >
      {/* Background Parallax Radiant Golden Harvest Halo */}
      <motion.div
        style={{
          y: backgroundY,
          scale: sunburstScale,
          opacity: sunburstOpacity,
        }}
        className="absolute inset-0 pointer-events-none z-0 will-change-transform flex items-center justify-center"
      >
        <div className="w-200 h-200 rounded-full bg-[radial-gradient(circle,rgba(200,162,122,0.25)_0%,rgba(111,78,55,0.1)_50%,transparent_75%)] blur-2xl" />
      </motion.div>

      {/* Top Narrative Anchor */}
      <div className="relative z-10 flex items-center justify-between border-b border-umber/40 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-sage" />
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-ivory">
            GROUP SAVINGS & DIVIDEND CALCULATOR
          </span>
        </div>

        <span className="text-[10px] font-mono text-ochre tracking-widest hidden sm:inline">
          ESTIMATE YOUR CHAMA&apos;S ANNUAL GROWTH
        </span>
      </div>

      {/* Main Drama: 3D Staged Wealth Orchestrator */}
      <div className="relative z-10 my-auto w-full max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-ochre font-mono text-[13px] tracking-[0.3em] uppercase block mb-3">
            [ TRANSPARENT DIVIDENDS ]
          </span>

          <h2 className="text-[44px] sm:text-[72px] lg:text-[96px] font-black tracking-[-0.04em] text-ivory leading-[0.92] uppercase mb-6">
            Zero math headaches. <br />
            <span className="text-ochre font-serif italic font-normal tracking-tight">
              Fair dividends for all.
            </span>
          </h2>

          <p className="text-[18px] sm:text-[21px] font-extralight text-platinum leading-[1.65] max-w-2xl border-l-2 border-sage pl-6 opacity-95">
            December is no longer a stressful season for the treasurer. At the end
            of the cycle, table banking loans, late fines, and dividend shares are
            reconciled down to the exact coin.
          </p>
        </div>

        {/* Full Viewport Interactive Wealth Platform */}
        <div className="border-2 border-umber p-8 sm:p-12 bg-void shadow-[0_30px_90px_rgba(0,0,0,0.7)]">
          {/* Member Dial Slider */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-umber/40 mb-10">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-platinum/60 block mb-1">
                CIRCLE MEMBERSHIP SCALE
              </span>
              <span className="text-[28px] sm:text-[34px] font-black text-ivory font-mono">
                {members} TRUSTED MEMBERS
              </span>
            </div>

            <div className="w-full sm:w-80">
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={members}
                onChange={(e) => {
                  setMembers(Number(e.target.value));
                }}
                className="w-full h-2 bg-umber rounded-lg appearance-none cursor-pointer accent-ochre"
              />
              <div className="flex justify-between text-[10px] font-mono text-platinum/50 mt-2 uppercase tracking-wider">
                <span>10 Small Circle</span>
                <span>50 Standard</span>
                <span>100 SACCO</span>
              </div>
            </div>
          </div>

          {/* Large Monolithic Financial Counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Metric 1 */}
            <div className="border-l-2 border-umber pl-6 py-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-platinum/60 block mb-2">
                TOTAL POOLED CAPITAL
              </span>
              <div className="text-[34px] sm:text-[44px] font-black text-ivory font-mono tracking-tight">
                KES {(annualCapital / 1000000).toFixed(2)}M
              </div>
              <span className="text-[12px] font-extralight text-platinum/80 mt-2 block">
                100% automated M-Pesa ledger sync throughout 12 calendar cycles.
              </span>
            </div>

            {/* Metric 2 */}
            <div className="border-l-2 border-ochre pl-6 py-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-ochre block mb-2">
                TABLE BANKING LOANS DISBURSED
              </span>
              <div className="text-[34px] sm:text-[44px] font-black text-ochre font-mono tracking-tight">
                KES {(loanVolume / 1000000).toFixed(2)}M
              </div>
              <span className="text-[12px] font-extralight text-platinum/80 mt-2 block">
                Zero defaults with multi-official authorization.
              </span>
            </div>

            {/* Metric 3 */}
            <div className="border-l-2 border-sage pl-6 py-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-sage block mb-2">
                DIVIDEND EARNED / MEMBER
              </span>
              <div className="text-[34px] sm:text-[44px] font-black text-sage font-mono tracking-tight">
                + KES {dividendPerMember.toLocaleString()}
              </div>
              <span className="text-[12px] font-extralight text-platinum/80 mt-2 block">
                Distributed transparently to each member with zero calculation errors.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Section Footer Flow Trigger */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-umber/30">
        <span className="text-[11px] font-mono tracking-widest uppercase text-ivory">
          AFFORDABLE PLANS FOR EVERY SIZE GROUP
        </span>

        <a
          href="#pricing"
          className="inline-flex items-center gap-2 text-[12px] font-mono tracking-widest uppercase text-ochre hover:text-ivory transition-colors group cursor-pointer"
        >
          <span>VIEW OUR PLANS & PRICING</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
