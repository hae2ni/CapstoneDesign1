import { Slider } from "@mui/material";
import { useState } from "react";
import Cropper from "react-easy-crop";
import styled from "styled-components";
import { StyledEngineProvider } from "@mui/styled-engine";
import { rowFlex } from "../../styles/common";

type Area = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export default function ImageCrop({
  image,
  onCropComplete,
}: {
  image: string;
  onCropComplete: (croppedImageUrl: string) => void;
}) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  function handleCropComplete(croppedAreaPixels: Area) {
    setCroppedAreaPixels(croppedAreaPixels);
  }

  const handleCropImage = async () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx || !croppedAreaPixels) return;

    const imageElement = new Image();
    imageElement.src = image;

    imageElement.onload = () => {
      canvas.width = croppedAreaPixels.width;
      canvas.height = croppedAreaPixels.height;
      ctx.drawImage(
        imageElement,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height
      );
      const croppedImageUrl = canvas.toDataURL("image/png");
      onCropComplete(croppedImageUrl);
    };
  };

  return (
    <Wrapper>
      <CropContainer>
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={handleCropComplete}
          onZoomChange={setZoom}
        />
      </CropContainer>
      <SliderAndText>
        <Text>Zoom</Text>
        <StyledEngineProvider>
          <SliderContainer
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            onChange={(_e: Event, zoom) => setZoom(zoom as number)}
          />
        </StyledEngineProvider>
      </SliderAndText>
      <CompleteBtn onClick={handleCropImage}>완료</CompleteBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const CropContainer = styled.div`
  display: flex;
  height: 80vh;
  position: relative;
  width: 100%;
  height: 200;
  background-color: #333;
`;

const SliderAndText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rem;
  gap: 2rem;

  padding: 2rem;
`;

const Text = styled.div`
  display: flex;
  font-size: 3rem;
  padding-right: 2rem;
`;

const SliderContainer = styled(Slider)`
  padding: 2rem;
`;

const CompleteBtn = styled.button`
  ${rowFlex}
  width: 10rem;
  height: 5rem;
  padding: 2rem;

  cursor: pointer;

  font-size: 3rem;
`;
