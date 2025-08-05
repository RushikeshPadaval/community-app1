// src/components/PostForm.jsx
import React, { useState } from 'react';
import API from '../api';

export default function PostForm({ refreshPosts }) {
  const [content, setContent] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));

  const handlePost = async (e) => {
    e.preventDefault();
    if (!user) return alert("Login first!");
    await API.post('/posts', { content, authorId: user._id });
    setContent('');
    refreshPosts();
  };

  return (
    <form 
      onSubmit={handlePost} 
      style={{ 
        margin: '20px auto', 
        width: '80%', 
        textAlign: 'center', 
        padding: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        borderRadius: '8px'
      }}
    >
      <textarea
        rows="3"
        cols="50"
        placeholder="Write something..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          resize: 'vertical',
          boxSizing: 'border-box'
        }}
      />
      <br />
      <button 
        type="submit" 
        style={{
          marginTop: '10px',
          padding: '8px 16px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Post
      </button>
    </form>
  );
}
