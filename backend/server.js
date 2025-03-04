const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const imageRoutes = require("./routes/imageRoutes");

const app = express();
app.use(express.json());
app.use(cors({
  origin: true,
  credentials: true
}));
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

app.use("/api/images", imageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
