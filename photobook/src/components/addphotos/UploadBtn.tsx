import styled from "styled-components";
import { rowFlex } from "../../styles/common";

export default function UploadBtn() {
  return <Container>업로드</Container>;
}

const Container = styled.button`
  ${rowFlex}
  width: 20rem;
  height: 7.5rem;

  border-radius: 20px;

  background-color: rgba(195, 198, 207, 30);
`;
