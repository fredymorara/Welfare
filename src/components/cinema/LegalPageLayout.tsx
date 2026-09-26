"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { AnimeHeader } from "./AnimeHeader";
import { AnimeFooter } from "./AnimeFooter";

export function LegalH3({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`text-base sm:text-lg font-bold text-ivory tracking-wide mt-8 mb-3 flex items-center gap-2 ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-ochre inline-block shrink-0" />
      <span>{children}</span>
    </h3>
  );
}

export function LegalBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[15px] sm:text-[16px] text-platinum/85 font-light leading-relaxed mb-4 ${className}`}
    >
      {children}
    </p>
  );
}

export function LegalList({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <ul
      className={`list-disc list-outside ml-5 space-y-2.5 text-[15px] sm:text-[16px] text-platinum/85 font-light leading-relaxed mb-6 marker:text-ochre ${className}`}
    >
      {children}
    </ul>
  );
}

export function LegalCallout({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative bg-void-surface border border-ochre/30 rounded-xl p-6 sm:p-7 overflow-hidden my-6 shadow-[0_4px_24px_rgba(0,0,0,0.3)] ${className}`}
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-ochre to-transparent opacity-80" />
      <div className="relative z-10 flex flex-col gap-2.5 text-platinum/90">
        {children}
      </div>
    </div>
  );
}

export function LegalSection({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-14 sm:mb-20 scroll-mt-28">
      {/* Asymmetric Layout: Sticky Title on Left, Detailed Text on Right */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Title and Section Badge */}
        <div className="lg:col-span-4 mb-6 lg:mb-0">
          <div className="sticky top-28 space-y-2">
            <span className="inline-flex items-center gap-1.5 text-ochre font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.25em] uppercase">
              // SECTION {number < 10 ? `0${number}` : number}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-ivory tracking-tight leading-snug">
              {title}
            </h2>
          </div>
        </div>

        {/* Right Column: Legal Clauses Content */}
        <div className="lg:col-span-8 text-platinum/85">
          {children}
        </div>
      </div>

      {/* Elegant Divider between sections */}
      <div className="w-full h-px bg-umber/30 mt-14 sm:mt-20" />
    </section>
  );
}

export function LegalPageLayout({
  title,
  lastUpdated,
  intro,
  children,
}: {
  title: string;
  lastUpdated: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-void text-ivory selection:bg-ochre selection:text-void flex flex-col overflow-x-hidden">
      {/* Kikoba Cinema Header */}
      <AnimeHeader />

      {/* Main Legal Content Container */}
      <main id="main-content" className="flex-1 relative pt-32 sm:pt-36 pb-20 px-6 sm:px-12 lg:px-16 xl:px-20 w-full z-10 focus:outline-none">
        {/* Ambient Warm Glow */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-ochre/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Document Header */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20 text-left">
          {/* Back Link with accessible target sizing */}
          <Link
            href="/"
            aria-label="Return to Kikoba homepage"
            className="min-h-11 inline-flex items-center gap-2 text-[12px] font-mono tracking-widest uppercase text-platinum/60 hover:text-ochre transition-colors mb-6 cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Overview</span>
          </Link>

          {/* Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-umber bg-void-surface text-[11px] font-mono tracking-wider text-ochre uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-sage" />
              <span>Legal Compliance & Governance</span>
            </span>
          </div>

          {/* Document Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ivory tracking-tight leading-tight mb-4">
            {title}
          </h1>

          {/* Timestamp */}
          <p className="text-[12px] font-mono text-ochre uppercase tracking-widest mb-6">
            LAST UPDATED: {lastUpdated}
          </p>

          {/* Intro Paragraph */}
          <div className="text-[16px] sm:text-[18px] text-platinum/90 font-light leading-relaxed p-6 rounded-xl border border-umber/40 bg-void-surface/60">
            {intro}
          </div>
        </div>

        {/* Legal Sections */}
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>

      {/* Kikoba Cinema Footer */}
      <AnimeFooter />
    </div>
  );
}
