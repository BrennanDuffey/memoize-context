import React, { Component } from 'react';
import QuestionCard from './QuestionCard.js';
import AnswerCard from './AnswerCard.js';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardCounter: 0,
      showAnswer: false,
      isCorrect: false
    }
  }

  updateIsCorrect = (boolean) => {
    this.setState({
      isCorrect: boolean
    })
  }

  toggleShowAnswer = () => {
    this.setState({
      showAnswer: !this.state.showAnswer
    });
  }

  updateCounter = () => {
    let newCounter = this.state.cardCounter + 1;
    this.setState({cardCounter: newCounter});
  }

  nextQuestion = () => {
    this.updateCounter();
    this.toggleShowAnswer();
  }

  render () {
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
          <AnswerCard {...this.props.questions[this.state.cardCounter-1]}/>
          <button onClick={this.nextQuestion}> Start Next Round </button>
        </section>
      )
    } else {
      return (
        <section>
          <QuestionCard {...this.props.questions[this.state.cardCounter-1]} toggleShowAnswer={this.toggleShowAnswer} updateIsCorrect={this.updateIsCorrect}/>
        </section>
      )
    }
  }
}
export default CardContainer;