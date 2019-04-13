import React, { Component } from 'react';

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  handleClick = () => {
    this.props.updateCounter()
    if (this.props.correctAnswer === this.props.answer) {
      this.props.updateState()
    }
  }

  render() {
    return (
      <p onClick={this.handleClick}>{this.props.answer}</p>
    )  
  }
}

export default Answer;