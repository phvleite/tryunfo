import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    const isSuperTrunfo = (
      <span data-testid="trunfo-card" className="trunfo-card">
        Super Trunfo
      </span>
    );

    return (
      <div className="card-preview">
        <span data-testid="name-card" className="name-card">
          { cardName }
        </span>
        <span>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        </span>
        <span data-testid="description-card" className="description-card">
          { cardDescription }
        </span>
        <span data-testid="attr1-card">
          Atributo 01:&nbsp;
          { cardAttr1 }
        </span>
        <span data-testid="attr2-card">
          Atributo 02:&nbsp;
          { cardAttr2 }
        </span>
        <span data-testid="attr3-card">
          Atributo 03:&nbsp;
          { cardAttr3 }
        </span>
        <span data-testid="rare-card">
          Raridade:&nbsp;
          { cardRare }
        </span>
        { cardTrunfo ? isSuperTrunfo : '' }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
