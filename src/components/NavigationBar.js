// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './NavigationBar.css';


// const NavigationBar = () => (
//   <nav className="navigation">
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/records">Health Records</Link></li>
//       <li><Link to="/add">Add Record</Link></li>
//       <li><Link to="/profile">Profile</Link></li>
//       <li><Link to="/logout">Log Out</Link></li>
//     </ul>
//   </nav>
// );

const NavigationBar = () => (
  <nav className="navigation">
    <ul>
      <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
      <li><NavLink to="/records" activeClassName="active">Health Records</NavLink></li>
      <li><NavLink to="/add" activeClassName="active">Add Record</NavLink></li>
      <li><NavLink to="/profile" activeClassName="active">Profile</NavLink></li>
      <li><NavLink to="/logout" activeClassName="active">Log Out</NavLink></li>
    </ul>
  </nav>
);
export default NavigationBar;