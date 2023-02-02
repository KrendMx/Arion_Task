import React from "react";
import styles from './styles.modules.sass'

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
      <div className={styles.loadingBlock}/>
    </>
  );
};

export default LoadingImage;
