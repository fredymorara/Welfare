"use client";

import { AnimeHeader } from "../components/cinema/AnimeHeader";
import { Scene01TheCircle } from "../components/cinema/Scene01TheCircle";
import { CircleToFractureMorph } from "../components/cinema/CircleToFractureMorph";
import { Scene02TheFracture } from "../components/cinema/Scene02TheFracture";
import { FractureToCircuitMorph } from "../components/cinema/FractureToCircuitMorph";
import { Scene03TheBlueprint } from "../components/cinema/Scene03TheBlueprint";
import { CircuitToHowItWorksMorph } from "../components/cinema/CircuitToHowItWorksMorph";
import { Scene06HowItWorks } from "../components/cinema/Scene06HowItWorks";
import { HowItWorksToPricingMorph } from "../components/cinema/HowItWorksToPricingMorph";
import { Scene07Pricing } from "../components/cinema/Scene07Pricing";
import { PricingToFaqMorph } from "../components/cinema/PricingToFaqMorph";
import { Scene08FAQ } from "../components/cinema/Scene08FAQ";
import { FaqToVaultMorph } from "../components/cinema/FaqToVaultMorph";
import { Scene05TheHorizon } from "../components/cinema/Scene05TheHorizon";
import { VaultToMobileMorph } from "../components/cinema/VaultToMobileMorph";
import { Scene09MobileApp } from "../components/cinema/Scene09MobileApp";
import { SceneProgressHUD } from "../components/cinema/SceneProgressHUD";
import { AnimeFooter } from "../components/cinema/AnimeFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-void text-ivory selection:bg-ochre selection:text-void overflow-x-hidden">
      {/* Right-Side Vertical Chapter Navigation Rail */}
      <SceneProgressHUD />

      {/* High-Craft Anime / Manga Show Navigation Header */}
      <AnimeHeader />

      {/* The 8 Episodic Scenes in Proper Narrative Sequence with Seamless Morphs */}
      <main id="main-content" className="relative z-10 flex flex-col focus:outline-none">
        {/* Scene 01: Heritage — Sacred origin, solid void */}
        <Scene01TheCircle />

        {/* Morph 01: Sacred circle splinters into kintsugi fractures */}
        <CircleToFractureMorph />

        {/* Scene 02: The Shift — Manual ledger collapse, dark translucent */}
        <Scene02TheFracture />

        {/* Morph 02: Fractures straighten into orthogonal circuit traces */}
        <FractureToCircuitMorph />

        {/* Scene 03: The Engine — Consensus architecture, solid void */}
        <Scene03TheBlueprint />

        {/* Morph 03: Circuit traces converge into 4 glowing process guide rails */}
        <CircuitToHowItWorksMorph />

        {/* Scene 04: How It Works — 4-step workflow, dark translucent */}
        <Scene06HowItWorks />

        {/* Morph 04: Process rails condense into 3 tiered pricing pillars */}
        <HowItWorksToPricingMorph />

        {/* Scene 05: Pricing — Live API plan tiers, solid void */}
        <Scene07Pricing />

        {/* Morph 05: Tier blocks fragment into open question arcs */}
        <PricingToFaqMorph />

        {/* Scene 06: FAQ — Clear, verified answers, dark translucent */}
        <Scene08FAQ />

        {/* Morph 06: Query brackets ignite into concentric gateway rings */}
        <FaqToVaultMorph />

        {/* Scene 07: The Vault — Sovereign onboarding gateway, solid void */}
        <Scene05TheHorizon />

        {/* Morph 07: Concentric gateway rings condense into phone silhouette */}
        <VaultToMobileMorph />

        {/* Scene 08: Mobile App — Coming soon teaser, solid void */}
        <Scene09MobileApp />
      </main>

      {/* Monumental Anime End Credits & Archive Footer */}
      <AnimeFooter />
    </div>
  );
}
