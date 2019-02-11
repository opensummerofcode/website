import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Footer />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
