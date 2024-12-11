import styled from "styled-components";
export default function UploadedPhoto({ photoUrl }: { photoUrl: string }) {
  return <Photo src={photoUrl} alt="사진" />;
}

const Photo = styled.img`
  width: 100%;
  height: 100%;
`;
