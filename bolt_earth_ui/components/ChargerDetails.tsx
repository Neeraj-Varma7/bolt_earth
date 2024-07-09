import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon for using icons
import { faTimes, faEdit, faEye, faFlag, faTh } from '@fortawesome/free-solid-svg-icons'; 
import '../styles/ChargerDetails.css'; 

interface Charger { // Defines the structure of a Charger object which is used to display in this component
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

interface ChargerDetailsProps { // Properties expected by ChargerDetails component
  charger: Charger; // Charger object containing details to display
  onClose: () => void; // Callback function to close the ChargerDetails component
}

const ChargerDetails: React.FC<ChargerDetailsProps> = ({ charger, onClose }) => { // Functional component for displaying charger details
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
          <button onClick={onClose}><FontAwesomeIcon icon={faTimes} /></button> {/* Close button with X icon */}
        </div>
      </div>
      <div className="tabs">
        <div className="tab active" style={{ color: 'rgb(0, 255, 89)' }}> {/* Active tab */}
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
        <div className="section charger-info"> 
          <h3><strong>Charger Info </strong><button><FontAwesomeIcon icon={faEdit} /></button></h3> 
          <div className="info-pair">
            <h6><strong>UID:</strong></h6><h6>{charger.uid}</h6>
          </div>
          <div className="info-pair">
            <h6><strong>Name:</strong></h6><h6>{charger.name}</h6> 
          </div>
          <div className="info-pair">
            <h6><strong>Initialized On:</strong></h6><h6>{charger.initializedOn}</h6> 
          </div>
          <div className="info-pair">
            <h6><strong>Last Ping:</strong></h6><h6>{charger.lastPing}</h6> 
          </div>
        </div>
        <div className="section owner-info"> 
          <h3><strong>Owner Info</strong><button><FontAwesomeIcon icon={faEdit} /></button></h3> 
          <div className="info-pair">
            <h6><strong>Name:</strong></h6><h6>{charger.ownerName}</h6> 
          </div>
          <div className="info-pair">
            <h6><strong>Phone Number:</strong></h6><h6>{charger.phoneNumber}</h6> 
          </div>
          <div className="info-pair">
            <h6><strong>Alternate Phone 1:</strong></h6><h6>{charger.alternatePhone1 || '-'}</h6> 
          </div>
          <div className="info-pair">
            <h6><strong>Alternate Phone 2:</strong></h6><h6>{charger.alternatePhone2 || '-'}</h6> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChargerDetails; // Exports ChargerDetails component 
