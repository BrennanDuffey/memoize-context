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
      codeSnippet = <img src={this.props.codeSnippet}/>
    }
    return (
      <article className="question-card">
        {codeSnippet}
        <h3>{this.props.question}</h3>
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