import styled from "styled-components";
import { columnFlex, rowFlex } from "../../styles/common";
import { CATEGORY_LIST } from "../../core/category";

export default function Category() {
  return (
    <Wrapper>
      <p>앨범을 선택하세요</p>
      <Container>
        {CATEGORY_LIST.map((data) => {
          return <CategoryWrapper>{data}</CategoryWrapper>;
        })}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: #8e919a;
  ${columnFlex}
  align-items: flex-start;
  gap: 2rem;
  width: 50rem;

  font-size: 1.2rem;
`;

const Container = styled.div`
  ${rowFlex}
  gap:4rem;
`;

const CategoryWrapper = styled.button`
  ${rowFlex}
  width: 10rem;
  height: 4.5rem;

  border-radius: 20px;

  box-shadow: 3px 3px 10px;
  font-size: 1.5rem;
  background-color: #eaeaea;

  color: #c3c6cf;

  &:hover {
    color: white;
  }
`;
