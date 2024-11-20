import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import NextBtn from "./NextBtn";

export default function PhotoUpload() {
  const inputEl = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState("");

  const fileInputHandler = useCallback((event: Event) => {
    const target = event.target as HTMLInputElement;
    const files = target?.files;
    if (files && files[0]) {
      setFileName(files[0].name);
    }
  }, []);

  useEffect(() => {
    if (inputEl.current !== null) {
      inputEl.current.addEventListener("input", fileInputHandler);
    }
    return () => {
      inputEl.current?.removeEventListener("input", fileInputHandler);
    };
  }, [fileInputHandler]);

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
      <Input accept="image/*" type="file" id="file" ref={inputEl} />
      {fileName && <NextBtn />}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const StyledFileInput = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 16px;
  width: 40rem;
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

const Input = styled.input`
  display: none;
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
