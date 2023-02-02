import React from "react";

interface LoadingImageProps {
  link: string;
}

const LoadingImage: React.FC<LoadingImageProps> = ({ link }) => {
  return (
    <>
      <img
        src={link}
        alt="gallery item"
        loading="lazy"
        style={{ width: "400px" }}
      />
    </>
  );
};

export default LoadingImage;
