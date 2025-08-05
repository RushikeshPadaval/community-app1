// src/components/PostList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function PostList({ posts }) {
  return (
    <div className="container mt-4">
      <h3 className="mb-3">Recent Posts</h3>
      {posts.map((post) => (
        <div key={post._id} className="card mb-3">
          <div className="card-body">
            <p className="card-text">{post.content}</p>
            <small className="text-muted">
              By <Link to={`/profile/${post.author._id}`}>{post.author.name}</Link> at{' '}
              {new Date(post.createdAt).toLocaleString()}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
}
