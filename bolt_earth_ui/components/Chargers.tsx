"use client";

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
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
      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginBottom: "10px" }}>
        <form onSubmit={handleSearchSubmit} style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
            <span style={{ fontSize: "1.5rem", color: "#ccc", marginRight: "5px" }}>🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Jump to..."
              style={{
                padding: "8px",
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
          <button
            type="submit"
            style={{
              padding: "8px",
              fontSize: "1rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              backgroundColor: "#000",
              color: "#ccc",
              cursor: "pointer",
              outline: "none",
            }}
          >
            /
          </button>
        </form>
        <div
          style={{
            backgroundColor: "#000",
            color: "green",
            padding: "5px 10px",
            borderRadius: "20px",
            border: "2px solid green",
            cursor: "pointer",
            alignSelf: "flex-end",
            marginLeft: "600px"
          }}
        >
          + Add Charger
        </div>
      </div>
      <h1 style={{ fontSize: "2.5rem", margin: "20px" }}>Charger</h1>
      <ChargersInfo/>
    </div>
  );
};

export default Chargers;

