import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Importing all of the webpages for each of the tabs that we have
//At the top of the homepage
import HomePage from './HomePage'; 
import BrowseListings from './BrowseListings'; 
import ListYourSpace from './ListYourSpace'; 
import Login from './Login';
import Signup from './SignUp';
import './index.css'; // Adjust the path as necessary
import ListingDetail from './ListingDetail'; // Import the ListingDetail component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/browse-listings" element={<BrowseListings />} />
                <Route path="/list-your-space" element={<ListYourSpace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/listing/:id" element={<ListingDetail/>} />
            </Routes>
        </Router>
    );
}

export default App;
