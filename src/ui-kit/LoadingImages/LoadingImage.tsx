import React, { useState } from "react";
import { LoadingBlock, Wrapper } from "./styles";

interface LoadingImageProps {
  link: string;
}

/* Components for lazy loading images. Added skeleton loading for better user experience */

const LoadingImage: React.FC<LoadingImageProps> = ({ link }) => {

  const [load, setLoad] = useState(true)
  return (

      <Wrapper visible={load}>
        <LoadingBlock />
        <img
          src={link}
          loading="eager"
          alt="Gallery item"
          style={{ width: "100%" }}
          onError={(e) => {
            setLoad(false)
          }}
        />
      </Wrapper>

  );
};

export default LoadingImage;
