// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');

//app config
const app = express();
const port = process.env.PORT || 5000; 


// Enable CORS for specific frontend URL
app.use(cors({
  origin: 'https://community-app1-client.onrender.com',
  credentials: true // If using cookies/auth
}));

// Handle preflight requests
app.options('*', cors());


//middleware
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
  .catch(err => console.error(err));
