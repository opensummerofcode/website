import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ label, onClick, style, className }) => {
  const stl = { ...style, cursor: 'pointer' };
  return (
    <li onClick={onClick} onKeyDown={onClick} className={className} style={stl} role="tab">
      {label}
    </li>
  );
};

Tab.defaultProps = {
  style: '',
  className: ''
};

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.instanceOf(Object),
  className: PropTypes.string
};

export default Tab;
