import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Header.css';

function Header() {
    return (
      <header className="header">
        <div className="logo">Your Logo Here</div>
        <nav className="nav-links">
          <Link to="/">Home</Link> {/* Link to the landing page */}
          <Link to="/interview">Interviews</Link> {/* Link to the interview page */}
          <a href="/forum">Community Forum</a>
          {/* Add more navigation links */}
        </nav>
      </header>
    );
  }
export default Header;
