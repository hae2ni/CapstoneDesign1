import { FOUR_CUTS } from "../../core/forcutList";
import PhotoContainer from "./PhotoContainer";

export default function FourcutsList() {
  return (
    <>
      {FOUR_CUTS.map((item) => {
        const { photoList, color } = item;
        return <PhotoContainer photoList={photoList} color={color} />;
      })}
    </>
  );
}
