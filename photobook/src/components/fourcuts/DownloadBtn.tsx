import DownloadIc from "../../assets/icon/download.png";
import styled from "styled-components";

export default function DownloadBtn({
  onClick,
  className,
}: {
  className: string;
  onClick: () => void;
}) {
  function handleonDownloadBth() {
    onClick();
    console.log(DownloadIc);
  }

  return (
    <div className={className} onClick={handleonDownloadBth}>
      <ButtonImg src={DownloadIc} />
    </div>
  );
}

const ButtonImg = styled.img`
  display: flex;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  position: absolute;

  top: 50%;
  right: 50%;
`;
