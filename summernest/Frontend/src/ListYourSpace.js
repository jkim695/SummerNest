import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ListYourSpace.css'; // Assuming you have this CSS file

const ListYourSpace = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState(''); // New state for start date
  const [endDate, setEndDate] = useState('');     // New state for end date

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log('Listing details:', { title, price, description, location, startDate, endDate });
  };

  return (
    <div className="list-your-space">
      <header className="header">
        <h1>List Your Space</h1>
        <Link to="/ " className="back-button">Back</Link>
      </header>

      <main>
        <form onSubmit={handleSubmit} className="listing-form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          {/* New start date input */}
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
          {/* New end date input */}
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
          <button type="submit">Submit Listing</button>
        </form>
      </main>

      <footer>
        <p>&copy; 2024 . All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ListYourSpace;
