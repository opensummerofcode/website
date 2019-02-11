import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import $ from 'jquery';
import 'foundation-sites';
import MainLayout from '../Layouts/Main';
import PublicRoute from '../PublicRoute';
import Home from '../Home';
import Practical from '../Practical';
import Students from '../Students';
import Coaches from '../Coaches';

class App extends React.Component {
  componentDidMount() {
    $(document).foundation();
  }
  render() {
    return (
      <Router>
        <Switch>
          <PublicRoute layout={MainLayout} component={Home} />
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
        </Switch>
      </Router>
    );
  }
}

export default App;
