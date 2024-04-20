// NavigationBar.js
import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { NavLink, useNavigate, useLocation } from 'react-router-dom'; 
import './NavigationBar.css';

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [showLoggedOutMessage, setShowLoggedOutMessage] = useState(false);

  useEffect(() => {
    // Clear the logged out message when navigating away from the login page
    if (location.pathname !== '/login') {
      setShowLoggedOutMessage(false);
    }
  }, [location.pathname]); 


  const handleLogout = (event) => {
    event.preventDefault(); // Prevent default link behavior
    localStorage.clear();
    setShowLoggedOutMessage(true); // Set the flag to show the logged out message
    navigate('/login', { replace: true });
  };
  

return (
  <>
    <nav className="navigation">
      <ul>
        <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/records" activeClassName="active">Health Records</NavLink></li>
        <li><NavLink to="/add" activeClassName="active">Add Record</NavLink></li>
        <li><NavLink to="/profile" activeClassName="active">Profile</NavLink></li>
        <li>
          <a href="/logout" onClick={handleLogout}>Log Out</a>
        </li>
      </ul>
    </nav>
    {showLoggedOutMessage && (
      <div className="logout-message">You have been logged out.</div>
    )}
  </>
);

};

export default NavigationBar;
