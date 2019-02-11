import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Partners from '../../Companies/Partners';

class MainLayout extends Component {
  render() {
    const { component: Component } = this.props;
    return (
      <React.Fragment>
        <Navigation />
        <Component />
        <Partners />
        <Footer />
      </React.Fragment>
    );
  }
}

export default MainLayout;
