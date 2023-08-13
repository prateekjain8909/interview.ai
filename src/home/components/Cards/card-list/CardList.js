import React from 'react';
import TextCard from '../text-card/TextCard';
import ImageCard from '../image-card/ImageCard';
import './CardList.css';

const CardList = ({ cardData }) => {
  return (
    <div className="card-list">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          {index % 2 === 0 ? (
            <>
              <TextCard title={card.title} description={card.description} />
              <ImageCard imageUrl={card.imageUrl} altText={card.altText} />
            </>
          ) : (
            <>
              <ImageCard imageUrl={card.imageUrl} altText={card.altText} />
              <TextCard title={card.title} description={card.description} />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardList;
