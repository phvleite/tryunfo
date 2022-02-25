import React from 'react';
import Form from './components/Form';

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
    console.log(target);
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(name);
    console.log(value);
    this.setState({ [name]: value });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    console.log('teste');
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
        <div>
          {/* {
            superTryunfo.map((card) => (
              <span key={ card.cardName }>
                { card.cardName }
                <br />
                { card.cardDescription }
                <br />
                { card.cardAttr1 }
                <br />
                { card.cardAttr2 }
                <br />
                { card.cardAttr3 }
                <br />
                { card.cardImage }
                <br />
                { card.cardRare }
                <br />
                { card.cardTrunfo }
                <br />
              </span>
            ))
          } */}
        </div>
      </div>
    );
  }
}

export default App;
