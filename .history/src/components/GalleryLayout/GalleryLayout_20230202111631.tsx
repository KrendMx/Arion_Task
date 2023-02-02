import React, { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { setImages, setPage, setRef } from "../../store/imageSlice/ImageSlice";
import { RootState } from "../../store/store";
import Loader from "../../ui-kit/Loader";
import LoadingImage from "../../ui-kit/LoadingImages";
import { Wrapper } from "./styles";

const GalleryLayout: React.FC = () => {
  const items = useSelector((state: RootState) => state.image.images);
  const page = useSelector((state: RootState) => state.image.page);
  const dispatch = useDispatch();

  const fetchData = () => {
    const newItems = [];
    if (page === 1100) dispatch(setPage(0));
    for (let i = page; i < page + 4; i++) {
      newItems.push(i);
    }
    dispatch(setImages(newItems));
    dispatch(setPage(5));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 400);

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
