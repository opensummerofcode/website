import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Tab = ({ className, children, ...rest }) => {
  const classNames = ['button link lowercase u-margin--right', className].join(' ');
  return (
    <Link {...rest} className={classNames}>
      {children}
    </Link>
  );
};

Tab.defaultProps = {
  className: ''
};

Tab.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Tab;
