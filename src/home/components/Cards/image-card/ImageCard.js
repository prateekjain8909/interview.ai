import React from 'react';
import './ImageCard.css';

function ImageCard({ imageUrl, altText }) {
  return (
    <div class="ImageCard">
      <img src={imageUrl} alt={altText} />
    </div>
  );
}

export default ImageCard;
