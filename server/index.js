const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

console.log("📦 Server is starting...");

// 👉 Register routes
const authRoutes = require("./server/routes/auth");
const postRoutes = require("./server/routes/post");

//const authRoutes = require("./routes/auth");
//const postRoutes = require("./routes/post");

// 👉 Use routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

// ✅ Root route for Render deployment check
app.get("/", (req, res) => {
  res.send("✅ Mini LinkedIn backend is running on Render!");
});

// 🔗 MongoDB connection
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing. Check your .env file.");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(5000, () => {
      console.log("🚀 Server running on http://localhost:5000");
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
