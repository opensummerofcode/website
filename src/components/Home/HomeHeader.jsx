import React from 'react';
import { Link } from 'react-router-dom';

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
          <div className="small-12 medium-4 large-4 cell">
            <h2 className="h3">
              <Link to="/students">students</Link>
            </h2>
          </div>
          <div className="small-12 medium-4 large-4 cell">
            <h2 className="h3">
              <Link to="/companies">companies</Link>
            </h2>
          </div>
          <div className="small-12 medium-4 large-4 cell">
            <h2 className="h3">
              <Link to="/coaches">coaches</Link>
            </h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeHeader;
