"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSun, faTh, faBell, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import ChargersInfo from './ChargersInfo';

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
  const [selectedCharger, setSelectedCharger] = useState<Charger | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle search functionality here
    console.log("Search query:", searchQuery);
  };

  return (
    <div style={{ margin: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
        <form onSubmit={handleSearchSubmit} style={{ display: "flex", alignItems: "center" }}>
      <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
        <FontAwesomeIcon icon={faSearch} style={{ position: "absolute", left: "10px", fontSize: "1.5rem", color: "#ccc" }} />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Jump to..."
          style={{
            padding: "8px 8px 8px 40px", // Adjust padding to accommodate the icon
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            minWidth: "200px",
            backgroundColor: "#000",
            color: "#ccc",
            outline: "none",
          }}
        />
      </div>
    </form>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FontAwesomeIcon icon={faSun} style={{ fontSize: "1.5rem", color: "#ccc" }} />
          <FontAwesomeIcon icon={faTh} style={{ fontSize: "1.5rem", color: "#ccc" }} />
          <FontAwesomeIcon icon={faBell} style={{ fontSize: "1.5rem", color: "#ccc" }} />
          <FontAwesomeIcon icon={faUser} style={{ fontSize: "1.5rem", color: "#ccc" }} />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
        <h1 style={{ fontSize: "2.5rem", margin: "20px", flexGrow: 1 }}>Chargers</h1>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#000",
            color: "green",
            padding: "5px 10px",
            borderRadius: "20px",
            border: "2px solid green",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        >
          <FontAwesomeIcon icon={faPlus} style={{ marginRight: "5px" }} /> Add Charger
        </button>
        {selectedCharger && (
          <div style={{ position: "absolute", top: 0, right: "calc(-100% - 10px)" }}>
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: "5px" }} /> Add Charger
          </div>
        )}
      </div>
      <ChargersInfo />
    </div>
  );
};

export default Chargers;

