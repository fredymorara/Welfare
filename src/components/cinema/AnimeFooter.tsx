"use client";

import { ShieldCheck, ArrowUp, Lock, Terminal } from "lucide-react";
import Image from "next/image";
import { SIGN_IN_URL, SIGN_UP_URL } from "../../config/api";

const FOOTER_LINKS = [
  { id: "heritage", title: "Home" },
  { id: "how-it-works", title: "Process" },
  { id: "yield", title: "Savings" },
  { id: "pricing", title: "Pricing" },
  { id: "faq", title: "FAQ" },
  { id: "mobile-app", title: "App" },
];

export function AnimeFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#1f150e] border-t-2 border-umber pt-20 pb-16 px-6 sm:px-16 lg:px-24 w-full select-none z-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Header with Official Kikoba Wordmark */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-umber/40">
          <div>
            <div className="flex flex-col gap-3 mb-2">
              <Image
                src="/brand/name-white.png"
                alt="Kikoba"
                width={2000}
                height={301}
                className="h-8 sm:h-10 w-auto object-contain self-start"
              />
              <p className="text-[13px] font-mono text-platinum/60 tracking-wider">
                SIMPLE DIGITAL ACCOUNTING & SAVINGS PLATFORM FOR CHAMAS
              </p>
            </div>
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
              Chamas, Vikoba, and Table Banking groups are the heartbeat of our
              communities. Kikoba makes collective savings simple, transparent,
              and dispute-free so trust grows stronger with every cycle.
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
              {"// NAVIGATION"}
            </span>
            <ul className="space-y-2.5 text-[12px] text-platinum/70">
              {FOOTER_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => jumpTo(link.id)}
                    className="hover:text-ivory hover:underline transition-colors cursor-pointer text-left uppercase tracking-wider"
                  >
                    {link.title}
                  </button>
                </li>
              ))}
              <li className="pt-3 border-t border-umber/30 flex gap-4 text-ochre uppercase font-bold text-[11px] tracking-widest">
                <a href={SIGN_IN_URL} className="hover:text-ivory transition-colors">
                  Sign In
                </a>
                <span>·</span>
                <a href={SIGN_UP_URL} className="hover:text-ivory transition-colors">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform Security */}
          <div className="md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-ochre block mb-4">
              {"// PLATFORM SECURITY & TRUST"}
            </span>
            <div className="space-y-3 text-[12px] text-platinum/80 font-extralight">
              <div className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-sage" />
                <span>Bank-Grade 256-Bit SSL/TLS Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-sage" />
                <span>Kenya Data Protection Act Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-sage" />
                <span>Automatic M-Pesa Payment Recording</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-umber/30 text-[11px] text-platinum/50">
              Zero transaction surcharges on member deposits. 100% group control.
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & System Status */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-platinum/50 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} KIKOBA. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sage animate-ping" />
            <span className="text-sage">ONLINE & ACTIVE ON WEB · MOBILE APP COMING SOON</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
