
const express = require("express");
const router = express.Router(); // ✅ THIS WAS MISSING

//const User = require("../models/user");
const User = require("../models/user");

///const User = require("../../models/user");


// Get user by ID
router.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password"); // hide password
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router; // ✅ Export the router to use it in index1.js
