import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filtercards extends Component {
  render() {
    const {
      searchCard,
      handleSearch,
      buttonSearchCard,
      clearSearchCard,
      rareFilter,
    } = this.props;
    return (
      <div>
        <h1>Todas as Cartas</h1>
        <input
          type="text"
          value={ searchCard }
          onChange={ handleSearch }
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
              onChange={ handleSearch }
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>
        <button
          type="submit"
          onClick={ () => buttonSearchCard(searchCard) }
        >
          Buscar
        </button>
        <button
          type="submit"
          onClick={ () => clearSearchCard() }
        >
          Limpar
        </button>
      </div>
    );
  }
}

Filtercards.propTypes = {
  searchCard: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  buttonSearchCard: PropTypes.func.isRequired,
  clearSearchCard: PropTypes.func.isRequired,
};

export default Filtercards;
