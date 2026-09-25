import { create } from "zustand";

export interface SceneState {
  currentAct: number;
  setCurrentAct: (act: number) => void;
  isTransitioning: boolean;
  setIsTransitioning: (val: boolean) => void;
  particleState: "constellation" | "fracture" | "harmonic" | "vortex";
  setParticleState: (state: "constellation" | "fracture" | "harmonic" | "vortex") => void;
}

export const useSceneStore = create<SceneState>((set) => ({
  currentAct: 1,
  setCurrentAct: (act: number) => set({ currentAct: act }),
  isTransitioning: false,
  setIsTransitioning: (val: boolean) => set({ isTransitioning: val }),
  particleState: "constellation",
  setParticleState: (particleState) => set({ particleState }),
}));
