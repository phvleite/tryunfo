import React, { Component } from 'react';
import PropTypes from 'prop-types';

// id={ myUUID }
class Cards extends Component {
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
      myUUID,
      onRemoveCard,
    } = this.props;

    const isSuperTrunfo = (
      <span data-testid="trunfo-card" id={ myUUID }>
        Super Trunfo
        <br />
      </span>
    );

    return (
      <div>
        <br />
        <span data-testid="name-card">
          Nome:&nbsp;
          { cardName }
        </span>
        <br />
        <span>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        </span>
        <br />
        <span data-testid="description-card">
          Descrição:&nbsp;
          { cardDescription }
        </span>
        <br />
        <span data-testid="attr1-card">
          Atributo 01:&nbsp;
          { cardAttr1 }
        </span>
        <br />
        <span data-testid="attr2-card">
          Atributo 02:&nbsp;
          { cardAttr2 }
        </span>
        <br />
        <span data-testid="attr3-card">
          Atributo 03:&nbsp;
          { cardAttr3 }
        </span>
        <br />
        <span data-testid="rare-card">
          Raridade:&nbsp;
          { cardRare }
        </span>
        <br />
        { cardTrunfo ? isSuperTrunfo : '' }
        <button
          type="submit"
          data-testid="delete-button"
          onClick={ () => onRemoveCard(myUUID) }
        >
          Exlcuir
        </button>
      </div>
    );
  }
}

Cards.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  myUUID: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onRemoveCard: PropTypes.func.isRequired,
};

export default Cards;
