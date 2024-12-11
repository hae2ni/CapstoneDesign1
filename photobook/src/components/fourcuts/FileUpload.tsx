import { useEffect, useState } from "react";
import styled from "styled-components";
import { useFourCutStore } from "../../core/useFourCuts";
import { FileUploadProps } from "../../types/FourcutsProps";
import UploadedPhoto from "./UploadedPhoto";

export default function FileUpload({ num }: FileUploadProps) {
  const [fileName, setFileName] = useState("");

  const firstUrl = useFourCutStore((state) => state.firstUrl);
  const secondUrl = useFourCutStore((state) => state.secondUrl);
  const thirdUrl = useFourCutStore((state) => state.thirdUrl);
  const forthUrl = useFourCutStore((state) => state.forthUrl);

  const setFirstPhoto = useFourCutStore((state) => state.setFirstPhoto);
  const setSecondPhoto = useFourCutStore((state) => state.setSecondPhoto);
  const setThirdPhoto = useFourCutStore((state) => state.setThirdPhoto);
  const setForthPhoto = useFourCutStore((state) => state.setForthPhoto);

  const setPhotoList = [
    { url: firstUrl, setFn: setFirstPhoto },
    { url: secondUrl, setFn: setSecondPhoto },
    { url: thirdUrl, setFn: setThirdPhoto },
    { url: forthUrl, setFn: setForthPhoto },
  ];

  const setPhoto = setPhotoList[num].setFn;
  const photoUrl = setPhotoList[num].url;

  const fileInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      setFileName(file.name);
      const fileUrl = URL.createObjectURL(file);
      setPhoto(fileUrl);
    }
  };

  useEffect(() => {
    console.log(fileName);
  }, [fileName]);

  return (
    <Container>
      {photoUrl ? (
        <UploadedPhoto photoUrl={photoUrl} />
      ) : (
        <>
          <label htmlFor="file">
            <StyledFileInput>
              <AttachmentButton>🔗 FILE UPLOAD</AttachmentButton>
            </StyledFileInput>
          </label>
          <Input
            accept="image/*"
            onChange={fileInputHandler}
            type="file"
            id="file"
          />
        </>
      )}
    </Container>
  );
}

const Input = styled.input`
  display: none;
`;

const StyledFileInput = styled.div`
  display: flex;
  justify-content: center;
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
