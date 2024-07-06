import React, { useState } from 'react';
import '../styles/ChargersInfo.css'; // Assuming you have a CSS file for styling
import ChargerDetails from './ChargerDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faDownload, faFilter } from '@fortawesome/free-solid-svg-icons'; // Importing the faSearch and faDownload icons

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

const ChargersInfo: React.FC = () => {
  const chargers: Charger[] = [
    { uid: 'BOLT_00028926', status: 'Charging', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: 'An hour ago', energyDispensed: '416.962 kWh', name: 'JS carnation EV charger -1', ownerName: 'Ayan Basu', phoneNumber: '+91 91489 19899', alternatePhone1: '', alternatePhone2: '' },
    { uid: 'BOLT_00037453', status: 'Available', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: '4 hours ago', energyDispensed: '238.792 kWh', name: '', ownerName: '', phoneNumber: '', alternatePhone1: '', alternatePhone2: '' },
    { uid: 'BOLT_00028926', status: 'Charging', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: 'An hour ago', energyDispensed: '416.962 kWh', name: 'JS carnation EV charger -1', ownerName: 'Ayan Basu', phoneNumber: '+91 91489 19899', alternatePhone1: '', alternatePhone2: '' },
    { uid: 'BOLT_00037453', status: 'Available', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: '4 hours ago', energyDispensed: '238.792 kWh', name: '', ownerName: '', phoneNumber: '', alternatePhone1: '', alternatePhone2: '' },
    { uid: 'BOLT_00028926', status: 'Charging', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: 'An hour ago', energyDispensed: '416.962 kWh', name: 'JS carnation EV charger -1', ownerName: 'Ayan Basu', phoneNumber: '+91 91489 19899', alternatePhone1: '', alternatePhone2: '' },
    { uid: 'BOLT_00037453', status: 'Available', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: '4 hours ago', energyDispensed: '238.792 kWh', name: '', ownerName: '', phoneNumber: '', alternatePhone1: '', alternatePhone2: '' },
    { uid: 'BOLT_00028926', status: 'Charging', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: 'An hour ago', energyDispensed: '416.962 kWh', name: 'JS carnation EV charger -1', ownerName: 'Ayan Basu', phoneNumber: '+91 91489 19899', alternatePhone1: '', alternatePhone2: '' },
    { uid: 'BOLT_00037453', status: 'Available', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: '4 hours ago', energyDispensed: '238.792 kWh', name: '', ownerName: '', phoneNumber: '', alternatePhone1: '', alternatePhone2: '' },
    { uid: 'BOLT_00028926', status: 'Charging', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: 'An hour ago', energyDispensed: '416.962 kWh', name: 'JS carnation EV charger -1', ownerName: 'Ayan Basu', phoneNumber: '+91 91489 19899', alternatePhone1: '', alternatePhone2: '' },
    { uid: 'BOLT_00037453', status: 'Available', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: '4 hours ago', energyDispensed: '238.792 kWh', name: '', ownerName: '', phoneNumber: '', alternatePhone1: '', alternatePhone2: '' },
    { uid: 'BOLT_00028926', status: 'Charging', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: 'An hour ago', energyDispensed: '416.962 kWh', name: 'JS carnation EV charger -1', ownerName: 'Ayan Basu', phoneNumber: '+91 91489 19899', alternatePhone1: '', alternatePhone2: '' },

    // Add more charger data as needed
  ];

  const [selectedCharger, setSelectedCharger] = useState<Charger | null>(null);

  const handleRowClick = (charger: Charger) => {
    setSelectedCharger(charger);
  }

  const handleCloseDetails = () => {
    setSelectedCharger(null);
  }

  return (
    <div className="main-container">
      <div className="charger-list">
        <div className="chargers-info">
          <div className="tabs">
            <div className="tab active">Chargers</div>
            <div className="tab">Booking</div>
            <div className="tab">
              <FontAwesomeIcon icon={faFilter} style={{ fontSize: "1.5rem", color: "#ccc", margin: "0 10px" }} />
              <FontAwesomeIcon icon={faDownload} style={{ fontSize: "1.5rem", color: "#ccc", margin: "0 10px" }} />
              <div className="pill">
                <FontAwesomeIcon icon={faSearch} style={{ fontSize: "1.5rem", color: "#ccc", marginRight: "5px" }} />
                Charger UID
              </div>
              <div className="pill">
                <FontAwesomeIcon icon={faSearch} style={{ fontSize: "1.5rem", color: "#ccc", marginRight: "5px" }} />
                Search
              </div>
            </div>
          </div>
          <table className="chargers-table">
            <thead>
              <tr>
                <th><span className="square-symbol">&#9633;</span> <span className="split-header" data-line1="CHARGER" data-line2="UID"></span></th>
                <th><span className="split-header" data-line1="OPERATIONAL" data-line2="STATUS"></span></th>
                <th>STATUS</th>
                <th><span className="split-header" data-line1="INITIALIZED" data-line2="ON"></span></th>
                <th><span className="split-header" data-line1="LAST" data-line2="PING"></span></th>
                <th><span className="split-header" data-line1="ENERGY" data-line2="DISPENSED"></span></th>
              </tr>
            </thead>
            <tbody>
              {chargers.map((charger, index) => (
                <tr key={index} onClick={() => handleRowClick(charger)}>
                  <td><span className="square-symbol">&#9633;</span> {charger.uid}</td>
                  <td className="operational-status-cell">
                    <span className="operational-circle"></span>
                  </td>
                  <td><span className={`status-label ${charger.status.toLowerCase()}`}>{charger.status}</span></td>
                  <td>{charger.initializedOn}</td>
                  <td>{charger.lastPing}</td>
                  <td>{charger.energyDispensed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={`charger-details-container ${selectedCharger ? 'visible' : 'hidden'}`}>
        {selectedCharger && <ChargerDetails charger={selectedCharger} onClose={handleCloseDetails} />}
      </div>
    </div>
  );
}

export default ChargersInfo;
