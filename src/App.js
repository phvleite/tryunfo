import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import Card from './components/Card';
import Cards from './components/Cards';
import Filtercards from './components/Filtercards';
import './index.css';

const getSavedCards = () => {
  const getCards = window.localStorage.getItem('cardsTryunfo');
  let savedCards = JSON.parse(getCards);
  if (savedCards === null) savedCards = [];
  return savedCards;
};

const cardSuperTryunfo = getSavedCards();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      saveButton: true,
      cardsTryunfo: cardSuperTryunfo,
      searchCard: '',
      showCard: '',
      rareFilter: 'todas',
      showRare: '',
      trunfoFilter: false,
      searchFields: false,
    };
  }

  buttonSearchCard = (searchCard, rareFilter) => {
    if (rareFilter === 'todas') {
      this.setState({ showCard: searchCard }, () => this.cardList());
    } else {
      this.setState({ showCard: searchCard, showRare: rareFilter,
      }, () => this.cardList());
    }
  }

  clearSearchCard = () => {
    this.setState({
      searchCard: '',
      showCard: '',
      rareFilter: 'todas',
      showRare: '',
      trunfoFilter: false,
      searchFields: false });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.validate());
    if (name === 'trunfoFilter' && value) {
      this.setState({ searchFields: true }, () => this.cardList());
    } else if (name === 'trunfoFilter' && !value) {
      this.setState({ searchFields: false }, () => this.cardList());
    }
  }

  onRemoveCard = (myUUID) => {
    const { cardsTryunfo } = this.state;
    const filterCards = cardsTryunfo.filter((card) => card.myUUID !== myUUID);
    this.setState({
      cardsTryunfo: filterCards,
      hasTrunfo: filterCards.some((card) => card.cardTrunfo),
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.state;
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
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
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

    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare } = this.state;

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

  cardList = () => {
    const { cardsTryunfo, showCard, showRare, trunfoFilter, hasTrunfo } = this.state;
    const trunfo = cardsTryunfo.some((card) => card.cardTrunfo);
    if (!hasTrunfo && trunfo) {
      this.setState({ hasTrunfo: trunfo });
    }
    return (
      <Cards
        cardsTryunfo={ cardsTryunfo }
        onRemoveCard={ this.onRemoveCard }
        showCard={ showCard }
        showRare={ showRare }
        trunfoFilter={ trunfoFilter }
        hasTrunfo={ hasTrunfo }
      />
    );
  };

  saveAllCards = () => {
    const { cardsTryunfo } = this.state;
    window.localStorage.setItem('cardsTryunfo', JSON.stringify(cardsTryunfo));
    customAlert('Cartas salvas!');
    const alert = myCustomLib.customAlert;
    alert();
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, saveButton, cardsTryunfo,
      searchCard, rareFilter, trunfoFilter, searchFields,
    } = this.state;
    return (
      <div>
        <header>
          <h1>Super Tryunfo Cards</h1>
        </header>
        <div className="create-and-register">
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
            />
          </div>
        </div>
        <div className="list-cards">
          <Filtercards
            searchCard={ searchCard }
            onInputChange={ this.onInputChange }
            buttonSearchCard={ this.buttonSearchCard }
            clearSearchCard={ this.clearSearchCard }
            rareFilter={ rareFilter }
            trunfoFilter={ trunfoFilter }
            searchFields={ searchFields }
            saveAllCards={ this.saveAllCards }
          />
          { (cardsTryunfo.length) ? this.cardList() : '' }
        </div>

      </div>
    );
  }
}

export default App;
