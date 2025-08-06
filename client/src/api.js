// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://community-app-server.onrender.com/', // change this if your backend is hosted
});

export default API;
