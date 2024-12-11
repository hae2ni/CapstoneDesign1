import styled from "styled-components";
import { rowFlex } from "../styles/common";
import { Link } from "react-router-dom";

export default function AddPhoto() {
  return (
    <Container>
      <Link to="/uploadphoto">
        <Button>사진 일기</Button>
      </Link>
      <Link to="/addFourcuts">
        <Button>네컷 사진</Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  ${rowFlex}
`;

const Button = styled.button`
  ${rowFlex}
  margin-top: 10rem;
  width: fit-content;
  padding: 1.6rem;
  background-color: rgba(195, 198, 207, 0.3);
  border-radius: 1.2rem;
  color: #6f7177;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: rgba(195, 198, 207, 0.7);
  }
`;
