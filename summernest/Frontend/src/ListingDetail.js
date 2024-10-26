// ListingDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ListingDetail = () => {
  const { id } = useParams();

  // Fetch or get the listing details based on the id
  // For this example, we'll use a static object
  const listings = [
    { id: '1', title: 'Cozy Apartment in City Center', description: 'A cozy place with modern amenities.', price: '$1,200/month' },
    { id: '2', title: 'Beach House Getaway', description: 'Enjoy the sun and surf at this beautiful beach house.', price: '$2,500/month' },
  ];

  const listing = listings.find((listing) => listing.id === id);

  return (
    <div className="p-10">
      {listing ? (
        <div className="bg-white rounded-lg shadow-lg p-10">
          <h1 className="text-3xl font-bold">{listing.title}</h1>
          <p className="mt-4">{listing.description}</p>
          <p className="mt-4 text-xl font-semibold">{listing.price}</p>
          <button className="mt-6 p-2 bg-blue-600 text-white rounded">Book Now</button>
        </div>
      ) : (
        <p>Listing not found.</p>
      )}
      <Link to="/browse-listings" className="mt-4 inline-block p-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition">
        Back to Listings
      </Link>
    </div>
  );
};

export default ListingDetail;
