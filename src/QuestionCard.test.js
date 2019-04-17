import React from 'react';
import QuestionCard from './QuestionCard.js';
import { shallow } from 'enzyme';

let mockQuestion = {
  "question": "When the context of this is described what is context actually?",
  "answers": ["The scope that this is invoked in.", "Whatever this is bound to.", "The object that is executing the javascript code."],
  "correctAnswer": "The object that is executing the javascript code.",
  "codeSnippet": null,
  "id": 1
}
let mockUpdateIsCorrect = jest.fn();
let mockToggleShowAnswer = jest.fn();
let mockUpdateCorrectAnswers = jest.fn();

describe('Answer components', () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <QuestionCard  
        {...mockQuestion}
        toggleShowAnswer={mockToggleShowAnswer} 
        updateIsCorrect={mockUpdateIsCorrect} 
        updateCorrectAnswers={mockUpdateCorrectAnswers}
      />
    );
  });

  it('Should render correctly with all the information passed', () => {
      expect(wrapper).toMatchSnapshot();
  });
});