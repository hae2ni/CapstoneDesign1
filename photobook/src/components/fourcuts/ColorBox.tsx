import styled from "styled-components";
import { rowFlex } from "../../styles/common";
import { useFourCutStore } from "../../store/useFourCuts";

interface ColorBoxProps {
  color: string;
}

export default function ColorBox({ color }: ColorBoxProps) {
  const selectedColor = useFourCutStore((state) => state.color);
  const setColor = useFourCutStore((state) => state.setColor);

  function handleClickColor(color: string) {
    setColor(color);
  }

  return (
    <>
      <Box color={color} onClick={() => handleClickColor(color)}>
        {color === selectedColor ? "🤍" : ""}
      </Box>
    </>
  );
}

const Box = styled.button`
  ${rowFlex}
  width: 8rem;
  height: 8rem;
  background-color: ${({ color }) => color};
  border-radius: 10px;
  font-size: 3rem;
`;
