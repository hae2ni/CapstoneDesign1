import styled from "styled-components";
import DownloadBtn from "./DownloadBtn";
import { useState } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import Img from "../../assets/christmasImage.jpg";

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
  const [isHover, setIsHover] = useState(false);

  function onClickDownload() {
    domtoimage.toBlob(document.querySelector(".card")!).then((blob) => {
      saveAs(blob, "card.png");
    });
    console.log("here");
  }

  function handleMouseOver() {
    setIsHover(true);
  }

  function handleMouseOut() {
    setIsHover(false);
  }

  return (
    <>
      {photoList.map((item, index) => {
        const { firstUrl, secondUrl, thirdUrl, forthUrl } = item;
        const list = [firstUrl, secondUrl, thirdUrl, forthUrl];

        return (
          <FrameContainer
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="card"
            key={index}
            color={color}
          >
            {list.map((url, idx) => (
              <UploadedPhoto key={idx} src={url} />
            ))}
            {isHover && <DownloadBtn onClick={onClickDownload} />}
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

  &:hover {
    background-color: white;
  }
`;

const UploadedPhoto = styled.img`
  width: 100%;
  height: 25%;
  margin-bottom: 5px;
  border-radius: 10px;
`;
