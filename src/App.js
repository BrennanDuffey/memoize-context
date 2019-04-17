import React, { Component } from 'react';
import CardContainer from './CardContainer.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: []
    }
  }

  componentDidMount = () => {
    fetch('https://fe-apps.herokuapp.com/api/v1/memoize/1901/brennanduffey/questions')
      .then(response => response.json())
      .then(data => this.setState( {questions: data.questions}, () => {
        this.getLocalStorage();
      }
      ))
      .catch(err => console.log(err))
  }

  getLocalStorage = () => {
   if(localStorage.getItem('incorrect answers')) {
     this.setState({ questions: JSON.parse(localStorage.getItem('incorrect answers')) });
    }
  }



  render() {
    return (
      <div className="App">
        <CardContainer questions={this.state.questions} getLocalStorage={this.getLocalStorage}/>
      </div>
    );
  }
}

export default App;
