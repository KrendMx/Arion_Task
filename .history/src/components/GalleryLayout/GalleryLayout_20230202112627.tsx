import React, { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";
import { setRef } from "../../store/imageSlice/ImageSlice";
import Loader from "../../ui-kit/Loader";
import LoadingImage from "../../ui-kit/LoadingImages";
import { Wrapper } from "./styles";

const GalleryLayout: React.FC = () => {

  const [page, setPage] = useState<number>(0)
  const [items, setItems] = useState<number[]>([])

  const dispatch = useDispatch()

  const fetchData = () => {
    const newItems = [];
    if (page === 1100) (setPage(0));
    for (let i = page; i < page + 1; i++) {
      newItems.push(i);
    }
    setItems([...items, ...newItems]);
    setPage(page + 1);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 150);

    return () => clearTimeout(timeout);
  }, [page]);

  const reference = useRef(null);

  useEffect(() => {
    if (reference){
      dispatch(setRef(reference))
    }
  }, [reference])

  return (
    <>
      <InfiniteScroll
        dataLength={Infinity}
        next={fetchData}
        hasMore={true}
        loader={<Loader />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Wrapper ref={reference}>
          {items.map((item, index) => {
            return (
              <div key={index}>
                <LoadingImage
                  link={`https://picsum.photos/id/${item}/800/1000`}
                />
              </div>
            );
          })}
        </Wrapper>
      </InfiniteScroll>
    </>
  );
};

export default GalleryLayout;
