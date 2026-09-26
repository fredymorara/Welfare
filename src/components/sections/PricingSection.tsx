"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Check, X, ArrowDown, ArrowUpRight } from "lucide-react";
import { useSubscriptionPackages, MOCK_PACKAGES } from "../../hooks/useSubscriptionPackages";
import { SIGN_UP_URL } from "../../config/api";
import { SECTION_IDS } from "../../config/site";
import { useIsMobile } from "../../hooks/useIsMobile";

type Period = "monthly" | "annual";

function getPlanPrice(pkg: SubPackage, period: Period) {
  const tier = pkg.pricingTiers.find((t) => t.period === period);
  if (!tier) return { price: 0, discount: 0 };
  return { price: tier.price, discount: tier.discount ?? 0 };
}

const FEATURE_ROWS = [
  { key: "members", label: "Members" },
  { key: "loans", label: "Table Banking Loans" },
  { key: "expenses", label: "Expense Tracking" },
  { key: "events", label: "Events & Projects" },
  { key: "sms", label: "SMS Notifications" },
  { key: "trial", label: "Free Trial" },
];

function getFeatureValue(pkg: SubPackage, key: string): { available: boolean; label?: string } {
  switch (key) {
    case "members":
      return { available: true, label: `Up to ${pkg.features.users.limit}` };
    case "loans":
      return { available: pkg.features.loans.available };
    case "expenses":
      return { available: pkg.features.expenses.available };
    case "events":
      return { available: pkg.features.events.available, label: pkg.features.events.available ? `${pkg.features.events.maxEvents} events` : undefined };
    case "sms":
      return { available: pkg.features.notifications.sms.available, label: pkg.features.notifications.sms.available ? `${pkg.features.notifications.sms.limitPerMonth}/mo` : undefined };
    case "trial":
      return { available: pkg.isTrial, label: pkg.isTrial ? `${pkg.trialDurationDays ?? 14} days free` : undefined };
    default:
      return { available: false };
  }
}

