import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Project = ({ name, hook, logo }) => {
  const to = name.toLowerCase().replace(' ', '');
  const { path, alt } = logo;
  return (
    <div className="small-6 medium-6 large-4 cell c-projects-project">
      <Link href={`/project/${to}`} target="_blank" className="c-projects-image">
        <a>
          <img src={path} alt={alt} />
        </a>
      </Link>
      <div className="c-projects-content">
        <h2 className="h5">
          <Link href={`/project/${to}`} target="_blank">
            <a>{name}</a>
          </Link>
        </h2>
        <p>{hook}</p>
      </div>
    </div>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  hook: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    path: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired
};

export default Project;
