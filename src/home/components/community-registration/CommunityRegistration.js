import React from 'react';
import './CommunityRegistration.css'; // Import the CommunityRegistration.css file

function CommunityRegistration() {
  return (
    <div className="community-card">
      <h2 className="card-title">Join our community of successful interviewees</h2>
      <p className="card-content">
      “Using InterviewPro, I was able to prepare for my dream company's technical interviews with ease. The company-specific filters made all the difference, and I got an offer!” - Frank Walker
      </p>
      <input
        className="email-input"
        type="email"
        placeholder="Enter your email"
      />
      <button className="get-started-button">Get Started</button>
    </div>
  );
}

export default CommunityRegistration;
