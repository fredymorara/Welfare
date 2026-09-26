"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowDown, Plus, Minus } from "lucide-react";
import { useFAQs } from "../../hooks/useFAQs";
import { SECTION_IDS } from "../../config/site";
import { useIsMobile } from "../../hooks/useIsMobile";

export function FaqSection() {
  const containerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  const disableMotion = isMobile || shouldReduceMotion;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { faqs } = useFAQs();

  const crackOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.8, 1], [0.1, 0.35, 0.35, 0.1]);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      ref={containerRef}
      id={SECTION_IDS.FAQ}
      className="relative min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-16 xl:px-20 pt-28 pb-16 w-full overflow-hidden select-none bg-[#160e0a]"
      style={{ contain: "paint" }}
    >
      {/* Subtle kintsugi gold line in background */}
      <motion.svg
        style={{ opacity: disableMotion ? 0.25 : crackOpacity }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
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
            FREQUENTLY ASKED QUESTIONS
          </span>
        </div>
        <span className="text-[10px] font-mono text-ochre tracking-widest hidden sm:inline">
          HELPING YOU RUN A BETTER CHAMA
        </span>
      </div>

      {/* Main Drama: Compact Side-by-Side Layout (No Cards) */}
      <div className="relative z-10 my-auto w-full max-w-7xl mx-auto py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Clean, readable headline */}
          <div className="lg:col-span-5">
            <span className="text-ochre font-mono text-[12px] tracking-[0.3em] uppercase block mb-3">
              [ CLARITY & ANSWERS ]
            </span>
            <h2 className="text-[34px] sm:text-[44px] lg:text-[50px] font-black tracking-[-0.03em] text-ivory leading-[1.05] uppercase mb-5">
              Frequently <br />
              <span className="text-ochre font-serif italic font-normal tracking-tight">
                Asked Questions
              </span>
            </h2>
            <p className="text-[15px] font-extralight text-platinum/75 leading-relaxed border-l-2 border-ochre pl-4 mb-6">
              Everything you need to know about setting up and running your chama on Kikoba. Have more questions? Our support team in Nairobi is ready to help.
            </p>
            <div className="font-mono text-[11px] text-sage tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage" />
              <span>SUPPORT AVAILABLE DAILY 8AM – 8PM EAT</span>
            </div>
          </div>

          {/* Right Column: Clean, minimal accordion lines (NO CARDS) */}
          <div className="lg:col-span-7 divide-y divide-umber/40 border-t border-b border-umber/40">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="transition-colors duration-150">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between py-4 sm:py-5 text-left cursor-pointer group"
                  >
                    <span
                      className={`font-mono text-[14px] sm:text-[15px] font-medium tracking-wide transition-colors duration-200 pr-4 ${
                        isOpen ? "text-ochre" : "text-ivory group-hover:text-ochre"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`shrink-0 w-6 h-6 border rounded-sm flex items-center justify-center transition-all duration-200 ${
                        isOpen
                          ? "border-ochre text-ochre bg-ochre/15"
                          : "border-umber/50 text-platinum/50 group-hover:border-ochre/50 group-hover:text-ivory"
                      }`}
                    >
                      {isOpen ? <Minus className="w-3 h-3 stroke-2" /> : <Plus className="w-3 h-3 stroke-2" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 pt-1">
                          <p className="text-[14px] sm:text-[15px] font-extralight text-platinum leading-[1.65] border-l border-ochre/60 pl-4">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section Footer */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-umber/30">
        <span className="text-[11px] font-mono tracking-widest uppercase text-ivory">
          READY TO BRING HONESTY & CLARITY TO YOUR CHAMA?
        </span>
        <a
          href={`#${SECTION_IDS.CTA}`}
          className="inline-flex items-center gap-2 text-[12px] font-mono tracking-widest uppercase text-ochre hover:text-ivory transition-colors group cursor-pointer"
        >
          <span>START YOUR GROUP TODAY</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
