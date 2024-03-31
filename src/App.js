import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Dashboard from './components/Dashboard';

import HealthRecords from './components/HealthRecords'; // Component you'll need to create
import AddRecordForm from './components/AddRecordForm'; // Component you'll need to create
import UserProfile from './components/UserProfile'; // Component you'll need to create
// import Logout from './components/Logout'; 

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/" element={<Home />} exact /> */}
        {/* Define other routes here */}
        <Route path="/records" element={<HealthRecords />} />
        <Route path="/add" element={<AddRecordForm />} />
        <Route path="/profile" element={<UserProfile />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
