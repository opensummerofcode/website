import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Partners from '../../Companies/Partners';

const MainLayout = ({ component: Component }) => {
  return (
    <React.Fragment>
      <Navigation />
      <Component />
      <Partners />
      <Footer />
    </React.Fragment>
  );
};

MainLayout.propTypes = {
  component: PropTypes.func.isRequired
};

export default MainLayout;
