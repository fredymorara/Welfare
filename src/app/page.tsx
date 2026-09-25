"use client";

import { AnimeHeader } from "../components/cinema/AnimeHeader";
import { Scene01TheCircle } from "../components/cinema/Scene01TheCircle";
import { CircleToFractureMorph } from "../components/cinema/CircleToFractureMorph";
import { Scene02TheFracture } from "../components/cinema/Scene02TheFracture";
import { FractureToCircuitMorph } from "../components/cinema/FractureToCircuitMorph";
import { Scene03TheBlueprint } from "../components/cinema/Scene03TheBlueprint";
import { CircuitToHarvestMorph } from "../components/cinema/CircuitToHarvestMorph";
import { Scene04TheHarvest } from "../components/cinema/Scene04TheHarvest";
import { HarvestToVaultMorph } from "../components/cinema/HarvestToVaultMorph";
import { Scene05TheHorizon } from "../components/cinema/Scene05TheHorizon";
import { SceneProgressHUD } from "../components/cinema/SceneProgressHUD";
import { AnimeFooter } from "../components/cinema/AnimeFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#2E2118] text-[#F8F4EE] selection:bg-[#C8A27A] selection:text-[#2E2118] overflow-x-hidden">
      {/* Right-Side Vertical Chapter Navigation Rail */}
      <SceneProgressHUD />

      {/* High-Craft Anime / Manga Show Navigation Header */}
      <AnimeHeader />

      {/* The 5 Episodic Scenes with Seamless Visual Morph Transitions */}
      <main className="relative z-10 flex flex-col">
        {/* Scene 01: Heritage (Solid Lighter Brown #2E2118) */}
        <Scene01TheCircle />

        {/* Morph 01: The Sacred Circle morphs & splinters into jagged fractures */}
        <CircleToFractureMorph />

        {/* Scene 02: The Shift (Translucent Dark Obsidian #1c130d) */}
        <Scene02TheFracture />

        {/* Morph 02: Jagged fractures straighten & morph into orthogonal circuit traces */}
        <FractureToCircuitMorph />

        {/* Scene 03: The Engine (Solid Lighter Brown #2E2118) */}
        <Scene03TheBlueprint />

        {/* Morph 03: Circuit traces bloom outward into radial harvest sunburst arcs */}
        <CircuitToHarvestMorph />

        {/* Scene 04: Yield (Translucent Dark Harvest #160e0a) */}
        <Scene04TheHarvest />

        {/* Morph 04: Harvest arcs close & morph into concentric vault locking rings */}
        <HarvestToVaultMorph />

        {/* Scene 05: Vault Onboarding (Solid Lighter Brown #2E2118) */}
        <Scene05TheHorizon />
      </main>

      {/* Monumental Anime End Credits & Archive Footer */}
      <AnimeFooter />
    </div>
  );
}
