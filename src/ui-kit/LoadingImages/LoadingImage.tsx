import React from "react";
import { LoadingBlock, Wrapper } from "./styles";

interface LoadingImageProps {
  link: string;
}

/* Components for lazy loading images. Added skeleton loading for better user experience */

const LoadingImage: React.FC<LoadingImageProps> = ({ link }) => {
  return (
    <Wrapper>
      <LoadingBlock/>
      <img
        src={link}
        loading="eager"
        alt="Gallery item"
        style={{ width: "100%" }}
      />
    </Wrapper>
  );
};

export default LoadingImage;
