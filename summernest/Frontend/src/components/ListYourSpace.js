import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi'; // Importing an icon for the menu toggle

const ListYourSpace = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentListings = [
    { id: 1, title: 'Cozy Apartment in City Center', price: '$1,200/month' },
    { id: 2, title: 'Beach House Getaway', price: '$2,500/month' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Listing details:', { title, price, description, location, startDate, endDate });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex relative">
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-8 left-4 z-30 p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
        aria-label="Toggle Listings"
      >
        <HiMenu size={24} />
      </button>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed left-0 top-0 h-full w-64 bg-gray-800 text-white p-4 shadow-lg z-20">
          {/* Current Listings Section */}
          <div className="mt-16"> {/* Margin top to position below the button */}
            <h2 className="text-lg font-bold mb-4">Current Listings</h2>
            <ul>
              {currentListings.map((listing) => (
                <li key={listing.id} className="mb-2">
                  <Link to={`/listing/${listing.id}`} className="hover:underline">
                    {listing.title} - {listing.price}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`flex-grow flex items-center justify-center p-10 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : ''}`}>
        <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-4xl">
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-blue-600">List Your Space</h1>
            <Link to="/" className="text-blue-500 font-semibold hover:underline">Back</Link>
          </header>

          <main>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <input
                type="text"
                placeholder="Price (e.g., $500/month)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-y"
              />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <div className="flex space-x-4">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                  className="flex-1 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                  className="flex-1 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <button type="submit" className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                Submit Listing
              </button>
            </form>
          </main>

          <footer className="text-center mt-8 text-gray-600 text-sm">
            <p>&copy; 2024 SummerNest. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ListYourSpace;
