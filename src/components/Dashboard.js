//Dashboard 
import React, { useState }  from 'react';
import AppointmentList from './AppointmentList'; 
import LabResults from './LabResults';           // Make sure the path is correct
import MedicationList from './MedicationList'; 
import './Dashboard.css'; 
import DoctorVisitList from './DoctorVisitList';
import SignUpForm from './SignUpForm';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom'; 
import LoginPage from './LoginPage';


// const Dashboard = () => (
//     <div className="dashboard">
//       <AppointmentList />
//       <LabResults />
//       <MedicationList />
//     </div>
//   );

// export default Dashboard;

// const Dashboard = () => {
//     return (
//       <div className="dashboard">    
//         <section className="medication-schedule-section">
//           <h2>Medication List</h2>
//           <MedicationList />
//         </section>

//         <section className="doctor-visit-section">
//           <h2>Doctor Visits</h2>
//           <DoctorVisitList />
//         </section>

//         <section className="lab-results-section">
//           <h2>Recent Lab Results</h2>
//           <LabResults />
//         </section>

//       </div>
//     );
//   };
  
//   export default Dashboard;


// const SignUpPage = () => {
//   const handleSignUp = (credentials) => {
//     fetch('http://localhost:3001/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(credentials),
//     })
//     .then(response => response.json())
//     .then(data => {
//       // Handle the response data
//       console.log(data);
//     })
//     .catch((error) => {
//       // Handle any errors
//       console.error('Error:', error);
//       //navigate('/login'); // Redirect user to login page after successful signup
//     });
//   };

//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <SignUpForm onSignUp={handleSignUp} />
//     </div>
//   );
// };

// export default SignUpPage;


// const Dashboard = () => {
//   const handleSignUp = (credentials) => {
//     fetch('http://localhost:3001/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(credentials),
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       // might want to navigate the user to another page or show a success message
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//       //  show an error message to the user
//     });
//   };

//   // Include a similar handler for login 

//   return (
//     <div>
//       <h1>Welcome to the Health Records Platform</h1>
//       <p>Manage and keep track of your health records easily and securely.</p>
//       <SignUpForm onSignUp={handleSignUp} />
//       {/* Similarly, you can include a LoginForm here or a button to toggle to a LoginForm */}
//     </div>
//   );
// };

// export default Dashboard;




const Dashboard = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleSignUp = (credentials) => {
    fetch('http://localhost:3001/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setShowSignUp(false); // Hide the sign-up form upon successful sign-up
      // Optionally, navigate to login page or dashboard
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  const handleLogin = (credentials) => {
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      navigate('/dashboard'); // Redirect user to dashboard after successful login
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

//   return (
//     <div>
//       <h1>Welcome to the Health Records Platform</h1>
//       <p>Manage and keep track of your health records easily and securely.</p>
//       <button className="dashboard-button" onClick={() => setShowSignUp(true)}>Sign Up</button>
//       <button className="dashboard-button" onClick={() => setShowLogin(true)}>Login</button>
//       {!showSignUp && !showLogin && (
//         <>
//           <button onClick={() => setShowSignUp(true)}>Sign Up</button>
//           <button onClick={() => setShowLogin(true)}>Login</button>
//         </>
//       )}

//       {showSignUp && (
//         <>
//           <h1>Sign Up</h1>
//           <SignUpForm onSignUp={handleSignUp} />
//           <button onClick={() => setShowSignUp(false)}>Back</button>
//         </>
//       )}

//       {showLogin && (
//         <>
//           <h1>Login</h1>
//           <LoginPage onLogin={handleLogin} />
//           <button onClick={() => setShowLogin(false)}>Back</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Dashboard;



return (
  <div className="dashboard">
    <h1>Welcome to the Health Records Platform</h1>
    <p>Manage and keep track of your health records easily and securely.</p>

    {!showSignUp && !showLogin && (
      <>
        <button className="dashboard-button sign-up-button" onClick={() => setShowSignUp(true)}>Sign Up</button>
        <button className="dashboard-button login-button" onClick={() => setShowLogin(true)}>Login</button>
      </>
    )}

    {showSignUp && (
      <>
        <SignUpForm onSignUp={handleSignUp} />
        <button onClick={() => setShowSignUp(false)}>Back</button>
      </>
    )}

    {showLogin && (
      <>
        <LoginPage onLogin={handleLogin} />
        <button onClick={() => setShowLogin(false)}>Back</button>
      </>
    )}
  </div>
);
};

export default Dashboard;
