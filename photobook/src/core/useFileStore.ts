import { create } from "zustand";

interface FileStore {
  fileName: string;
  fileUrl: string | null;
  setFile: (fileName: string, fileUrl: string | null) => void;
}

export const useFileStore = create<FileStore>((set) => ({
  fileName: "",
  fileUrl: "",
  setFile: (fileName, fileUrl) => set({ fileName, fileUrl }),
}));
