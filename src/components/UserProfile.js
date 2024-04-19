
// UserProfile.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const UserProfile = () => {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')));
  const navigate = useNavigate();


  useEffect(() => {
    // Check if user data is available, if not redirect to login
    if (!userData) {
      navigate('/login');
    }
  }, [userData, navigate]);

  
  const handleLogout = () => {
    // Clear user data from local storage and state
    localStorage.clear();
    setUserData(null);
    navigate('/login');
  };

  if (!userData) {
    // No user data found.
    return null;
  }

  return (
    <div className="user-profile container mt-5">
      <FontAwesomeIcon icon={faUserCircle} size="3x" />
      <h1 className="mb-4">User Profile</h1>
      <div className="card p-4">
        <h2>{userData.username}</h2>
        <p className="mb-0"><strong>Email:</strong> {userData.email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default UserProfile;
