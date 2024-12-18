import { FileUploadProps } from "../../types/FourcutsProps";
import FileUpload from "./FileUpload";

export default function AddPhoto({ num }: FileUploadProps) {
  return (
    <>
      <FileUpload num={num} />\{" "}
    </>
  );
}
