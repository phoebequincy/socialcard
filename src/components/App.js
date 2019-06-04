import React, { Component } from 'react';
import '../styles/App.css';
import card from '../cardData';
import Card from './Card';
import bizimg from '../react-logo.png';
import logoimg from '../react-logo.png';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Card
          logoIMG={logoimg}
          headline={card.headline}
          name={card.name}
          creditImageURL={bizimg}
          message={card.message}
          url={card.url}
          urlDisplayName={card.urlDisplayName}
        />
      </div>
    );
  }
}

export default App;
