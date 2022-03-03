import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cards extends Component {
  render() {
    const {
      cardsTryunfo,
      onRemoveCard,
      showCard,
      showRare,
      trunfoFilter,
    } = this.props;

    const isSuperTrunfo = (
      <span data-testid="trunfo-card" className="trunfo-all-cards">
        Super Trunfo
      </span>
    );

    let cardsTryunfoFiltered = [];
    if (!trunfoFilter) {
      if (showRare === '') {
        cardsTryunfoFiltered = cardsTryunfo
          .filter((card) => card.cardName.includes(showCard));
      } else {
        cardsTryunfoFiltered = cardsTryunfo
          .filter((card) => card.cardRare === showRare)
          .filter((card) => card.cardName.includes(showCard));
      }
    } else {
      cardsTryunfoFiltered = cardsTryunfo
        .filter((card) => card.cardTrunfo === true);
    }

    const cardsTryunfoList = cardsTryunfoFiltered
      .map((card) => (
        <div key={ card.myUUID } className="all-cards">
          <div className="box-card">
            <span data-testid="name-card" className="name-cards">
              { card.cardName }
            </span>
            <span>
              <img
                src={ card.cardImage }
                alt={ card.cardName }
                data-testid="image-card"
              />
            </span>
            <span data-testid="description-card" className="description-cards">
              { card.cardDescription }
            </span>
            <span data-testid="attr1-card">
              Atributo 01:&nbsp;
              { card.cardAttr1 }
            </span>
            <span data-testid="attr2-card">
              Atributo 02:&nbsp;
              { card.cardAttr2 }
            </span>
            <span data-testid="attr3-card">
              Atributo 03:&nbsp;
              { card.cardAttr3 }
            </span>
            <span data-testid="rare-card">
              Raridade:&nbsp;
              { card.cardRare }
            </span>
            { card.cardTrunfo ? isSuperTrunfo : '' }
          </div>
          <div>
            <button
              type="submit"
              className="bt-excluir-card"
              data-testid="delete-button"
              value={ card.cardName }
              id={ card.myUUID }
              onClick={ () => onRemoveCard(card.myUUID) }
            >
              Exlcuir
            </button>
          </div>
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
  showRare: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};

export default Cards;
