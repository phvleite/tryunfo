import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cards extends Component {
  render() {
    const { cardsTryunfo, renderCardsTryunfo } = this.props;

    return (
      <div>
        { cardsTryunfo.length ? <h1>Cards:</h1> : '' }
        <div>
          { cardsTryunfo ? renderCardsTryunfo() : '' }
        </div>
      </div>
    );
  }
}

Cards.propTypes = {
  renderCardsTryunfo: PropTypes.func.isRequired,
  cardsTryunfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cards;
