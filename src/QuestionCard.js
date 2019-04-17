import React, { Component } from 'react';
import Answer from './Answer.js';

class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }



  render() {
    let codeSnippet;
    if (this.props.codeSnippet) {
      codeSnippet = <img src={this.props.codeSnippet} height="350px" width="70%" alt="code snippet"/>
    }
    return (
      <article className="question-card">
        <h2>{this.props.question}</h2>
        {codeSnippet}
        {this.props.answers.map((answer, index) => {
          return <Answer answer={answer} 
                         key={index} 
                         correctAnswer={this.props.correctAnswer} 
                         updateIsCorrect={this.props.updateIsCorrect} 
                         toggleShowAnswer={this.props.toggleShowAnswer}
                         updateCorrectAnswers={this.props.updateCorrectAnswers}/>
        })}
      </article>
    )
  }
}
export default QuestionCard;