"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Key, ShieldCheck, Zap } from "lucide-react";
import { sound } from "../../utils/audio";

export function Scene03TheBlueprint() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [pulseNode, setPulseNode] = useState<number>(2);

  // Subtle Perspective on Scroll
  const schematicRotateX = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [6, 0, -4]);

  const triggerNode = (id: number) => {
    setPulseNode(id);
    sound.playClick(320 + id * 110);
  };

  return (
    <section
      ref={containerRef}
      id="the-engine"
      className="relative min-h-screen flex flex-col justify-between px-6 sm:px-16 lg:px-24 pt-28 pb-16 w-full overflow-hidden select-none bg-void"
      style={{ perspective: "1200px" }}
    >
      {/* Top Narrative Anchor */}
      <div className="relative z-10 flex items-center justify-between border-b border-umber/40 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-ochre" />
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-ivory">
            AUTONOMOUS CONSENSUS ARCHITECTURE
          </span>
        </div>

        <span className="text-[10px] font-mono text-sage tracking-widest hidden sm:inline">
          ● REAL-TIME MULTI-KEY PROTOCOL
        </span>
      </div>

      {/* Center Monolithic Drama & Clean Schematic Stage */}
      <div className="relative z-10 my-auto w-full max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-ochre font-mono text-[13px] tracking-[0.3em] uppercase block mb-3">
            [ ARCHITECTURE OF CERTAINTY ]
          </span>

          <h2 className="text-[44px] sm:text-[72px] lg:text-[96px] font-black tracking-[-0.04em] text-ivory leading-[0.92] uppercase mb-6">
            An engine of code. <br />
            <span className="text-ochre font-serif italic font-normal tracking-tight">
              Governed by the quorum.
            </span>
          </h2>

          <p className="text-[18px] sm:text-[21px] font-extralight text-platinum leading-[1.65] max-w-2xl border-l-2 border-ochre pl-6 opacity-95">
            Kikoba does not replace the human bond—it fortifies it. No single leader
            can touch the money. Every shilling moves through mathematical consensus.
          </p>
        </div>

        {/* 3D Perspective Tilt Schematic Platform */}
        <motion.div
          style={{
            rotateX: schematicRotateX,
          }}
          className="relative border-2 border-umber p-8 sm:p-12 bg-void shadow-[0_30px_90px_rgba(0,0,0,0.7)] will-change-transform"
        >
          {/* Blueprint Telemetry Coordinates */}
          <div className="flex flex-wrap justify-between items-center text-[10px] font-mono text-ochre pb-6 border-b border-umber/40 mb-8 uppercase tracking-widest gap-2">
            <span>SEC_ID: // 0x4879-KIKOBA</span>
            <span>TOPOLOGY: 3-KEY DISTRIBUTED QUORUM</span>
            <span>LATENCY: &lt; 3.0 SECONDS</span>
          </div>

          {/* Three Connected Blueprint Stations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Station 1: Ingestion */}
            <div
              onClick={() => triggerNode(1)}
              className={`p-6 border-2 transition-all duration-300 cursor-pointer select-none relative group ${
                pulseNode === 1
                  ? "border-ochre bg-umber/40 shadow-[0_0_35px_rgba(200,162,122,0.3)] -translate-y-1"
                  : "border-umber/60 hover:border-ochre/60 bg-void"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-[11px] font-mono text-ochre">NODE 01</span>
                <Zap className="w-5 h-5 text-ochre" />
              </div>
              <h4 className="text-[20px] font-bold text-ivory uppercase tracking-wide mb-2">
                M-Pesa STK Rail
              </h4>
              <p className="text-[14px] font-extralight text-platinum/85 leading-relaxed">
                Direct phone-to-ledger API pipeline. Payments are timestamped and
                verified within seconds of PIN entry.
              </p>
            </div>

            {/* Station 2: Quorum Key Multi-Sign */}
            <div
              onClick={() => triggerNode(2)}
              className={`p-6 border-2 transition-all duration-300 cursor-pointer select-none relative group ${
                pulseNode === 2
                  ? "border-ochre bg-umber/40 shadow-[0_0_35px_rgba(200,162,122,0.3)] -translate-y-1"
                  : "border-umber/60 hover:border-ochre/60 bg-void"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-[11px] font-mono text-ochre">NODE 02</span>
                <Key className="w-5 h-5 text-ochre" />
              </div>
              <h4 className="text-[20px] font-bold text-ivory uppercase tracking-wide mb-2">
                Multi-Trustee Quorum
              </h4>
              <p className="text-[14px] font-extralight text-platinum/85 leading-relaxed">
                No money leaves without 3 independent trustee cryptographic sign-offs
                sent directly via SMS or app.
              </p>
            </div>

            {/* Station 3: Immutable Vault Balance */}
            <div
              onClick={() => triggerNode(3)}
              className={`p-6 border-2 transition-all duration-300 cursor-pointer select-none relative group ${
                pulseNode === 3
                  ? "border-ochre bg-umber/40 shadow-[0_0_35px_rgba(200,162,122,0.3)] -translate-y-1"
                  : "border-umber/60 hover:border-ochre/60 bg-void"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-[11px] font-mono text-sage">NODE 03</span>
                <ShieldCheck className="w-5 h-5 text-sage" />
              </div>
              <h4 className="text-[20px] font-bold text-ivory uppercase tracking-wide mb-2">
                Cryptographic Ledger
              </h4>
              <p className="text-[14px] font-extralight text-platinum/85 leading-relaxed">
                One truth for all 50 members. Open 24/7 on every phone. Unalterable
                history.
              </p>
            </div>
          </div>

          {/* Real-Time Live Bus Status Bar */}
          <div className="mt-8 pt-6 border-t border-umber/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-platinum/80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sage animate-ping" />
              <span>ACTIVE PIPELINE: NODE 0{pulseNode} ACTIVATED</span>
            </div>
            <span className="text-ochre">CLICK ANY NODE TO TEST CONSENSUS SIGNING</span>
          </div>
        </motion.div>
      </div>

      {/* Section Footer Flow Trigger */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-umber/30">
        <span className="text-[11px] font-mono tracking-widest uppercase text-ivory">
          WHAT HAPPENS WHEN CAPITAL FLOWS WITHOUT FRICTION
        </span>

        <a
          href="#yield"
          onClick={() => sound.playClick(500)}
          className="inline-flex items-center gap-2 text-[12px] font-mono tracking-widest uppercase text-ochre hover:text-ivory transition-colors group cursor-pointer"
        >
          <span>SIMULATE GROUP YIELD</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
