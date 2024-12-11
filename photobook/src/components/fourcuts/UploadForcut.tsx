import Frame from "./Frame";
import ColorBox from "./ColorBox";
import { colors } from "../../core/color";
import styled from "styled-components";
import { columnFlex, rowFlex } from "../../styles/common";
import UploadBtn from "./UploadBtn";
import { useFourCutStore } from "../../core/useFourCuts";

export default function UploadForcut() {
  const firstUrl = useFourCutStore((state) => state.firstUrl);
  const secondUrl = useFourCutStore((state) => state.secondUrl);
  const thirdUrl = useFourCutStore((state) => state.thirdUrl);
  const forthUrl = useFourCutStore((state) => state.forthUrl);

  const isAllFixed = firstUrl && secondUrl && thirdUrl && forthUrl;

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
        {isAllFixed && <UploadBtn />}
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
