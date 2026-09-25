"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Check, X, ArrowDown, ArrowUpRight } from "lucide-react";
import { useSubscriptionPackages } from "../../hooks/useSubscriptionPackages";
import { SIGN_UP_URL } from "../../config/api";
import { sound } from "../../utils/audio";

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

export function Scene07Pricing() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [period, setPeriod] = useState<Period>("monthly");
  const { packages, loading } = useSubscriptionPackages();

  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const PLAN_STYLE: Record<string, { accent: string; badge: string; cta: string; highlight: boolean }> = {
    STARTER:  { accent: "border-umber/60", badge: "", cta: "border border-umber/60 text-ivory hover:border-ochre hover:text-ochre", highlight: false },
    STANDARD: { accent: "border-ochre", badge: "MOST POPULAR", cta: "bg-ochre hover:bg-[#d8b894] text-void", highlight: true },
    PREMIUM:  { accent: "border-sage/60", badge: "ENTERPRISE", cta: "border border-sage/40 text-sage hover:border-sage hover:bg-sage/10", highlight: false },
  };

  return (
    <section
      ref={containerRef}
      id="pricing"
      className="relative min-h-screen flex flex-col justify-between px-6 sm:px-16 lg:px-24 pt-28 pb-16 w-full overflow-hidden select-none bg-void"
    >
      {/* Subtle parallax background geometry */}
      <motion.svg
        style={{ y: bgY }}
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
            TRANSPARENT COVENANT PRICING
          </span>
        </div>
        <span className="text-[10px] font-mono text-sage tracking-widest hidden sm:inline">
          NO HIDDEN CHARGES · KES-DENOMINATED
        </span>
      </div>

      {/* Main Drama */}
      <div className="relative z-10 my-auto w-full max-w-6xl mx-auto">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <span className="text-ochre font-mono text-[13px] tracking-[0.3em] uppercase block mb-3">
              [ CHOOSE YOUR PROTOCOL ]
            </span>
            <h2 className="text-[44px] sm:text-[72px] lg:text-[88px] font-black tracking-[-0.04em] text-ivory leading-[0.92] uppercase">
              One vault. <br />
              <span className="text-ochre font-serif italic font-normal tracking-tight">
                Three tiers.
              </span>
            </h2>
          </div>

          {/* Period Toggle */}
          <div className="flex items-center gap-0 border border-umber/60 font-mono text-[11px] uppercase tracking-widest shrink-0">
            <button
              onClick={() => { setPeriod("monthly"); sound.playClick(320); }}
              className={`px-5 py-2.5 transition-colors cursor-pointer ${period === "monthly" ? "bg-umber/60 text-ivory" : "text-platinum/50 hover:text-ivory"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => { setPeriod("annual"); sound.playClick(360); }}
              className={`px-5 py-2.5 transition-colors cursor-pointer relative ${period === "annual" ? "bg-umber/60 text-ivory" : "text-platinum/50 hover:text-ivory"}`}
            >
              Annual
              {period === "annual" && (
                <span className="absolute -top-2.5 -right-2 text-[8px] bg-sage text-void px-1.5 py-0.5 rounded-sm font-bold">-16%</span>
              )}
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center text-platinum/50 font-mono text-[13px] uppercase tracking-widest py-20">
            LOADING PROTOCOL TIERS...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => {
              const style = PLAN_STYLE[pkg.code] ?? PLAN_STYLE.STARTER;
              const { price, discount } = getPlanPrice(pkg, period);
              const isFree = price === 0;

              return (
                <motion.div
                  key={pkg._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className={`relative border-2 ${style.accent} ${style.highlight ? "bg-umber/30 shadow-[0_0_50px_rgba(200,162,122,0.15)]" : "bg-void"} flex flex-col`}
                >
                  {style.badge && (
                    <div className="absolute -top-3 left-6 text-[9px] font-mono tracking-[0.3em] uppercase bg-ochre text-void px-3 py-1">
                      {style.badge}
                    </div>
                  )}

                  <div className="p-8 flex-1">
                    {/* Plan name */}
                    <div className="text-[10px] font-mono tracking-[0.4em] uppercase text-platinum/50 mb-1">
                      {pkg.code}
                    </div>
                    <h3 className="text-[28px] font-black text-ivory uppercase tracking-[-0.02em] mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-[13px] font-extralight text-platinum/70 leading-relaxed mb-6">
                      {pkg.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-umber/30">
                      {isFree ? (
                        <div className="text-[40px] font-black text-ivory font-mono leading-none">
                          FREE
                        </div>
                      ) : (
                        <div className="flex items-end gap-2">
                          <div className="text-[40px] font-black text-ivory font-mono leading-none">
                            KES {price.toLocaleString()}
                          </div>
                          <div className="text-[12px] font-mono text-platinum/50 mb-1.5">
                            /{period === "monthly" ? "mo" : "yr"}
                          </div>
                        </div>
                      )}
                      {discount > 0 && period === "annual" && (
                        <div className="text-[11px] font-mono text-sage mt-1 uppercase tracking-widest">
                          ✓ SAVE {discount}% VS MONTHLY
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {FEATURE_ROWS.map((row) => {
                        const val = getFeatureValue(pkg, row.key);
                        return (
                          <div key={row.key} className="flex items-center gap-3 font-mono text-[12px]">
                            <div className={`w-4 h-4 rounded-sm flex items-center justify-center shrink-0 ${val.available ? "bg-umber/40 text-ochre" : "bg-void text-platinum/20"}`}>
                              {val.available ? <Check className="w-2.5 h-2.5" /> : <X className="w-2.5 h-2.5" />}
                            </div>
                            <span className={val.available ? "text-platinum/90" : "text-platinum/30"}>
                              {val.label ?? row.label}
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
                      onClick={() => sound.playClick(440)}
                      className={`flex items-center justify-center gap-2 w-full py-3.5 font-black text-[11px] font-mono tracking-[0.2em] uppercase transition-all duration-200 cursor-pointer ${style.cta}`}
                    >
                      <span>{isFree ? "START FREE" : "GET STARTED"}</span>
                      <ArrowUpRight className="w-3 h-3" />
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
        )}
      </div>

      {/* Section Footer */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-umber/30">
        <span className="text-[11px] font-mono tracking-widest uppercase text-ivory">
          COMMON QUESTIONS FROM CHAMA LEADERS
        </span>
        <a
          href="#faq"
          onClick={() => sound.playClick(500)}
          className="inline-flex items-center gap-2 text-[12px] font-mono tracking-widest uppercase text-ochre hover:text-ivory transition-colors group cursor-pointer"
        >
          <span>READ THE FAQ</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
