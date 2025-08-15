import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="logo-title">
          <span className="logo-text">UPKRAFT</span>
        </div>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search here" className="search-input" />
        </div>
      </div>
      <div className="header-right">
        <div className="profile-info">
          header-left
          <div className="profile-details">
            <span className="profile-name">Sherry Wolf</span>
            <span className="profile-role">Tutor</span>
          </div>
        </div>
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default Header;