import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import $ from 'jquery';
import 'foundation-sites';
import MainLayout from '../layouts/main';
import PublicRoute from '../public-route';
import Home from '../home';

class App extends React.Component {
  componentDidMount() {
    $(document).foundation();
  }
  render() {
    return (
      <Router>
        <PublicRoute layout={MainLayout} component={Home} />
      </Router>
    );
  }
}

export default App;
