import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageUpload from "./components/ImageUpload";
import ImageGallery from "./components/ImageGallery";

function App() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const res = await axios.get("https://cloudinary-api-blue.vercel.app/api/images");
      setImages(res.data);
    } catch (error) {
      console.error("Failed to fetch images", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <h1>Image Upload with Cloudinary</h1>
      <ImageUpload fetchImages={fetchImages} />
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
