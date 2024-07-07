import React, { useState } from 'react'; // Import React and useState hook
import '../styles/ChargersInfo.css'; // Import CSS file for ChargersInfo component styling
import ChargerDetails from './ChargerDetails'; // Import ChargerDetails component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon for icon usage
import { faSearch, faDownload, faFilter } from '@fortawesome/free-solid-svg-icons'; // Import specific icons from FontAwesome

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
    { uid: 'BOLT_00037453', status: 'Available', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: '4 hours ago', energyDispensed: '238.792 kWh', name: '', ownerName: '', phoneNumber: '', alternatePhone1: '', alternatePhone2: '' },
    { uid: 'BOLT_00028926', status: 'Charging', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: 'An hour ago', energyDispensed: '416.962 kWh', name: 'JS carnation EV charger -1', ownerName: 'Ayan Basu', phoneNumber: '+91 91489 19899', alternatePhone1: '', alternatePhone2: '' },
    { uid: 'BOLT_00037453', status: 'Available', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: '4 hours ago', energyDispensed: '238.792 kWh', name: '', ownerName: '', phoneNumber: '', alternatePhone1: '', alternatePhone2: '' },
    { uid: 'BOLT_00028926', status: 'Charging', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: 'An hour ago', energyDispensed: '416.962 kWh', name: 'JS carnation EV charger -1', ownerName: 'Ayan Basu', phoneNumber: '+91 91489 19899', alternatePhone1: '', alternatePhone2: '' },
    { uid: 'BOLT_00037453', status: 'Available', operationalStatus: 'Operational', initializedOn: 'Jul 02, 2024', lastPing: '4 hours ago', energyDispensed: '238.792 kWh', name: '', ownerName: '', phoneNumber: '', alternatePhone1: '', alternatePhone2: '' },
    // Add more chargers as needed...
  ];

  const [selectedCharger, setSelectedCharger] = useState<Charger | null>(null); // State to manage selected charger details

  const handleRowClick = (charger: Charger) => {
    setSelectedCharger(charger); // Set selected charger when a row is clicked
  }

  const handleCloseDetails = () => {
    setSelectedCharger(null); // Clear selected charger details when closing details
  }

  return (
    <div className="main-container">
      <div className="charger-list">
        <div className="chargers-info">
          <div className="tabs">
            <div className="tab active">Chargers</div>
            <div className="tab">Booking</div>
            <div className="tab">
              <FontAwesomeIcon icon={faFilter} style={{ fontSize: "1.5rem", color: "#ccc", margin: "0 10px" }} /> {/* Filter icon */}
              <FontAwesomeIcon icon={faDownload} style={{ fontSize: "1.5rem", color: "#ccc", margin: "0 10px" }} /> {/* Download icon */}
              <div className="pill">
                <FontAwesomeIcon icon={faSearch} style={{ fontSize: "1.5rem", color: "#ccc", marginRight: "5px" }} /> {/* Search icon */}
                Charger UID
              </div>
              <div className="pill">
                <FontAwesomeIcon icon={faSearch} style={{ fontSize: "1.5rem", color: "#ccc", marginRight: "5px" }} /> {/* Search icon */}
                Search
              </div>
            </div>
          </div>
          <div className="chargers-table-container" style={{ overflowY: 'auto' }}>
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
                      <span className="operational-circle"></span> {/* Operational status indicator */}
                    </td>
                    <td><span className={`status-label ${charger.status.toLowerCase()}`}>{charger.status}</span></td> {/* Charger status */}
                    <td>{charger.initializedOn}</td> {/* Initialized on date */}
                    <td>{charger.lastPing}</td> {/* Last ping time */}
                    <td>{charger.energyDispensed}</td> {/* Energy dispensed */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={`charger-details-container ${selectedCharger ? 'visible' : 'hidden'}`}>
        {selectedCharger && <ChargerDetails charger={selectedCharger} onClose={handleCloseDetails} />} {/* Render ChargerDetails component */}
      </div>
    </div>
  );
}

export default ChargersInfo; // Export ChargersInfo component
