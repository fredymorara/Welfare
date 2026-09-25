"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Plus, Minus } from "lucide-react";
import { useFAQs } from "../../hooks/useFAQs";

export function Scene08FAQ() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { faqs, loading } = useFAQs();

  const crackOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.8, 1], [0.1, 0.4, 0.4, 0.1]);

  const toggle = (idx: number) => {
    const next = openIndex === idx ? null : idx;
    setOpenIndex(next);
  };

  return (
    <section
      ref={containerRef}
      id="faq"
      className="relative min-h-screen flex flex-col justify-between px-6 sm:px-16 lg:px-24 pt-28 pb-16 w-full overflow-hidden select-none bg-[#160e0a]/85 backdrop-blur-md"
    >
      {/* Subtle kintsugi crack in background */}
      <motion.svg
        style={{ opacity: crackOpacity }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 kintsugi-gold"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 600 L 300 440 L 700 500 L 1000 300 L 1440 400"
          stroke="#C8A27A"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="8 5"
        />
      </motion.svg>

      {/* Top Narrative Anchor */}
      <div className="relative z-10 flex items-center justify-between border-b border-umber/40 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-ochre" />
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-ivory">
            SOVEREIGN QUERY ARCHIVE
          </span>
        </div>
        <span className="text-[10px] font-mono text-ochre tracking-widest hidden sm:inline">
          QUESTIONS FROM CHAMA LEADERS
        </span>
      </div>

      {/* Main Drama */}
      <div className="relative z-10 my-auto w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Headline */}
          <div className="lg:col-span-4">
            <span className="text-ochre font-mono text-[13px] tracking-[0.3em] uppercase block mb-3">
              [ COMMON QUESTIONS ]
            </span>
            <h2 className="text-[44px] sm:text-[64px] lg:text-[80px] font-black tracking-[-0.04em] text-ivory leading-[0.92] uppercase mb-6">
              Every answer. <br />
              <span className="text-ochre font-serif italic font-normal tracking-tight">
                No secrets.
              </span>
            </h2>
            <p className="text-[15px] font-extralight text-platinum/70 leading-relaxed border-l-2 border-umber pl-4">
              If your question is not answered here, our East African onboarding team is one message away.
            </p>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-8">
            {loading ? (
              <div className="text-platinum/40 font-mono text-[12px] uppercase tracking-widest py-8">
                LOADING ARCHIVE...
              </div>
            ) : (
              <div className="flex flex-col">
                {faqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div key={idx} className="border-b border-umber/40 last:border-b-0">
                      <button
                        onClick={() => toggle(idx)}
                        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
                      >
                        <span
                          className={`font-mono text-[14px] sm:text-[15px] tracking-wide transition-colors duration-200 pr-4 ${
                            isOpen ? "text-ochre" : "text-ivory group-hover:text-ochre"
                          }`}
                        >
                          {faq.question}
                        </span>
                        <div
                          className={`shrink-0 w-7 h-7 border rounded-sm flex items-center justify-center transition-all duration-200 ${
                            isOpen ? "border-ochre text-ochre bg-umber/30" : "border-umber/50 text-platinum/50"
                          }`}
                        >
                          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </div>
                      </button>

                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-[15px] font-extralight text-platinum leading-[1.7] border-l-2 border-ochre pl-5 pb-5">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Section Footer */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-umber/30">
        <span className="text-[11px] font-mono tracking-widest uppercase text-ivory">
          READY TO ANCHOR YOUR COMMUNITY ON-CHAIN
        </span>
        <a
          href="#vault"
          className="inline-flex items-center gap-2 text-[12px] font-mono tracking-widest uppercase text-ochre hover:text-ivory transition-colors group cursor-pointer"
        >
          <span>ONBOARD YOUR CIRCLE</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
