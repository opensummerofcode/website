import React from 'react';
import PropTypes from 'prop-types';

const ButtonGroup = ({ children }) => {
  return <div className="button-group">{children}</div>;
};

ButtonGroup.propTypes = {
  children: PropTypes.element.isRequired
};

export default ButtonGroup;
