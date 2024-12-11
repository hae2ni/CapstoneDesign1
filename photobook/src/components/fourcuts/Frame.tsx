import styled from "styled-components";
import AddPhoto from "./AddPhoto";
import { useFourCutStore } from "../../core/useFourCuts";

export default function Frame() {
  const color = useFourCutStore((state) => state.color);

  const list = [0, 1, 2, 3];
  return (
    <FrameContainer color={color}>
      {list.map((num) => {
        return <AddPhoto key={num} num={num} />;
      })}
    </FrameContainer>
  );
}

const FrameContainer = styled.div`
  width: 40rem;
  height: 80rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color};
  padding: 5rem;
  border-radius: 3px;
`;
