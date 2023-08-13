import React from 'react';
import CardList from './card-list/CardList';
import './Cards.css';
import data from '../../../data/data.json';

function Cards() {
    return (
      <div className="Cards">
        <CardList cardData={data} />
      </div>
    );
}

export default Cards;
