import React from 'react';
import CardContainer from './CardContainer.js';
import { shallow } from 'enzyme';

let mockQuestions = [
  {
    "question": "When the context of this is described what is context actually?",
    "answers": ["The scope that this is invoked in.", "Whatever this is bound to.", "The object that is executing the javascript code."],
    "correctAnswer": "The object that is executing the javascript code.",
    "codeSnippet": null,
    "id": 1
  },
  {
    "question": "When is the value of this set in an ES5 function?",
    "answers": ["When the function is created.", "When the function is executed."],
    "correctAnswer": "When the function is executed.",
    "codeSnippet": null,
    "id": 2
  }
];
const mockGetLocalStorage = jest.fn();


describe('Answer components', () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <CardContainer  
        questions={mockQuestions}
        getLocalStorage={mockGetLocalStorage}
      />
    );
  });

  it('Should render correctly with all the information passed', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should have default states', () => {
    expect(wrapper.state()).toEqual({
      cardCounter: 0,
      showAnswer: false,
      isCorrect: false,
      incorrectAnswers: []
    });
  });

  it('Should be able to update is correct', () => {
    expect(wrapper.state().isCorrect).toEqual(false);
    wrapper.instance().updateIsCorrect(true);
    expect(wrapper.state().isCorrect).toEqual(true);
  });

  it('Should be able to toggle the answer', () => {
    expect(wrapper.state().showAnswer).toEqual(false);
    wrapper.instance().toggleShowAnswer();
    expect(wrapper.state().showAnswer).toEqual(true);
  });

  it('Should be able to reset the counter and incorrectAnswers', () => {
    wrapper.state().cardCounter = 1;
    wrapper.state().incorrectAnswers = [1, 2, 3]
    wrapper.instance().resetCounter();
    expect(wrapper.state().cardCounter).toEqual(0);
    expect(wrapper.state().incorrectAnswers).toEqual([]);
  });

  it('Should be able to updateCounter', () => {
    expect(wrapper.state().cardCounter).toEqual(0);
    wrapper.instance().updateCounter();
    expect(wrapper.state().cardCounter).toEqual(1);
    wrapper.instance().updateCounter();
    expect(wrapper.state().cardCounter).toEqual(2);
  });

  it('Should be able to update correct Answers when someone is wrong', () => {
    wrapper.state().cardCounter = 1;
    expect(wrapper.state().incorrectAnswers).toEqual([]);
    wrapper.instance().updateCorrectAnswers();
    expect(wrapper.state().incorrectAnswers).toEqual([
      {
        "question": "When the context of this is described what is context actually?",
        "answers": ["The scope that this is invoked in.", "Whatever this is bound to.", "The object that is executing the javascript code."],
        "correctAnswer": "The object that is executing the javascript code.",
        "codeSnippet": null,
        "id": 1
      }
    ]);
  });

  it('Should call a bunch of methods to be called from nextQuestion', () => {
    expect(wrapper.state().cardCounter).toEqual(0);
    wrapper.instance().nextQuestion()
    expect(wrapper.state().cardCounter).toEqual(1);
  });

  describe('Conditional rendering', () => {
    
    it('Should render based off cardCounter > 0', () => {
      wrapper.state().cardCounter = 1;
      expect(wrapper).toMatchSnapshot();
    });

    it('Should render based off cardCounter = questions.length + 1', () => {
      wrapper.state().cardCounter = 3;
      expect(wrapper).toMatchSnapshot();
    });

    it('Should render differently if state of show answer is true', () => {
      wrapper.state().showAnswer = true;
      expect(wrapper).toMatchSnapshot();
    });
  });
});