// src/pages/Register.jsx
import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', bio: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/auth/register', form);
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={e => setForm({ ...form, password: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Bio"
                onChange={e => setForm({ ...form, bio: e.target.value })}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
