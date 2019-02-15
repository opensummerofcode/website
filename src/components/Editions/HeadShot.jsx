import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from '../UI/ExternalLink';

const HeadShot = ({ data, social, picture }) => {
  const { firstName, lastName } = data;
  const { twitter, linkedin, github } = social;
  const { path, alt } = picture;
  return (
    <article className="small-6 medium-4 large-3 cell headshot-detail">
      <img src={path} alt={alt} />
      <h2 className="h4">
        {firstName}
        <br /> {lastName}
      </h2>
      <div className="student-social">
        {twitter && (
          <ExternalLink href={twitter}>
            <i className="fa fa-twitter" />
          </ExternalLink>
        )}
        {linkedin && (
          <ExternalLink href={linkedin}>
            <i className="fa fa-linkedin" />
          </ExternalLink>
        )}
        {github && (
          <ExternalLink href={github}>
            <i className="fa fa-github" />
          </ExternalLink>
        )}
      </div>
    </article>
  );
};

HeadShot.defaultProps = {
  social: {}
};

HeadShot.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }).isRequired,
  social: PropTypes.shape({
    twitter: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string
  }),
  picture: PropTypes.shape({
    path: PropTypes.string,
    alt: PropTypes.string
  }).isRequired
};

export default HeadShot;
