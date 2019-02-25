import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../Common/Navigation';
import Footer from '../../Common/Footer';

const MainWebsite = ({ sub: SubLayout, component: Component }) => {
  const Content = SubLayout || Component;
  return (
    <React.Fragment>
      <Navigation />
      <Content component={Component} />
      <Footer />
    </React.Fragment>
  );
};

MainWebsite.defaultProps = {
  sub: undefined
};

MainWebsite.propTypes = {
  component: PropTypes.func.isRequired,
  sub: PropTypes.func
};

export default MainWebsite;
