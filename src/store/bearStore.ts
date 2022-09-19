import type { StateCreator } from "zustand";
import { FishSlice } from "./fishStore";

export interface BearSlice {
  bears: number;
  addBear: () => void;
  eatFish: () => void;
}
export const createBearSlice: StateCreator<
  BearSlice & FishSlice,
  [["zustand/persist", unknown], ["zustand/devtools", never]],
  [],
  BearSlice
> = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
  eatFish: () => set((state) => ({ bears: state.bears - 1 })),
});
