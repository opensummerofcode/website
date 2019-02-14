import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import FeaturedProjects from '../../Projects/FeaturedProjects';

const LayoutWithProjects = ({ component: Component }) => {
  return (
    <React.Fragment>
      <Navigation />
      <Component />
      <FeaturedProjects />
      <Footer />
    </React.Fragment>
  );
};

LayoutWithProjects.propTypes = {
  component: PropTypes.func.isRequired
};

export default LayoutWithProjects;
