import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import styled from "styled-components";
import { columnFlex } from "../styles/common";

export default function Layout() {
  return (
    <>
      <Header />

      <Container>
        <Outlet />
      </Container>
    </>
  );
}

const Container = styled.main`
  ${columnFlex}
  height: 100vh;
`;
