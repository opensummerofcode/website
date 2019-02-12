import React from 'react';
import partnersdata from '../../../assets/files/partners.json';
import Partner from './Partner';

const Partners = () => {
  return (
    <div className="grid-x c-partners">
      <div className="small-12 cell">
        <div className="grid-x small-up-4 medium-up-5 large-up-8">
          {partnersdata.map(partner => (
            <Partner partner={partner} key={partner.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
