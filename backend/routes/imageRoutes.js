const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");
const Image = require("../models/Image");

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "mern-images",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage: storage });

// Upload Image
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const newImage = new Image({
      imageUrl: req.file.path,
      publicId: req.file.filename,
    });
    await newImage.save();
    res.status(200).json({ message: "Image uploaded successfully", image: newImage });
  } catch (err) {
    res.status(500).json({ error: "Image upload failed" });
  }
});

// Get All Images
router.get("/", async (req, res) => {
  try {
    const images = await Image.find().sort({ uploadedAt: -1 });
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve images" });
  }
});

module.exports = router;
