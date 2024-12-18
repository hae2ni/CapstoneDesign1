import styled from "styled-components";
import { useFourCutStore } from "../../core/useFourCuts";
import FileUpload from "./FileUpload";

export default function Frame({ array }: { array: number }) {
  const color = useFourCutStore((state) => state.color);
  const memo = useFourCutStore((state) => state?.memo);

  const list = [0, 1, 2, 3];
  return (
    <FrameContainer color={color}>
      <Memo array={array}>{memo}</Memo>
      {list.map((num) => {
        return <FileUpload key={num} num={num} />;
      })}
    </FrameContainer>
  );
}

const Memo = styled.div<{ array: number }>`
  display: flex;

  justify-content: ${(props) =>
    props.array === 0
      ? "flex-start"
      : props.array === 1
      ? "center"
      : "flex-end"};

  margin-bottom: 0.5rem;
  color: gray;
`;

const FrameContainer = styled.div`
  width: 40rem;
  height: 80rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color};
  padding: 5rem;
  border-radius: 3px;
`;
