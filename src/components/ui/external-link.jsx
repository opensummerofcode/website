import React from 'react';

const ExternalLink = ({ href, children, ...rest }) => {
  return (
    <a href={href} {...rest} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
};

export default ExternalLink;
