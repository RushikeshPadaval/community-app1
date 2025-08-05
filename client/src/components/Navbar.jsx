import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 24px',
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #ccc',
  };

  const leftLinks = {
    display: 'flex',
    gap: '15px',
  };

  const rightLinks = {
    display: 'flex',
    gap: '15px',
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'blue',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: '16px',
  };

  return (
    <nav style={navStyle}>
      <div style={leftLinks}>
        <Link to="/">Home</Link>
      </div>
      <div style={rightLinks}>
        {user ? (
          <>
            <Link to={`/profile/${user._id}`}>Profile</Link>
            <button onClick={logout} style={buttonStyle}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}
