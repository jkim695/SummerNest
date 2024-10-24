import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import './Login.css'; // Assuming you have this CSS file for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', username);
    // Implement your login logic here
  };

  return (
    <div className="login-page">
      <h2>Login to SummerNest</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/ " className="back-button">Back to Home</Link> 
    </div>
  );
};

export default Login;
