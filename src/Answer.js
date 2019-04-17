import React, { Component } from 'react';

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <p className="question" role="button" tabIndex="0"
        onKeyDown={
          (e) => {
            if (e.keyCode === 13 ) {
              this.props.toggleShowAnswer();
              this.props.updateIsCorrect(this.props.correctAnswer === this.props.answer);
            } 
        }
      }
      onClick={
        () => {
          this.props.toggleShowAnswer();
          this.props.updateIsCorrect(this.props.correctAnswer === this.props.answer);
        }
      }>{this.props.answer}</p>
    )  
  }
}

export default Answer;