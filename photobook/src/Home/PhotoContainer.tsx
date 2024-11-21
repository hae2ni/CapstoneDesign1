import styled from "styled-components";

interface PhotoContainerType {
  category: string;
  even: boolean;
  title: string;
  photo: string;
  summary: string;
}

export default function PhotoContainer(props: PhotoContainerType) {
  const { photo, even, title } = props;

  return <Image title={title} src={photo} $even={even} alt={title} />;
}

interface ImageType {
  $even: boolean;
}

const Image = styled.img<ImageType>`
  width: 32rem;
  height: ${(props) => (props.$even ? "38rem" : "40rem")};
  border-radius: 10px;
  cursor: pointer;
`;
