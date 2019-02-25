import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import $ from 'jquery';
import 'foundation-sites';
import MainWebsiteLayout from './Layouts/Main/MainWebsite';
import LayoutWithPartners from './Layouts/Sub/LayoutWithPartners';
import LayoutWithProjects from './Layouts/Sub/LayoutWithProjects';
import LayoutWithProjectsAndPartners from './Layouts/Sub/LayoutWithProjectsAndPartners';
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
          <PublicRoute
            exact
            path="/"
            layout={MainWebsiteLayout}
            sub={LayoutWithPartners}
            component={Home}
          />
          <PublicRoute path="/practical" layout={MainWebsiteLayout} component={Practical} />
          <PublicRoute
            path="/students"
            layout={MainWebsiteLayout}
            sub={LayoutWithPartners}
            component={Students}
          />
          <PublicRoute
            path="/companies"
            layout={MainWebsiteLayout}
            sub={LayoutWithProjectsAndPartners}
            component={Companies}
          />
          <PublicRoute
            path="/coaches"
            layout={MainWebsiteLayout}
            sub={LayoutWithProjects}
            component={Coaches}
          />
          <PublicRoute
            path="/2018"
            layout={MainWebsiteLayout}
            sub={LayoutWithPartners}
            component={Y2018}
          />
          <PublicRoute path="/project/:name" layout={MainWebsiteLayout} component={Project} />
        </Switch>
      </Router>
    );
  }
}

export default App;
