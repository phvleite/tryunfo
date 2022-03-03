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
      classAtiva,
    } = this.props;

    const isHasTrunfo = (
      <span data-testid="hastrunfo-card">
        Você já tem um Super Trunfo em seu baralho
      </span>
    );

    const notHasTrunfo = (
      <div>
        <input
          type="checkbox"
          data-testid="trunfo-input"
          name="cardTrunfo"
          id="cardTrunfo"
          className="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <span className="lb-trunfo">
          Super Trybe Trunfo
        </span>
      </div>
    );

    const MAX_POINT = 210;
    const remainingPoints = MAX_POINT - parseInt(cardAttr1, 10)
      - parseInt(cardAttr2, 10) - parseInt(cardAttr3, 10);

    return (
      <div className="box-new-card">
        <h1>
          Adicionar nova carta
        </h1>
        <form className="new-card" onSubmit={ onSaveButtonClick }>
          <span className="lb-name">
            Nome
          </span>
          <input
            className="input-form"
            type="text"
            data-testid="name-input"
            name="cardName"
            id="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
          <span className="lb-description">
            Descrição
          </span>
          <input
            type="textarea"
            rows="50"
            className="input-form"
            data-testid="description-input"
            name="cardDescription"
            id="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
          <div className="box-attr-cards">
            <span className="card-attr">
              Attr01
            </span>
            <input
              type="number"
              className="input-attr"
              data-testid="attr1-input"
              name="cardAttr1"
              id="cardAttr1"
              value={ cardAttr1.toString() }
              onChange={ onInputChange }
            />
            <span className="card-attr">
              Attr02
            </span>
            <input
              type="number"
              className="input-attr"
              data-testid="attr2-input"
              name="cardAttr2"
              id="cardAttr2"
              value={ cardAttr2.toString() }
              onChange={ onInputChange }
            />
            <span className="card-attr">
              Attr03
            </span>
            <input
              type="number"
              data-testid="attr3-input"
              className="input-attr"
              name="cardAttr3"
              id="cardAttr3"
              value={ cardAttr3.toString() }
              onChange={ onInputChange }
            />
          </div>
          <div>
            <span className="points">
              Pontos Restantes =&nbsp;
              { remainingPoints }
            </span>
          </div>
          <span className="lb-image">
            Imagem
          </span>
          <input
            type="text"
            className="input-form"
            data-testid="image-input"
            name="cardImage"
            id="CardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
          <span className="lb-rare">
            Raridade
          </span>
          <select
            data-testid="rare-input"
            id="cardRare"
            name="cardRare"
            className="select-rare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
          { hasTrunfo ? isHasTrunfo : notHasTrunfo }
          <input
            type="submit"
            data-testid="save-button"
            className={ classAtiva }
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
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  classAtiva: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
};

export default Form;
