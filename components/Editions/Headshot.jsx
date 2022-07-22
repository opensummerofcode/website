import PropTypes from 'prop-types';
import Image from 'next/image';
import ExternalLink from '../UI/ExternalLink';

const HeadShot = ({ data, socials, picture, roleShown }) => {
  const { name, isCoach } = data;
  const { twitter, linkedin, github, behance, instagram } = socials;

  return (
    <article className="small-10 medium-4 large-3 cell headshot-detail">
      <div className="headshot-detail__wrapper">
        {picture && <Image layout="intrinsic" width="400" height="400" src={picture} alt={name} />}
      </div>
      <h2 className="h4 headshot-detail__name">{name}</h2>
      {roleShown && (isCoach ? <p>Coach</p> : <p>Student</p>)}
      <div className="student-social">
        {twitter && (
          <ExternalLink href={twitter}>
            <i className="fa fa-twitter" />
          </ExternalLink>
        )}
        {instagram && (
          <ExternalLink href={instagram}>
            <i className="fa fa-instagram" />
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
  roleShown: true,
};

HeadShot.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    isCoach: PropTypes.bool,
  }).isRequired,
  socials: PropTypes.shape({
    behance: PropTypes.string,
    github: PropTypes.string,
    instagram: PropTypes.string,
    linkedin: PropTypes.string,
    twitter: PropTypes.string,
  }),
  picture: PropTypes.string.isRequired,
  roleShown: PropTypes.bool,
};

export default HeadShot;
