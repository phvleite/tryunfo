import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filtercards extends Component {
  render() {
    const {
      searchCard,
      onInputChange,
      clearSearchCard,
      rareFilter,
      searchFields,
      trunfoFilter,
      saveAllCards,
    } = this.props;
    return (
      <div className="box-search">
        <h1>Todas as Cartas</h1>
        <input
          type="text"
          disabled={ searchFields }
          value={ searchCard }
          onChange={ onInputChange }
          name="searchCard"
          placeholder="Nome da carta"
          data-testid="name-filter"
        />
        <div>
          <label htmlFor="rare-filter">
            <select
              id="rare-filter"
              data-testid="rare-filter"
              name="rareFilter"
              value={ rareFilter }
              disabled={ searchFields }
              onChange={ onInputChange }
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>
        <label htmlFor="trunfoFilter">
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            name="trunfoFilter"
            id="trunfoFilter"
            checked={ trunfoFilter }
            onChange={ onInputChange }
          />
          Super Tryunfo Card
        </label>
        <button
          type="submit"
          onClick={ () => clearSearchCard() }
        >
          Limpar
        </button>
        <button
          type="submit"
          onClick={ () => saveAllCards() }
        >
          Salvar Cartas
        </button>
      </div>
    );
  }
}

Filtercards.propTypes = {
  searchCard: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  clearSearchCard: PropTypes.func.isRequired,
  saveAllCards: PropTypes.func.isRequired,
  searchFields: PropTypes.bool.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};

export default Filtercards;
