import { create } from "zustand";

interface CategoryStore {
  clickedCategory: number;
  setClickedCategory: (number: number) => void;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  clickedCategory: 0,
  setClickedCategory: (number: number) => set({ clickedCategory: number }),
}));
