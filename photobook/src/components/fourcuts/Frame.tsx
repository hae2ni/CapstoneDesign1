import styled from "styled-components";
import { useFourCutStore } from "../../core/useFourCuts";
import FileUpload from "./FileUpload";

export default function Frame() {
  const color = useFourCutStore((state) => state.color);
  const memo = useFourCutStore((state) => state?.memo);

  const list = [0, 1, 2, 3];
  return (
    <FrameContainer color={color}>
      {memo}
      {list.map((num) => {
        return <FileUpload key={num} num={num} />;
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
