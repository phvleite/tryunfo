import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

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
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div className="box-new-card">
        <h1>
          Adicionar nova carta
        </h1>
        <form className="newCard">
          <label htmlFor="cardName">
            Nome
            <input
              type="text"
              data-testid="name-input"
              name="cardName"
              id="CardName"
              value={ cardName }
              onChange={ this.onInputChange }
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
              onChange={ this.onInputChange }
            />
          </label>
          <div className="box-attr-cards">
            <label htmlFor="cardAttr1">
              Attr01
              <input
                type="number"
                data-testid="attr1-input"
                nome="cardAttr1"
                id="cardAttr1"
                value={ cardAttr1 }
                onChange={ this.onInputChange }
              />
            </label>
            <label htmlFor="cardAttr2">
              Attr02
              <input
                type="number"
                data-testid="attr2-input"
                nome="cardAttr2"
                id="cardAttr2"
                value={ cardAttr2 }
                onChange={ this.onInputChange }
              />
            </label>
            <label htmlFor="cardAttr3">
              Attr03
              <input
                type="number"
                data-testid="attr3-input"
                nome="cardAttr3"
                id="cardAttr3"
                value={ cardAttr3 }
                onChange={ this.onInputChange }
              />
            </label>
          </div>
          <label htmlFor="cardImage">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              name="cardImage"
              id="CardImage"
              value={ cardImage }
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="cardRare">
            Raridade
            <select
              data-testid="rare-input"
              id="cardRare"
              name="cardRare"
              value={ cardRare }
              onChange={ this.onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="cardTrunfo">
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="cardTrunfo"
              id="cardTrunfo"
              value={ hasTrunfo }
              onChange={ this.onInputChange }
            />
            Super Trybe Trunfo
          </label>
          <label htmlFor="hasTrunfo">
            <input
              type="submit"
              data-testid="save-button"
              name="hasTrunfo"
              id="hasTrunfo"
              disabled={ isSaveButtonDisabled }
              value="Salvar"
            />
          </label>
        </form>
      </div>
    );
  }
}

// Form.propTypes = {
//   cardName: PropTypes.string.isRequired,
// };

export default Form;
