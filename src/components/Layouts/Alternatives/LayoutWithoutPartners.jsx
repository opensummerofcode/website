import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../Common/Navigation';
import Footer from '../../Common/Footer';

const LayoutWithoutPartners = ({ component: Component, ...rest }) => {
  return (
    <React.Fragment>
      <Navigation />
      <Component {...rest} />
      <Footer />
    </React.Fragment>
  );
};

LayoutWithoutPartners.propTypes = {
  component: PropTypes.func.isRequired
};

export default LayoutWithoutPartners;
