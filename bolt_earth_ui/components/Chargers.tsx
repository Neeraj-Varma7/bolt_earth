"use client"; // Environment directive for client-side usage since next considers this code fot service side

import React, { useState } from 'react'; // Import React and useState hook

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSearch, faSun, faTh, faBell, faUser, faPlus } from '@fortawesome/free-solid-svg-icons'; 
import ChargersInfo from './ChargersInfo'; 
import '../styles/Chargers.css'; 

type Charger = {
  uid: string;
  status: string;
  lastPing: string;
  energyDispensed: string;
  initializedOn: string;
  owner: string;
  phone: string;
};

const Chargers = () => {
  const [selectedCharger, setSelectedCharger] = useState<Charger | null>(null); // State to manage selected charger details
  const [searchQuery, setSearchQuery] = useState<string>(''); // State to manage search query string

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value); 
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Search query:", searchQuery); // sample function
  };

  return (
    <div className="chargers-container">
      <div className="search-bar-container">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <div className="search-input-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon" /> {/* Search icon */}
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Jump to..."
              className="search-input"
            />
          </div>
        </form>
        <div className="icons-container">
          <FontAwesomeIcon icon={faSun} className="icon" />
          <FontAwesomeIcon icon={faTh} className="icon" /> 
          <FontAwesomeIcon icon={faBell} className="icon" /> 
          <FontAwesomeIcon icon={faUser} className="icon" /> 
        </div>
      </div>
      <div className="header-container">
        <h1 className="header-title">Chargers</h1> {/* Title for page */}
        <button className="add-charger-button">
          <FontAwesomeIcon icon={faPlus} className="button-icon" /> Add Charger {/* Button to add charger */}
        </button>
        {selectedCharger && (
          <div className="absolute-charger">
            <FontAwesomeIcon icon={faPlus} className="button-icon" /> Add Charger
          </div>
        )}
      </div>
      <ChargersInfo /> {/* Render ChargersInfo component */}
    </div>
  );
};

export default Chargers; // Export Chargers component
