import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom
import './HomePage.css'; // Assuming you have this CSS file

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchDate, setSearchDate] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm, 'on', searchDate);
  };

  return (
    <div className="home-page">
      <header className="header">
        <h1>SummerNest</h1>
        <nav>
          {/* Use Link instead of <a> */}
          <Link to="/browse-listings">Browse Listings</Link>
          <Link to="/create-listing">List Your Space</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>Find Your Perfect College Sublet</h2>
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Enter city or college name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <input
              type="date"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 . All rights reserved.</p>
      </footer>
    </div>
  );
};
export default HomePage;
