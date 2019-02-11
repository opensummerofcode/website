import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './index';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <HomePage />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
