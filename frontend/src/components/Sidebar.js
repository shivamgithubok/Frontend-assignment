import React from 'react';
import { FaHome, FaUserAlt, FaBook, FaCalendarAlt, FaClipboardList, FaMusic, FaKeyboard, FaCreditCard, FaShareAlt, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>UPKRAFT</h2>
      </div>
      <ul className="sidebar-links">
        <li><FaHome className="sidebar-icon" /> Home</li>
        <li><FaUserAlt className="sidebar-icon" /> My Students</li>
        <li><FaBook className="sidebar-icon" /> My Courses</li>
        <li><FaCalendarAlt className="sidebar-icon" /> Calendar</li>
        <li><FaClipboardList className="sidebar-icon" /> Assignment</li>
        <li><FaMusic className="sidebar-icon" /> Music Library</li>
        <li><FaKeyboard className="sidebar-icon" /> Practice Studio</li>
        <li><FaCreditCard className="sidebar-icon" /> Payment Summary</li>
        <li><FaShareAlt className="sidebar-icon" /> Refer & Earn</li>
        <li><FaCog className="sidebar-icon" /> Settings</li>
      </ul>
      <button className="logout-btn"><FaSignOutAlt className="sidebar-icon" /> Logout</button>
    </div>
  );
};

export default Sidebar;
