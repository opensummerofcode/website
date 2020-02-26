import React from 'react';
import { ButtonLink } from '../../UI/Buttons';

const YearEditionCall = ({ className, ...rest }) => {
  const classNames = ['small-12 cell', className].join(' ');
  return (
    <div className={classNames}>
      <ButtonLink className="u-margin-large--t" href="/editions/2019" {...rest}>
        View last year&apos;s edition
      </ButtonLink>
    </div>
  );
};

export default YearEditionCall;
