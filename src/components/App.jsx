import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import $ from 'jquery';
import 'foundation-sites';
import MainLayout from './Layouts/Main';
import LayoutWithoutPartners from './Layouts/Alternatives/LayoutWithoutPartners';
import LayoutWithProjects from './Layouts/Alternatives/LayoutWithProjects';
import LayoutWithProjectsAndPartners from './Layouts/Alternatives/LayoutWithProjectsAndPartners';
import PublicRoute from './PublicRoute';
import Home from './Home';
import Practical from './Practical';
import Students from './Students';
import Companies from './Companies';
import Coaches from './Coaches';
import Project from './Projects';
import Y2018 from './Editions/index';

class App extends React.Component {
  componentDidMount() {
    $(document).foundation();
  }

  render() {
    return (
      <Router>
        <Switch>
          <PublicRoute exact path="/" layout={MainLayout} component={Home} />
          <PublicRoute path="/practical" layout={MainLayout} component={Practical} />
          <PublicRoute path="/students" layout={MainLayout} component={Students} />
          <PublicRoute
            path="/companies"
            layout={LayoutWithProjectsAndPartners}
            component={Companies}
          />
          <PublicRoute path="/coaches" layout={LayoutWithProjects} component={Coaches} />
          <PublicRoute path="/2018" layout={MainLayout} component={Y2018} />
          <PublicRoute path="/project/:name" layout={LayoutWithoutPartners} component={Project} />
        </Switch>
      </Router>
    );
  }
}

export default App;
