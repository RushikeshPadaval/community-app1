// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import API from '../api';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

export default function Home() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await API.get('/posts');
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Community Feed</h1>
      <PostForm refreshPosts={fetchPosts} />
      <PostList posts={posts} />
    </div>
  );
}
