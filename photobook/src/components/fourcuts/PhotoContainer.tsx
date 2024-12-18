import styled from "styled-components";
import DownloadBtn from "./DownloadBtn";
import { useState } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

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
    const card = document.querySelector(".card");
    if (!card) return;

    const downloadButton = card.querySelector(".download-btn") as HTMLElement;
    if (downloadButton) {
      downloadButton.style.visibility = "hidden";
    }

    domtoimage.toBlob(card!).then((blob) => {
      saveAs(blob, "card.png");
      if (downloadButton) {
        downloadButton.style.visibility = "visible";
      }
    });
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
            {isHover && (
              <DownloadBtn className="download-btn" onClick={onClickDownload} />
            )}
          </FrameContainer>
        );
      })}
    </>
  );
}

const FrameContainer = styled.div`
  position: relative;

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
