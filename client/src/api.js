// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://your-render-backend-url.onrender.com/api'
    : 'http://localhost:5000/api'
});
export default API;
