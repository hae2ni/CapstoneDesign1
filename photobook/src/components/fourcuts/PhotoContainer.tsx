import styled from "styled-components";
import DownloadBtn from "./DownloadBtn";
import { useState } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { ShareTwitter } from "./Share";

interface PhotoContainerProps {
  className: string;
  color: string;
  memo?: string;
  array?: number;
  photoList: {
    firstUrl: string;
    secondUrl: string;
    thirdUrl: string;
    forthUrl: string;
  }[];
}

export default function PhotoContainer(props: PhotoContainerProps) {
  const { photoList, color, className, memo, array } = props;
  const [isHover, setIsHover] = useState(false);

  function onClickDownload() {
    const card = document.querySelector(`.${className}`);
    if (!card) return;

    const downloadButton = card.querySelector(".download-btn") as HTMLElement;
    if (downloadButton) {
      downloadButton.style.visibility = "hidden";
    }

    domtoimage.toBlob(card).then((blob) => {
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
          <>
            <FrameContainer
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className={className}
              key={index}
              color={color}
            >
              {array && <Memo array={array}> {memo}</Memo>}
              {list.map((url, idx) => (
                <UploadedPhoto key={idx} src={url} />
              ))}
              {isHover && (
                <>
                  <DownloadBtn
                    className="download-btn"
                    onClick={onClickDownload}
                  />
                  <ShareTwitter />
                </>
              )}
            </FrameContainer>
          </>
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

const Memo = styled.div<{ array: number }>`
  display: flex;

  justify-content: ${(props) =>
    props.array === 0
      ? "flex-start"
      : props.array === 1
      ? "center"
      : "flex-end"};

  margin-bottom: 0.5rem;
  color: gray;
`;
