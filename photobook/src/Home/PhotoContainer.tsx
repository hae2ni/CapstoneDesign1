import styled from "styled-components";

interface PhotoContainerType {
  category: string;
  even: boolean;
  title: string;
  photo: string;
  summary: string;
}

export default function PhotoContainer(props: PhotoContainerType) {
  const { photo, even, title, summary } = props;

  function handleClickPhoto() {}

  return (
    <Image
      onClick={() => handleClickPhoto()}
      title={title}
      summary={summary}
      src={photo}
      $even={even}
      alt={title}
    />
  );
}

interface ImageType {
  $even: boolean;
}

const Image = styled.img<ImageType>`
  width: 34.3rem;
  height: ${(props) => (props.$even ? "38rem" : "43.5rem")};
`;
