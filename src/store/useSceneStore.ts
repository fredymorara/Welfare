import { create } from "zustand";

export interface SceneState {
  currentAct: number;
  setCurrentAct: (act: number) => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  isTransitioning: boolean;
  setIsTransitioning: (val: boolean) => void;
  particleState: "constellation" | "fracture" | "harmonic" | "vortex";
  setParticleState: (state: "constellation" | "fracture" | "harmonic" | "vortex") => void;
}

export const useSceneStore = create<SceneState>((set) => ({
  currentAct: 1,
  setCurrentAct: (act: number) => set({ currentAct: act }),
  soundEnabled: false,
  toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
  isTransitioning: false,
  setIsTransitioning: (val: boolean) => set({ isTransitioning: val }),
  particleState: "constellation",
  setParticleState: (particleState) => set({ particleState }),
}));
