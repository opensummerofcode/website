import React from 'react';

const StudentsHeader = () => {
  return (
    <header className="hero-detail u-padding-x-large--tb border-top-medium-gray">
      <div className="grid-x grid-padding-x">
        <div className="medium-12 medium-offset-0 large-4 cell">
          <h1 className="hero-head">
            This year&apos;s students
            <div className="osoc-float-element-c" />
          </h1>
        </div>

        <div className="small-6 medium-offset-0 large-3 cell large-offset-1">
          <p className="hero-text">
            developers
            <br /> designers
            <br /> marketers
            <br /> business&nbsp;analysts
            <br /> data scientists
            <br /> &amp; other digital skills
          </p>
        </div>
      </div>
    </header>
  );
};

export default StudentsHeader;
