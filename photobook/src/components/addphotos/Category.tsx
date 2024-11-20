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
  gap: 2rem;
`;

const Container = styled.div`
  ${rowFlex}
  gap:4rem;
`;

const CategoryWrapper = styled.button`
  ${rowFlex}
  width: 12rem;
  height: 4.5rem;

  border-radius: 20px;

  box-shadow: 3px 3px 10px;
`;
