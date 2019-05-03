import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(el => {
        <Card 
          headline={el.headline}
          img={el.img}
          author={el.author}
        />
      })}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Cards;