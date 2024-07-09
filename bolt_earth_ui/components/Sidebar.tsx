import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faChargingStation, faUsers, faTruck, faIdCard, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons';
import '../styles/Sidebar.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo-container">{/* This is to display the bolt earth image */}
        <Image                        
          src="/link-thumbnail.png" 
          alt="Bolt Earth Logo" 
          width={100} 
          height={100} 
          className="logo-image"
        />
      </div>
      <nav className="nav-container">
        <ul className="nav-list">
          <Link href='/'><li className="nav-item">
            <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
            <span className="nav-text">Overview</span>
          </li></Link>
          <Link href='/chargers'><li className="nav-item nav-item-active"> {/* This is active to display currently we are on this page*/}
            <FontAwesomeIcon icon={faChargingStation} className="nav-icon" />
            <span className="nav-text">Chargers</span>
          </li></Link>
          <Link href='/users'><li className="nav-item">
            <FontAwesomeIcon icon={faUsers} className="nav-icon" />
            <span className="nav-text">Users</span>
          </li></Link>
          <Link href='/vendors'><li className="nav-item">
            <FontAwesomeIcon icon={faTruck} className="nav-icon" />
            <span className="nav-text">Vendors</span>
          </li></Link>
          <Link href='/kyc'><li className="nav-item">
            <FontAwesomeIcon icon={faIdCard} className="nav-icon" />
            <span className="nav-text">KYC</span>
          </li></Link>
          <Link href='/reports'><li className="nav-item">
            <FontAwesomeIcon icon={faChartBar} className="nav-icon" />
            <span className="nav-text">Reports</span>
          </li></Link>
          <Link href='/admin'><li className="nav-item">
            <FontAwesomeIcon icon={faCog} className="nav-icon" />
            <span className="nav-text">Admin</span>
          </li></Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; // Export Sidebar component
 