import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./styles.module.sass";

const GalleryLayout: React.FC = () => {
    const [items, setItems] = useState<any[]>([]);
    const [page, setPage] = useState(0);
  
    const fetchData = () => {
      const newItems = [];
      if (page === 1100) {
        setPage(0);
      }
      for (let i = page; i < page + 5; i++) {
        newItems.push(i);
      }
      setItems([...items, ...newItems]);
      setPage(page + 5);
    };
  
    useEffect(() => {
      fetchData();
    }, []);
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
