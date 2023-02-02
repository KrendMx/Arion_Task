import React from "react";
import { LoadingBlock, Wrapper } from "./styles";

interface LoadingImageProps {
  link: string;
}

const LoadingImage: React.FC<LoadingImageProps> = ({ link }) => {
  return (
    <Wrapper>
      <LoadingBlock/>
      <img
        src={link}
        alt="gallery item"
        loading="lazy"
        // style={{ width: "400px" }}
      />
    </Wrapper>
  );
};

export default LoadingImage;
