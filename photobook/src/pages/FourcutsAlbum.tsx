import styled from "styled-components";
import { rowFlex } from "../styles/common";
import FourcutsList from "../components/fourcuts/FourcutsList";

export default function FourcutsAlbum() {
  return (
    <Container>
      <FourcutsList />
    </Container>
  );
}

const Container = styled.div`
  ${rowFlex}

  flex-wrap: wrap;

  margin-top: 3rem;
  gap: 2rem;
`;
