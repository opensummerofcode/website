import React from 'react';
import { Link } from 'react-router-dom';
import ExternalLink from '../UI/ExternalLink';

const Info = () => {
  return (
    <React.Fragment>
      {/* <!-- info companies --> */}
      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="medium-8 large-5 cell">
          <p className="hero-text u-margin-large--b">
            Any type of company is welcome grab the opportunity to have a group of talented students
            build your next innovative project.{' '}
            <a
              href="mailto:dries@openknowledge.be?subject=Regarding oSoc18 Partnership"
              title="Start a partnership with open summer of code"
              className="link--strikethrough"
            >
              Mail us
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
            src="img/pictures/osoc17-2.jpg"
            className="u-margin--b"
            alt="A coach and his students tackling a problem"
          />
          <p>
            <small>
              Open summer of code 2017 &mdash;{' '}
              <ExternalLink href="https://prisma.care">the project Prisma</ExternalLink> partner and
              students brainstorm&nbsp;session.
            </small>
          </p>
        </div>
      </div>

      {/* <!-- info companies --> */}
      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="medium-8 large-6 cell">
          <img src="img/pictures/osoc17-3.jpg" className="u-margin--b" alt="Students working out" />
          <p>
            <small>
              Open summer of code 2017 &mdash; making sure our students get some exercise to tackle
              their projects!
            </small>
          </p>
        </div>
        {/* <!--<div class="medium-8 large-6 cell">
        <img src="img/pictures/osoc16-coaches-happy.jpg" class="u-margin--b" alt="Image of students working out">
        <p><small>Michael, a really happy coach at open summer of code 2016</small></p></div> --> */}
        {/* <!--<div class="medium-8 large-6 cell">
        <img src="img/pictures/osoc16-coaches-pieter.jpg" class="u-margin--b" alt="Image of students working out">
        <p><small>Pieter, coach &amp; founding father speaking to the crowds</small></p></div> --> */}
        {/* <!-- <div class="medium-8 large-6 cell">
        <img src="img/pictures/osoc16-coaches-sitting.jpg" class="u-margin--b" alt="Image of students working out">
        <p><small>Brainstorming hard for Leuven Leest at open summer of code 2016</small></p></div> --> */}
        <div className="medium-8 large-5 large-offset-1 cell">
          <p>
            Open summer of code will mobilise the next generation to build your open source project
            with you. You want to experiment, get access to external innovation, find fresh talent,
            expand your network or support students &mdash; we can help you out.
          </p>
          <p>
            <Link to="/practical">Visit our FAQ</Link> if you have any questions, or send us{' '}
            <a
              href="mailto:dries@openknowledge.be?subject=Regarding osoc18 Partnership"
              title="Partnership at osoc18"
            >
              a message
            </a>
            .
          </p>

          {/* <!--<p class="u-margin-large--tb">
          <a class="button" href="mailto:dries@openknowledge.be?subject=Regarding osoc Partnership" title="Start a partnership with open summer of code">Mail us to apply</a>
          <a href="https://www.eventbrite.co.uk/e/demo-day-osoc18-registration-46709558547?ref=estw" target="_blank" class="button">Come to the Demo Day</a>
          <a class="button link" href="2018.html">View this year's projects</a></p> --> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Info;
