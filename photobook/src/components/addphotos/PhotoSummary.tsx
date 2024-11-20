import styled from "styled-components";
import { columnFlex, rowFlex } from "../../styles/common";
import Category from "./Category";
import { useFileStore } from "../../core/useFileStore";
import { useState } from "react";

export default function PhotoSummary() {
  const [clicked, setClicked] = useState("");

  const title = useFileStore((state) => state.title);
  const summary = useFileStore((state) => state.summary);
  const setTitle = useFileStore((state) => state.setTitle);
  const setSummary = useFileStore((state) => state.setSummary);

  function handleTitle(event: React.ChangeEvent<HTMLInputElement>) {
    const title = event.target.value;
    setTitle(title);
  }

  function handleSummary(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const summary = event.target.value;
    setSummary(summary);
  }

  return (
    <Container>
      <Title
        onChange={handleTitle}
        value={title}
        placeholder="제목을 입력해주세요."
      />
      <Category clicked={clicked} setClicked={setClicked} />
      <Summary
        value={summary}
        onChange={handleSummary}
        placeholder="내용을 입력해주세요"
      />
    </Container>
  );
}

const Container = styled.div`
  ${columnFlex}
  gap: 2rem;
  font-size: 1.2rem;

  margin-left: 5rem;
`;

const Title = styled.input`
  display: flex;
  color: #8e919a;
  width: 50rem;

  border: none;
  border-bottom: solid #aaaaaa 1px;
  background: none;
  padding: 1rem;

  &::placeholder {
    font-size: 1.2rem;
  }
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
