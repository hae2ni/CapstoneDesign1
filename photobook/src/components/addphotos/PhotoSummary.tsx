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
  gap: 2rem;
`;

const Title = styled.input`
  display: flex;
  color: #8e919a;
  width: 50rem;
  border: none;
  border-bottom: solid #aaaaaa 1px;
  background: none;
  padding: 1rem;
`;

const Summary = styled.textarea`
  ${rowFlex}
  color: #8e919a;
  width: 50rem;
  border: solid #6f7177 0.5px;
  background: none;
  padding: 1rem;
  border-radius: 10px;
  height: 20rem;
  outline: none;

  &::placeholder {
    color: #8e919a;
  }
`;
