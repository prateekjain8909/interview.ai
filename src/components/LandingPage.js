import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="feature">
        <h2>Mock Interviews</h2>
        <p>
          Practice technical interviews with AI-powered interviewers. Get instant feedback on your answers and improve your performance.
        </p>
      </div>
      <div className="feature">
        <h2>Company-Specific Questions</h2>
        <p>
          Prepare for specific company interviews with a curated collection of questions asked by top tech companies.
        </p>
      </div>
      <div className="feature">
        <h2>System Design Practice</h2>
        <p>
          Master system design interviews with real-world scenarios and in-depth solutions. Learn how to architect scalable and robust systems.
        </p>
      </div>
      <div className="feature">
        <h2>Community Forum</h2>
        <p>
          Engage with a community of interview aspirants. Share your experiences, learn from others, and get your doubts clarified.
        </p>
      </div>
      <div className="feature">
        <h2>Voice-Enabled Interviews</h2>
        <p>
          Take interviews using voice input. Our AI-powered system understands your spoken responses and provides comprehensive feedback.
        </p>
      </div>
      {/* <div className="images">
        <img src="/image1.jpg" alt="Feature Image 1" />
        <img src="/image2.jpg" alt="Feature Image 2" />
      </div> */}
    </div>
  );
}

export default LandingPage;
