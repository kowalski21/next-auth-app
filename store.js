import { devtools } from "zustand/middleware";

import create from "zustand";

export const useAuthStore = create(
  devtools((set) => ({
    user: null,
    add: (payload) => {
      set({ user: payload });
    },
  }))
);

// const useStore = create(set => ({
//     bears: 0,
//     increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
//     removeAllBears: () => set({ bears: 0 })
//   }))
