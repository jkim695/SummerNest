import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Ensure the path is correct
import BrowseListings from './BrowseListings'; // Ensure the path is correct

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/browse-listings" element={<BrowseListings />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
}

export default App;
