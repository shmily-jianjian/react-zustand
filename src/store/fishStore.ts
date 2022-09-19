import type { StateCreator } from "zustand";
import { BearSlice } from "./bearStore";

export interface FishSlice {
  fishes: number;
  addFish: () => void;
  eatFish1: () => void;
}

export const createFishSlice: StateCreator<
  FishSlice & BearSlice,
  [["zustand/persist", unknown], ["zustand/devtools", never]],
  [],
  FishSlice
> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
  eatFish1: () => set((state) => ({ fishes: state.fishes - 1 })),
});
