import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
    // const {
    //   cardName,
    //   cardDescription,
    //   cardAttr1,
    //   cardAttr2,
    //   cardAttr3,
    //   cardImage,
    //   cardRare,
    // } = this.state;
    const card = this.state;
    console.log(card);
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
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      saveButton,
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
    );
  }
}

export default App;
