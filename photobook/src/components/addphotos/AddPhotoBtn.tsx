import styled from "styled-components";
import { rowFlex } from "../../styles/common";
import { useFileStore } from "../../core/useFileStore";

export default function AddPhotoBtn() {
  const addNewFile = useFileStore((state) => state.addNewFile);
  return <Button onClick={addNewFile}>사진 등록하기</Button>;
}

const Button = styled.button`
  ${rowFlex}
  width: fit-content;
  padding: 1.6rem;
  background-color: rgba(195, 198, 207, 0.3);
  border-radius: 1.2rem;
  color: #6f7177;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: rgba(195, 198, 207, 0.7);
  }
`;
