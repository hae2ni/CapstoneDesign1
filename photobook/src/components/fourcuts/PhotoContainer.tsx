import styled from "styled-components";

interface PhotoContainerProps {
  color: string;
  photoList: {
    firstUrl: string;
    secondUrl: string;
    thirdUrl: string;
    forthUrl: string;
  }[];
}

export default function PhotoContainer(props: PhotoContainerProps) {
  const { photoList, color } = props;
  return (
    <>
      {photoList.map((item, index) => {
        const { firstUrl, secondUrl, thirdUrl, forthUrl } = item;
        const list = [firstUrl, secondUrl, thirdUrl, forthUrl];

        return (
          <FrameContainer key={index} color={color}>
            {list.map((url, idx) => (
              <UploadedPhoto key={idx} src={url} />
            ))}
          </FrameContainer>
        );
      })}
    </>
  );
}

const FrameContainer = styled.div`
  width: 30rem;
  height: 60rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color};
  padding: 5rem;
  border-radius: 3px;
`;

const UploadedPhoto = styled.img`
  width: 100%;
  height: 25%;
  margin-bottom: 5px;
  border-radius: 10px;
`;
