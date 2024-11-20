import { useEffect } from "react";
import { useFileStore } from "../../core/useFileStore";
import styled from "styled-components";

export default function DisplayFile() {
  const fileName = useFileStore((state) => state.fileName);
  const fileUrl = useFileStore((state) => state.fileUrl);

  useEffect(() => {
    console.log("file", fileName);
  }, [fileName]);

  return (
    <div>
      {fileName && (
        <div>{fileUrl && <UploadedPhoto src={fileUrl} alt={fileName} />}</div>
      )}
    </div>
  );
}

const UploadedPhoto = styled.img`
  width: 52rem;
  height: 50rem;

  border-radius: 50px;
`;
