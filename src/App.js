import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import Card from './components/Card';
import Cards from './components/Cards';

const cardSuperTryunfo = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      key: uuidv4(),
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      saveButton: true,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.validate());
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
    const card = this.state;
    cardSuperTryunfo.push(card);
    this.setState({
      key: uuidv4(),
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      saveButton: true,
    });
    console.log(cardSuperTryunfo);
  }

  validate = () => {
    const MIN_LEN_VALUE = 5;
    const MAX_VALUE_ATTR = 90;
    const MIN_VALUE_ATTR = 0;
    const MAX_VALUE_POINTS = 210;

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const valueAttr1 = parseInt(cardAttr1, 10);
    const valueAttr2 = parseInt(cardAttr2, 10);
    const valueAttr3 = parseInt(cardAttr3, 10);

    const minLen = cardName.length >= MIN_LEN_VALUE
      && cardDescription.length >= MIN_LEN_VALUE;

    const valueAttr = valueAttr1 <= MAX_VALUE_ATTR
      && valueAttr1 >= MIN_VALUE_ATTR
      && valueAttr2 <= MAX_VALUE_ATTR
      && valueAttr2 >= MIN_VALUE_ATTR
      && valueAttr3 <= MAX_VALUE_ATTR
      && valueAttr3 >= MIN_VALUE_ATTR;

    const sumTotalPoints = (valueAttr1 + valueAttr2 + valueAttr3) <= MAX_VALUE_POINTS;

    const fields = [cardName, cardDescription, cardImage, cardRare];
    const emptyFields = fields.every((field) => field !== '');

    const isValid = minLen && valueAttr && emptyFields && sumTotalPoints;

    if (isValid) {
      this.setState({ saveButton: false });
    } else {
      this.setState({ saveButton: true });
    }
  }

  render() {
    const {
      key,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      saveButton,
    } = this.state;

    const cardsTryunfo = cardSuperTryunfo.map((card) => (
      <Cards
        cardName={ card.cardName }
        cardDescription={ card.cardDescription }
        cardAttr1={ card.cardAttr1 }
        cardAttr2={ card.cardAttr2 }
        cardAttr3={ card.cardAttr3 }
        cardImage={ card.cardImage }
        cardRare={ card.cardRare }
        cardTrunfo={ card.cardTrunfo }
        key={ card.key }
        id={ card.key }
      />));

    return (
      <div>
        <h1>Tryunfo</h1>
        <div className="box-form">
          <Form
            key={ key }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ saveButton }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
        </div>
        <div className="box-card-preview">
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        { cardsTryunfo }
        <div />
      </div>
    );
  }
}

export default App;
