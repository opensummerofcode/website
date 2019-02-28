import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ExternalLink from './ExternalLink';

const ButtonGroup = ({ children }) => {
  return <div className="button-group">{children}</div>;
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired
};

const ButtonLink = ({ className, children, isExternal = false, ...rest }) => {
  const classNames = ['button', className].join(' ');
  const MyLink = isExternal ? ExternalLink : Link;
  return (
    <MyLink className={classNames} {...rest}>
      {children}
    </MyLink>
  );
};

export { ButtonLink, ButtonGroup };
