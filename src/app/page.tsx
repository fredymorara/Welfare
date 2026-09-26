"use client";

import { Header, Footer, ScrollProgressRail } from "../components/layout";
import {
  HeroSection,
  ProblemSection,
  FeaturesSection,
  HowItWorksSection,
  PricingSection,
  FaqSection,
  CtaSection,
  MobileAppSection,
} from "../components/sections";
import {
  HeroToProblemDivider,
  ProblemToFeaturesDivider,
  FeaturesToHowItWorksDivider,
  HowItWorksToPricingDivider,
  PricingToFaqDivider,
  FaqToCtaDivider,
  CtaToMobileDivider,
} from "../components/transitions";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-void text-ivory selection:bg-ochre selection:text-void overflow-x-hidden">
      {/* Right-Side Vertical Section Navigation Rail */}
      <ScrollProgressRail />

      {/* Main Navigation Header */}
      <Header />

      {/* Modular Page Sections with Seamless Transitions */}
      <main id="main-content" className="relative z-10 flex flex-col focus:outline-none">
        {/* Section 01: Hero — Sacred origin, solid void */}
        <HeroSection />

        {/* Transition 01: Hero to Problem */}
        <HeroToProblemDivider />

        {/* Section 02: Problem — Manual ledger collapse, dark translucent */}
        <ProblemSection />

        {/* Transition 02: Problem to Features */}
        <ProblemToFeaturesDivider />

        {/* Section 03: Features — Consensus architecture & interactive demos */}
        <FeaturesSection />

        {/* Transition 03: Features to How It Works */}
        <FeaturesToHowItWorksDivider />

        {/* Section 04: How It Works — 4-step workflow, dark translucent */}
        <HowItWorksSection />

        {/* Transition 04: How It Works to Pricing */}
        <HowItWorksToPricingDivider />

        {/* Section 05: Pricing — Live API plan tiers, solid void */}
        <PricingSection />

        {/* Transition 05: Pricing to FAQ */}
        <PricingToFaqDivider />

        {/* Section 06: FAQ — Verified answers, dark translucent */}
        <FaqSection />

        {/* Transition 06: FAQ to CTA */}
        <FaqToCtaDivider />

        {/* Section 07: CTA — Onboarding gateway & trial signup */}
        <CtaSection />

        {/* Transition 07: CTA to Mobile App */}
        <CtaToMobileDivider />

        {/* Section 08: Mobile App — Dedicated mobile app preview */}
        <MobileAppSection />
      </main>

      {/* Universal Footer */}
      <Footer />
    </div>
  );
}
