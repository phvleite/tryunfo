import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      hasTrunfo,
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;

    const isHasTrunfo = (
      <span data-testid="hastrunfo-card">
        Você já tem um Super Trunfo em seu baralho
      </span>
    );

    const notHasTrunfo = (
      <label htmlFor="cardTrunfo">
        <input
          type="checkbox"
          data-testid="trunfo-input"
          name="cardTrunfo"
          id="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        Super Trybe Trunfo
      </label>
    );

    const MAX_POINT = 210;
    const remainingPoints = MAX_POINT - parseInt(cardAttr1, 10)
      - parseInt(cardAttr2, 10) - parseInt(cardAttr3, 10);

    return (
      <div className="box-new-card">
        <h1>
          Adicionar nova carta
        </h1>
        <form className="newCard" onSubmit={ onSaveButtonClick }>
          <label htmlFor="cardName">
            Nome
            <input
              type="text"
              data-testid="name-input"
              name="cardName"
              id="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardDescription">
            Descrição
            <input
              type="textarea"
              data-testid="description-input"
              name="cardDescription"
              id="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <div className="box-attr-cards">
            <label htmlFor="cardAttr1">
              Attr01
              <input
                type="number"
                data-testid="attr1-input"
                name="cardAttr1"
                id="cardAttr1"
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </label>
            <label htmlFor="cardAttr2">
              Attr02
              <input
                type="number"
                data-testid="attr2-input"
                name="cardAttr2"
                id="cardAttr2"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </label>
            <label htmlFor="cardAttr3">
              Attr03
              <input
                type="number"
                data-testid="attr3-input"
                name="cardAttr3"
                id="cardAttr3"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </label>
            <div>
              Pontos Restantes =&nbsp;
              { remainingPoints }
            </div>
          </div>
          <label htmlFor="cardImage">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              name="cardImage"
              id="CardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardRare">
            Raridade
            <select
              data-testid="rare-input"
              id="cardRare"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          { hasTrunfo ? isHasTrunfo : notHasTrunfo }
          <input
            type="submit"
            data-testid="save-button"
            name="save-button"
            id="save-button"
            disabled={ isSaveButtonDisabled }
            value="Salvar"
          />
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
};

export default Form;
