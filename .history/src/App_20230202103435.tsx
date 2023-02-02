import React from "react";
import GalleryLayout from "./components/GalleryLayout";
import Typography from "./ui-kit/Typography";

function App() {
  return (
    <div>
      <Typography fontSize="80px" fontWeight="600" color="#D6D1B1">
        Online Gallery
      </Typography>
      <Typography fontSize="20px" fontWeight="600" color="" marign="40px 0 0 0">
        Image lazy loading and infinity scrolling. Special for &emsp;
        <span style={{ color: "#D6D1B1", fontSize: "30px" }}>Arion Fund</span>
      </Typography>
      <GalleryLayout />
    </div>
  );
}

export default App;
