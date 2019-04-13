import React, { Component } from 'react';
import './App.css';
import questions from './api.js';
import CardContainer from './CardContainer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CardContainer questions={questions}/>
      </div>
    );
  }
}

export default App;
