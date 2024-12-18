import styled from "styled-components";
import PhotoContainer from "./PhotoContainer";
import { rowFlex } from "../../styles/common";
import { useFourCutStore } from "../../core/useFourCuts";

export default function FourcutsList() {
  const IMG_LIST = useFourCutStore((state) => state.photosList);
  return (
    <Container>
      {IMG_LIST.map((item, index) => {
        const { photoList, color } = item;
        return (
          <PhotoContainer key={index} photoList={photoList} color={color} />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  ${rowFlex};
  gap: 2rem;
  margin-top: 3rem;
`;
