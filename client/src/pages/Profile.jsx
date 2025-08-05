// src/pages/Profile.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

export default function Profile() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await API.get(`/users/${id}`);
        setProfile(res.data);
      } catch (err) {
        console.error('Error fetching profile:', err);
      }
    }
    fetchProfile();
  }, [id]);

  if (!profile) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="mb-3">{profile.user.name}</h2>
        <p><strong>Email:</strong> {profile.user.email}</p>
        <p><strong>Bio:</strong> {profile.user.bio || 'No bio added yet.'}</p>
      </div>

      <h3 className="mt-5">Posts by {profile.user.name}</h3>

      {profile.posts.length === 0 ? (
        <p className="text-muted">No posts yet.</p>
      ) : (
        profile.posts.map(post => (
          <div key={post._id} className="card mt-3 p-3 shadow-sm">
            <p>{post.content}</p>
            <small className="text-muted">{new Date(post.createdAt).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
}
