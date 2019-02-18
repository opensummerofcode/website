import React from 'react';
import ExternalLink from '../UI/ExternalLink';
import Logo from '../../assets/img/projects/bike4brussels.png';

const Header = () => {
  return (
    <header className="hero-detail u-padding-x-large--tb">
      <div className="grid-x grid-padding-x small-offset-1 medium-offset-0">
        <div className="small-10 medium-3 medium-offset-0 large-4 cell u-margin-medium--b">
          <img className="crest" src={Logo} alt="" />
          <h1 className="hero-head project-title">
            Bike 4<br />
            Brussels
          </h1>
        </div>

        <div className="small-10 medium-7 medium-offset-1 large-5 cell large-offset-0 flex-text">
          <p>
            The Bike for Brussels Route Planner is a{' '}
            <strong>route planning application for cyclists in Brussels</strong>.
          </p>
          <p>
            Current navigation applications such as Google Maps usually don’t take into account
            factors that are important for cyclists while planning a route. The Bike for Brussels
            Route Planner has a different approach: you can choose between different routes while
            planning: fast, balanced and relaxed. The relaxed route avoids cobblestones and big
            streets, and follows the cycle lanes in Brussels more often.
          </p>
          <p>
            This route planner uses OpenStreetMap and is closely{' '}
            <strong>related to the Road Completion project</strong>.
          </p>
          <p>
            <ExternalLink className="button success" href="https://github.com/oSoc18/bike4brussels">
              Contribute on Github
            </ExternalLink>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
