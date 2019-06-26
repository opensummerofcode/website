import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Practical from '.';

describe('navigation', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Practical />
      </Router>,
      div
    );
  });

  afterAll(() => {
    return ReactDOM.unmountComponentAtNode(document.getElementsByTagName('div'));
  });
});
