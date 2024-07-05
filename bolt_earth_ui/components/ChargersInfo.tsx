"use client";

import React from 'react';
import './ChargersInfo.css'; // Assuming you have a CSS file for styling


const ChargersInfo = () => {
  const chargers = [
    { uid: 'BOLT_00028926', status: 'Charging', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: 'An hour ago', energyDispensed: '416.962 kWh' },
      { uid: 'BOLT_00037453', status: 'Available', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: '4 hours ago', energyDispensed: '238.792 kWh' },
      { uid: 'BOLT_00037453', status: 'Available', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: '4 hours ago', energyDispensed: '238.792 kWh' },
      { uid: 'BOLT_00037453', status: 'Available', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: '4 hours ago', energyDispensed: '238.792 kWh' },
      { uid: 'BOLT_00037453', status: 'Available', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: '4 hours ago', energyDispensed: '238.792 kWh' },
      { uid: 'BOLT_00037453', status: 'Available', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: '4 hours ago', energyDispensed: '238.792 kWh' },
      { uid: 'BOLT_00037453', status: 'Available', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: '4 hours ago', energyDispensed: '238.792 kWh' },
      { uid: 'BOLT_00037453', status: 'Available', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: '4 hours ago', energyDispensed: '238.792 kWh' },
      { uid: 'BOLT_00037453', status: 'Available', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: '4 hours ago', energyDispensed: '238.792 kWh' },
      { uid: 'BOLT_00037453', status: 'Available', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: '4 hours ago', energyDispensed: '238.792 kWh' },
      { uid: 'BOLT_00037453', status: 'Available', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: '4 hours ago', energyDispensed: '238.792 kWh' },
    { uid: 'BOLT_00037453', status: 'Available', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: '4 hours ago', energyDispensed: '238.792 kWh' },
    // Add more charger data as needed
  ];

  return (
    <div className="chargers-info">
      <div className="tabs">
        <div className="tab active">Chargers</div>
        <div className="tab">Bookings</div>
      </div>
      <table className="chargers-table">
        <thead>
          <tr>
            <th>CHARGER UID</th>
            <th>OPERATIONAL STATUS</th>
            <th>STATUS</th>
            <th>INITIALIZED ON</th>
            <th>LAST PING</th>
            <th>ENERGY DISPENSED</th>
          </tr>
        </thead>
        <tbody>
          {chargers.map((charger, index) => (
            <tr key={index}>
              <td>{charger.uid}</td>
              <td><span className={`status-indicator ${charger.operationalStatus.toLowerCase()}`}></span></td>
              <td><span className={`status-label ${charger.status.toLowerCase()}`}>{charger.status}</span></td>
              <td>{charger.initializedOn}</td>
              <td>{charger.lastPing}</td>
              <td>{charger.energyDispensed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ChargersInfo;
