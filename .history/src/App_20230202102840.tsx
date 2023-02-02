import React from "react";
import GalleryLayout from "./components/GalleryLayout";
import Typography from "./ui-kit/Typography";

function App() {
  return (
    <div>
      <Typography fontSize="50px">
        Online Gallery
      </Typography>
      <GalleryLayout />
    </div>
  );
}

export default App;
