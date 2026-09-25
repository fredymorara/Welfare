"use client";

import { ShieldCheck, ArrowUp, Lock, Terminal } from "lucide-react";
import { sound } from "../../utils/audio";

export function AnimeFooter() {
  const scrollToTop = () => {
    sound.playClick(450);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const jumpTo = (id: string) => {
    sound.playClick(380);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#1f150e] border-t-2 border-umber pt-20 pb-16 px-6 sm:px-16 lg:px-24 w-full select-none z-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-umber/40">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-ochre uppercase tracking-[0.3em] mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>THE SOVEREIGN RECORD</span>
            </div>
            <h3 className="text-[38px] sm:text-[54px] font-black text-ivory tracking-[-0.03em] uppercase leading-none font-mono">
              KIKOBA
            </h3>
            <p className="text-[14px] font-mono text-platinum/60 tracking-wider mt-2">
              AUTONOMOUS CHAMA PROTOCOL FOR COLLECTIVE WEALTH
            </p>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="self-start md:self-end flex items-center gap-2 px-5 py-2.5 rounded-full border border-umber hover:border-ochre text-ivory text-[11px] font-mono tracking-widest uppercase transition-colors cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-ochre group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16 border-b border-umber/40 font-mono">
          {/* Column 1: Cultural Heritage */}
          <div className="md:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.25em] text-ochre block mb-4">
              {"// CULTURAL HERITAGE"}
            </span>
            <p className="text-[14px] font-extralight text-platinum/80 leading-relaxed mb-4">
              Chamas, Vikoba, and Table Banking groups are not mere financial accounts.
              They are living social covenants. Kikoba protects this legacy by
              codifying honesty into math, eliminating disputes so community trust
              endures forever.
            </p>
            <div className="p-3 border-l-2 border-sage bg-void text-[12px] text-sage">
              &ldquo;Umoja ni Nguvu, Utengano ni Udhaifu.&rdquo; <br />
              <span className="text-[10px] text-platinum/50 font-normal">
                Unity is Strength, Division is Weakness.
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Index */}
          <div className="md:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-ochre block mb-4">
              {"// PLATFORM SECTIONS"}
            </span>
            <ul className="space-y-2.5 text-[12px] text-platinum/70">
              <li>
                <button
                  onClick={() => jumpTo("heritage")}
                  className="hover:text-ivory hover:underline transition-colors cursor-pointer text-left"
                >
                  The Heritage & Covenant
                </button>
              </li>
              <li>
                <button
                  onClick={() => jumpTo("the-shift")}
                  className="hover:text-ivory hover:underline transition-colors cursor-pointer text-left"
                >
                  The Manual Friction
                </button>
              </li>
              <li>
                <button
                  onClick={() => jumpTo("the-engine")}
                  className="hover:text-ivory hover:underline transition-colors cursor-pointer text-left"
                >
                  Autonomous Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => jumpTo("yield")}
                  className="hover:text-ivory hover:underline transition-colors cursor-pointer text-left"
                >
                  Audited Cycle Yield
                </button>
              </li>
              <li>
                <button
                  onClick={() => jumpTo("vault")}
                  className="hover:text-ivory hover:underline transition-colors cursor-pointer text-left"
                >
                  Onboard Your Circle
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Sovereign Protocol & Law */}
          <div className="md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-ochre block mb-4">
              {"// SOVEREIGN PROTOCOL"}
            </span>
            <div className="space-y-3 text-[12px] text-platinum/80 font-extralight">
              <div className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-sage" />
                <span>Bank-Grade 256-Bit TLS Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-sage" />
                <span>Kenya Data Protection Act (2019) Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-sage" />
                <span>Direct Central Bank Partner Gateway Rails</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-umber/30 text-[11px] text-platinum/50">
              Zero transaction surcharges on member deposits. 100% group autonomy.
            </div>
          </div>
        </div>

        {/* Bottom Coordinates & Credits */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-platinum/50 uppercase tracking-[0.2em]">
          <div className="flex items-center gap-2">
            <span className="text-ochre">NAIROBI, KENYA</span>
            <span>·</span>
            <span>1° 17&apos; S, 36° 49&apos; E</span>
            <span>·</span>
            <span>© {new Date().getFullYear()} KIKOBA TECHNOLOGIES LTD.</span>
          </div>

          <div className="flex items-center gap-4 text-ivory">
            <span>HONOR THE ELDERS</span>
            <span>{"///"}</span>
            <span className="text-ochre">TRUST THE CODE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
