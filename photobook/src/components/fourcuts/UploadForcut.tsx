import Frame from "./Frame";
import ColorBox from "./ColorBox";
import { colors } from "../../core/color";
import styled from "styled-components";
import { rowFlex } from "../../styles/common";

export default function UploadForcut() {
  return (
    <Container>
      <Frame />
      {colors.map((item) => {
        const { color } = item;
        return <ColorBox color={color} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  ${rowFlex}
  background-color: blue;
`;
