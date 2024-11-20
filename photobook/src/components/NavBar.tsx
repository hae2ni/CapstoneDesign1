import styled from "styled-components";
import { rowFlex } from "../styles/common";

export default function NavBar() {
  return (
    <Container>
      <Text>Home</Text>
      <Text>Albums</Text>
      <Text>AddPhotos</Text>
    </Container>
  );
}

const Container = styled.nav`
  ${rowFlex}
  gap: 6.7rem
`;

const Text = styled.p`
  font-size: 1.5rem;
`;
