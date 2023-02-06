import React from "react";
import { LoadingBlock, Wrapper } from "./styles";

interface LoadingImageProps {
  link: string;
}

/* Components for lazy loading images. Added skeleton loading for better user experience */

const LoadingImage: React.FC<LoadingImageProps> = ({ link }) => {
  return (
    <Wrapper>
      <LoadingBlock />
      <img
        src={link}
        loading="eager"
        alt="Gallery item"
        style={{ width: "100%" }}
        onError={(e) => {
          e.currentTarget.src = `https://picsum.photos/id/${Math.round(
            Math.random() * 30
          )}/800/1000`;
        }}
      />
    </Wrapper>
  );
};

export default LoadingImage;
