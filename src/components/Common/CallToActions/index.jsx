import React from 'react';
import { ButtonLink } from 'react-router-dom';

const YearEditionCall = () => {
  return (
    <div className="small-12 cell">
      <ButtonLink className="u-margin-large--t" to="/2018">
        View this year&apos;s edition
      </ButtonLink>
    </div>
  );
};

export default YearEditionCall;
