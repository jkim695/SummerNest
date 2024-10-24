import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import './SignUp.css'; // Assuming you have this CSS file for styling

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signing up with:', username, email);
    // Implement your signup logic here
  };

  return (
    <div className="signup-page">
      <h2>Sign Up for SummerNest</h2>
      <form onSubmit={handleSignup} className="signup-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/" className="back-button">Back to Home</Link> {/* Back button */}
    </div>
  );
};

export default Signup;
