import styled from "styled-components";

interface PhotoContainerType {
  photoUrl: string;
  even: boolean;
  title: string;
}

export default function PhotoContainer(props: PhotoContainerType) {
  const { photoUrl, even, title } = props;
  return <Image src={photoUrl} $even={even} alt={title} />;
}

interface ImageType {
  $even: boolean;
}

const Image = styled.img<ImageType>`
  width: 34.3rem;
  height: ${(props) => (props.$even ? "38rem" : "43.5rem")};
`;
