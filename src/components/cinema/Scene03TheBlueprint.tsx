"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
  ArrowDown,
  Key,
  ShieldCheck,
  Zap,
  CheckCircle2,
  RefreshCw,
  FileText,
  Smartphone,
  Check,
  Clock,
  Send,
  Lock,
  Download,
  Users,
} from "lucide-react";

export function Scene03TheBlueprint() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [pulseNode, setPulseNode] = useState<number>(1);

  // Feature 1: M-Pesa Simulation State
  const [mpesaState, setMpesaState] = useState<"idle" | "simulating" | "success">("idle");
  const [chamaTotal, setChamaTotal] = useState<number>(345000);

  // Feature 2: Multi-Sign Approval State
  const [treasurerApproved, setTreasurerApproved] = useState<boolean>(false);

  // Feature 3: Statement & Tab State
  const [memberTab, setMemberTab] = useState<"member" | "group">("member");
  const [statementDownloaded, setStatementDownloaded] = useState<boolean>(false);

  // Perspective on Scroll
  const schematicRotateX = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [4, 0, -3]);

  const handleSimulatePayment = () => {
    setMpesaState("simulating");
    setTimeout(() => {
      setMpesaState("success");
      setChamaTotal((prev) => prev + 5000);
    }, 900);
  };

  const handleResetPayment = () => {
    setMpesaState("idle");
  };

  const handleApproveLoan = () => {
    setTreasurerApproved(true);
  };

  const handleResetLoan = () => {
    setTreasurerApproved(false);
  };

  const handleDownloadStatement = () => {
    setStatementDownloaded(true);
    setTimeout(() => setStatementDownloaded(false), 3000);
  };

  return (
    <section
      ref={containerRef}
      id="the-engine"
      className="relative min-h-screen flex flex-col justify-between px-6 sm:px-16 lg:px-24 pt-28 pb-16 w-full overflow-hidden select-none bg-void"
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
          ● REAL INTERACTIVE FEATURES · SELECT TO TEST
        </span>
      </div>

      {/* Center Monolithic Drama & Clean Schematic Stage */}
      <div className="relative z-10 my-auto w-full max-w-6xl mx-auto py-8">
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

          <p className="text-[17px] sm:text-[20px] font-extralight text-platinum leading-[1.65] max-w-2xl border-l-2 border-ochre pl-6 opacity-95">
            Kikoba makes running your chama effortless and fair. Click any feature below
            to test the actual workflow and see how it works in real life.
          </p>
        </div>

        {/* 3D Perspective Tilt Schematic Platform */}
        <motion.div
          style={{
            rotateX: schematicRotateX,
          }}
          className="relative border-2 border-umber p-6 sm:p-10 bg-void shadow-[0_30px_90px_rgba(0,0,0,0.7)] will-change-transform"
        >
          {/* Blueprint Telemetry Coordinates */}
          <div className="flex flex-wrap justify-between items-center text-[10px] font-mono text-ochre pb-4 border-b border-umber/40 mb-6 uppercase tracking-widest gap-2">
            <span>SECURE CLOUD LEDGER</span>
            <span>MULTI-OFFICIAL AUTHORIZATION</span>
            <span>INSTANT M-PESA SYNC</span>
          </div>

          {/* Three Connected Blueprint Stations / Selectable Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative mb-8">
            {/* Station 1: M-Pesa Sync */}
            <button
              type="button"
              onClick={() => setPulseNode(1)}
              className={`p-6 border-2 transition-all duration-300 text-left select-none relative group cursor-pointer ${
                pulseNode === 1
                  ? "border-ochre bg-umber/40 shadow-[0_0_35px_rgba(200,162,122,0.3)] -translate-y-1"
                  : "border-umber/60 hover:border-ochre/60 bg-void/70"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-[11px] font-mono text-ochre font-bold tracking-wider">FEATURE 01</span>
                <Zap className="w-5 h-5 text-ochre" />
              </div>
              <h4 className="text-[19px] font-bold text-ivory uppercase tracking-wide mb-2">
                Automatic M-Pesa Sync
              </h4>
              <p className="text-[13px] font-extralight text-platinum/85 leading-relaxed mb-4">
                Incoming member payments automatically log into the ledger. Zero manual typing.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase">
                <span className={`w-2 h-2 rounded-full ${pulseNode === 1 ? "bg-sage animate-ping" : "bg-platinum/40"}`} />
                <span className={pulseNode === 1 ? "text-ochre font-bold" : "text-platinum/60"}>
                  {pulseNode === 1 ? "ACTIVE DEMO" : "CLICK TO TEST"}
                </span>
              </div>
            </button>

            {/* Station 2: Quorum Multi-Sign */}
            <button
              type="button"
              onClick={() => setPulseNode(2)}
              className={`p-6 border-2 transition-all duration-300 text-left select-none relative group cursor-pointer ${
                pulseNode === 2
                  ? "border-ochre bg-umber/40 shadow-[0_0_35px_rgba(200,162,122,0.3)] -translate-y-1"
                  : "border-umber/60 hover:border-ochre/60 bg-void/70"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-[11px] font-mono text-ochre font-bold tracking-wider">FEATURE 02</span>
                <Key className="w-5 h-5 text-ochre" />
              </div>
              <h4 className="text-[19px] font-bold text-ivory uppercase tracking-wide mb-2">
                Committee Approvals
              </h4>
              <p className="text-[13px] font-extralight text-platinum/85 leading-relaxed mb-4">
                No single official can move money alone. Chairperson & Treasurer must dual-sign.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase">
                <span className={`w-2 h-2 rounded-full ${pulseNode === 2 ? "bg-sage animate-ping" : "bg-platinum/40"}`} />
                <span className={pulseNode === 2 ? "text-ochre font-bold" : "text-platinum/60"}>
                  {pulseNode === 2 ? "ACTIVE DEMO" : "CLICK TO TEST"}
                </span>
              </div>
            </button>

            {/* Station 3: Member Ledger & Audit */}
            <button
              type="button"
              onClick={() => setPulseNode(3)}
              className={`p-6 border-2 transition-all duration-300 text-left select-none relative group cursor-pointer ${
                pulseNode === 3
                  ? "border-ochre bg-umber/40 shadow-[0_0_35px_rgba(200,162,122,0.3)] -translate-y-1"
                  : "border-umber/60 hover:border-ochre/60 bg-void/70"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-[11px] font-mono text-sage font-bold tracking-wider">FEATURE 03</span>
                <ShieldCheck className="w-5 h-5 text-sage" />
              </div>
              <h4 className="text-[19px] font-bold text-ivory uppercase tracking-wide mb-2">
                Clear Member Ledger
              </h4>
              <p className="text-[13px] font-extralight text-platinum/85 leading-relaxed mb-4">
                One honest, tamper-proof record. Every member sees balances & statements 24/7.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase">
                <span className={`w-2 h-2 rounded-full ${pulseNode === 3 ? "bg-sage animate-ping" : "bg-platinum/40"}`} />
                <span className={pulseNode === 3 ? "text-ochre font-bold" : "text-platinum/60"}>
                  {pulseNode === 3 ? "ACTIVE DEMO" : "CLICK TO TEST"}
                </span>
              </div>
            </button>
          </div>

          {/* DYNAMIC INTERACTIVE FEATURE DEMO STUDIO */}
          <div className="border border-ochre/40 bg-[#160e0a]/90 p-6 sm:p-8 rounded-sm">
            <AnimatePresence mode="wait">
              {/* DEMO 1: AUTOMATIC M-PESA RECORDING */}
              {pulseNode === 1 && (
                <motion.div
                  key="demo-1"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-umber/40 gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-ochre bg-ochre/15 px-2.5 py-0.5 rounded-sm">
                          LIVE SIMULATION
                        </span>
                        <span className="text-[12px] font-mono text-platinum/60">
                          Safaricom M-Pesa STK Push
                        </span>
                      </div>
                      <h3 className="text-[20px] font-bold text-ivory uppercase tracking-wide mt-1">
                        Instant Contribution Logging
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right font-mono">
                        <div className="text-[10px] text-platinum/60 uppercase">Group Pool Balance</div>
                        <div className="text-[17px] font-bold text-sage">KES {chamaTotal.toLocaleString()}</div>
                      </div>
                      {mpesaState === "success" ? (
                        <button
                          type="button"
                          onClick={handleResetPayment}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase bg-umber/50 border border-umber hover:border-ochre text-ivory rounded-sm cursor-pointer transition-colors"
                        >
                          <RefreshCw className="w-3 h-3 text-ochre" />
                          <span>Reset</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleSimulatePayment}
                          disabled={mpesaState === "simulating"}
                          className="flex items-center gap-2 px-4 py-2 text-[12px] font-mono uppercase tracking-wider bg-ochre hover:bg-[#d8b894] text-void font-bold rounded-sm cursor-pointer transition-all shadow-[0_0_20px_rgba(200,162,122,0.3)] disabled:opacity-50"
                        >
                          {mpesaState === "simulating" ? (
                            <>
                              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                              <span>Processing M-Pesa...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-3.5 h-3.5" />
                              <span>Simulate Payment (KES 5,000)</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Transaction Display Card */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-7 bg-void/80 border border-umber/60 p-5 rounded-sm font-mono text-[13px] space-y-3">
                      <div className="flex items-center justify-between border-b border-umber/40 pb-2">
                        <span className="text-platinum/60 text-[11px]">TRANSACTION STATUS</span>
                        {mpesaState === "success" ? (
                          <span className="text-sage font-bold flex items-center gap-1.5 text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED & RECORDED IN LEDGER
                          </span>
                        ) : mpesaState === "simulating" ? (
                          <span className="text-ochre font-bold flex items-center gap-1.5 text-[11px] animate-pulse">
                            <Clock className="w-3.5 h-3.5" /> AWAITING M-PESA STK PUSH PIN...
                          </span>
                        ) : (
                          <span className="text-platinum/40 text-[11px]">READY FOR CONTRIBUTION</span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-y-2 text-[12px] text-platinum/90">
                        <div>
                          <span className="text-platinum/50 block text-[10px]">MEMBER NAME</span>
                          <span className="text-ivory font-bold">Amina Wangari</span>
                        </div>
                        <div>
                          <span className="text-platinum/50 block text-[10px]">PHONE</span>
                          <span>+254 712 *** 890</span>
                        </div>
                        <div>
                          <span className="text-platinum/50 block text-[10px]">AMOUNT</span>
                          <span className="text-sage font-bold text-[14px]">KES 5,000.00</span>
                        </div>
                        <div>
                          <span className="text-platinum/50 block text-[10px]">M-PESA REF CODE</span>
                          <span className="text-ochre font-mono">{mpesaState === "success" ? "QK9482X71M" : "—"}</span>
                        </div>
                        <div>
                          <span className="text-platinum/50 block text-[10px]">PURPOSE</span>
                          <span>Monthly Share Capital</span>
                        </div>
                        <div>
                          <span className="text-platinum/50 block text-[10px]">MEMBER RECEIPT</span>
                          <span>{mpesaState === "success" ? "SMS Sent Automatically" : "Pending Payment"}</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 space-y-2.5 text-[12px] font-mono text-platinum/80">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                        <span><strong>Zero Manual Entry:</strong> No treasurer has to type numbers from WhatsApp screenshots.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                        <span><strong>Instant SMS Proof:</strong> Member gets immediate receipt showing their updated total savings.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                        <span><strong>Audit-Ready:</strong> Transaction is stamped into the group ledger with official Safaricom code.</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* DEMO 2: COMMITTEE APPROVALS */}
              {pulseNode === 2 && (
                <motion.div
                  key="demo-2"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-umber/40 gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-ochre bg-ochre/15 px-2.5 py-0.5 rounded-sm">
                          DUAL-AUTHORIZATION WORKFLOW
                        </span>
                        <span className="text-[12px] font-mono text-platinum/60">
                          Table Banking Emergency Loan
                        </span>
                      </div>
                      <h3 className="text-[20px] font-bold text-ivory uppercase tracking-wide mt-1">
                        Loan Request Approval Quorum
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right font-mono">
                        <div className="text-[10px] text-platinum/60 uppercase">Required Signatures</div>
                        <div className="text-[17px] font-bold text-ochre">
                          {treasurerApproved ? "2 of 2 (Quorum Met)" : "1 of 2 (Pending Treasurer)"}
                        </div>
                      </div>
                      {treasurerApproved ? (
                        <button
                          type="button"
                          onClick={handleResetLoan}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase bg-umber/50 border border-umber hover:border-ochre text-ivory rounded-sm cursor-pointer transition-colors"
                        >
                          <RefreshCw className="w-3 h-3 text-ochre" />
                          <span>Reset</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleApproveLoan}
                          className="flex items-center gap-2 px-4 py-2 text-[12px] font-mono uppercase tracking-wider bg-ochre hover:bg-[#d8b894] text-void font-bold rounded-sm cursor-pointer transition-all shadow-[0_0_20px_rgba(200,162,122,0.3)]"
                        >
                          <Key className="w-3.5 h-3.5" />
                          <span>Approve as Treasurer</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Loan Approval Cards */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-7 bg-void/80 border border-umber/60 p-5 rounded-sm font-mono text-[13px] space-y-4">
                      {/* Borrower Summary */}
                      <div className="flex items-center justify-between border-b border-umber/40 pb-2">
                        <div>
                          <span className="text-ivory font-bold block">Borrower: David Mutua</span>
                          <span className="text-platinum/50 text-[11px]">Purpose: Farm Inputs & Fertilizer</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-platinum/50 block">LOAN AMOUNT</span>
                          <span className="text-sage font-bold text-[16px]">KES 25,000</span>
                        </div>
                      </div>

                      {/* Approval Signers Status */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2.5 bg-umber/20 border border-sage/40 rounded-sm">
                          <div className="flex items-center gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-sage" />
                            <span className="text-ivory text-[12px]">1. Chairperson (Mama Faith)</span>
                          </div>
                          <span className="text-sage text-[11px] font-bold">APPROVED ✓</span>
                        </div>

                        <div className={`flex items-center justify-between p-2.5 rounded-sm border transition-colors ${
                          treasurerApproved
                            ? "bg-umber/20 border-sage/40"
                            : "bg-void border-ochre/40"
                        }`}>
                          <div className="flex items-center gap-2.5">
                            {treasurerApproved ? (
                              <CheckCircle2 className="w-4 h-4 text-sage" />
                            ) : (
                              <Lock className="w-4 h-4 text-ochre animate-pulse" />
                            )}
                            <span className="text-ivory text-[12px]">2. Treasurer (You)</span>
                          </div>
                          {treasurerApproved ? (
                            <span className="text-sage text-[11px] font-bold">APPROVED ✓</span>
                          ) : (
                            <span className="text-ochre text-[11px] font-bold">AWAITING YOUR APPROVAL</span>
                          )}
                        </div>
                      </div>

                      {/* Disbursement Banner */}
                      {treasurerApproved && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="p-2.5 bg-sage/15 border border-sage text-sage text-[11px] font-bold flex items-center justify-center gap-2"
                        >
                          <Zap className="w-3.5 h-3.5" />
                          <span>QUORUM MET · KES 25,000 DISBURSED AUTOMATICALLY TO DAVID&apos;S M-PESA</span>
                        </motion.div>
                      )}
                    </div>

                    <div className="lg:col-span-5 space-y-2.5 text-[12px] font-mono text-platinum/80">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                        <span><strong>No Ghost Loans:</strong> Funds cannot leave without multiple authorized signatures.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                        <span><strong>Automated Repayments:</strong> Kikoba calculates the monthly interest and sends friendly SMS reminders before due dates.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                        <span><strong>Full Accountability:</strong> Every member sees which loans are active and their repayment status.</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* DEMO 3: CLEAR MEMBER LEDGER */}
              {pulseNode === 3 && (
                <motion.div
                  key="demo-3"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-umber/40 gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-sage bg-sage/15 px-2.5 py-0.5 rounded-sm">
                          24/7 TRANSPARENCY
                        </span>
                        <span className="text-[12px] font-mono text-platinum/60">
                          Accessible on any phone or computer
                        </span>
                      </div>
                      <h3 className="text-[20px] font-bold text-ivory uppercase tracking-wide mt-1">
                        Member Dashboard & Instant Statement
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-umber/60 font-mono text-[11px]">
                        <button
                          type="button"
                          onClick={() => setMemberTab("member")}
                          className={`px-3 py-1.5 cursor-pointer uppercase transition-colors ${
                            memberTab === "member" ? "bg-umber/60 text-ivory font-bold" : "text-platinum/50 hover:text-ivory"
                          }`}
                        >
                          Grace Wanjiku
                        </button>
                        <button
                          type="button"
                          onClick={() => setMemberTab("group")}
                          className={`px-3 py-1.5 cursor-pointer uppercase transition-colors ${
                            memberTab === "group" ? "bg-umber/60 text-ivory font-bold" : "text-platinum/50 hover:text-ivory"
                          }`}
                        >
                          Chama Totals
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={handleDownloadStatement}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase bg-ochre/15 border border-ochre/50 text-ochre hover:bg-ochre hover:text-void rounded-sm cursor-pointer transition-colors"
                      >
                        <Download className="w-3 h-3" />
                        <span>{statementDownloaded ? "Statement Generated ✓" : "Download PDF"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Member Dashboard Data */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-7 bg-void/80 border border-umber/60 p-5 rounded-sm font-mono text-[13px] space-y-4">
                      {memberTab === "member" ? (
                        <>
                          <div className="flex items-center justify-between border-b border-umber/40 pb-2">
                            <div>
                              <span className="text-ivory font-bold block">Grace Wanjiku (Member #014)</span>
                              <span className="text-platinum/50 text-[11px]">Active Since: Jan 2023 · Perfect Attendance</span>
                            </div>
                            <span className="text-[10px] text-sage bg-sage/10 px-2 py-0.5 rounded-sm uppercase font-bold">
                              Good Standing
                            </span>
                          </div>

                          <div className="grid grid-cols-3 gap-3 text-center">
                            <div className="p-3 bg-umber/20 border border-umber/40 rounded-sm">
                              <span className="text-platinum/50 text-[10px] block">TOTAL SAVED</span>
                              <span className="text-[16px] font-bold text-ivory">KES 48,500</span>
                            </div>
                            <div className="p-3 bg-umber/20 border border-umber/40 rounded-sm">
                              <span className="text-platinum/50 text-[10px] block">DIVIDENDS EARNED</span>
                              <span className="text-[16px] font-bold text-sage">+KES 6,250</span>
                            </div>
                            <div className="p-3 bg-umber/20 border border-umber/40 rounded-sm">
                              <span className="text-platinum/50 text-[10px] block">ACTIVE LOANS</span>
                              <span className="text-[16px] font-bold text-ochre">KES 0.00</span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center justify-between border-b border-umber/40 pb-2">
                            <div>
                              <span className="text-ivory font-bold block">Mwangaza Savings Chama</span>
                              <span className="text-platinum/50 text-[11px]">28 Active Members · 12-Month Cycle</span>
                            </div>
                            <span className="text-[10px] text-ochre bg-ochre/15 px-2 py-0.5 rounded-sm uppercase font-bold">
                              98.5% Collection Rate
                            </span>
                          </div>

                          <div className="grid grid-cols-3 gap-3 text-center">
                            <div className="p-3 bg-umber/20 border border-umber/40 rounded-sm">
                              <span className="text-platinum/50 text-[10px] block">TOTAL CAPITAL</span>
                              <span className="text-[16px] font-bold text-ivory">KES 1,240,000</span>
                            </div>
                            <div className="p-3 bg-umber/20 border border-umber/40 rounded-sm">
                              <span className="text-platinum/50 text-[10px] block">LOANS OUT</span>
                              <span className="text-[16px] font-bold text-ochre">KES 310,000</span>
                            </div>
                            <div className="p-3 bg-umber/20 border border-umber/40 rounded-sm">
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
                        <span><strong>Automatic Dividends:</strong> Net interest and late fines are distributed cleanly according to each member&apos;s share.</span>
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
          href="#how-it-works"
          className="inline-flex items-center gap-2 text-[12px] font-mono tracking-widest uppercase text-ochre hover:text-ivory transition-colors group cursor-pointer"
        >
          <span>HOW IT WORKS (4 STEPS)</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
