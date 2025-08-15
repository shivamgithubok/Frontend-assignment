import React from 'react';
import { FaUserGraduate, FaBookOpen, FaGift, FaStar, FaChartLine } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='top'>
    <div className="dashboard-grid">      <div className='second-top'>
        <div className="profile-card">
        <div className="profile-card-main">
          <div className="profile-image-wrap">
            <img src={require('../assets/profile-image.jpg')} alt="Profile" className="profile-image" />
          </div>
          <div className="profile-info">
            <h3 className="profile-name">Sherry Wolf</h3>
            <span className="profile-role">Piano Tutor</span>
          </div>
        </div>
        <div className="profile-stats-vertical">
          <div className="profile-stat-vertical"><FaUserGraduate className="icon" /> <span className="stat-number">30</span> <span className="stat-label">Students</span></div>
          <div className="profile-stat-vertical"><FaBookOpen className="icon" /> <span className="stat-number">6</span> <span className="stat-label">Course</span></div>
          <div className="profile-stat-vertical"><FaGift className="icon" /> <span className="stat-number">3</span> <span className="stat-label">Reward</span></div>
        </div>
      </div>
      <div className='profile-top'>
      <div className="stat-card">
            <div className="stat-number">30</div>
            <div className="stat-label">Total Active Students</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">80%</div>
            <div className="stat-label">Tutor CSAT Score</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">15%</div>
            <div className="stat-label">Assignment Completion Rate</div>
          </div>
        </div>
      </div>
      <div className='table-top'>
        <div className="lessons-card">
            <div className="lessons-title">Upcoming Lessons <span className="view-all">View All</span></div>
            <table className="lessons-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Course</th>
                  <th>Student Name</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>22 July</td><td>2:00 - 3:00 PM</td><td>Introduction to Piano</td><td>Eunice Robel & Arnold Hayes</td></tr>
                <tr><td>23 July</td><td>4:00 - 5:00 PM</td><td>Finger Warmups</td><td>Eunice Robel & Arnold Hayes</td></tr>
                <tr><td>24 July</td><td>3:00 - 4:00 PM</td><td>Simple Chords</td><td>Eunice Robel & Arnold Hayes</td></tr>
                <tr><td>25 July</td><td>2:00 - 3:00 PM</td><td>Teacher's Pick</td><td>Eunice Robel & Arnold Hayes</td></tr>
                <tr><td>26 July</td><td>7:00 - 8:00 PM</td><td>Treble & Bass Clef</td><td>Eunice Robel & Arnold Hayes</td></tr>
                <tr><td>27 July</td><td>6:00 - 7:00 PM</td><td>Rhythm Basics</td><td>Eunice Robel & Arnold Hayes</td></tr>
                <tr><td>28 July</td><td>4:00 - 5:00 PM</td><td>Finger Warmups</td><td>Eunice Robel & Arnold Hayes</td></tr>
              </tbody>
            </table>
          </div>
              <div className="performance-container">
                <div className="performance-card">
                  <div className="performance-title">Overall Course Performance</div>
                  <div className="performance-gauge">
                    <svg width="100" height="100">
                      <circle cx="50" cy="50" r="45" stroke="#ddd" strokeWidth="8" fill="none" />
                      <circle cx="50" cy="50" r="45" stroke="#fbc02d" strokeWidth="8" fill="none" strokeDasharray="283" strokeDashoffset="105" />
                      <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="1.5em" fontWeight="bold">7.6/10</text>
                    </svg>
                    {/* <div className="performance-score">
                      7.6<span className="score-outof">/10</span>
                    </div> */}
                  </div>
                </div>

                <div className="performance-card">
                  <div className="performance-title">Overall Student Performance</div>
                  <div className="performance-gauge">
                    <svg width="100" height="100">
                      <circle cx="50" cy="50" r="45" stroke="#ddd" strokeWidth="8" fill="none" />
                      <circle cx="50" cy="50" r="45" stroke="#ff9800" strokeWidth="8" fill="none" strokeDasharray="283" strokeDashoffset="157" />
                      <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="1.5em" fontWeight="bold">6.6/10</text>
                    </svg>
                    {/* <div className="performance-score">
                      6.6<span className="score-outof">/10</span>
                    </div> */}
                  </div>
                </div>
              </div>

      </div>
      

      {/* Main Content */}
    </div>
    <div className="dashboard-main">
        <div className="dashboard-top-row">
        <div className='img-top'>
        <img src={require('../assets/profile-image.jpg')} alt="Profile" className="header-profile-images" />
        </div>
          {/* Refer and Earn */}
          <div className="refer-card">
            <FaGift className="refer-icon" />
            <div className="refer-content">
              <div className="refer-title">Refer and Earn</div>
              <div className="refer-desc">Invite friends and earn exclusive rewards for every successful referral</div>
              <button className="refer-btn">Refer Now →</button>
            </div>
          </div>
          <div className="side-cards">
            <div className="feedback-card">
              <div className="feedback-title">Feedback Pending</div>
              <div className="feedback-circle">
                <svg width="80" height="80">
                <circle cx="40" cy="40" r="35" stroke="#eee" strokeWidth="8" fill="none" />
                <circle cx="40" cy="40" r="35" stroke="#7c3aed" strokeWidth="8" fill="none" strokeDasharray="220" strokeDashoffset="44" />
                <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="1.5em" fontWeight="bold">12</text>
              </svg>
                <div className="feedback-label">Feedback Pending</div>
              </div>
              <button className="feedback-btn">Give Feedback</button>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Dashboard;