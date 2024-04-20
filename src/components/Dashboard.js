//Dashboard 
import React, { useState }  from 'react';
import AppointmentList from './AppointmentList'; 
import LabResults from './LabResults';           
import MedicationList from './MedicationList'; 
import './Dashboard.css'; 
import DoctorVisitList from './DoctorVisitList';
import SignUpForm from './SignUpForm';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom'; 
import LoginPage from './LoginPage';


const Dashboard = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate(); // Hook for navigation
  const [signupConfirmation, setSignupConfirmation] = useState('');

  const token = localStorage.getItem('token');
  const isLoggedIn = token;



  const handleSignUp = (credentials) => {
    fetch('http://localhost:3001/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setSignupConfirmation(`Thanks for signing up, ${data.user.username}!`);
      
      // Show the confirmation message for a short time before redirecting
      setTimeout(() => {
        navigate('/login'); // Navigate to login after a delay
      }, 3000); // Delay in milliseconds (e.g., 3000ms = 3 seconds)
    })
    .catch((error) => {
      console.error('Error:', error);
      setSignupConfirmation('An error occurred during sign up.');
    });
  };





  const handleLogin = (credentials) => {
    fetch('http://localhost:3001/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Login failed');
      }
      return response.json();
    })
    .then(data => {
      console.log('Server response:', data);
      // data.user contains the user data and data.token contains the JWT token
      localStorage.setItem('token', data.token); // Save the token to localStorage
      localStorage.setItem('user', JSON.stringify(data.user)); // Save the user data for later use
      navigate('/profile'); // Redirect user to profile page
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };


return (
  <div className="dashboard">
    <h1>Welcome to the Health Records Platform</h1>
    <p className="message-style">Manage and keep track of your health records easily and securely.</p>

    {/* Display a confirmation message after signup */}
    {signupConfirmation && <p className="signup-confirmation">{signupConfirmation}</p>}

    {/* If the user is not logged in, show the signup and login options */}
    {!isLoggedIn && (
      <>
        <button className="dashboard-button sign-up-button" onClick={() => setShowSignUp(true)}>Sign Up</button>
        <button className="dashboard-button login-button" onClick={() => setShowLogin(true)}>Login</button>
      </>
    )}

    {/* If the user clicked 'Sign Up', show the signup form */}
    {showSignUp && (
      <>
        <SignUpForm onSignUp={handleSignUp} />
        <button onClick={() => setShowSignUp(false)}>Back</button>
      </>
    )}

    {/* If the user clicked 'Login', show the login form */}
    {showLogin && (
      <>
        <LoginPage onLogin={handleLogin} />
        <button onClick={() => setShowLogin(false)}>Back</button>
      </>
    )}

    {/* If the user is logged in, you might show a welcome message or dashboard summary */}
    {isLoggedIn && (
      <div>
        <h2>Welcome back to your Health Dashboard!</h2>
      </div>
    )}
  </div>
);



};

export default Dashboard;
