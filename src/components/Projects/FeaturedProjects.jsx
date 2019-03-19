import React from 'react';
import ExternalLink from '../UI/ExternalLink';
import YearEditionCall from '../Common/CallToActions';

const FeaturedProjects = () => {
  return (
    <div className="u-padding-x-large--tb c-projects-old border-top-light-gray">
      <div className="grid-x grid-padding-x align-center">
        <div className="small-6 medium-6 large-3 cell c-projects-project">
          <ExternalLink href="https://github.com/oSoc18/bike4brussels" className="c-projects-image">
            <img src="img/projects/bike4brussels.png" alt="Logo of project Bike4Brussels" />
          </ExternalLink>
          <div className="c-projects-content">
            <h2 className="h5">
              <ExternalLink href="https://github.com/oSoc18/bike4brussels">
                Bike4Brussels
              </ExternalLink>
            </h2>
            <p>Get the best route for your bike ride in Brussels!</p>
          </div>
        </div>

        <div className="small-6 medium-6 large-3 cell c-projects-project">
          <ExternalLink href="https://github.com/oSoc18/bitsoftrust" className="c-projects-image">
            <img src="img/projects/bitsoftrust.png" alt="Logo of project Bits of Trust" />
          </ExternalLink>
          <div className="c-projects-content">
            <h2 className="h5">
              <ExternalLink href="https://github.com/oSoc18/bitsoftrust">
                Bits of Trust
              </ExternalLink>
            </h2>
            <p>
              Get acknowledged for your skills by letting your peers endorse and verify your
              qualities in an easy, reliable and standardized way.
            </p>
          </div>
        </div>

        <div className="small-6 medium-6 large-3 cell c-projects-project">
          <ExternalLink href="https://github.com/oSoc18/fris" className="c-projects-image">
            <img src="img/projects/fris.png" alt="Logo of project FRIS" />
          </ExternalLink>
          <div className="c-projects-content">
            <h2 className="h5">
              <ExternalLink href="https://github.com/oSoc18/fris">FRIS</ExternalLink>
            </h2>
            <p>An expert-finding tool to bring researchers and companies together.</p>
          </div>
        </div>

        <div className="small-6 medium-6 large-3 cell c-projects-project">
          <ExternalLink href="https://github.com/oSoc18/gentlestudent" className="c-projects-image">
            <img src="img/projects/gentlestudent.png" alt="Logo of project Gentlestudent" />
          </ExternalLink>
          <div className="c-projects-content">
            <h2 className="h5">
              <ExternalLink href="https://github.com/oSoc18/gentlestudent">
                Gentlestudent
              </ExternalLink>
            </h2>
            <p>
              Motivates students to engage in learning opportunities using the Open Badges Standard.
            </p>
          </div>
        </div>

        <YearEditionCall className="medium-7 large-4 c-projects-old__project align-center text-center" />
      </div>
    </div>
  );
};

export default FeaturedProjects;
