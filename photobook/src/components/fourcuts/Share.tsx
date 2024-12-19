export const ShareTwitter = () => {
  const shareOnTwitter = () => {
    const text = encodeURIComponent("내가 만든 인생 네컷을 확인해보세요!");
    const url = encodeURIComponent(window.location.href); // 현재 페이지 URL
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank"
    );
  };

  return <button onClick={shareOnTwitter}>X로공유</button>;
};
