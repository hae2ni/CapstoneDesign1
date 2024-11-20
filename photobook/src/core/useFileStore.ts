import { create } from "zustand";
import { FILE_LIST } from "./list";
import { persist } from "zustand/middleware";

interface FileItem {
  photo: string;
  title: string;
  category: string;
  summary: string;
}

interface FileStore {
  photoList: FileItem[];
  fileName: string;
  fileUrl: string;
  setFile: (fileName: string, fileUrl: string) => void;
  title: string;
  category: string;
  summary: string;
  setTitle: (text: string) => void;
  setCategory: (text: string) => void;
  setSummary: (text: string) => void;
  addNewFile: () => void;
}

export const useFileStore = create<FileStore>()(
  persist(
    (set) => ({
      photoList: FILE_LIST, // 초기 리스트
      fileName: "",
      fileUrl: "",
      category: "",
      title: "",
      summary: "",
      setFile: (fileName, fileUrl) => set({ fileName, fileUrl }),
      setTitle: (text) => set({ title: text }),
      setCategory: (text) => set({ category: text }),
      setSummary: (text) => set({ summary: text }),
      addNewFile: () =>
        set((state) => {
          const newFile = {
            photo: state.fileUrl,
            title: state.title,
            category: state.category,
            summary: state.summary,
          };

          const updatedList = [...state.photoList, newFile];

          return {
            photoList: updatedList,
            fileName: "",
            fileUrl: "",
            category: "",
            title: "",
            summary: "",
          };
        }),
    }),
    { name: "file-store" }
  )
);
