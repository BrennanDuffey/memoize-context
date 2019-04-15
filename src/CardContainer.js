import React, { Component } from 'react';
import QuestionCard from './QuestionCard.js';
import AnswerCard from './AnswerCard.js';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardCounter: 0,
      showAnswer: false,
      isCorrect: false,
      correctAnswers: [],
      filteredQuestions: this.props.questions
    }
  };

  updateIsCorrect = (boolean) => {
    this.setState({
      isCorrect: boolean
    });
  };

  updateFilteredQuestions = () => {
    let filteredQuestions = this.state.filteredQuestions
      .filter(question => JSON.parse(localStorage.getItem('correct answers').includes(question)))
    this.setState({filteredQuestions: filteredQuestions}, () => {console.log(this.state.filteredQuestions)})
  }

  updateCorrectAnswers = () => {
    let correctAnswers = this.state.correctAnswers;
    if(this.state.isCorrect) {
      correctAnswers.push(this.props.questions[this.state.cardCounter-1])
    }
    this.setState({correctAnswers: correctAnswers}, () => {
      localStorage.setItem('correct answers', JSON.stringify(this.state.correctAnswers))
    });
  }

  toggleShowAnswer = () => {
    this.setState({
      showAnswer: !this.state.showAnswer
    });
  };

  updateCounter = () => {
    let newCounter = this.state.cardCounter + 1;
    this.setState({cardCounter: newCounter});
  };

  nextQuestion = () => {
    this.updateCorrectAnswers();
    this.updateCounter();
    this.toggleShowAnswer();
  };


  render () {
    let response;
    if (this.state.isCorrect) {
      response = 'https://media.giphy.com/media/PS7d4tm1Hq6Sk/giphy.gif';
    } else {
      response = 'https://media.giphy.com/media/1455m6M8jFgCE8/giphy.gif';
    }
    if(!this.state.cardCounter) {
      return (
        <section>
          <h2>Hello and Welcome to Context Quiz please press the start button to begin</h2>
          <button onClick={this.updateCounter}> Start </button>
        </section>
      )
    } else if (this.state.showAnswer) {
      return (
        <section>
          <img src={response} />
          <AnswerCard {...this.props.questions[this.state.cardCounter-1]}/>
          <button onClick={this.nextQuestion}> Next </button>
        </section>
      )
    } else if (this.state.cardCounter === 32) {
      return (
        <section>
          <h2>Quiz completed!</h2>
        </section>
      )
    } else {
      return (
        <section>
          <QuestionCard {...this.props.questions[this.state.cardCounter-1]} 
                        toggleShowAnswer={this.toggleShowAnswer} 
                        updateIsCorrect={this.updateIsCorrect} 
                        updateCorrectAnswers={this.updateCorrectAnswers}/>
        </section>
      )
    }
  }
}
export default CardContainer;