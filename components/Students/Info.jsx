import React from 'react';
import Link from 'next/link';
import ExternalLink from '../UI/ExternalLink';

const Info = () => {
  return (
    <React.Fragment>
      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="medium-8 large-5 cell">
          <p className="hero-text u-margin-large--b">
            Open summer of code is for anyone who brings motivation, enthusiasm and talent to the
            table. Don&apos;t be shy,{' '}
            <ExternalLink
              href="https://docs.google.com/forms/d/e/1FAIpQLSeRX7_Y0xkSxO33ZaNz4YARrLSaz4VPxgJXNufhhgLuug9GzA/viewform"
              title="Apply as a student for open summer of code"
              className="link--strikethrough"
            >
              apply
            </ExternalLink>
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
            src="img/pictures/osoc17-1.jpg"
            className="u-margin--b"
            alt="Students getting freaky with it"
          />
          <p>
            <small>Open summer of code 2017 &mdash; project B-badges</small>
          </p>
        </div>
      </div>

      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="small-12 large-6 cell">
          <div style={{ padding: '56.25% 0 0 0', position: 'relative', marginBottom: '1rem' }}>
            <iframe
              src="https://player.vimeo.com/video/177368331?title=0&byline=0&portrait=0"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                width: '100%',
                height: '100%'
              }}
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              title="TODO"
            />
          </div>
          <script src="https://player.vimeo.com/api/player.js" />
          <p>
            <small>The 2016 aftermovie; see us building, pitching &amp; cruising!</small>
          </p>
        </div>

        <div className="medium-8 large-5 cell">
          <p>
            An unforgettable <strong>learning experience</strong>, for any student, as long as
            you&apos;re motivated. Work on real, valuable projects that beef your cv and grow your
            network — all while having fun.
          </p>
          <p>
            <Link href="/practical">
              <a>Visit our FAQ</a>
            </Link>
            to learn more, or send us{' '}
            <a
              href="mailto:dries@openknowledge.be?subject=Regarding osoc18 student"
              title="Student at osoc18"
            >
              a message
            </a>
            .
          </p>
          <p>P.S. Omg, it&apos;s paid...</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Info;
