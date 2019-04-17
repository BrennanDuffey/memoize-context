import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe ('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( 
      <App/>
    );
  });

  it('Should have a default state', () => {
    expect(wrapper.state().questions).toEqual([]);
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
