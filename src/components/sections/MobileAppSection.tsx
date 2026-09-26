"use client";

import { useState, useRef, type FormEvent } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Smartphone, ArrowRight, CheckCircle2 } from "lucide-react";
import { SECTION_IDS, SITE_CONFIG } from "../../config/site";

const PLATFORMS = [
  { label: "iOS", sub: "App Store", icon: "◆" },
  { label: "Android", sub: "Google Play", icon: "◈" },
];

export function MobileAppSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Phone mockup parallax
  const phoneY = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [4, -4]);
  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.6, 1], [0.2, 0.55, 0.25]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section
      ref={containerRef}
      id={SECTION_IDS.MOBILE_APP}
      className="relative min-h-screen flex flex-col justify-between px-6 sm:px-16 lg:px-24 pt-28 pb-20 w-full overflow-hidden select-none bg-void"
      style={{ perspective: "1200px" }}
    >
      {/* Ambient glow behind phone */}
      <motion.div
        style={{
          opacity: glowOpacity,
          background: "radial-gradient(circle, rgba(200,162,122,0.3) 0%, rgba(111,78,55,0.15) 50%, transparent 80%)",
        }}
        className="absolute right-[5%] top-1/2 -translate-y-1/2 w-125 h-150 rounded-full pointer-events-none z-0 blur-[100px]"
      />

      {/* Top Narrative Anchor */}
      <div className="relative z-10 flex items-center justify-between border-b border-umber/40 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-ochre animate-ping" />
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-ivory">
            DEDICATED MOBILE APP
          </span>
        </div>
        <span className="text-[10px] font-mono text-sage tracking-widest hidden sm:inline">
          ● COMING SOON TO GOOGLE PLAY & APP STORE
        </span>
      </div>

      {/* Main Drama: Left content + Right Phone mockup */}
      <div className="relative z-10 my-auto w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

        {/* Left: Copy */}
        <div className="lg:col-span-6">
          <span className="text-ochre font-mono text-[13px] tracking-[0.3em] uppercase block mb-4">
            [ COMING SOON TO YOUR PHONE ]
          </span>

          <h2 className="text-[52px] sm:text-[80px] lg:text-[100px] font-black tracking-[-0.04em] text-ivory leading-[0.90] uppercase mb-6">
            Your Chama, <br />
            <span className="text-ochre font-serif italic font-normal tracking-tight">
              always in pocket.
            </span>
          </h2>

          <p className="text-[18px] sm:text-[21px] font-extralight text-platinum leading-[1.65] border-l-2 border-ochre pl-6 mb-8">
            While {SITE_CONFIG.name} is already active and serving groups on the web today, we are developing a dedicated mobile app for Android and iOS. Get instant M-Pesa push notifications, approve loans on the move, and check your savings in one tap.
          </p>

          {/* Platform Badges */}
          <div className="flex flex-wrap gap-4 mb-8">
            {PLATFORMS.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-3 border border-umber/60 px-5 py-3 font-mono"
              >
                <span className="text-ochre text-[18px]">{p.icon}</span>
                <div>
                  <div className="text-[13px] text-ivory font-bold tracking-wide">{p.label}</div>
                  <div className="text-[10px] text-platinum/50 uppercase tracking-widest">{p.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Waitlist Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3 max-w-lg">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-5 py-4 bg-umber/30 border-2 border-umber text-ivory placeholder-platinum/40 text-[14px] font-mono focus:outline-none focus:border-ochre transition-colors"
              />
              <button
                type="submit"
                className="px-7 py-4 bg-ochre hover:bg-[#d8b894] text-void font-black text-[11px] font-mono tracking-[0.2em] uppercase transition-all duration-200 hover:shadow-[0_0_30px_rgba(200,162,122,0.4)] active:scale-95 cursor-pointer flex items-center justify-center gap-2 shrink-0"
              >
                <span>JOIN WAITLIST</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-4 border-2 border-sage bg-sage/10 px-6 py-5 max-w-lg"
            >
              <CheckCircle2 className="w-6 h-6 text-sage shrink-0" />
              <div>
                <div className="text-[13px] font-black text-sage uppercase tracking-widest font-mono">YOU&apos;RE ON THE LIST!</div>
                <div className="text-[13px] font-extralight text-platinum mt-0.5">
                  We will notify you the moment the mobile app launches on Google Play and the App Store.
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Right: SVG Phone Mockup */}
        <div className="lg:col-span-6 hidden lg:flex items-center justify-center">
          <motion.div style={{ y: phoneY, rotateY: phoneRotate }}>
            <svg
              width="280"
              height="560"
              viewBox="0 0 280 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_40px_80px_rgba(200,162,122,0.25)]"
            >
              {/* Phone frame */}
              <rect x="2" y="2" width="276" height="556" rx="36" ry="36" fill="#1a0f08" stroke="#6F4E37" strokeWidth="2" />
              {/* Screen */}
              <rect x="14" y="36" width="252" height="488" rx="8" ry="8" fill="#2E2118" />
              {/* Notch */}
              <rect x="100" y="14" width="80" height="14" rx="7" fill="#0f0a06" />
              {/* Home indicator */}
              <rect x="110" y="530" width="60" height="4" rx="2" fill="#6F4E37" />

              {/* App UI elements inside screen */}
              {/* Status bar */}
              <rect x="24" y="52" width="232" height="1" fill="#6F4E37" fillOpacity="0.4" />

              {/* App header */}
              <image href="/brand/icon-main.png" x="24" y="68" width="18" height="18" preserveAspectRatio="xMidYMid meet" />
              <text x="48" y="81" fill="#C8A27A" fontSize="9" fontFamily="monospace" letterSpacing="3" fontWeight="bold">KIKOBA</text>
              <circle cx="242" cy="76" r="12" fill="#6F4E37" fillOpacity="0.3" />

              {/* Ledger card */}
              <rect x="24" y="100" width="232" height="90" rx="4" fill="#1c130d" stroke="#6F4E37" strokeWidth="1" />
              <text x="36" y="122" fill="#C8A27A" fontSize="7" fontFamily="monospace" letterSpacing="2">CHAMA SAVINGS</text>
              <text x="36" y="150" fill="#F8F4EE" fontSize="22" fontFamily="monospace" fontWeight="bold">KES 2.4M</text>
              <text x="36" y="170" fill="#7B9B7A" fontSize="7" fontFamily="monospace" letterSpacing="1">↑ +KES 45,000 THIS CYCLE</text>

              {/* Members row */}
              <rect x="24" y="204" width="110" height="60" rx="4" fill="#1c130d" stroke="#6F4E37" strokeWidth="1" />
              <text x="34" y="222" fill="#C8A27A" fontSize="6" fontFamily="monospace" letterSpacing="1">MEMBERS</text>
              <text x="34" y="248" fill="#F8F4EE" fontSize="18" fontFamily="monospace" fontWeight="bold">32</text>

              <rect x="146" y="204" width="110" height="60" rx="4" fill="#1c130d" stroke="#6F4E37" strokeWidth="1" />
              <text x="156" y="222" fill="#7B9B7A" fontSize="6" fontFamily="monospace" letterSpacing="1">LOANS ACTIVE</text>
              <text x="156" y="248" fill="#F8F4EE" fontSize="18" fontFamily="monospace" fontWeight="bold">7</text>

              {/* Transaction list */}
              <text x="24" y="288" fill="#E7E8EA" fontSize="7" fontFamily="monospace" letterSpacing="2">RECENT TRANSACTIONS</text>
              {[
                { label: "Amina Contribution", amount: "+5,000", color: "#7B9B7A", y: 0 },
                { label: "Kamau Loan Repmt.", amount: "+2,500", color: "#7B9B7A", y: 28 },
                { label: "Event Expense", amount: "-1,200", color: "#C8A27A", y: 56 },
                { label: "Ochieng Contribution", amount: "+5,000", color: "#7B9B7A", y: 84 },
              ].map((tx) => (
                <g key={tx.label}>
                  <rect x="24" y={300 + tx.y} width="232" height="22" rx="2" fill="#1c130d" />
                  <text x="34" y={315 + tx.y} fill="#E7E8EA" fontSize="7" fontFamily="monospace">{tx.label}</text>
                  <text x="222" y={315 + tx.y} fill={tx.color} fontSize="7" fontFamily="monospace" textAnchor="end">{tx.amount}</text>
                </g>
              ))}

              {/* Bottom CTA button */}
              <rect x="24" y="466" width="232" height="40" rx="20" fill="#C8A27A" />
              <text x="140" y="491" fill="#2E2118" fontSize="9" fontFamily="monospace" letterSpacing="2" textAnchor="middle" fontWeight="bold">SIGN IN</text>
            </svg>

            {/* Glow pulse ring under phone */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-[36px] border border-ochre/20 pointer-events-none"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Anchor */}
      <div className="relative z-10 pt-6 border-t border-umber/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-platinum/50 uppercase tracking-widest">
        <div className="flex items-center gap-3">
          <Smartphone className="w-3.5 h-3.5 text-ochre" />
          <span>iOS · ANDROID · COMING SOON</span>
        </div>
        <span className="text-sage">● EARLY ACCESS REGISTRATIONS OPEN</span>
      </div>
    </section>
  );
}
