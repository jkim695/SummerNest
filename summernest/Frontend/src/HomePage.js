import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
        <h1>SummerNest</h1>
        <nav>
          <Link to="/browse-listings">Browse Listings</Link>
          <Link to="/list-your-space">List Your Space</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>Welcome to SummerNest</h2>
          <p>
            Discover your ideal college sublet with ease. Our platform connects you with verified listings, ensuring a safe and smooth renting experience.
          </p>
          <p>
            First time here? Click the browse listings button to view available listings or click the sign up button to make an account.
          </p>
          <p>
            Why choose SummerNest over alternatives like Kopa or Apartments.com? 
            We offer personalized listings, enhanced safety features, and a user-friendly interface that makes finding your perfect sublet a breeze.
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 SummerNest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
