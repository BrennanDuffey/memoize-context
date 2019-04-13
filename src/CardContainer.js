import React, { Component } from 'react';
import Card from './Card.js';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardCounter: 0,
      isInbetweenRounds: false
    }
  }

  toggleInbetweenRounds = () => {
    this.setState({
      isInbetweenRounds: !this.state.isInbetweenRounds
    })
  }

  updateCounter = () => {
    let newCounter = this.state.cardCounter + 1;
    this.setState({cardCounter: newCounter});
  }

  render () {
    if(!this.state.cardCounter) {
      return (
        <section>
          <h2>Hello and Welcome to Context Quiz please press the start button to begin</h2>
          <button onClick={this.updateCounter}> Start </button>
        </section>
      )
    } else if (this.state.isInbetweenRounds) {
      <section>
        
        <button onClick={this.updateCounter}> Start Next Round </button>
      </section>
    } else {
      return (
        <section>
          <Card {...this.props.questions[this.state.cardCounter-1]} updateCounter={this.updateCounter}/>
        </section>
      )
    }
  }
}
export default CardContainer;