export function PricingSection() {
  const containerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  const disableMotion = isMobile || shouldReduceMotion;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [period, setPeriod] = useState<Period>("monthly");
  const { packages } = useSubscriptionPackages();
  const displayPackages = packages && packages.length > 0 ? packages : MOCK_PACKAGES;

  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const PLAN_STYLE: Record<string, { accent: string; badge: string; cta: string; highlight: boolean }> = {
    STARTER:  { accent: "border-umber/60", badge: "", cta: "border border-umber/60 text-ivory hover:border-ochre hover:text-ochre", highlight: false },
    STANDARD: { accent: "border-ochre", badge: "MOST POPULAR", cta: "bg-ochre hover:bg-[#d8b894] text-void", highlight: true },
    PREMIUM:  { accent: "border-sage/60", badge: "ENTERPRISE", cta: "border border-sage/40 text-sage hover:border-sage hover:bg-sage/10", highlight: false },
  };

  return (
    <section
      ref={containerRef}
      id={SECTION_IDS.PRICING}
      className="relative min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-16 xl:px-20 pt-28 pb-16 w-full overflow-hidden select-none bg-void"
      style={{ contain: "paint" }}
    >
      {/* Subtle parallax background geometry */}
      <motion.svg
        style={{ y: disableMotion ? "0%" : bgY }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-10"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <rect x="200" y="100" width="400" height="700" fill="none" stroke="#6F4E37" strokeWidth="1" />
        <rect x="520" y="60" width="400" height="780" fill="none" stroke="#C8A27A" strokeWidth="1.5" />
        <rect x="840" y="100" width="400" height="700" fill="none" stroke="#6F4E37" strokeWidth="1" />
      </motion.svg>

      {/* Top Narrative Anchor */}
      <div className="relative z-10 flex items-center justify-between border-b border-umber/40 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-ochre" />
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-ivory">
            SIMPLE, FAIR PRICING
          </span>
        </div>
        <span className="text-[10px] font-mono text-sage tracking-widest hidden sm:inline">
          NO HIDDEN CHARGES · INVOICED IN KES
        </span>
      </div>

      {/* Main Drama */}
      <div className="relative z-10 my-auto w-full max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <span className="text-ochre font-mono text-[13px] tracking-[0.3em] uppercase block mb-3">
              [ CHOOSE YOUR PLAN ]
            </span>
            <h2 className="text-[44px] sm:text-[68px] lg:text-[88px] font-black tracking-[-0.04em] text-ivory leading-[0.92] uppercase">
              Transparent plans. <br />
              <span className="text-ochre font-serif italic font-normal tracking-tight">
                No surprises.
              </span>
            </h2>
          </div>

          {/* Period Toggle */}
          <div className="flex items-center border border-umber/60 p-1 self-start sm:self-end font-mono text-[11px] uppercase tracking-wider">
            <button
              onClick={() => setPeriod("monthly")}
              className={`px-4 py-2 transition-all cursor-pointer ${
                period === "monthly" ? "bg-ochre text-void font-bold" : "text-platinum/60 hover:text-ivory"
              }`}
            >
              Billed Monthly
            </button>
            <button
              onClick={() => setPeriod("annual")}
              className={`px-4 py-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                period === "annual" ? "bg-ochre text-void font-bold" : "text-platinum/60 hover:text-ivory"
              }`}
            >
              <span>Annual</span>
              <span className="text-[9px] text-sage font-bold">SAVE UP TO 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {displayPackages.map((pkg, idx) => {
            const style = PLAN_STYLE[pkg.code] ?? PLAN_STYLE.STARTER;
            const { price } = getPlanPrice(pkg, period);

            return (
              <motion.div
                key={pkg._id ?? idx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className={`relative flex flex-col justify-between border ${style.accent} bg-void-surface transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${
                  style.highlight ? "shadow-[0_0_40px_rgba(200,162,122,0.15)] ring-1 ring-ochre/30" : ""
                }`}
              >
                {/* Top Badge */}
                {style.badge && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 bg-ochre text-void font-mono text-[9px] font-black tracking-[0.25em] uppercase">
                    {style.badge}
                  </div>
                )}

                <div className="p-8 pb-6">
                  {/* Package Code & Name */}
                  <div className="text-[10px] font-mono text-ochre uppercase tracking-[0.3em] mb-2">
                    {"//"} {pkg.code}
                  </div>
                  <h3 className="text-[26px] font-black text-ivory uppercase tracking-[-0.02em] mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-[13px] text-platinum/70 font-light leading-relaxed mb-6 min-h-10">
                    {pkg.description}
                  </p>

                  {/* Price Block */}
                  <div className="py-4 border-t border-b border-umber/30 mb-6 font-mono">
                    {price === 0 ? (
                      <div className="text-[36px] font-black text-ivory leading-none">FREE</div>
                    ) : (
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[14px] text-platinum/50 font-normal">KES</span>
                        <span className="text-[36px] font-black text-ivory leading-none">
                          {price.toLocaleString()}
                        </span>
                        <span className="text-[11px] text-platinum/40">
                          /{period === "annual" ? "yr" : "mo"}
                        </span>
                      </div>
                    )}
                    <div className="text-[10px] text-platinum/40 mt-1 uppercase tracking-widest">
                      {period === "annual" ? "BILLED ANNUALLY" : "BILLED MONTHLY"}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 font-mono text-[12px]">
                    {FEATURE_ROWS.map(({ key, label }) => {
                      const val = getFeatureValue(pkg, key);
                      return (
                        <div key={key} className="flex items-center justify-between gap-2">
                          <span className={`text-[12px] ${val.available ? "text-platinum/80" : "text-platinum/30 line-through"}`}>
                            {label}
                          </span>
                          <span className="shrink-0">
                            {val.available ? (
                              val.label ? (
                                <span className="text-[10px] text-sage font-bold uppercase">{val.label}</span>
                              ) : (
                                <Check className="w-3.5 h-3.5 text-sage stroke-2" />
                              )
                            ) : (
                              <X className="w-3.5 h-3.5 text-platinum/20" />
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CTA */}
                <div className="p-8 pt-0">
                  <a
                    href={SIGN_UP_URL}
                    className={`flex items-center justify-center gap-2 w-full py-3.5 font-black text-[12px] font-mono tracking-widest uppercase transition-all duration-200 cursor-pointer ${style.cta}`}
                  >
                    <span>Sign Up</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  {pkg.isTrial && (
                    <div className="text-center text-[10px] font-mono text-platinum/40 mt-3 uppercase tracking-widest">
                      {pkg.trialDurationDays ?? 14}-DAY FREE TRIAL INCLUDED
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Section Footer */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-umber/30">
        <span className="text-[11px] font-mono tracking-widest uppercase text-ivory">
          COMMON QUESTIONS FROM CHAMA LEADERS
        </span>
        <a
          href={`#${SECTION_IDS.FAQ}`}
          className="inline-flex items-center gap-2 text-[12px] font-mono tracking-widest uppercase text-ochre hover:text-ivory transition-colors group cursor-pointer"
        >
          <span>READ THE FAQ</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
