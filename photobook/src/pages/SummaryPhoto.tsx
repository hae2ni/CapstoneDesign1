import styled from "styled-components";
import DisplayFile from "../components/addphotos/DisplayPhoto";
import { rowFlex } from "../styles/common";
import PhotoSummary from "../components/addphotos/PhotoSummary";

export default function SummaryPhoto() {
  return (
    <Container>
      <DisplayFile />
      <PhotoSummary />
    </Container>
  );
}

const Container = styled.div`
  ${rowFlex}
`;
