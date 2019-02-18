import React from 'react';
import ExternalLink from '../UI/ExternalLink';

const Partners = () => {
  return (
    <div className="grid-x grid-padding-x u-margin-large--tb partner-section project-section">
      <div className="small-10 small-offset-1 medium-3 medium-offset-0 large-3 cell text-left">
        <h3 className="h3 u-margin-large--b">
          Our <br /> partners
        </h3>
      </div>

      <div className="small-10 small-offset-1 medium-9 medium-offset-0 large-9 cell">
        <div className="grid-x grid-padding-x u-margin-large--b partner-section">
          <div className="small-6 medium-4 large-3 cell">
            <ExternalLink href="https://bike.brussels/" className="vertical-align-container">
              <img src="/img/partners-svg/bike-brussels.svg" alt="" />
            </ExternalLink>
            <h3 className="h6">
              <ExternalLink href="https://bike.brussels/" className="vertical-align-container">
                Bike for Brussels
              </ExternalLink>
            </h3>
          </div>
          <div className="small-6 medium-4 large-3 cell">
            <ExternalLink
              href="http://be.brussels/about-the-region/brussels-regional-public-service?set_language=en"
              className="vertical-align-container"
            >
              <img src="/img/partners/dark/brussels.png" alt="" />
            </ExternalLink>
            <h3 className="h6">
              <ExternalLink
                href="http://be.brussels/about-the-region/brussels-regional-public-service?set_language=en"
                className="vertical-align-container"
              >
                Brussels Regional Public Services
              </ExternalLink>
            </h3>
          </div>
          <div className="small-6 medium-4 large-3 cell end">
            <ExternalLink
              href="https://www.openstreetmap.org/"
              className="vertical-align-container"
            >
              <img src="/img/partners-svg/osm.svg" alt="" />
            </ExternalLink>
            <h3 className="h6">
              <ExternalLink
                href="https://www.openstreetmap.org/"
                className="vertical-align-container"
              >
                OpenStreetMap Belgium
              </ExternalLink>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
