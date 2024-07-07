import React from 'react'; // Import React for building UI components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon for using icons
import { faTimes, faEdit, faEye, faFlag, faTh } from '@fortawesome/free-solid-svg-icons'; // Import specific icons from FontAwesome
import '../styles/ChargerDetails.css'; // Import CSS for styling ChargerDetails component

interface Charger { // Defines the structure of a Charger object
  uid: string; // Unique identifier for the charger
  status: string; // Current operational status of the charger
  operationalStatus: string; // Detailed operational status information
  initializedOn: string; // Date when the charger was first set up
  lastPing: string; // Timestamp of the charger's last communication
  energyDispensed: string; // Amount of energy dispensed by the charger
  name: string; // Name or identifier of the charger
  ownerName: string; // Name of the person or entity owning the charger
  phoneNumber: string; // Contact phone number of the charger's owner
  alternatePhone1: string; // Additional contact number 1
  alternatePhone2: string; // Additional contact number 2
}

interface ChargerDetailsProps { // Properties expected by ChargerDetails component
  charger: Charger; // Charger object containing details to display
  onClose: () => void; // Callback function to close the ChargerDetails component
}

const ChargerDetails: React.FC<ChargerDetailsProps> = ({ charger, onClose }) => { // Functional component for displaying charger details
  return (
    <div className="charger-details"> {/* Main container for ChargerDetails */}
      <div className="header"> {/* Header section */}
        <div className="header-left"> {/* Left side of the header */}
          <h1>{charger.uid}</h1> {/* Display unique identifier of the charger */}
        </div>
        <div className="header-icons"> {/* Icons on the right side of the header */}
          <FontAwesomeIcon icon={faEye} /> {/* Icon for viewing */}
          <FontAwesomeIcon icon={faFlag} /> {/* Icon for flagging */}
          <FontAwesomeIcon icon={faTh} /> {/* Icon for layout options */}
          <button onClick={onClose}><FontAwesomeIcon icon={faTimes} /></button> {/* Close button with 'X' icon */}
        </div>
      </div>
      <div className="tabs"> {/* Tabs section for navigation */}
        <div className="tab active" style={{ color: 'rgb(0, 255, 89)' }}> {/* Active tab with special styling */}
          Information
        </div>
        <div className="tab"> {/* Tab for booking details */}
          Bookings
        </div>
        <div className="tab"> {/* Tab for statistics */}
          Stats
        </div>
        <div className="tab"> {/* Tab for viewing */}
          View
        </div>
      </div>
      <div className="content"> {/* Main content section */}
        <div className="section charger-info"> {/* Section displaying charger information */}
          <h3><strong>Charger Info </strong><button><FontAwesomeIcon icon={faEdit} /></button></h3> {/* Header for charger information with edit button */}
          <div className="info-pair">
            <h6><strong>UID:</strong></h6><h6>{charger.uid}</h6> {/* Display unique identifier */}
          </div>
          <div className="info-pair">
            <h6><strong>Name:</strong></h6><h6>{charger.name}</h6> {/* Display charger name */}
          </div>
          <div className="info-pair">
            <h6><strong>Initialized On:</strong></h6><h6>{charger.initializedOn}</h6> {/* Display initialization date */}
          </div>
          <div className="info-pair">
            <h6><strong>Last Ping:</strong></h6><h6>{charger.lastPing}</h6> {/* Display last communication timestamp */}
          </div>
        </div>
        <div className="section owner-info"> {/* Section displaying owner information */}
          <h3><strong>Owner Info</strong><button><FontAwesomeIcon icon={faEdit} /></button></h3> {/* Header for owner information with edit button */}
          <div className="info-pair">
            <h6><strong>Name:</strong></h6><h6>{charger.ownerName}</h6> {/* Display owner's name */}
          </div>
          <div className="info-pair">
            <h6><strong>Phone Number:</strong></h6><h6>{charger.phoneNumber}</h6> {/* Display owner's phone number */}
          </div>
          <div className="info-pair">
            <h6><strong>Alternate Phone 1:</strong></h6><h6>{charger.alternatePhone1 || '-'}</h6> {/* Display alternate phone number 1 or '-' if not provided */}
          </div>
          <div className="info-pair">
            <h6><strong>Alternate Phone 2:</strong></h6><h6>{charger.alternatePhone2 || '-'}</h6> {/* Display alternate phone number 2 or '-' if not provided */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChargerDetails; // Export ChargerDetails component for use in other parts of the application
