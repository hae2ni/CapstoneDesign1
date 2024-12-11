import styled from "styled-components";
import AddPhoto from "./AddPhoto";

export default function Frame() {
  const list = [0, 1, 2, 3];
  return (
    <FrameContainer>
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
  flex-direction: column; /* 세로로 사진 배치 */
  border: 4px solid black; /* 프레임 테두리 */
  background-color: red;
  padding: 5rem;
`;
