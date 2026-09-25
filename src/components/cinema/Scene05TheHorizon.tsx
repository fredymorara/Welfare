"use client";

import { useState, useRef, type FormEvent } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { sound } from "../../utils/audio";

export function Scene05TheHorizon() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [chamaName, setChamaName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  // Background Horizon Rings Parallax
  const ringScale = useTransform(scrollYProgress, [0, 1], [0.85, 1.3]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!chamaName || !phone) return;
    setConfirmed(true);
    sound.playUnlockBass();
    sound.playChime();

    try {
      confetti({
        particleCount: 110,
        spread: 85,
        origin: { y: 0.6 },
        colors: ["#C8A27A", "#7B9B7A", "#F8F4EE"],
      });
    } catch {
      // Fallback
    }
  };

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
        className="absolute inset-0 pointer-events-none z-0 will-change-transform flex items-center justify-center opacity-30"
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
            SOVEREIGN ONBOARDING
          </span>
        </div>

        <span className="text-[10px] font-mono text-sage tracking-widest hidden sm:inline">
          ● OPEN FOR NEW CHAMA COHORTS
        </span>
      </div>

      {/* Center Monolithic Drama & High-Contrast Gateway */}
      <div className="relative z-10 my-auto w-full max-w-4xl mx-auto text-center">
        <span className="text-ochre font-mono text-[13px] tracking-[0.35em] uppercase block mb-4">
          [ THE TIME TO STEP FORWARD ]
        </span>

        <h2 className="text-[52px] sm:text-[84px] lg:text-[112px] font-black tracking-[-0.04em] text-ivory leading-[0.92] uppercase mb-8">
          Bring your circle <br />
          <span className="text-ochre font-serif italic font-normal tracking-tight">
            into the light.
          </span>
        </h2>

        <p className="text-[18px] sm:text-[22px] font-extralight text-platinum leading-[1.65] max-w-2xl mx-auto mb-12">
          Give your treasurer peaceful nights. Give your members unshakeable
          confidence. Bring your chama into the era of mathematical certainty.
        </p>

        {/* Onboarding Form Gateway */}
        {!confirmed ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
          >
            <input
              type="text"
              required
              value={chamaName}
              onChange={(e) => setChamaName(e.target.value)}
              placeholder="Chama or Circle Name"
              className="w-full sm:flex-1 px-6 py-5 rounded-full bg-umber/40 border-2 border-umber text-ivory placeholder-platinum/60 text-[15px] font-mono focus:outline-none focus:border-ochre transition-colors"
            />

            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Leader Phone (+254...)"
              className="w-full sm:flex-1 px-6 py-5 rounded-full bg-umber/40 border-2 border-umber text-ivory placeholder-platinum/60 text-[15px] font-mono focus:outline-none focus:border-ochre transition-colors"
            />

            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-ochre hover:bg-[#d8b894] text-void font-black text-[13px] tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,162,122,0.6)] active:scale-95 cursor-pointer shrink-0 flex items-center justify-center gap-2"
            >
              <span>ENTER VAULT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 border-2 border-sage bg-umber/40 max-w-lg mx-auto text-center"
          >
            <div className="w-12 h-12 rounded-full bg-sage/20 text-sage flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-[24px] font-bold text-ivory mb-2 font-mono uppercase">
              COVENANT RECEIVED
            </h4>
            <p className="text-[15px] font-extralight text-platinum leading-relaxed">
              Welcome to the vanguard, <strong>{chamaName}</strong>. Our East
              African onboarding lead will transmit initiation keys to{" "}
              <strong>{phone}</strong> shortly.
            </p>
          </motion.div>
        )}

        {/* Guarantees Row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 font-mono text-[11px] uppercase tracking-widest text-platinum/80">
          <span className="flex items-center gap-2 text-sage">
            ✓ ZERO TRANSACTION SURCHARGES
          </span>
          <span className="flex items-center gap-2 text-sage">
            ✓ BANK-GRADE 256-BIT ENCRYPTION
          </span>
          <span className="flex items-center gap-2 text-sage">
            ✓ SETUP IN UNDER 4 MINUTES
          </span>
        </div>
      </div>

      {/* Bottom Scene Anchor Flow */}
      <div className="relative z-10 pt-6 border-t border-umber/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-platinum/60 uppercase tracking-widest">
        <span className="text-ochre">● THE HORIZON ARCHIVE</span>
        <span className="text-sage">PROTOCOL VERSION 3.2 · PRODUCTION READY</span>
      </div>
    </section>
  );
}
