import styled, { css } from "styled-components";
import { rowFlex } from "../styles/common";
import { useFileStore } from "../core/useFileStore";
import PhotoContainer from "./PhotoContainer";
import { useCategoryStore } from "../core/useCategoryStore";
import { NEW_LIST } from "../core/category";
import { useState } from "react";

export default function PhotoList() {
  const category = useCategoryStore((state) => state.clickedCategory);
  const photoList = useFileStore((state) => state.photoList);
  const [selectedPhoto, setSelectedPhoto] = useState<number>(-1);

  const filteredCategory = NEW_LIST.filter((_, index) => index == category);
  const categoriedList =
    category == 0
      ? photoList
      : photoList.filter((data) => data.category == filteredCategory[0]);

  function handlePhotoClick(photoIndex: number) {
    setSelectedPhoto(
      (prevIndex) => (prevIndex === photoIndex ? -1 : photoIndex) // 같은 사진 클릭 시 선택 해제
    );
  }

  return (
    <Container>
      {categoriedList.map((data, index) => {
        const { category, photo, title, summary } = data;

        const isSelected = selectedPhoto === index;

        return (
          <PhotoWrapper
            key={index}
            isSelected={isSelected}
            onClick={() => handlePhotoClick(index)}
          >
            <PhotoContainer
              even={index % 2 == 0}
              category={category}
              photo={photo}
              title={title}
              summary={summary}
            />
            {isSelected && (
              <>
                <TitleOverlay>{title}</TitleOverlay>
                <SummaryOverlay>{summary}</SummaryOverlay>
              </>
            )}
          </PhotoWrapper>
        );
      })}
    </Container>
  );
}

interface PhotoWrapperProps {
  isSelected: boolean;
}

const PhotoWrapper = styled.div<PhotoWrapperProps>`
  position: relative;
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected &&
    css`
      opacity: 0.5;
    `}
`;

const Container = styled.div`
  ${rowFlex}

  flex-wrap: wrap;

  margin-top: 3rem;
  gap: 2rem;
`;

const TitleOverlay = styled.p`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  text-align: center;
`;

const SummaryOverlay = styled.div`
  position: absolute;
  bottom: 45%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  text-align: center;
`;
