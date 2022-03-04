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
        <div className="box-elements-search">
          <span>
            Busca por nome
          </span>
          <input
            className="search-name"
            type="text"
            disabled={ searchFields }
            value={ searchCard }
            onChange={ onInputChange }
            name="searchCard"
            placeholder="Nome da carta"
            data-testid="name-filter"
          />
          <span>
            Raridade
          </span>
          <select
            className="search-name"
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
          <div className="box-trunfo-filter">
            <input
              type="checkbox"
              className="trunfo-filter"
              data-testid="trunfo-filter"
              name="trunfoFilter"
              id="trunfoFilter"
              checked={ trunfoFilter }
              onChange={ onInputChange }
            />
            <span className="trunfo-filter">
              Super Tryunfo Card
            </span>
          </div>
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
          <button
            type="submit"
            // onClick={ () => () }
          >
            Resetar Cartas
          </button>
        </div>
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
