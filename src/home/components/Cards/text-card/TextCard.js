import React from 'react';
import './TextCard.css';

function TextCard({ title, description }) {
  return (
    <div className="text-card">
      <h2 className="card-title">{title}</h2>
      <div className="card-description">{description}</div>
    </div>
  );
}

export default TextCard;
