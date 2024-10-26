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
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="flex justify-between items-center bg-white p-6 shadow-md">
        <h1 className="text-3xl font-extrabold text-blue-600">Browse Listings</h1>
        <Link to="/" className="text-blue-600 hover:text-blue-800 transition">Back to Home</Link>
      </header>

      <main className="flex-1 p-8">
        <section className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-blue-700">Search for a Sublet</h2>
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
            <input
              type="text"
              placeholder="Enter city or college name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 p-4 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="date"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
              className="p-4 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Search
            </button>
          </form>
        </section>

        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Recommended Listings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Iterate over the listings array to create listing cards */}
            {listings.map((listing) => (
              <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105" key={listing.id}>
                <h4 className="text-xl font-bold text-gray-800">{listing.title}</h4>
                <p className="text-gray-600 mt-2">Location: City, College</p>
                <p className="font-semibold text-lg text-blue-600 mt-2">Price: {listing.price}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-white p-4 text-center shadow-md">
        <p className="text-gray-600">&copy; 2024 SummerNest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BrowseListings;
