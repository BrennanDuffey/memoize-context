import React, { Component } from 'react';
import questions from './api.js';
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
        // this.setFilteredQuestions();
      }
      ))
      .catch(err => console.log(err))

    this.getLocalStorage();
    // this.setFilteredQuestions();
  }

  getLocalStorage = () => {
   if(localStorage.getItem('incorrect answers')) {
     this.setState({ questions: JSON.parse(localStorage.getItem('incorrect answers')) });
    }
  }

  // setFilteredQuestions = () => {
  //   let filteredQuestions = this.state.filteredQuestions.splice();
  //   this.state.questions.forEach(question => {
  //     for (let i = 0; i < this.state.correctQuestions; i++) {
  //       if (this.state.correctQuestions[i].id !== question.id) {
  //         filteredQuestions.push(question)
  //         break
  //       }
  //     }
  //   })
  //   this.setState({filteredQuestions: filteredQuestions})
  // }

  render() {
    return (
      <div className="App">
        <CardContainer questions={this.state.questions} getLocalStorage={this.getLocalStorage}/>
      </div>
    );
  }
}

export default App;
