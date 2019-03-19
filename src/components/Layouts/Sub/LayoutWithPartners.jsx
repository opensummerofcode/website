import React from 'react';
import PropTypes from 'prop-types';
import Partners from '../../Companies/Partners';

const LayoutWithPartners = ({ component: Component, ...rest }) => {
  return (
    <React.Fragment>
      <Component {...rest} />
      <Partners />
    </React.Fragment>
  );
};

LayoutWithPartners.propTypes = {
  component: PropTypes.func.isRequired
};

export default LayoutWithPartners;
