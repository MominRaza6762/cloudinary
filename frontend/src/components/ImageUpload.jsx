import axios from "axios";
import { useState } from "react";

const ImageUpload = ({ fetchImages }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image!");
    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/images/upload", formData);
      alert("Image uploaded successfully!");
      setImage(null);
      fetchImages(); // Refresh images after upload
    } catch (error) {
      console.error("Upload failed", error);
      alert("Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default ImageUpload;
