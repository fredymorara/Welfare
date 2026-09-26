"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowDown, Plus, Minus } from "lucide-react";
import { useFAQs } from "../../hooks/useFAQs";

export function Scene08FAQ() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { faqs } = useFAQs();

  const crackOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.8, 1], [0.1, 0.35, 0.35, 0.1]);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      ref={containerRef}
      id="faq"
      className="relative min-h-screen flex flex-col justify-between px-6 sm:px-16 lg:px-24 pt-28 pb-16 w-full overflow-hidden select-none bg-[#160e0a]/85 backdrop-blur-md"
    >
      {/* Subtle kintsugi gold line in background */}
      <motion.svg
        style={{ opacity: crackOpacity }}
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

      {/* Main Drama */}
      <div className="relative z-10 my-auto w-full max-w-4xl mx-auto py-10">
        {/* Clean, Readable Section Header */}
        <div className="text-center mb-12">
          <span className="text-ochre font-mono text-[12px] sm:text-[13px] tracking-[0.3em] uppercase block mb-3">
            [ FREQUENTLY ASKED QUESTIONS ]
          </span>
          <h2 className="text-[38px] sm:text-[56px] lg:text-[72px] font-black tracking-[-0.03em] text-ivory leading-[1.05] uppercase mb-4">
            Frequently Asked{" "}
            <span className="text-ochre font-serif italic font-normal">
              Questions
            </span>
          </h2>
          <p className="text-[16px] sm:text-[19px] font-extralight text-platinum/80 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about setting up and running your chama on Kikoba.
            Have more questions? Our support team in Nairobi is ready to help.
          </p>
        </div>

        {/* Clean Accordion */}
        <div className="divide-y divide-umber/40 border-y border-umber/40 bg-void/50 backdrop-blur-sm rounded-lg overflow-hidden">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors duration-200 hover:bg-umber/10">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer group"
                >
                  <span
                    className={`font-mono text-[15px] sm:text-[17px] font-semibold tracking-wide transition-colors duration-200 pr-6 ${
                      isOpen ? "text-ochre" : "text-ivory group-hover:text-ochre"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 border rounded-sm flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? "border-ochre text-ochre bg-ochre/15"
                        : "border-umber/60 text-platinum/50 group-hover:border-ochre/50 group-hover:text-ivory"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4 stroke-2" /> : <Plus className="w-4 h-4 stroke-2" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                        <div className="border-l-2 border-ochre pl-5 py-1">
                          <p className="text-[15px] sm:text-[16px] font-extralight text-platinum leading-[1.7]">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section Footer */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-umber/30">
        <span className="text-[11px] font-mono tracking-widest uppercase text-ivory">
          READY TO BRING HONESTY & CLARITY TO YOUR CHAMA?
        </span>
        <a
          href="#vault"
          className="inline-flex items-center gap-2 text-[12px] font-mono tracking-widest uppercase text-ochre hover:text-ivory transition-colors group cursor-pointer"
        >
          <span>START YOUR GROUP TODAY</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
