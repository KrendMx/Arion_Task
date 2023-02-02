import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./styles.module.sass";

const GalleryLayout: React.FC = () => {
  return <>
        <InfiniteScroll
        dataLength={Infinity}
        next={fetchData as any}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
                          <b>Yay! You have seen it all</b>
                        
          </p>
        }
      >                        
      </InfiniteScroll>
            
    </div>
  </>;
};

export default GalleryLayout;
