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
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="flex justify-between items-center bg-white p-4 shadow">
        <h1 className="text-xl font-bold">SummerNest</h1>
        <nav className="space-x-4">
          <Link to="/browse-listings" className="text-blue-600 hover:underline">Browse Listings</Link>
          <Link to="/list-your-space" className="text-blue-600 hover:underline">List Your Space</Link>
          <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
        </nav>
      </header>

      <main className="flex-1 p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Welcome to SummerNest</h2>
          <p className="mt-2">
            Discover your ideal college sublet with ease. Our platform connects you with verified listings, ensuring a safe and smooth renting experience.
          </p>
          <p className="mt-2">
            First time here? Click the browse listings button to view available listings or click the sign up button to make an account.
          </p>
          <p className="mt-2">
            Why choose SummerNest over alternatives like Kopa or Apartments.com? 
            We offer personalized listings, enhanced safety features, and a user-friendly interface that makes finding your perfect sublet a breeze.
          </p>
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

export default HomePage;
