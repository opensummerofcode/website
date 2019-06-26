import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from '../../UI/ExternalLink';

const Partner = ({ partner, className }) => {
  const { logo, name, url } = partner;
  const { path } = logo;
  const { alt } = logo;
  const classNames = ['small-3 medium-2 cell', className].join(' ');
  return (
    <div className={classNames}>
      <ExternalLink href={url} className="vertical-align-container">
        <img src={path} alt={alt || name} />
      </ExternalLink>
    </div>
  );
};

Partner.defaultProps = {
  className: ''
};

Partner.propTypes = {
  partner: PropTypes.shape({
    logo: PropTypes.shape({
      path: PropTypes.string.isRequired,
      alt: PropTypes.string
    }),
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  className: PropTypes.string
};

export default Partner;
