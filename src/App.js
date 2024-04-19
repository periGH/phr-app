import logo from './logo.svg';
import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Dashboard from './components/Dashboard';

import HealthRecords from './components/HealthRecords'; 
import AddRecordForm from './components/AddRecordForm'; 
import UserProfile from './components/UserProfile'; 

import SignUpForm from './components/SignUpForm';
import LoginPage from './components/LoginPage';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />  */}
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginPage />} />

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
