/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";
import { setRef } from "../../store/imageSlice/ImageSlice";
import Loader from "../../ui-kit/Loader";
import LoadingImage from "../../ui-kit/LoadingImages";
import { Wrapper } from "./styles";

const GalleryLayout: React.FC = () => {
  /* Two local states for counting pages and images */

  const [page, setPage] = useState<number>(0);
  const [items, setItems] = useState<number[]>([]);

  /* Redux dispatch. Of course we can write this project without redux, but i want to show that I can use it) */
  const dispatch = useDispatch();

  /* The function increases the number of elements in the array by 5 */

  const fetchData = () => {
    const newItems = [];
    if (page >= 1085) setPage(0);
    for (let i = page; i < page + 2; i++) {
      newItems.push(i);
    }
    setItems([...items, ...newItems]);
    setPage(page + 3);
  };

  /* this useEffect update count of images */

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 250);

    return () => clearTimeout(timeout);
  }, [page]);

  const reference = useRef(null);

  /* this useEffect add the ref of element to store*/

  useEffect(() => {
    if (reference) {
      dispatch(setRef(reference));
    }
  }, [reference]);

  return (
    <>
      {/* 
        In my solution I used the library "react-infinite-scroll-component", 
        that added infinity scroll HOC. 
        Inside we go through the array and add the missing pictures
        */}
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
