"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { sound } from "../../utils/audio";
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from "lucide-react";

const SECTIONS = [
  { id: "heritage", title: "Heritage" },
  { id: "the-shift", title: "The Shift" },
  { id: "the-engine", title: "The Engine" },
  { id: "how-it-works", title: "How It Works" },
  { id: "yield", title: "Yield" },
  { id: "pricing", title: "Pricing" },
  { id: "faq", title: "FAQ" },
  { id: "vault", title: "Get Access" },
  { id: "mobile-app", title: "The App" },
];

export function AnimeHeader() {
  const [activeSection, setActiveSection] = useState("heritage");
  const [soundOn, setSoundOn] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      SECTIONS.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    const next = sound.toggle();
    setSoundOn(next);
  };

  const jumpTo = (id: string) => {
    sound.playClick(400);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,padding,box-shadow] duration-300 ${
        scrolled
          ? "bg-void/90 backdrop-blur-md border-umber/50 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          : "bg-linear-to-b from-void via-void/80 to-transparent border-umber/0 py-5"
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-16 flex items-center justify-between">
        {/* Brand Lockup with Official Kikoba Icon */}
        <div
          onClick={() => jumpTo("heritage")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-9 h-9 rounded-md bg-umber/40 border border-ochre/50 flex items-center justify-center p-1 group-hover:border-ochre shadow-[0_0_15px_rgba(200,162,122,0.18)] transition-all overflow-hidden shrink-0">
            <Image
              src="/brand/icon-main.png"
              alt="Kikoba Logo"
              width={34}
              height={34}
              priority
              className="w-full h-full object-contain group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-[15px] font-black tracking-[0.22em] text-ivory uppercase leading-none font-mono">
                KIKOBA
              </span>
              <span className="hidden xl:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[8px] font-mono tracking-widest uppercase bg-sage/10 text-sage border border-sage/20">
                <span className="w-1 h-1 rounded-full bg-sage animate-ping" />
                MAINNET
              </span>
            </div>
            <span className="text-[9px] font-mono tracking-[0.25em] text-ochre uppercase mt-0.5">
              AUTONOMOUS CHAMA PROTOCOL
            </span>
          </div>
        </div>

        {/* Center: Section Navigation (Reordered to Match Page Sequence) */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-7 font-mono text-[10px] xl:text-[11px] tracking-[0.16em] uppercase">
          {SECTIONS.map((sec, idx) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => jumpTo(sec.id)}
                className={`relative cursor-pointer py-1.5 flex items-center gap-1 transition-colors duration-200 ${
                  isActive
                    ? "text-ochre font-bold"
                    : "text-platinum/60 hover:text-ivory"
                }`}
              >
                <span className="text-[9px] text-ochre/50 font-mono">0{idx + 1}.</span>
                <span>{sec.title}</span>
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-ochre opacity-100 scale-x-100"
                      : "bg-ochre/0 opacity-0 scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Sound / Atmosphere Button */}
          <button
            onClick={toggleSound}
            type="button"
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-umber/50 bg-umber/20 hover:border-ochre text-platinum text-[10px] font-mono tracking-wider transition-colors cursor-pointer"
          >
            {soundOn ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-sage" />
                <span className="text-sage">AUDIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-platinum/50" />
                <span>AUDIO OFF</span>
              </>
            )}
          </button>

          {/* Action CTA */}
          <button
            onClick={() => jumpTo("vault")}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-ochre hover:bg-[#d8b894] text-void font-black text-[11px] font-mono tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(200,162,122,0.4)] active:scale-95 cursor-pointer"
          >
            <span>START CHAMA</span>
            <ArrowUpRight className="w-3 h-3 stroke-3" />
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation"
            className="lg:hidden p-2 rounded-lg border border-umber/60 text-ivory hover:border-ochre transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-void border-b border-umber px-6 py-6 font-mono">
          <div className="flex flex-col gap-4 text-[13px] uppercase tracking-widest">
            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => jumpTo(sec.id)}
                className="text-left text-platinum hover:text-ochre py-2 border-b border-umber/20 flex items-center justify-between"
              >
                <span>{sec.title}</span>
                <span className="text-ochre text-[10px]">JUMP →</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
