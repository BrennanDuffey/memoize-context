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
      incorrectAnswers: []
    }
  };

  updateIsCorrect = (boolean) => {
    this.setState({
      isCorrect: boolean
    });
  };

  updateCorrectAnswers = () => {
    let incorrectAnswers = this.state.incorrectAnswers;
    if(!this.state.isCorrect) {
      incorrectAnswers.push(this.props.questions[this.state.cardCounter-1])
    }
    this.setState({incorrectAnswers: incorrectAnswers}, () => {
      localStorage.setItem('incorrect answers', JSON.stringify(this.state.incorrectAnswers))
    });
  }

  toggleShowAnswer = () => {
    this.setState({
      showAnswer: !this.state.showAnswer
    });
  };

  resetCounter = () => {
    this.setState({
      cardCounter: 0,
      incorrectAnswers: []
    })
  }

  resetLocalStorage = () => {
    localStorage.clear()
  }

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
        <section className="flash-card">
          <h1>Hello and Welcome to Context Quiz please press the start button to begin</h1>
          <button onClick={this.updateCounter}> Start </button>
        </section>
      )
    } else if (this.state.showAnswer) {
      return (
        <section className="flash-card">
          <img src={response} height="40%" width="40%"/>
          <AnswerCard {...this.props.questions[this.state.cardCounter-1]}/>
          <button onClick={this.nextQuestion}> Next </button>
        </section>
      )
    } else if (this.state.cardCounter === this.props.questions.length + 1) {
      return (
        <section className="flash-card">
          <h1>Quiz completed!</h1>
          <div>
            <p className="question" role="button" tabIndex="0" 
              onClick={ () => {
                this.resetCounter();
                this.resetLocalStorage();
                window.location.reload();
              }}
              onKeyDown={
                (e) => {
                  if (e.keyCode === 13 ) {
                    this.resetCounter();
                    this.resetLocalStorage();
                    window.location.reload();
                } 
              }}
              >Reset Game</p>
            <p className="question" role="button" tabIndex="0"
              onClick={ () => {
                this.props.getLocalStorage();
                this.resetLocalStorage();
                this.resetCounter();
              }}
              onKeyDown={
                (e) => {
                  if (e.keyCode === 13 ) {
                    this.props.getLocalStorage();
                    this.resetLocalStorage();
                    this.resetCounter();
                } 
              }}
            >Try Missed Questions</p>
          </div>
        </section>
      )
    } else {
      return (
        <section className="flash-card">
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