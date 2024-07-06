// ChargerDetails.js

"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEdit, faEye, faFlag, faTh } from '@fortawesome/free-solid-svg-icons';
import './ChargerDetails.css'; // Use the same CSS file for consistency

interface Charger {
  uid: string;
  status: string;
  operationalStatus: string;
  initializedOn: string;
  lastPing: string;
  energyDispensed: string;
  name: string;
  ownerName: string;
  phoneNumber: string;
  alternatePhone1: string;
  alternatePhone2: string;
}

interface ChargerDetailsProps {
  charger: Charger;
  onClose: () => void;
}

const ChargerDetails: React.FC<ChargerDetailsProps> = ({ charger, onClose }) => {
  return (
    <div className="charger-details">
      <div className="header">
        <div className="header-left">
          <h1>{charger.uid}</h1>
        </div>
        <div className="header-icons">
          <FontAwesomeIcon icon={faEye} />
          <FontAwesomeIcon icon={faFlag} />
          <FontAwesomeIcon icon={faTh} />
          <button onClick={onClose}><FontAwesomeIcon icon={faTimes} /></button>
        </div>
      </div>
      <div className="tabs">
        <div className="tab active" style={{ color: 'rgb(0, 255, 89)' }}>
          Information
        </div>
        <div className="tab">
           Bookings
        </div>
        <div className="tab">
           Stats
        </div>
        <div className="tab">
           View
        </div>
      </div>
      <div className="content">
        <div className="section">
          <h3><strong>Charger Info </strong><button><FontAwesomeIcon icon={faEdit} /></button></h3>
          <h6><strong>UID:</strong> {charger.uid}</h6>
          <h6><strong>Name:</strong> {charger.name}</h6>
          <h6><strong>Initialized On:</strong> {charger.initializedOn}</h6>
          <h6><strong>Last Ping:</strong> {charger.lastPing}</h6>
        </div>
        <div className="section">
          <h3><strong>Owner Info</strong><button><FontAwesomeIcon icon={faEdit} /></button></h3>
          <h6><strong>Name:</strong> {charger.ownerName}</h6>
          <h6><strong>Phone Number:</strong> {charger.phoneNumber}</h6>
          <h6><strong>Alternate Phone 1:</strong> {charger.alternatePhone1 || '-'}</h6>
          <h6><strong>Alternate Phone 2:</strong> {charger.alternatePhone2 || '-'}</h6>
        </div>
      </div>
    </div>
  );
}

export default ChargerDetails;
