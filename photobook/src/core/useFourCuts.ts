import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FOUR_CUTS } from "./forcutList";

interface Urls {
  firstUrl: string;
  secondUrl: string;
  thirdUrl: string;
  forthUrl: string;
}

interface PhotoListInterface {
  forcutName: string;
  photoList: Urls[];
}

interface FourCutTypes extends Urls {
  photosList: PhotoListInterface[];
  forcutName: string;
  setFourcutName: (text: string) => void;
  setFirstPhoto: (text: string) => void;
  setSecondPhoto: (text: string) => void;
  setThirdPhoto: (text: string) => void;
  setForthPhoto: (text: string) => void;
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
      setFourcutName: (forcutName) => set({ forcutName }),
      setFirstPhoto: (firstUrl) => set({ firstUrl }),
      setSecondPhoto: (secondUrl) => set({ secondUrl }),
      setThirdPhoto: (thirdUrl) => set({ thirdUrl }),
      setForthPhoto: (forthUrl) => set({ forthUrl }),
      setPhotoList: () =>
        set((state) => {
          const newPhoto: Urls = {
            firstUrl: state.firstUrl,
            secondUrl: state.secondUrl,
            thirdUrl: state.thirdUrl,
            forthUrl: state.forthUrl,
          };

          const updatedList = [
            ...state.photosList,
            { forcutName: state.forcutName, photoList: [newPhoto] },
          ];

          return {
            photosList: updatedList,
            forcutName: "",
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
