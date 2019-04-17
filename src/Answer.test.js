import React from 'react';
import Answer from './Answer.js';
import { shallow } from 'enzyme';

let mockAnswer = 'Undefined.';
let mockCorrectAnswer = 'Undefined.';
let mockUpdateIsCorrect = jest.fn();
let mockToggleShowAnswer = jest.fn();
let mockUpdateCorrectAnswers = jest.fn();

describe('Answer components', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <Answer  
        answer={mockAnswer}
        correctAnswer={mockCorrectAnswer}
        updateIsCorrect={mockUpdateIsCorrect}
        toggleShowAnswer={mockToggleShowAnswer}
        updateCorrectAnswers={mockUpdateCorrectAnswers}
      />
    );
  });

  it('Should render correctly with all the information passed', () => {
      expect(wrapper).toMatchSnapshot();
  });

  it('Should call invoke handleClick when button is clicked', () => {
    wrapper.find('.question').simulate('click', () => {})
    expect(mockToggleShowAnswer).toBeCalled();
    expect(mockUpdateIsCorrect).toBeCalled()
  });

  it('Should call invoke handleClick when button is clicked', () => {
    wrapper.find('.question').simulate('keyDown', (e) => {keyCode: 13})
    expect(mockToggleShowAnswer).toBeCalled();
    expect(mockUpdateIsCorrect).toBeCalled()
  });
});