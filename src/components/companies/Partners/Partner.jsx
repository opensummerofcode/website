import React from 'react';
import ExternalLink from '../../ui/ExternalLink';

const Partner = ({ partner, className = '' }) => {
  const { logo, name, url } = partner;
  let { path } = logo;

  let classNames = ['small-3 medium-2 cell', className].join(' ');
  return (
    <div className={classNames}>
      <ExternalLink href={url} className="vertical-align-container">
        <img src={path} alt={name} />
      </ExternalLink>
    </div>
  );
};

export default Partner;
