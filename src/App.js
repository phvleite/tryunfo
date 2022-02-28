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
      cardsTryunfo: cardSuperTryunfo,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.validate());
  }

  onRemoveCard = (e) => {
    const myUUID = e.target.id;
    const { cardsTryunfo } = this.state;
    const filterCards = cardsTryunfo.filter((card) => card.myUUID !== myUUID);

    this.setState(() => ({
      cardsTryunfo: filterCards,
      hasTrunfo: filterCards.some((card) => card.cardTrunfo),
    }));
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
    const myUUID = uuidv4();
    const card = {
      myUUID,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      cardsTryunfo: [...prevState.cardsTryunfo, card],
    }));

    this.setState({
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

  // Solução encontrada no git do Ramond Falcão:(https://github.com/tryber/sd-019-a-project-tryunfo/blob/ramond-falcao-tryunfo/src/App.js)
  // que havia encontrado essa solução no git do Gabriel Melo:(https://github.com/tryber/sd-019-a-project-tryunfo/blob/dev/gabriel-melo/src/App.js)
  // mas infelizmente ainda foi reprevado.
  renderCardsTryunfo = () => {
    const { cardsTryunfo } = this.state;
    return cardsTryunfo.map((card) => (
      <div key={ card.myUUID }>
        <Card
          cardName={ card.cardName }
          cardDescription={ card.cardDescription }
          cardAttr1={ card.cardAttr1 }
          cardAttr2={ card.cardAttr2 }
          cardAttr3={ card.cardAttr3 }
          cardImage={ card.cardImage }
          cardRare={ card.cardRare }
          cardTrunfo={ card.cardTrunfo }
          myUUID={ card.myUUID }
          notPreview
          onRemoveCard={ this.onRemoveCard }
        />
      </div>
    ));
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
      saveButton,
      cardsTryunfo,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <div className="box-form">
          <Form
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
            notPreview={ false }
          />
        </div>
        <div>
          <Cards
            renderCardsTryunfo={ this.renderCardsTryunfo }
            cardsTryunfo={ cardsTryunfo }
          />
        </div>
      </div>
    );
  }
}

export default App;
