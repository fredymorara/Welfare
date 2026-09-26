"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "motion/react";
import {
  ArrowDown,
  Key,
  ShieldCheck,
  Zap,
  CheckCircle2,
  RefreshCw,
  FileText,
  Check,
  Clock,
  Send,
  Lock,
  Download,
} from "lucide-react";
import { SECTION_IDS } from "../../config/site";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useAutoCycle } from "../../hooks/useAutoCycle";

export function FeaturesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  const disableMotion = isMobile || shouldReduceMotion;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const {
    currentIndex,
    handleSelect,
    isInView,
    isOverrideActive,
    currentInterval,
    cycleKey,
  } = useAutoCycle({
    containerRef,
    totalItems: 3,
    defaultInterval: 5000,
    overrideInterval: 10000,
  });

  const pulseNode = currentIndex + 1;

  // Feature 1: M-Pesa Simulation State
  const [mpesaState, setMpesaState] = useState<"idle" | "simulating" | "success">("idle");
  const [chamaTotal, setChamaTotal] = useState<number>(345000);

  // Feature 2: Multi-Sign Approval State
  const [treasurerApproved, setTreasurerApproved] = useState<boolean>(false);

  // Feature 3: Statement & Tab State
  const [memberTab, setMemberTab] = useState<"member" | "group">("member");
  const [statementDownloaded, setStatementDownloaded] = useState<boolean>(false);

  // Perspective on Scroll: disabled on mobile to prevent 3D card jitter
  const schematicRotateX = useTransform(
    scrollYProgress,
    [0.1, 0.5, 0.9],
    [disableMotion ? 0 : 4, 0, disableMotion ? 0 : -3]
  );

  const handleSimulatePayment = () => {
    handleSelect(0);
    setMpesaState("simulating");
    setTimeout(() => {
      setMpesaState("success");
      setChamaTotal((prev) => prev + 5000);
    }, 900);
  };

  const handleResetPayment = () => {
    handleSelect(0);
    setMpesaState("idle");
  };

  const handleApproveLoan = () => {
    handleSelect(1);
    setTreasurerApproved(true);
  };

  const handleResetLoan = () => {
    handleSelect(1);
    setTreasurerApproved(false);
  };

  const handleDownloadStatement = () => {
    handleSelect(2);
    setStatementDownloaded(true);
    setTimeout(() => setStatementDownloaded(false), 3000);
  };

  return (
    <section
      ref={containerRef}
      id={SECTION_IDS.FEATURES}
      className="relative min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-16 xl:px-20 pt-28 pb-16 w-full overflow-hidden select-none bg-void"
      style={{ perspective: "1200px" }}
    >
      {/* Top Narrative Anchor */}
      <div className="relative z-10 flex items-center justify-between border-b border-umber/40 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-ochre" />
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-ivory">
            SIMPLE & SECURE GROUP MANAGEMENT
          </span>
        </div>

        <span className="text-[10px] font-mono text-sage tracking-widest hidden sm:inline">
          {isOverrideActive
            ? "● EXTENDED 10S FEATURE PREVIEW ACTIVE"
            : "● REAL INTERACTIVE FEATURES · SELECT TO TEST"}
        </span>
      </div>

      {/* Center Monolithic Drama & Clean Schematic Stage */}
      <div className="relative z-10 my-auto w-full max-w-7xl mx-auto py-8">
        <div className="mb-10">
          <span className="text-ochre font-mono text-[13px] tracking-[0.3em] uppercase block mb-3">
            [ HOW KIKOBA PROTECTS YOUR MONEY ]
          </span>

          <h2 className="text-[42px] sm:text-[68px] lg:text-[90px] font-black tracking-[-0.04em] text-ivory leading-[0.92] uppercase mb-6">
            Built for honesty. <br />
            <span className="text-ochre font-serif italic font-normal tracking-tight">
              Controlled by your leaders.
            </span>
          </h2>

          <p className="text-[18px] sm:text-[22px] font-extralight text-platinum leading-[1.65] max-w-2xl border-l-2 border-ochre pl-6">
            Three simple, dependable tools that solve the biggest causes of chama conflict: missing payment records, unverified loan decisions, and messy financial statements.
          </p>
        </div>

        {/* Feature Selector Tabs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <button
            onClick={() => handleSelect(0)}
            className={`relative overflow-hidden flex-1 p-4 border transition-all duration-300 cursor-pointer text-left font-mono text-[12px] uppercase tracking-wider ${
              pulseNode === 1
                ? "border-ochre bg-umber/30 text-ochre shadow-[0_0_20px_rgba(200,162,122,0.2)]"
                : "border-umber/40 text-platinum/60 hover:border-umber/80 hover:text-platinum"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-ochre">01 // TRACKING</span>
              <Zap className="w-4 h-4 text-ochre" />
            </div>
            <div className="font-bold text-[14px] text-ivory">Instant M-Pesa Recording</div>
            <div className="text-[10px] text-platinum/50 font-normal lowercase mt-0.5">Automated SMS & payment logging</div>

            {pulseNode === 1 && isInView && (
              <motion.div
                key={`feat-progress-1-${cycleKey}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: currentInterval / 1000, ease: "linear" }}
                style={{ originX: 0 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-ochre"
              />
            )}
          </button>

          <button
            onClick={() => handleSelect(1)}
            className={`relative overflow-hidden flex-1 p-4 border transition-all duration-300 cursor-pointer text-left font-mono text-[12px] uppercase tracking-wider ${
              pulseNode === 2
                ? "border-ochre bg-umber/30 text-ochre shadow-[0_0_20px_rgba(200,162,122,0.2)]"
                : "border-umber/40 text-platinum/60 hover:border-umber/80 hover:text-platinum"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-ochre">02 // TABLE BANKING</span>
              <Key className="w-4 h-4 text-ochre" />
            </div>
            <div className="font-bold text-[14px] text-ivory">Two-Official Loan Approvals</div>
            <div className="text-[10px] text-platinum/50 font-normal lowercase mt-0.5">Both Chair & Treasurer must verify</div>

            {pulseNode === 2 && isInView && (
              <motion.div
                key={`feat-progress-2-${cycleKey}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: currentInterval / 1000, ease: "linear" }}
                style={{ originX: 0 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-ochre"
              />
            )}
          </button>

          <button
            onClick={() => handleSelect(2)}
            className={`relative overflow-hidden flex-1 p-4 border transition-all duration-300 cursor-pointer text-left font-mono text-[12px] uppercase tracking-wider ${
              pulseNode === 3
                ? "border-ochre bg-umber/30 text-ochre shadow-[0_0_20px_rgba(200,162,122,0.2)]"
                : "border-umber/40 text-platinum/60 hover:border-umber/80 hover:text-platinum"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-ochre">03 // TRANSPARENCY</span>
              <ShieldCheck className="w-4 h-4 text-ochre" />
            </div>
            <div className="font-bold text-[14px] text-ivory">24/7 Member Statements</div>
            <div className="text-[10px] text-platinum/50 font-normal lowercase mt-0.5">Every member sees group balance</div>

            {pulseNode === 3 && isInView && (
              <motion.div
                key={`feat-progress-3-${cycleKey}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: currentInterval / 1000, ease: "linear" }}
                style={{ originX: 0 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-ochre"
              />
            )}
          </button>
        </div>

        {/* Feature Interactive Showcase Card */}
        <motion.div
          style={{ rotateX: schematicRotateX }}
          className="relative rounded-none border border-umber bg-void-surface p-6 sm:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.8)] will-change-transform overflow-hidden"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C8A27A_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none" />

          {/* Stage Header */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-umber/40 font-mono text-[11px] text-platinum/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sage animate-ping" />
              <span className="text-ivory font-bold uppercase tracking-widest">
                {pulseNode === 1 && "INTERACTIVE DEMO: M-PESA PAYMENT CAPTURE"}
                {pulseNode === 2 && "INTERACTIVE DEMO: DUAL-OFFICIAL LOAN APPROVAL"}
                {pulseNode === 3 && "INTERACTIVE DEMO: REAL-TIME LEDGER STATEMENT"}
              </span>
            </div>
            <div className="text-ochre">KIKOBA GROUP ACCOUNTING PLATFORM</div>
          </div>

          {/* Dynamic Content Per Feature */}
          <div className="relative z-10 min-h-85">
            <AnimatePresence mode="wait">
              {/* Feature 1: M-Pesa Interactive Simulation */}
              {pulseNode === 1 && (
                <motion.div
                  key="feature-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Simulation Console */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="p-4 bg-void border border-umber font-mono text-[13px] space-y-3">
                        <div className="flex justify-between items-center text-[11px] text-platinum/50 border-b border-umber/30 pb-2">
                          <span>M-PESA SIMULATOR</span>
                          <span>PHONE: +254 712 *** 890</span>
                        </div>
                        <div className="text-ivory">
                          Member: <span className="text-ochre font-bold">Grace Muthoni</span>
                        </div>
                        <div className="text-ivory">
                          Monthly Contribution: <span className="text-sage font-bold">KES 5,000</span>
                        </div>
                        <div className="text-ivory">
                          Group: <span className="text-platinum">Tumaini Women Welfare</span>
                        </div>

                        {mpesaState === "success" && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-3 bg-sage/10 border border-sage text-sage text-[12px] space-y-1"
                          >
                            <div className="flex items-center gap-1.5 font-bold">
                              <CheckCircle2 className="w-4 h-4" />
                              <span>M-PESA CONFIRMED: QA48HJ92KL</span>
                            </div>
                            <div className="text-[11px] opacity-90">
                              KES 5,000 received. Group ledger updated automatically.
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {/* Controls */}
                      <div className="flex flex-wrap items-center gap-3">
                        {mpesaState === "idle" && (
                          <button
                            onClick={handleSimulatePayment}
                            className="px-6 py-3 bg-ochre hover:bg-[#d8b894] text-void font-bold text-[12px] font-mono tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(200,162,122,0.3)]"
                          >
                            <Send className="w-3.5 h-3.5" />
                            <span>Simulate Member M-Pesa Payment</span>
                          </button>
                        )}

                        {mpesaState === "simulating" && (
                          <div className="px-6 py-3 bg-umber/40 border border-ochre text-ochre font-mono text-[12px] flex items-center gap-2">
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                            <span>Processing M-Pesa Webhook...</span>
                          </div>
                        )}

                        {mpesaState === "success" && (
                          <button
                            onClick={handleResetPayment}
                            className="px-6 py-3 border border-umber hover:border-ochre text-platinum/70 hover:text-ivory font-mono text-[12px] flex items-center gap-2 cursor-pointer"
                          >
                            <RefreshCw className="w-3.5 h-3.5" />
                            <span>Try Another Simulation</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Chama Live Stats */}
                    <div className="lg:col-span-5 space-y-3 font-mono">
                      <div className="p-4 border border-umber bg-void">
                        <span className="text-[10px] text-platinum/50 uppercase block">GROUP TREASURY TOTAL</span>
                        <span className="text-[28px] font-bold text-ivory">
                          KES {chamaTotal.toLocaleString()}
                        </span>
                      </div>
                      <div className="p-4 border border-umber bg-void text-[12px] text-platinum/80 space-y-1">
                        <div className="flex justify-between">
                          <span>Verified Deposits:</span>
                          <span className="text-sage font-bold">{mpesaState === "success" ? "24 / 24" : "23 / 24"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pending Queries:</span>
                          <span className="text-ochre font-bold">0</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-umber/30 grid grid-cols-1 md:grid-cols-3 gap-4 text-[12px] font-mono text-platinum/70">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                      <span><strong>No Lost Receipts:</strong> Payments record in real time with unique transaction references.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                      <span><strong>Instant Notifications:</strong> Member gets immediate confirmation that payment was recorded.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                      <span><strong>Zero Math Errors:</strong> The system tallies total contributions automatically.</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Feature 2: Dual Approval Interactive */}
              {pulseNode === 2 && (
                <motion.div
                  key="feature-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Loan Request Panel */}
                    <div className="lg:col-span-6 space-y-4">
                      <div className="p-4 bg-void border border-umber font-mono text-[13px] space-y-3">
                        <div className="flex justify-between text-[11px] text-platinum/50 border-b border-umber/30 pb-2">
                          <span>LOAN APPLICATION // TABLE BANKING</span>
                          <span>REQ-2026-088</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-platinum/60">Applicant:</span>
                          <span className="text-ivory font-bold">David Kariuki (Member #14)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-platinum/60">Requested Amount:</span>
                          <span className="text-ochre font-bold">KES 30,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-platinum/60">Repayment Period:</span>
                          <span className="text-platinum">3 Months (Interest: 10%)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-platinum/60">Guarantors:</span>
                          <span className="text-sage font-bold">2 Members Signed</span>
                        </div>
                      </div>

                      {/* Approval Status Badges */}
                      <div className="grid grid-cols-2 gap-3 font-mono text-[11px]">
                        <div className="p-3 border border-sage bg-sage/10 text-sage flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <div>
                            <div className="font-bold">CHAIRPERSON</div>
                            <div className="text-[9px] opacity-80">VERIFIED & APPROVED</div>
                          </div>
                        </div>

                        <div className={`p-3 border transition-colors ${
                          treasurerApproved
                            ? "border-sage bg-sage/10 text-sage"
                            : "border-ochre bg-ochre/10 text-ochre"
                        } flex items-center gap-2`}>
                          {treasurerApproved ? (
                            <CheckCircle2 className="w-4 h-4 shrink-0" />
                          ) : (
                            <Clock className="w-4 h-4 shrink-0 animate-pulse" />
                          )}
                          <div>
                            <div className="font-bold">TREASURER</div>
                            <div className="text-[9px] opacity-80">
                              {treasurerApproved ? "VERIFIED & APPROVED" : "AWAITING APPROVAL"}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action */}
                      <div>
                        {!treasurerApproved ? (
                          <button
                            onClick={handleApproveLoan}
                            className="px-6 py-3 bg-ochre hover:bg-[#d8b894] text-void font-bold text-[12px] font-mono tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(200,162,122,0.3)]"
                          >
                            <Key className="w-3.5 h-3.5" />
                            <span>Approve Loan as Treasurer</span>
                          </button>
                        ) : (
                          <div className="flex items-center gap-3">
                            <span className="text-sage font-mono text-[12px] font-bold flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4" />
                              <span>LOAN DISBURSED VIA M-PESA B2C API</span>
                            </span>
                            <button
                              onClick={handleResetLoan}
                              className="text-platinum/50 hover:text-ivory font-mono text-[11px] underline cursor-pointer"
                            >
                              Reset
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Explanatory graphic */}
                    <div className="lg:col-span-6 space-y-4 font-mono text-[12px]">
                      <div className="p-5 border border-umber bg-void space-y-3">
                        <div className="flex items-center gap-2 text-ochre font-bold text-[13px]">
                          <Lock className="w-4 h-4" />
                          <span>NO SINGLE PERSON CAN RELEASE FUNDS</span>
                        </div>
                        <p className="text-platinum/80 font-sans font-light text-[14px] leading-relaxed">
                          In traditional chamas, one person holding the pin or chequebook creates risk. Kikoba enforces two-key approval on every loan and expense — safeguarding your hard-earned money.
                        </p>
                      </div>

                      <div className="space-y-2 text-[12px] text-platinum/70">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-sage" />
                          <span>Automatic interest calculation (Flat or Reducing Balance)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-sage" />
                          <span>Guarantor approval workflow before officials review</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-sage" />
                          <span>Automatic SMS reminders to borrower before due date</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Feature 3: Real-Time Statement Interactive */}
              {pulseNode === 3 && (
                <motion.div
                  key="feature-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* View Toggles */}
                  <div className="flex items-center justify-between border-b border-umber/40 pb-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          handleSelect(2);
                          setMemberTab("member");
                        }}
                        className={`px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer ${
                          memberTab === "member"
                            ? "bg-ochre text-void font-bold"
                            : "text-platinum/60 hover:text-ivory"
                        }`}
                      >
                        Individual Member View
                      </button>
                      <button
                        onClick={() => {
                          handleSelect(2);
                          setMemberTab("group");
                        }}
                        className={`px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer ${
                          memberTab === "group"
                            ? "bg-ochre text-void font-bold"
                            : "text-platinum/60 hover:text-ivory"
                        }`}
                      >
                        Whole Group Ledger View
                      </button>
                    </div>

                    <button
                      onClick={handleDownloadStatement}
                      className="px-3 py-1.5 border border-umber hover:border-ochre text-platinum/70 hover:text-ivory font-mono text-[11px] flex items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <Download className="w-3 h-3 text-ochre" />
                      <span>Export Official PDF</span>
                    </button>
                  </div>

                  {/* Statement Table Mockup */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 bg-void border border-umber font-mono text-[12px] p-4 space-y-3">
                      {memberTab === "member" ? (
                        <>
                          <div className="flex justify-between border-b border-umber/30 pb-2 text-[11px] text-platinum/50">
                            <span>MEMBER: BEATRICE OMONDI (#07)</span>
                            <span>CYCLE: 2026/08</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-platinum/80 py-1 border-b border-umber/20">
                              <span>Total Contributions Saved:</span>
                              <span className="font-bold text-ivory">KES 60,000</span>
                            </div>
                            <div className="flex justify-between text-platinum/80 py-1 border-b border-umber/20">
                              <span>Active Loan Balance:</span>
                              <span className="font-bold text-ochre">KES 12,500</span>
                            </div>
                            <div className="flex justify-between text-platinum/80 py-1 border-b border-umber/20">
                              <span>Next Due Date:</span>
                              <span className="text-sage">Sept 5, 2026</span>
                            </div>
                            <div className="flex justify-between text-platinum/80 py-1">
                              <span>Dividends Earned (YTD):</span>
                              <span className="font-bold text-sage">KES 4,850</span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex justify-between border-b border-umber/30 pb-2 text-[11px] text-platinum/50">
                            <span>GROUP SUMMARY // 32 MEMBERS</span>
                            <span>UPDATED: 2 MINS AGO</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center py-2">
                            <div className="p-2 bg-void-surface border border-umber/40">
                              <span className="text-platinum/50 text-[10px] block">TOTAL SAVINGS</span>
                              <span className="text-[16px] font-bold text-ivory">KES 1.92M</span>
                            </div>
                            <div className="p-2 bg-void-surface border border-umber/40">
                              <span className="text-platinum/50 text-[10px] block">LOANS OUT</span>
                              <span className="text-[16px] font-bold text-ochre">KES 450,000</span>
                            </div>
                            <div className="p-2 bg-void-surface border border-umber/40">
                              <span className="text-platinum/50 text-[10px] block">BANK BALANCE</span>
                              <span className="text-[16px] font-bold text-sage">KES 930,000</span>
                            </div>
                          </div>
                        </>
                      )}

                      {statementDownloaded && (
                        <motion.div
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-2 bg-sage/15 border border-sage text-sage text-[11px] text-center font-bold flex items-center justify-center gap-2"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>OFFICIAL AUDITED PDF STATEMENT GENERATED (STAMPED & VERIFIED)</span>
                        </motion.div>
                      )}
                    </div>

                    <div className="lg:col-span-5 space-y-2.5 text-[12px] font-mono text-platinum/80">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                        <span><strong>No Arguments at Meetings:</strong> Members can inspect every contribution and balance 24/7 on their phone.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                        <span><strong>Instant AGM Reports:</strong> Generate comprehensive financial statements for the annual general meeting with one click.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                        <span><strong>Transparent Reporting:</strong> Every contribution, loan repayment, and expense is clearly recorded in real time.</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Section Footer Flow Trigger */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-umber/30">
        <span className="text-[11px] font-mono tracking-widest uppercase text-ivory">
          SEE HOW GROUPS RUN KIKOBA STEP BY STEP
        </span>

        <a
          href={`#${SECTION_IDS.HOW_IT_WORKS}`}
          className="inline-flex items-center gap-2 text-[12px] font-mono tracking-widest uppercase text-ochre hover:text-ivory transition-colors group cursor-pointer"
        >
          <span>HOW IT WORKS (4 STEPS)</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
