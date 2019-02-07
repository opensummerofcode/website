import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './navigation';

describe('navigation', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Navigation />
      </Router>,
      div
    );
  });

  afterAll(() => {
    return ReactDOM.unmountComponentAtNode(
      document.getElementsByTagName('div')
    );
  });
});
