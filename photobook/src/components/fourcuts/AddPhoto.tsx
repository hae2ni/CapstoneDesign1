import { useEffect, useState } from "react";
import styled from "styled-components";
import { useFileStore } from "../../core/useFileStore";

export default function AddPhoto() {
  const [fileName, setFileName] = useState("");

  const setFile = useFileStore((state) => state.setFile);
  const filii = useFileStore((state) => state.fileName);

  const fileInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      setFileName(file.name);
      const fileUrl = URL.createObjectURL(file); // Blob URL 생성
      setFile(file.name, fileUrl); // Zustand에 저장
      console.log(filii);
    }
  };

  useEffect(() => {
    console.log(fileName);
    console.log(filii);
  }, [filii, fileName]);

  return (
    <Container>
      <label htmlFor="file">
        <StyledFileInput>
          <AttachmentButton>🔗 FILE UPLOAD</AttachmentButton>
          {fileName ? (
            <AttachedFile className="file-name">{fileName}</AttachedFile>
          ) : (
            ""
          )}
        </StyledFileInput>
      </label>
      <Input
        accept="image/*"
        onChange={fileInputHandler}
        type="file"
        id="file"
      />
    </Container>
  );
}

const Input = styled.input`
  display: none;
`;

const StyledFileInput = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 25%;
  margin-bottom: 5px;
  background-color: gray;
  &:last-child {
    margin-bottom: 0;
  }
`;

const AttachmentButton = styled.div`
  width: fit-content;
  padding: 1.6rem;
  background-color: rgba(195, 198, 207, 30);
  border-radius: 1.2rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const AttachedFile = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #999;

  width: 21rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;