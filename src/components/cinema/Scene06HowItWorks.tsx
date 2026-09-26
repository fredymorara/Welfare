"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Create Your Group",
    subtitle: "[ SETUP ]",
    body: "Set up your chama on our website in minutes. Name it, set your monthly contribution rules, and invite your members. Each member can log in to view their account.",
    detail: "ACCESSIBLE ON ANY PHONE BROWSER",
    accent: "ochre" as const,
  },
  {
    number: "02",
    title: "Collect Contributions",
    subtitle: "[ CONTRIBUTIONS ]",
    body: "Members pay their monthly shares on schedule via M-Pesa. Payments are logged automatically and reflected on the group dashboard in seconds — no lost receipts.",
    detail: "AUTOMATIC M-PESA RECORDING",
    accent: "sage" as const,
  },
  {
    number: "03",
    title: "Manage Loans",
    subtitle: "[ TABLE BANKING ]",
    body: "Members request loans directly through the platform. Elected officials review and approve in a few clicks. Repayment schedules and interest calculate automatically.",
    detail: "APPROVED BY ELECTED OFFICIALS",
    accent: "ochre" as const,
  },
  {
    number: "04",
    title: "Grow Together",
    subtitle: "[ GROW TOGETHER ]",
    body: "Watch your community's wealth grow with transparent reporting and real-time visibility into every contribution, loan, and expense.",
    detail: "TRANSPARENT FINANCIAL INSIGHTS",
    accent: "sage" as const,
  },
];

const ACCENT_CLASSES = {
  ochre: {
    dot: "bg-ochre",
    border: "border-ochre",
    text: "text-ochre",
    badge: "text-ochre",
    leftBorder: "border-l-2 border-ochre",
  },
  sage: {
    dot: "bg-sage",
    border: "border-sage",
    text: "text-sage",
    badge: "text-sage",
    leftBorder: "border-l-2 border-sage",
  },
};

export function Scene06HowItWorks() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [activeStep, setActiveStep] = useState(0);

  // Subtle background rail animation
  const railX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      className="relative min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-16 xl:px-20 pt-28 pb-16 w-full overflow-hidden select-none bg-[#1c130d]/85 backdrop-blur-md"
    >
      {/* Scrolling horizontal rail lines in background */}
      <motion.svg
        style={{ x: railX }}
        className="absolute inset-0 w-[110%] h-full pointer-events-none z-0 opacity-20"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        {[120, 260, 400, 540, 680, 780].map((y, i) => (
          <line key={i} x1="0" y1={y} x2="1600" y2={y} stroke="#6F4E37" strokeWidth="1" />
        ))}
      </motion.svg>

      {/* Top Narrative Anchor */}
      <div className="relative z-10 flex items-center justify-between border-b border-umber/40 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-ochre" />
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-ivory">
            SIMPLE 4-STEP PROCESS
          </span>
        </div>
        <span className="text-[10px] font-mono text-sage tracking-widest hidden sm:inline">
          FROM GROUP SETUP TO COLLECTIVE GROWTH
        </span>
      </div>

      {/* Main Drama */}
      <div className="relative z-10 my-auto w-full max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="text-ochre font-mono text-[13px] tracking-[0.3em] uppercase block mb-3">
            [ HOW KIKOBA WORKS ]
          </span>
          <h2 className="text-[44px] sm:text-[72px] lg:text-[96px] font-black tracking-[-0.04em] text-ivory leading-[0.92] uppercase mb-4">
            Four steps. <br />
            <span className="text-ochre font-serif italic font-normal tracking-tight">
              Zero friction.
            </span>
          </h2>
        </div>

        {/* Step Selector Rail */}
        <div className="flex flex-col sm:flex-row gap-2 mb-10">
          {STEPS.map((step, idx) => {
            const ac = ACCENT_CLASSES[step.accent];
            const isActive = idx === activeStep;
            return (
              <button
                key={step.number}
                onClick={() => {
                  setActiveStep(idx);
                }}
                className={`flex-1 py-3 px-4 border transition-all duration-300 cursor-pointer text-left font-mono text-[11px] uppercase tracking-widest ${
                  isActive
                    ? `${ac.border} bg-umber/30 ${ac.text}`
                    : "border-umber/40 text-platinum/50 hover:border-umber/80 hover:text-platinum/80"
                }`}
              >
                <span className={`text-[9px] block mb-0.5 ${isActive ? ac.badge : "text-platinum/30"}`}>
                  {step.number}.
                </span>
                {step.title}
              </button>
            );
          })}
        </div>

        {/* Active Step Reveal */}
        {STEPS.map((step, idx) => {
          const ac = ACCENT_CLASSES[step.accent];
          if (idx !== activeStep) return null;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* Left: Big number + title */}
              <div className="lg:col-span-4">
                <div className={`text-[100px] sm:text-[140px] font-black leading-none ${ac.text} opacity-20 font-mono`}>
                  {step.number}
                </div>
                <div className={`text-[9px] font-mono tracking-[0.4em] uppercase ${ac.text} mb-3 -mt-4`}>
                  {step.subtitle}
                </div>
                <h3 className="text-[28px] sm:text-[36px] font-black text-ivory uppercase tracking-[-0.02em]">
                  {step.title}
                </h3>
              </div>

              {/* Right: Body + detail */}
              <div className="lg:col-span-8 flex flex-col gap-6 pt-2">
                <p className={`text-[18px] sm:text-[22px] font-extralight text-platinum leading-[1.65] ${ac.leftBorder} pl-6`}>
                  {step.body}
                </p>
                <div className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest ${ac.text}`}>
                  <span className={`w-2 h-2 rounded-full ${ac.dot} animate-ping`} />
                  {step.detail}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Section Footer */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-umber/30">
        <span className="text-[11px] font-mono tracking-widest uppercase text-ivory">
          AFFORDABLE PLANS FOR EVERY SIZE GROUP
        </span>
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 text-[12px] font-mono tracking-widest uppercase text-ochre hover:text-ivory transition-colors group cursor-pointer"
        >
          <span>VIEW PLANS & PRICING</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
