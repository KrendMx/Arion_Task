import React from "react";
import GalleryLayout from "./components/GalleryLayout";
import Typography from "./ui-kit/Typography";

function App() {
  return (
    <div>
      <Typography fontSize="50px" fontWeight="600" color="#D6D1B1">
        Online Gallery
      </Typography>
      <GalleryLayout />
    </div>
  );
}

export default App;
