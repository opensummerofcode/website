import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ExternalLink from './ExternalLink';

const ButtonGroup = ({ children }) => {
  return <div className="button-group">{children}</div>;
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired
};

const ButtonLink = ({ className, children, isExternal, ...rest }) => {
  const classNames = className ? ['button', className].join(' ') : 'button';
  const MyLink = isExternal ? ExternalLink : Link;
  return (
    <MyLink className={classNames} {...rest}>
      {children}
    </MyLink>
  );
};

ButtonLink.defaultProps = {
  className: '',
  isExternal: false
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isExternal: PropTypes.bool
};

export { ButtonLink, ButtonGroup };
