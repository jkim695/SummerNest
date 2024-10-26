import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Mock data for featured listings
  const listings = [
    { id: 1, title: 'Cozy Studio near Campus', price: '$500/month' },
    { id: 2, title: '2BR Apartment in Downtown', price: '$800/month' },
    { id: 3, title: 'Shared Room in Student House', price: '$300/month' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="flex justify-between items-center bg-white p-6 shadow-md">
        <h1 className="text-3xl font-extrabold text-blue-600">SummerNest</h1>
        <nav className="space-x-8">
          <Link to="/browse-listings" className="text-blue-600 hover:text-blue-800 transition">Browse Listings</Link>
          <Link to="/list-your-space" className="text-blue-600 hover:text-blue-800 transition">List Your Space</Link>
          <Link to="/login" className="text-blue-600 hover:text-blue-800 transition">Login</Link>
          <Link to="/signup" className="text-blue-600 hover:text-blue-800 transition">Sign Up</Link>
        </nav>
      </header>

      <main className="flex-1 p-8">
        <section className="mb-10 text-center">
          <h2 className="text-4xl font-semibold text-blue-700">Welcome to SummerNest</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Discover your ideal college sublet with ease. Our platform connects you with verified listings,
            ensuring a safe and smooth renting experience.
          </p>
          <p className="mt-2 text-gray-600">
            First time here? Click the browse listings button to view available listings or click the sign up button to make an account.
          </p>
          <p className="mt-2 text-gray-600">
            Why choose SummerNest over alternatives like Kopa or Apartments.com?
            We offer personalized listings, enhanced safety features, and a user-friendly interface that makes finding your perfect sublet a breeze.
          </p>
        </section>

        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Recommended Listings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default HomePage;