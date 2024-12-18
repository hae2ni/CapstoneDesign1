import styled from "styled-components";
import PhotoContainer from "./PhotoContainer";
import { rowFlex } from "../../styles/common";
import { useFourCutStore } from "../../core/useFourCuts";
import uuid from "react-uuid";

export default function FourcutsList() {
  const IMG_LIST = useFourCutStore((state) => state.photosList);
  return (
    <Container>
      {IMG_LIST.map((item, index) => {
        const { photoList, color } = item;
        const className = `card-${uuid()}`;
        return (
          <PhotoContainer
            className={className}
            key={index}
            photoList={photoList}
            color={color}
          />
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
