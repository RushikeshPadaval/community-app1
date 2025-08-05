// server/routes/posts.js
const express = require('express');
const Post = require('../models/Post');
const User = require('../models/User');
const router = express.Router();

// Get all posts
router.get('/', async (req, res) => {
  const posts = await Post.find().populate('author', 'name').sort({ createdAt: -1 });
  res.json(posts);
});

// Create post
router.post('/', async (req, res) => {
  const { content, authorId } = req.body;
  const post = await Post.create({ content, author: authorId });
  res.json(post);
});

module.exports = router;
