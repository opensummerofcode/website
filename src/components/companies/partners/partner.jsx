import React from 'react';
import ExternalLink from '../../ui/external-link';

const Partner = ({ partner, small = 'small-3' }) => {
  const { logo, name, url } = partner;
  let { path } = logo;
  const Logo = import('../../../assets/img/' + path);
  let classNames = ['medium-auto cell', small].join(' ');
  return (
    <div className={classNames}>
      <ExternalLink href={url} className="vertical-align-container">
        <img src={Logo} alt={name} />
      </ExternalLink>
    </div>
  );
};

export default Partner;
