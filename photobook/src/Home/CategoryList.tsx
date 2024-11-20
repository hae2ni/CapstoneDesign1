import styled from "styled-components";
import { CATEGORY_LIST } from "../core/category";
import { rowFlex } from "../styles/common";
import DividedIcon from "../assets/Group 19.svg?react";

export default function CategoryList() {
  const NEW_LIST: string[] = ["ALL", ...CATEGORY_LIST];
  const listLength = NEW_LIST.length;
  return (
    <Container>
      {NEW_LIST.map((item, index) => {
        return (
          <TextContainer>
            <Text>{item}</Text>
            {index != listLength - 1 && <Divided />}
          </TextContainer>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  ${rowFlex}
  gap: 2rem;
`;

const TextContainer = styled.div`
  ${rowFlex}
  gap: 2rem;

  color: #6f7177;
`;

const Divided = styled(DividedIcon)`
  width: 0.5rem;
  height: 1.3rem;
`;
const Text = styled.p`
  font-size: 1.5rem;

  cursor: pointer;
`;
