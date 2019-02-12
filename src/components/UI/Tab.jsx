import React from 'react';
import { Link } from 'react-router-dom';

const Tab = ({ className = '', children, ...rest }) => {
  const classNames = ['button link lowercase u-margin--right', className].join(' ');
  return (
    <Link {...rest} className={classNames}>
      {children}
    </Link>
  );
};

export default Tab;
