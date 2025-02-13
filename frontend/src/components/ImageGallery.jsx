import React from "react";

const ImageGallery = ({ images }) => {
  return (
    <div>
      <h2>Uploaded Images</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((img) => (
          <div key={img._id} style={{ margin: "10px" }}>
            <img src={img.imageUrl} alt="Uploaded" width="auto" height="auto />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
