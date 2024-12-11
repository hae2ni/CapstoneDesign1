import styled from "styled-components";
import { columnFlex } from "../styles/common";
import FourcutsList from "../components/fourcuts/FourcutsList";

export default function FourcutsAlbum() {
  return (
    <Container>
      <FourcutsList />
    </Container>
  );
}

const Container = styled.div`
  ${columnFlex}
  justify-content: space-between;
  min-height: 100%;
  gap: 3rem;
  position: relative;
  margin-top: 5rem;
`;
