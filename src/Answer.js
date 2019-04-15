import React, { Component } from 'react';

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  // handleClick = () => {
  //   if (this.props.correctAnswer === this.props.answer) {
  //     this.props.updateState()
  //   }
  // }

  render() {
    return (
      <p onClick={
        () => {
          this.props.toggleShowAnswer();
          this.props.updateIsCorrect(this.props.correctAnswer === this.props.answer);
        }
      }>{this.props.answer}</p>
    )  
  }
}

export default Answer;