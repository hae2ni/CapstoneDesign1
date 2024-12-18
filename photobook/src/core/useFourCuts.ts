import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FOUR_CUTS } from "./forcutList";
import { Urls } from "../types/urltypes";

export interface PhotoListInterface {
  forcutName: string;
  color: string;
  photoList: Urls[];
}

interface FourCutTypes extends Urls {
  photosList: PhotoListInterface[];
  forcutName: string;
  color: string;

  setColor: (text: string) => void;
  setFourcutName: (text: string) => void;
  setFirstPhoto: (text: string) => void;
  setSecondPhoto: (text: string) => void;
  setThirdPhoto: (text: string) => void;
  setForthPhoto: (text: string) => void;
  addNewFile: () => void;
}

export const useFourCutStore = create<FourCutTypes>()(
  persist(
    (set) => ({
      photosList: FOUR_CUTS,
      forcutName: "",
      firstUrl: "",
      secondUrl: "",
      thirdUrl: "",
      forthUrl: "",
      color: "",
      setColor: (color) => set({ color }),
      setFourcutName: (forcutName) => set({ forcutName }),
      setFirstPhoto: (firstUrl) => set({ firstUrl }),
      setSecondPhoto: (secondUrl) => set({ secondUrl }),
      setThirdPhoto: (thirdUrl) => set({ thirdUrl }),
      setForthPhoto: (forthUrl) => set({ forthUrl }),

      addNewFile: () =>
        set((state) => {
          const newPhoto: Urls = {
            firstUrl: state.firstUrl,
            secondUrl: state.secondUrl,
            thirdUrl: state.thirdUrl,
            forthUrl: state.forthUrl,
          };

          const newColor = state.color;

          const updatedList = [
            ...state.photosList,
            { forcutName: "안녕", photoList: [newPhoto], color: newColor },
          ];
          return {
            photosList: updatedList,
            forcutName: "",
            color: "",
            firstUrl: "",
            secondUrl: "",
            thirdUrl: "",
            forthUrl: "",
          };
        }),
    }),
    { name: "four-cuts" }
  )
);
