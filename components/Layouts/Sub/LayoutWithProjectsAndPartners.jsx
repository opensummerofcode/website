import React from 'react';
import PropTypes from 'prop-types';
import FeaturedProjects from '../../Projects/FeaturedProjects';
import Partners from '../../Companies/Partners';

const LayoutWithProjectsAndPartners = ({ component: Component, ...rest }) => {
  return (
    <React.Fragment>
      <Component {...rest} />
      <FeaturedProjects />
      <Partners />
    </React.Fragment>
  );
};

LayoutWithProjectsAndPartners.propTypes = {
  component: PropTypes.func.isRequired
};

export default LayoutWithProjectsAndPartners;
