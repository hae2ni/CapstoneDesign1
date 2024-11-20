import styled from "styled-components";
import { rowFlex } from "../styles/common";
import { useFileStore } from "../core/useFileStore";
import PhotoContainer from "./PhotoContainer";

export default function PhotoList() {
  const photoList = useFileStore((state) => state.photoList);

  function isInSequence(index: number) {
    const differences = [2, 3, 2, 1]; // 차이 패턴
    let current = 1; // 첫 번째 값
    let i = 0;

    while (current <= index) {
      if (current === index) return true; // 값이 같으면 포함
      current += differences[i]; // 패턴에 따라 값 증가
      i = (i + 1) % differences.length; // 패턴 순환
    }

    return false; // index가 수열에 포함되지 않음
  }

  return (
    <Container>
      {photoList.map((data, index) => {
        const { category, photo, title, summary } = data;
        return (
          <PhotoContainer
            key={index}
            even={isInSequence(index)}
            category={category}
            photo={photo}
            title={title}
            summary={summary}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  ${rowFlex}

  width: 100vw;
  height: 100vh;

  flex-wrap: wrap;

  gap: 2rem;
`;
