import Frame from "./Frame";
import ColorBox from "./ColorBox";
import { colors } from "../../core/color";
import styled from "styled-components";
import { columnFlex, rowFlex } from "../../styles/common";

export default function UploadForcut() {
  return (
    <Container>
      <Frame />
      <TextColorContainer>
        <Text>프레임 색깔을 선택해주세요!</Text>

        <ColorBoxContainer>
          {colors.map((item) => {
            const { color } = item;
            return <ColorBox color={color} />;
          })}
        </ColorBoxContainer>
      </TextColorContainer>
    </Container>
  );
}

const ColorBoxContainer = styled.div`
  ${rowFlex}
  flex-wrap: wrap;
  width: 30rem;
  gap: 1.2rem;
`;

const Container = styled.div`
  ${rowFlex}
  flex-wrap: wrap;
  gap: 3rem;
`;

const Text = styled.p``;

const TextColorContainer = styled.div`
  ${columnFlex}
  gap: 2rem;
`;
