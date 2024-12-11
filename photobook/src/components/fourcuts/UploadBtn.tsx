import { Link } from "react-router-dom";
import { useFourCutStore } from "../../core/useFourCuts";
import styled from "styled-components";
import { rowFlex } from "../../styles/common";

export default function UploadBtn() {
  const addNewFile = useFourCutStore((state) => state.addNewFile);

  return (
    <Link to="/">
      <Button onClick={addNewFile}>사진 등록하기</Button>
    </Link>
  );
}

const Button = styled.button`
  ${rowFlex}
  margin-top: 10rem;
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
