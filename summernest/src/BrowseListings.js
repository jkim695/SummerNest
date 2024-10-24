import React, { useState } from 'react';
import './BrowseListings.css'; // Create this CSS file if needed

const BrowseListings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchDate, setSearchDate] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchTerm, 'on', searchDate);
  };

  // Mock data for featured listings
  const listings = [
    { id: 1, title: 'Cozy Studio near Campus', price: '$500/month' },
    { id: 2, title: '2BR Apartment in Downtown', price: '$800/month' },
    { id: 3, title: 'Shared Room in Student House', price: '$300/month' },
  ];

  return (
    <div className="browse-listings">
      <header className="header">
        <h1>Browse Listings</h1>
      </header>

      <main>
        <section className="search-section">
          <h2>Search for a Sublet</h2>
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

        <section className="listings">
          <h3>Available Listings</h3>
          <div className="listing-grid">
            {listings.map((listing) => (
              <div key={listing.id} className="listing-card">
                <h4>{listing.title}</h4>
                <p>{listing.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 . All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BrowseListings;
