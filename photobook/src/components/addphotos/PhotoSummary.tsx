import styled from "styled-components";
import { columnFlex, rowFlex } from "../../styles/common";

export default function PhotoSummary() {
  return (
    <Container>
      <Title placeholder="제목을 입력해주세요." />
      <Summary placeholder="내용을 입력해주세요" />
    </Container>
  );
}

const Container = styled.div`
  ${columnFlex}
`;

const Title = styled.input`
  display: flex;
  color: #6f7177;
`;

const Summary = styled.textarea`
  ${rowFlex}
`;
