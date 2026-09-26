"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SIGN_IN_URL, SIGN_UP_URL } from "../../config/api";

const NAV_LINKS = [
  { id: "how-it-works", title: "How It Works" },
  { id: "pricing", title: "Pricing" },
  { id: "faq", title: "FAQ" },
];

export function AnimeHeader() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      NAV_LINKS.forEach((sec) => {
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

  const jumpTo = (id: string) => {
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
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 flex items-center justify-between">
        {/* Official Brand Logomark */}
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            jumpTo("heritage");
          }}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
        >
          <Image
            src="/brand/name-white.png"
            alt="Kikoba"
            width={2000}
            height={301}
            priority
            className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Center: Essential Single-Word Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-mono text-[12px] tracking-[0.2em] uppercase">
          {NAV_LINKS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => jumpTo(sec.id)}
                className={`relative cursor-pointer py-1.5 transition-colors duration-200 ${
                  isActive
                    ? "text-ochre font-bold"
                    : "text-platinum/70 hover:text-ivory"
                }`}
              >
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

        {/* Right Controls: Sign In & Sign Up */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={SIGN_IN_URL}
            className="text-platinum/80 hover:text-ivory font-mono text-[11px] sm:text-[12px] tracking-widest uppercase transition-colors px-2 sm:px-3 py-1.5 cursor-pointer font-bold"
          >
            Sign In
          </a>

          <a
            href={SIGN_UP_URL}
            className="flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-ochre hover:bg-[#d8b894] text-void font-black text-[11px] sm:text-[12px] font-mono tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(200,162,122,0.3)] active:scale-95 cursor-pointer"
          >
            <span>Sign Up</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-3" />
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation"
            className="lg:hidden p-2 rounded-lg border border-umber/60 text-ivory hover:border-ochre transition-colors ml-1"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-void border-b border-umber px-6 py-6 font-mono">
          <div className="flex flex-col gap-3 text-[13px] uppercase tracking-widest">
            {NAV_LINKS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => jumpTo(sec.id)}
                className="text-left text-platinum hover:text-ochre py-2 border-b border-umber/20 flex items-center justify-between"
              >
                <span>{sec.title}</span>
                <span className="text-ochre text-[10px]">JUMP →</span>
              </button>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={SIGN_IN_URL}
                className="w-full text-center py-3 border border-umber text-platinum font-mono text-[12px] uppercase tracking-widest hover:border-ochre transition-colors"
              >
                Sign In
              </a>
              <a
                href={SIGN_UP_URL}
                className="w-full text-center py-3 bg-ochre text-void font-mono font-black text-[12px] uppercase tracking-widest"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
