import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Importing all of the webpages for each of the tabs that we have
//At the top of the homepage
import HomePage from './HomePage'; 
import BrowseListings from './BrowseListings'; 
import ListYourSpace from './ListYourSpace'; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/browse-listings" element={<BrowseListings />} />
                <Route path="/list-your-space" element={<ListYourSpace />} />
            </Routes>
        </Router>
    );
}

export default App;
