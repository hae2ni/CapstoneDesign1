import Frame from "./Frame";
import ColorBox from "./ColorBox";
import { colors } from "../../core/color";
import styled from "styled-components";
import { columnFlex, rowFlex } from "../../styles/common";
import UploadBtn from "./UploadBtn";
import { useFourCutStore } from "../../store/useFourCuts";
import { useState } from "react";

export default function UploadForcut() {
  const [memo, setMemo] = useState("");
  const [array, setArray] = useState(0);

  const confirmMemo = useFourCutStore((state) => state.setMemo);

  const firstUrl = useFourCutStore((state) => state.firstUrl);
  const secondUrl = useFourCutStore((state) => state.secondUrl);
  const thirdUrl = useFourCutStore((state) => state.thirdUrl);
  const forthUrl = useFourCutStore((state) => state.forthUrl);

  const isAllFixed = firstUrl && secondUrl && thirdUrl && forthUrl;

  function handleMemo(event: React.ChangeEvent<HTMLInputElement>) {
    const memo = event?.target.value;
    setMemo(memo);
  }

  function handleOnClick() {
    confirmMemo(memo);
  }

  function AlertInput(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    if (target.value.length >= 15) {
      alert("최대 15자수 입니다.");
    }
  }

  function handleArrayBtn() {
    if (array == 0) {
      setArray(1);
    } else if (array == 1) {
      setArray(2);
    } else if (array == 2) {
      setArray(0);
    }
  }

  return (
    <Container>
      <Frame array={array} />
      <TextColorContainer>
        <Text>메모를 입력해주세요</Text>
        <MemoInputText>
          <form>
            <TextInput
              onInput={AlertInput}
              maxLength={15}
              onChange={handleMemo}
              value={memo}
              placeholder="어떤 추억인가요? (최대 15글자)"
            />
          </form>
          <MemoBtn onClick={handleOnClick}>확인</MemoBtn>
          <MemoBtn onClick={handleArrayBtn}>정렬</MemoBtn>
        </MemoInputText>
        <Text>프레임 색깔을 선택해주세요!</Text>

        <ColorBoxContainer>
          {colors.map((item) => {
            const { color } = item;
            return <ColorBox color={color} />;
          })}
          {/* <ColorPicker /> */}
        </ColorBoxContainer>
        {isAllFixed && <UploadBtn />}
      </TextColorContainer>
    </Container>
  );
}

const MemoBtn = styled.button`
  ${rowFlex}
  width: fit-content;
  padding: 1rem;
  background-color: rgba(195, 198, 207, 0.3);
  border-radius: 1.2rem;
  color: #6f7177;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: rgba(195, 198, 207, 0.7);
  }
`;

const MemoInputText = styled.div`
  ${rowFlex}
  gap: 1rem;
`;

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

const TextInput = styled.input`
  ${rowFlex}
  color: #8e919a;
  width: 23rem;
  border: solid #6f7177 0.5px;
  background: none;
  padding: 1rem;
  border-radius: 10px;
  height: 5rem;
  outline: none;

  &::placeholder {
    color: #8e919a;
  }
`;
