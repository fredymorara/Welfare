"use client";

import { ArrowUp, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SIGN_IN_URL, SIGN_UP_URL } from "../../config/api";
import { MAIN_NAVIGATION_LINKS, SECTION_IDS, SITE_CONFIG } from "../../config/site";

export function Footer() {
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const jumpTo = (id: string) => {
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
    <footer className="relative bg-void-deep border-t-2 border-umber pt-16 pb-12 px-6 sm:px-12 lg:px-16 xl:px-20 w-full select-none z-10">
      {/* Edge-to-Edge Container */}
      <div className="w-full">
        {/* Top Header with Official Kikoba Wordmark */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-umber/40">
          <div>
            <div className="flex flex-col gap-3 mb-2">
              <Link
                href="/"
                onClick={handleLogoClick}
                aria-label={`${SITE_CONFIG.name} Home`}
                className="flex items-center cursor-pointer min-h-11"
              >
                <Image
                  src="/brand/name-white.png"
                  alt={`${SITE_CONFIG.name} - Digital Accounting for East African Chamas`}
                  width={2000}
                  height={301}
                  loading="lazy"
                  className="h-8 sm:h-10 w-auto object-contain self-start"
                />
              </Link>
              <p className="text-[13px] font-mono text-platinum/60 tracking-wider">
                SIMPLE DIGITAL ACCOUNTING & SAVINGS PLATFORM FOR CHAMAS
              </p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Scroll back to top of page"
            className="self-start md:self-end flex items-center gap-2 px-5 py-2.5 min-h-11 rounded-full border border-umber hover:border-ochre text-ivory text-[11px] font-mono tracking-widest uppercase transition-colors cursor-pointer group focus-visible:ring-2 focus-visible:ring-ochre"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-ochre group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Clean 3-Column Content: Heritage, Navigation, Legal & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 py-12 border-b border-umber/40 font-mono">
          {/* Column 1: Cultural Heritage */}
          <div className="md:col-span-6 lg:col-span-6 max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-ochre block mb-4">
              {"// CULTURAL HERITAGE"}
            </span>
            <p className="text-[14px] font-extralight text-platinum/80 leading-relaxed mb-4">
              Chamas, Vikoba, and Table Banking groups are the heartbeat of our
              communities. {SITE_CONFIG.name} makes collective savings simple, transparent,
              and dispute-free so trust grows stronger with every cycle.
            </p>
            <div className="p-3 border-l-2 border-sage bg-void text-[12px] text-sage">
              &ldquo;{SITE_CONFIG.culturalQuote.swahili}&rdquo; <br />
              <span className="text-[10px] text-platinum/50 font-normal">
                {SITE_CONFIG.culturalQuote.english}
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-ochre block mb-4">
              {"// NAVIGATION"}
            </span>
            <ul className="space-y-1 text-[13px] text-platinum/70">
              {MAIN_NAVIGATION_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => jumpTo(link.id)}
                    className="w-full text-left py-2 min-h-10 flex items-center hover:text-ivory hover:underline transition-colors cursor-pointer uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-ochre rounded"
                  >
                    {link.title}
                  </button>
                </li>
              ))}
              <li className="pt-3 border-t border-umber/30 flex items-center gap-4 text-ochre uppercase font-bold text-[12px] tracking-widest min-h-11">
                <a href={SIGN_IN_URL} className="hover:text-ivory transition-colors py-2">
                  Sign In
                </a>
                <span>·</span>
                <a href={SIGN_UP_URL} className="hover:text-ivory transition-colors py-2">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Direct Contact */}
          <div className="md:col-span-3 lg:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-ochre block mb-4">
              {"// LEGAL & SUPPORT"}
            </span>
            <ul className="space-y-1 text-[13px] text-platinum/70 mb-5">
              <li>
                <Link
                  href="/privacy"
                  className="py-2 min-h-10 flex items-center hover:text-ivory hover:underline transition-colors uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-ochre rounded"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="py-2 min-h-10 flex items-center hover:text-ivory hover:underline transition-colors uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-ochre rounded"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>

            <div className="pt-3 border-t border-umber/30">
              <span className="text-[10px] text-platinum/50 uppercase tracking-widest block mb-2">
                Support Email
              </span>
              <a
                href={`mailto:${SITE_CONFIG.supportEmail}`}
                className="min-h-11 inline-flex items-center gap-2 text-[12px] text-ochre hover:text-ivory transition-colors focus-visible:ring-2 focus-visible:ring-ochre rounded"
              >
                <Mail className="w-3.5 h-3.5 text-ochre shrink-0" />
                <span>{SITE_CONFIG.supportEmail}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Clean Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-platinum/50 uppercase tracking-widest">
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.name.toUpperCase()}. ALL RIGHTS RESERVED.
          </div>

          <div>
            BUILT FOR COMMUNITY GROUPS ACROSS EAST AFRICA
          </div>
        </div>
      </div>
    </footer>
  );
}
