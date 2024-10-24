import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './ListYourSpace.css'; // Optional: Create a CSS file for styling

const ListYourSpace = () => {
  // State for the listing details
  const [listingDetails, setListingDetails] = useState({
    title: '',
    price: '',
    description: '',
    location: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setListingDetails({
      ...listingDetails,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission, e.g., send the data to a server
    console.log('Listing submitted:', listingDetails);
    // Optionally reset the form
    setListingDetails({
      title: '',
      price: '',
      description: '',
      location: '',
    });
  };

  return (
    <div className="list-your-space">
      <header className="header">
        <h1>List Your Space</h1>
        <Link to="/" className="back-button">Back to Home</Link> {/* Back Button */}
      </header>

      <main>
        <section className="listing-form">
          <h2>Enter Your Listing Details</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Listing Title"
              value={listingDetails.title}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="price"
              placeholder="Price per Month"
              value={listingDetails.price}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={listingDetails.description}
              onChange={handleChange}
              required
            ></textarea>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={listingDetails.location}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit Listing</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 . All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ListYourSpace; // Export the component
