import { create } from "zustand";
import { FILE_LIST } from "./list";

export const useStoredFile = create((set) => ({
  fileList: FILE_LIST,
}));
