// server/routes/users.js
const express = require('express');
const User = require('../models/User');
const Post = require('../models/Post');
const router = express.Router();

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  const posts = await Post.find({ author: user._id }).sort({ createdAt: -1 });
  res.json({ user, posts });
});

module.exports = router;
