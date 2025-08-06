// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://community-app-server.onrender.com'
    : 'http://localhost:5000/api'
});
export default API;
