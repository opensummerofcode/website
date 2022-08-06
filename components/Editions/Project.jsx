import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import slugify from 'slugify';
import { ButtonLink } from '../UI/Buttons';

const BREAKOUT_UNSTARTED = 1;
const BREAKOUT_IN_PROGRESS = 2;
const BREAKOUT_ENDED = 3;

const Project = ({ edition, project }) => {
  // isDemoDay
  const { name, description, logo, id } = project;

  const slug = slugify(name, { lower: true });

  const determineBreakoutState = () => {
    // if (!isDemoDay) return null;
    if (true) return null;
    const now = Date.now();
    const start = new Date(project.breakout.startsAt);
    const end = new Date(project.breakout.endsAt);
    if (now <= start) return BREAKOUT_UNSTARTED;
    if (now < end && now > start) return BREAKOUT_IN_PROGRESS;
    if (now >= end) return BREAKOUT_ENDED;
    return null;
  };

  const [breakoutStatus, setBreakoutStatus] = useState(determineBreakoutState());

  useEffect(() => {
    let interval = () => {};
    if (false) {
      // if (isDemoDay) {
      interval = setInterval(() => {
        const b = determineBreakoutState();
        if (b !== breakoutStatus) setBreakoutStatus(b);
      }, 10000);
    }
    return () => clearInterval(interval);
  }, []);

  let $buttonContent;
  let buttonDisabled = true;
  if (false) {
    // if (isDemoDay) {
    if (breakoutStatus === BREAKOUT_UNSTARTED) {
      const start = new Date(project.breakout.startsAt);
      const hours = start.getHours();
      const minutes = start.getMinutes();
      $buttonContent = (
        <>
          <img className="c-icon" src="/img/icons/time.svg" alt="clock" />
          Meet us at {hours}:{minutes === 0 ? '00' : minutes}
        </>
      );
    } else if (breakoutStatus === BREAKOUT_IN_PROGRESS) {
      $buttonContent = (
        <>
          <img className="c-icon" src="/img/icons/video.svg" alt="video" />
          Meet the team
        </>
      );
      buttonDisabled = false;
    } else if (breakoutStatus === BREAKOUT_ENDED) {
      $buttonContent = (
        <>
          <img className="c-icon" src="/img/icons/time.svg" alt="clock" />
          Session has ended
        </>
      );
    }
  }

  return (
    // ${isDemoDay ? 'on-demo-day' : ''}
    <div className="c-projects-project">
      <Link href="/editions/[year]/[project]" as={`/editions/${edition}/${id ?? slug}`}>
        <a className="c-projects-image">
          <img
            src={logo ?? `/editions/${edition}/projects/${slug}.svg`}
            alt={`Crest of the ${name} project`}
          />
        </a>
      </Link>
      <h2 className="c-projects__title h5">
        <Link href="/editions/[year]/[project]" as={`/editions/${edition}/${id ?? slug}`}>
          <a>{name}</a>
        </Link>
      </h2>
      <p>{description}</p>
      {/* // isDemoDay && ( */}
      {false && (
        <ButtonLink disabled={buttonDisabled} isExternal href={project.breakout.room}>
          {$buttonContent}
        </ButtonLink>
      )}
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string,
    breakout: PropTypes.shape({
      startsAt: PropTypes.string,
      endsAt: PropTypes.string,
      room: PropTypes.string,
    }),
  }).isRequired,
  edition: PropTypes.number.isRequired,
  // isDemoDay: PropTypes.bool.isRequired,
};

export default Project;
