// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');

// App config
const app = express();
const PORT = process.env.PORT || 5000; 

// Enable CORS for specific frontend URL
app.use(cors({
  origin: 'https://community-app1-client.onrender.com',
  credentials: true // If using cookies/auth
}));

// Handle preflight requests
app.options('*', cors());

// Middleware
app.use(express.json());

// Basic health check route
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Mount routes with error handling
try {
  console.log("✅ Mounting /api/auth");
  app.use('/api/auth', authRoutes);

  console.log("✅ Mounting /api/posts");
  app.use('/api/posts', postRoutes);

  console.log("✅ Mounting /api/users");
  app.use('/api/users', userRoutes);
  
  console.log("✅ All routes mounted successfully");
} catch (error) {
  console.error("🔥 Error mounting routes:", error);
  process.exit(1);
}

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

console.log("✅ Reached end of index.js");