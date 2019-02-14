import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import FeaturedProjects from '../../Projects/FeaturedProjects';
import Partners from '../../Companies/Partners';

const LayoutWithProjectsAndPartners = ({ component: Component }) => {
  return (
    <React.Fragment>
      <Navigation />
      <Component />
      <FeaturedProjects />
      <Partners />
      <Footer />
    </React.Fragment>
  );
};

LayoutWithProjectsAndPartners.propTypes = {
  component: PropTypes.func.isRequired
};

export default LayoutWithProjectsAndPartners;
