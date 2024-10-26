import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="flex justify-between items-center bg-white p-4 shadow">
        <h1 className="text-xl font-bold">Browse Listings</h1>
        <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </header>

      <main className="flex-1 p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Search for a Sublet</h2>
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mt-4">
            <input
              type="text"
              placeholder="Enter city or college name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded"
            />
            <input
              type="date"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Search
            </button>
          </form>
        </section>

        <div className="mb-8">
          <h2 className="text-xl font-semibold">Recommended Listings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {/* Iterate over the listings array to create listing cards */}
            {listings.map((listing) => (
              <div className="bg-white p-4 rounded-lg shadow" key={listing.id}>
                <h4 className="font-bold">{listing.title}</h4>
                <p className="text-gray-600">Location: City, College</p>
                <p className="font-semibold">Price: {listing.price}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-white p-4 text-center">
        <p className="text-gray-600">&copy; 2024 SummerNest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BrowseListings;
