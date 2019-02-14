import React from 'react';

const Header = () => {
  return (
    <React.Fragment>
      {/* <!-- header --> */}
      <header className="hero-detail u-padding-x-large--tb">
        <div className="grid-x grid-padding-x">
          <div className="medium-4 medium-offset-0 large-4 cell">
            <h1 className="hero-head">
              Osoc
              <br />
              for companies
            </h1>
          </div>

          <div className="medium-6 medium-offset-0 large-5 cell large-offset-1">
            <p className="hero-text">
              startups
              <br />
              non-profits
              <br />
              governments
              <br />
              agencies
              <br />
              services
              <br />
              &amp; other companies
            </p>
            <div className="osoc-float-element-o" />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
