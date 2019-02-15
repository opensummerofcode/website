import React from 'react';
import { Link } from 'react-router-dom';
import ExternalLink from '../UI/ExternalLink';

const Info = () => {
  return (
    <React.Fragment>
      <div className="grid-x grid-padding-x u-margin-large--tb align-middle">
        <div className="medium-8 large-5 cell">
          <p className="hero-text u-margin-large--b">
            You don&apos;t have to be a teacher or a project manager to share your knowledge. Got
            something to share?{' '}
            <a
              href="mailto:dries@openknowledge.be?subject=Regarding oSoc18 Coaching"
              title="Coach at oSoc18"
              className="link--strikethrough"
            >
              Mail&nbsp;us
            </a>
          </p>

          <p>
            *Applications are closed! Keep an eye on our{' '}
            <ExternalLink href="https://twitter.com/osocode">Twitter account</ExternalLink> to see
            when applications open for 2019 &mdash; or{' '}
            <ExternalLink href="https://www.eventbrite.co.uk/e/demo-day-osoc18-registration-46709558547?ref=estw">
              join us on the Demo Day
            </ExternalLink>{' '}
            on the 26th of July.
          </p>
        </div>
        <div className="medium-8 large-6 cell large-offset-1">
          <img
            src="img/pictures/osoc16-coaches-student-happy.jpg"
            className="u-margin--b"
            alt="A happy coach and a happy student"
          />
          <p>
            <small>Open summer of code 2016 &mdash; a proud coach and a happy student</small>
          </p>
        </div>
      </div>

      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="medium-8 large-6 cell">
          <img
            src="img/pictures/osoc16-harry-roberts.jpg"
            className="u-margin--b"
            alt="Students working out"
          />
          <p>
            <small>
              Harry Roberts{' '}
              <ExternalLink
                href="https://twitter.com/csswizardry"
                title="Harry Roberts Twitter handle @csswizardry"
              >
                @csswizardry
              </ExternalLink>{' '}
              showing our students how CSS is done at open summer of code 2016.
            </small>
          </p>
        </div>
        <div className="medium-8 large-5 cell large-offset-1">
          <p>
            Every student needs someone to teach them what cannot be taught in school. This is your
            chance to <strong>share your knowledge</strong>, give back to community, grow your skill
            set and expand your network.
          </p>
          <p>
            You&apos;ll be able to coach a diverse group of talented students &mdash; and you might
            wind up wanting to hiring one!
          </p>
          <p>
            <Link to="/practical">Visit our FAQ</Link> to learn more, or send us{' '}
            <a
              href="mailto:dries@openknowledge.be?subject=Regarding osoc18 Coaching"
              title="Coach at osoc18"
            >
              a message
            </a>
            .
          </p>

          {/* <!--         <p class="u-margin-large--tb">
          <a class="button" href="mailto:dries@openknowledge.be?subject=Regarding osoc Coaching" title="Coach at open summer of code">Mail us to apply</a>
        </p> --> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Info;
