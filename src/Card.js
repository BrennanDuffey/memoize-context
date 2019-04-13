import React, { Component } from 'react';
import Answer from './Answer.js';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCorrect: false
    }
  }

  updateState = () => {
    this.setState({isCorrect: true}, () => {console.log(this.state)})
  }

  // handleClick = () => {
  //   if (this.props.correctAnswer === props.correctAnswer) {
  //     console.log("FUCK YEA")
  //   }
  // }

  render() {
    return (
      <article>
        <h3>{this.props.question}</h3>
        {this.props.answers.map((answer, index) => {
          return <Answer answer={answer} key={index} correctAnswer={this.props.correctAnswer} updateState={this.updateState} updateCounter={this.props.updateCounter}/>
        })}
      </article>
    )
  }
}
export default Card;