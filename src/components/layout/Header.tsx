"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SIGN_IN_URL, SIGN_UP_URL } from "../../config/api";
import { MAIN_NAVIGATION_LINKS, SECTION_IDS, SITE_CONFIG } from "../../config/site";

export function Header() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Precise Section Spy observing all sections with active viewport detection
  useEffect(() => {
    const visibleSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        // If at the top of page, force hero state (no nav options underlined)
        if (window.scrollY < 200) {
          setActiveSection(SECTION_IDS.HERO);
          return;
        }

        // If no observed section is currently in the active reading zone, clear active state
        if (visibleSections.size === 0) {
          setActiveSection("");
          return;
        }

        // Select the section with the highest visible ratio in the active reading zone
        let bestId = "";
        let bestRatio = -1;
        visibleSections.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId) {
          setActiveSection(bestId);
        }
      },
      { rootMargin: "-20% 0px -40% 0px", threshold: [0.05, 0.1, 0.25, 0.5] }
    );

    const allSectionIds = Object.values(SECTION_IDS);
    allSectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lightweight Header Backdrop Trigger with RAF Throttle & Scroll Position Guard
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          if (window.scrollY < 200) {
            setActiveSection(SECTION_IDS.HERO);
          } else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
            setActiveSection("");
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jumpTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    const el = document.getElementById(SECTION_IDS.HERO);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Accessibility: Keyboard Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2.5 focus:bg-ochre focus:text-void focus:font-mono focus:text-[12px] focus:font-black focus:rounded-full focus:shadow-[0_0_20px_rgba(200,162,122,0.6)] focus:outline-none"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-umber/40 bg-void/80 backdrop-blur-md py-3 transition-[background-color,box-shadow] duration-200 ${
          scrolled ? "shadow-[0_10px_35px_rgba(0,0,0,0.6)]" : "shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
        }`}
      >
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 flex items-center justify-between">
          {/* Official Brand Logomark */}
          <Link
            href="/"
            onClick={handleLogoClick}
            aria-label={`${SITE_CONFIG.name} Home`}
            className="flex items-center gap-3 cursor-pointer group shrink-0 min-h-11"
          >
            <Image
              src="/brand/name-white.png"
              alt={`${SITE_CONFIG.name} - Chama & Savings Group Management Platform`}
              width={2000}
              height={301}
              priority
              className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Center: Essential Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-8 font-mono text-[12px] tracking-[0.2em] uppercase"
          >
            {MAIN_NAVIGATION_LINKS.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => jumpTo(sec.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative cursor-pointer py-2 px-1 min-h-11 flex items-center transition-colors duration-200 ${
                    isActive
                      ? "text-ochre font-bold"
                      : "text-platinum/70 hover:text-ivory"
                  }`}
                >
                  <span>{sec.title}</span>
                  <span
                    className={`absolute bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-300 ${
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
              className="text-platinum/80 hover:text-ivory font-mono text-[11px] sm:text-[12px] tracking-widest uppercase transition-colors px-3 py-2.5 min-h-11 flex items-center cursor-pointer font-bold"
            >
              Sign In
            </a>

            <a
              href={SIGN_UP_URL}
              className="flex items-center gap-1.5 px-4 sm:px-5 py-2.5 min-h-11 rounded-full bg-ochre hover:bg-[#d8b894] text-void font-black text-[11px] sm:text-[12px] font-mono tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(200,162,122,0.3)] active:scale-95 cursor-pointer"
            >
              <span>Sign Up</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-3" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
              className="lg:hidden min-w-11 min-h-11 flex items-center justify-center rounded-lg border border-umber/60 text-ivory hover:border-ochre transition-colors ml-1 cursor-pointer"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <nav
            id="mobile-nav-drawer"
            aria-label="Mobile Navigation"
            className="lg:hidden bg-void border-b border-umber px-6 py-6 font-mono"
          >
            <div className="flex flex-col gap-2 text-[13px] uppercase tracking-widest">
              {MAIN_NAVIGATION_LINKS.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => jumpTo(sec.id)}
                  className="min-h-11 text-left text-platinum hover:text-ochre py-2 border-b border-umber/20 flex items-center justify-between cursor-pointer"
                >
                  <span>{sec.title}</span>
                  <span className="text-ochre text-[10px]">JUMP →</span>
                </button>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={SIGN_IN_URL}
                  className="w-full text-center py-3 min-h-11 flex items-center justify-center border border-umber text-platinum font-mono text-[12px] uppercase tracking-widest hover:border-ochre transition-colors"
                >
                  Sign In
                </a>
                <a
                  href={SIGN_UP_URL}
                  className="w-full text-center py-3 min-h-11 flex items-center justify-center bg-ochre text-void font-mono font-black text-[12px] uppercase tracking-widest"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
