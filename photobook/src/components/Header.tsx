import ClipIcon from "../assets/ClipIt.svg?react";
import { rowFlex } from "../styles/common";
import NavBar from "./NavBar";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Icon />
      <NavBar />
    </Container>
  );
}

const Container = styled.header`
  ${rowFlex}
  justify-content: space-between;
  width: 130.5rem;
  height: 3.8rem;
`;

const Icon = styled(ClipIcon)`
  width: 7.2rem;
  height: 3.2rem;
`;
