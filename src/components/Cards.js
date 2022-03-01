import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cards extends Component {
  render() {
    const {
      cardsTryunfo,
      onRemoveCard,
      showCard,
    } = this.props;

    const isSuperTrunfo = (
      <span data-testid="trunfo-card">
        Super Trunfo
      </span>
    );

    const cardsTryunfoList = cardsTryunfo
      .filter((card) => card.cardName.includes(showCard))
      .map((card) => (
        <div key={ card.myUUID }>
          <br />
          <span data-testid="name-card">
            Nome:&nbsp;
            { card.cardName }
          </span>
          <br />
          <span>
            <img src={ card.cardImage } alt={ card.cardName } data-testid="image-card" />
          </span>
          <br />
          <span data-testid="description-card">
            Descrição:&nbsp;
            { card.cardDescription }
          </span>
          <br />
          <span data-testid="attr1-card">
            Atributo 01:&nbsp;
            { card.cardAttr1 }
          </span>
          <br />
          <span data-testid="attr2-card">
            Atributo 02:&nbsp;
            { card.cardAttr2 }
          </span>
          <br />
          <span data-testid="attr3-card">
            Atributo 03:&nbsp;
            { card.cardAttr3 }
          </span>
          <br />
          <span data-testid="rare-card">
            Raridade:&nbsp;
            { card.cardRare }
          </span>
          <br />
          { card.cardTrunfo ? isSuperTrunfo : '' }
          <br />
          <div>
            <button
              type="submit"
              data-testid="delete-button"
              value={ card.cardName }
              id={ card.myUUID }
              onClick={ () => onRemoveCard(card.myUUID) }
            >
              Exlcuir
            </button>
          </div>
          <br />
        </div>
      ));

    return (
      <div>
        { cardsTryunfoList }
      </div>
    );
  }
}

Cards.propTypes = {
  cardsTryunfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveCard: PropTypes.func.isRequired,
  showCard: PropTypes.string.isRequired,
};

export default Cards;
