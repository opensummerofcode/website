import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import $ from 'jquery';
import 'foundation-sites';
import MainLayout from '../layouts/main';
import PublicRoute from '../public-route';
import Home from '../home';
import Practical from '../practical';
import Students from '../students';
import Coaches from '../coaches';

class App extends React.Component {
  componentDidMount() {
    $(document).foundation();
  }
  render() {
    return (
      <Router>
        <React.Fragment>
          <PublicRoute exact path="/" layout={MainLayout} component={Home} />
          <PublicRoute
            path="/practical"
            layout={MainLayout}
            component={Practical}
          />
          <PublicRoute
            path="/students"
            layout={MainLayout}
            component={Students}
          />
          <PublicRoute
            path="/coaches"
            layout={MainLayout}
            component={Coaches}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
