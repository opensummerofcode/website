import React, { Component } from 'react';
import Navigation from '../../navigation/navigation';
import Footer from '../../footer/footer';
import Partners from '../../companies/partners';

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
