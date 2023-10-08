import React from 'react';
import { FaHome, FaSearch, FaEnvelope, FaGlobe, FaTrash } from 'react-icons/fa';
import Admin from './pages/Admin';

const Sidebar = () => {
  return (
    <div className="d-flex bg-blue" style={{ height: '87vh',width:"20vh",backgroundColor:"darkblue" }}>
      <div className="bg-dark" id="sidebar-wrapper">
        <div className="sidebar-heading text-light text-center py-4" style={{width:"20vh"}}>
        <h3 style={{padding:"2px"}}>AA Master Brand</h3>
        </div>
        <div className="list-group list-group-flush">
          <a href="#" className="list-group-item list-group-item-action bg-dark text-light">
            <FaHome /> HOME
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-dark text-light">
            <FaSearch /> Search
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-dark text-light">
            <FaEnvelope /> nvelope
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-dark text-light">
            <FaGlobe /> Globe 
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-dark text-light">
            <FaTrash /> Trash
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
