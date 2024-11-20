import styled from "styled-components";
import CategoryList from "./CategoryList";
import PhotoList from "./PhotoList";
import { columnFlex } from "../styles/common";

export default function Home() {
  return (
    <Container>
      <CategoryList />
      <PhotoList />
    </Container>
  );
}

const Container = styled.div`
  ${columnFlex}

  gap: 3rem;

  margin-top: 5rem;
`;
