import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ListYourSpace = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Listing details:', { title, price, description, location, startDate, endDate });
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl text-gray-800">List Your Space</h1>
        <Link to="/" className="text-blue-500 font-bold">Back</Link>
      </header>

      <main>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 resize-y"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Submit Listing
          </button>
        </form>
      </main>

      <footer className="text-center mt-8 text-gray-600 text-sm">
        <p>&copy; 2024 . All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ListYourSpace;
