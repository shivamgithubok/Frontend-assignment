import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-header">
        <img src="assets/profile-image.jpg" alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h2>Sherry Wolf</h2>
          <p>Piano Tutor</p>
        </div>
      </div>
      <div className="profile-stats">
        <div className="profile-stat">
          <span>30</span>
          <p>Students</p>
        </div>
        <div className="profile-stat">
          <span>6</span>
          <p>Courses</p>
        </div>
        <div className="profile-stat">
          <span>80%</span>
          <p>Tutor CSAT Score</p>
        </div>
        <div className="profile-stat">
          <span>15%</span>
          <p>Assignment Completion Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
