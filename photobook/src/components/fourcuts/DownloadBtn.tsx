export default function DownloadBtn({ onClick }: { onClick: () => void }) {
  function handleonDownloadBth() {
    console.log("here");
    onClick();
  }

  return <button onClick={handleonDownloadBth}>다운로드</button>;
}
