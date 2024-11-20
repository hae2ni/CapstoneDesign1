import styled from "styled-components";
import { rowFlex } from "../styles/common";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Container>
      <Text to="/home">Home</Text>
      <Text to="/album">Albums</Text>
      <Text to="/addphoto">AddPhotos</Text>
    </Container>
  );
}

const Container = styled.nav`
  ${rowFlex}
  width: 29.5rem;
  gap: 6.7rem;
`;

const Text = styled(Link)`
  font-size: 1.5rem;
`;
