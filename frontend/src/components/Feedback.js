import React from 'react';
import './Feedback.css';

const Feedback = () => {
  return (
    <div className="feedback">
      <h3>Feedback Pending</h3>
      <div className="feedback-pending">
        <div className="feedback-progress">
          <div className="progress-bar"></div>
        </div>
        <p>12 Feedback Pending</p>
        <button>Give Feedback</button>
      </div>
    </div>
  );
};

export default Feedback;
