import styled from "styled-components";
import { FOUR_CUTS } from "../../core/forcutList";
import PhotoContainer from "./PhotoContainer";
import { rowFlex } from "../../styles/common";

export default function FourcutsList() {
  return (
    <Container>
      {FOUR_CUTS.map((item, index) => {
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
