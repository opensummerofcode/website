import PropTypes from 'prop-types';
import ExternalLink from '../UI/ExternalLink';

const HeadShot = ({ data, socials, picture, roleShown }) => {
  const { name, isCoach } = data;
  const { twitter, linkedin, github, behance } = socials;

  return (
    <article className="small-6 medium-4 large-3 cell headshot-detail">
      <div className="headshot-detail__wrapper">
        <img src={picture} alt={name} />
      </div>
      <h2 className="h4 headshot-detail__name">{name}</h2>
      {roleShown && (isCoach ? <p>Coach</p> : <p>Student</p>)}
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
        {behance && (
          <ExternalLink href={behance}>
            <i className="fa fa-behance" />
          </ExternalLink>
        )}
      </div>
    </article>
  );
};

HeadShot.defaultProps = {
  socials: {},
  roleShown: true
};

HeadShot.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    isCoach: PropTypes.bool
  }).isRequired,
  socials: PropTypes.shape({
    twitter: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    behance: PropTypes.string
  }),
  picture: PropTypes.string.isRequired,
  roleShown: PropTypes.bool
};

export default HeadShot;
