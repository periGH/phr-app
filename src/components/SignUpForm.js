import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SignUpForm = ({ onSignUp }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    email: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp(credentials);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      <input
        type="email"
        name="email"
        value={credentials.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
