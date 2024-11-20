import styled from "styled-components";
import { rowFlex } from "../../styles/common";

export default function NextBtn() {
  return <Button>등록하러가기 👉</Button>;
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
