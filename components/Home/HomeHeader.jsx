import React from 'react';
import HeroLink from './HeroLink';

const HomeHeader = () => {
  return (
    <React.Fragment>
      {/* <!-- hero --> */}
      <div className="hero-intro">
        <div className="grid-x grid-padding-x">
          <div className="medium-8 large-7 cell">
            <h2 className="hero-head">
              Innovative open source projects, made by incredibly motivated students, coaches &amp;
              organisations.
            </h2>
          </div>
          <div className="medium-10 large-5 cell large-offset-1">
            <div className="osoc-float-element-o" />
            <div className="osoc-float-element-s" />
            <div className="osoc-float-element-o-small" />
            <div className="osoc-float-element-c" />
          </div>
        </div>
      </div>
      {/* <!-- links --> */}
      <div className="hero-themes">
        <div className="grid-x grid-padding-x grid-x--equal-height">
          <HeroLink href="/students" name="students" />
          <HeroLink href="/companies" name="companies" />
          <HeroLink href="/coaches" name="coaches" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeHeader;
