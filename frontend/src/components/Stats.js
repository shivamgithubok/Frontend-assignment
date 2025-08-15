import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <div className="stats">
      <div className="stats-header">
        <h3>Overall Stats</h3>
      </div>
      <div className="stats-content">
        <div className="stat-item">
          <h4>30</h4>
          <p>Total Active Students</p>
        </div>
        <div className="stat-item">
          <h4>80%</h4>
          <p>Tutor CSAT Score</p>
        </div>
        <div className="stat-item">
          <h4>15%</h4>
          <p>Assignment Completion Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
