"use client"; // Environment directive for client-side usage

import React, { useState } from 'react'; // Import React and useState hook

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon for icon usage
import { faSearch, faSun, faTh, faBell, faUser, faPlus } from '@fortawesome/free-solid-svg-icons'; // Import specific icons from FontAwesome
import ChargersInfo from './ChargersInfo'; // Import ChargersInfo component
import '../styles/Chargers.css'; // Import CSS styles for Chargers component

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
    setSearchQuery(event.target.value); // Update search query state on input change
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle search functionality here
    console.log("Search query:", searchQuery); // Log search query to console
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
          <FontAwesomeIcon icon={faSun} className="icon" /> {/* Sun icon */}
          <FontAwesomeIcon icon={faTh} className="icon" /> {/* Th icon */}
          <FontAwesomeIcon icon={faBell} className="icon" /> {/* Bell icon */}
          <FontAwesomeIcon icon={faUser} className="icon" /> {/* User icon */}
        </div>
      </div>
      <div className="header-container">
        <h1 className="header-title">Chargers</h1> {/* Title for Chargers */}
        <button className="add-charger-button">
          <FontAwesomeIcon icon={faPlus} className="button-icon" /> Add Charger {/* Button to add charger */}
        </button>
        {selectedCharger && (
          <div className="absolute-charger">
            <FontAwesomeIcon icon={faPlus} className="button-icon" /> Add Charger {/* Absolute positioned add charger */}
          </div>
        )}
      </div>
      <ChargersInfo /> {/* Render ChargersInfo component */}
    </div>
  );
};

export default Chargers; // Export Chargers component
