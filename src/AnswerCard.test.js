import React from 'react';
import AnswerCard from './AnswerCard.js';
import { shallow } from 'enzyme';

let mockAnswer = 'Undefined.'

describe('Answer components', () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <AnswerCard  
        answer={mockAnswer}
      />
    );
  });

  it('Should render correctly with all the information passed', () => {
    expect(wrapper).toMatchSnapshot();
  });
});