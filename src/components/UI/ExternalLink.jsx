import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ href, children, ...rest }) => {
  return (
    <a href={href} {...rest} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
};

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default ExternalLink;
