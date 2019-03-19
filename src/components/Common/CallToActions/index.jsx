import React from 'react';
import { ButtonLink } from '../../UI/Buttons';

const YearEditionCall = ({ className, ...rest }) => {
  const classNames = ['small-12 cell', className].join(' ');
  return (
    <div className={classNames}>
      <ButtonLink className="u-margin-large--t" to="/2018" {...rest}>
        View this year&apos;s edition
      </ButtonLink>
    </div>
  );
};

export default YearEditionCall;
