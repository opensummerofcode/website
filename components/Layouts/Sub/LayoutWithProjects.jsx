import React from 'react';
import PropTypes from 'prop-types';
import FeaturedProjects from '../../Projects/FeaturedProjects';

const LayoutWithProjects = ({ component: Component, ...rest }) => {
  return (
    <React.Fragment>
      <Component {...rest} />
      <FeaturedProjects />
    </React.Fragment>
  );
};

LayoutWithProjects.propTypes = {
  component: PropTypes.func.isRequired
};

export default LayoutWithProjects;
