import React, { useState } from 'react';
import './HomePage.css'; // You'll need to create this CSS file

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchDate, setSearchDate] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchTerm, 'on', searchDate);
  };

  // Mock data for featured listings
  const featuredListings = [
    { id: 1, title: 'Cozy Studio near Campus', price: '$500/month' },
    { id: 2, title: '2BR partment in Downtown', price: '$800/month' },
    { id: 3, title: 'Shared Room in Student House', price: '$300/month' },
  ];

  return (
    <div className="home-page">
      <header className="header">
        <h1>SummerNest
        </h1>
        <nav>
          <a href="/listings">Browse Listings</a>
          <a href="/create-listing">List Your Space</a>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
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

        <section className="featured-listings">
          <h3>Featured Listings</h3>
          <div className="listing-grid">
            {featuredListings.map((listing) => (
              <div key={listing.id} className="listing-card">
                <h4>{listing.title}</h4>
                <p>{listing.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-site">
          <h3>About SummerNest</h3>
          <p>
            SummerNest connects college students looking for affordable
            short-term housing with those who have spaces available to sublet.
            Whether you're studying abroad, doing an internship, or just need
            a place for the summer, we've got you covered!
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 . All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;