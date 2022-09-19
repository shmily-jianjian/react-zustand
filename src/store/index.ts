import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { FishSlice, createFishSlice } from "./fishStore";
import { BearSlice, createBearSlice } from "./bearStore";

const useGLobalStore = create<BearSlice & FishSlice>()(
  persist(
    devtools((...a) => {
      return {
        ...createBearSlice(...a),
        ...createFishSlice(...a),
      };
    })
  )
);

export { useGLobalStore };
