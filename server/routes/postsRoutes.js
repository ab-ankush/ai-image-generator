import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Posts from "../mongoDB/models/posts.js";
dotenv.config();
const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, data: err.message });
  }
});

// Post an Image
router.post("/", async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const image = await cloudinary.uploader.upload(photo, {
      folder: "AI-image-generator",
    });

    const newPost = await Posts.create({
      name,
      prompt,
      photo: image.url,
    });

    res.status(200).json({ success: true, data: "something" });
  } catch (err) {
    res.status(500).json({ success: false, data: err.message });
  }
});

export default router;
