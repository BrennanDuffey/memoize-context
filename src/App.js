import React, { Component } from 'react';
import questions from './api.js';
import CardContainer from './CardContainer.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      correctQuestions: []
    }
  }

  componentDidMount = () => {
    fetch('https://fe-apps.herokuapp.com/api/v1/memoize/1901/brennanduffey/questions')
      .then(response => response.json())
      .then(data => this.setState( {questions: data.questions} ), () => {console.log(this.state.questions)})
      .catch(err => console.log(err))

    this.getLocalStorage()
  }

  getLocalStorage = () => {
   if(localStorage.getItem('correct answers')) {
     this.setState({ correctQuestions: JSON.parse(localStorage.getItem('correct answers')) });
   }
  }

  render() {
    return (
      <div className="App">
        <CardContainer questions={this.state.questions}/>
      </div>
    );
  }
}

export default App;
