import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

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
      <Input type="file" id="file" ref={inputEl} />
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
  gap: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 16px;
  width: 400px;
`;

const AttachmentButton = styled.div`
  width: fit-content;
  padding: 16px;
  background-color: rgba(195, 198, 207, 30);
  border-radius: 12px;
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
`;
