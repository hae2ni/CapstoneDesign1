import styled from "styled-components";
import { rowFlex } from "../../styles/common";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Container>
      <Text to="/">Home</Text>
      <Text to="/fourcutsAlbum">Fourcuts</Text>
      <Text to="/addphoto">AddPhotos</Text>
    </Container>
  );
}

const Container = styled.nav`
  ${rowFlex}

  gap: 6rem;
`;

const Text = styled(Link)`
  font-size: 1.5rem;
`;
