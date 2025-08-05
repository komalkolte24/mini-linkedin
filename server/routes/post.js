
// routes/post.js

const express = require("express");
const router = express.Router();
const Post = require("../models/post");

// Get posts by user ID
router.get("/user/:id", async (req, res) => {
  try {
    const posts = await Post.find({ author: req.params.id }).sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
