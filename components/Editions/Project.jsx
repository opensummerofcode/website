import PropTypes from 'prop-types';
import Link from 'next/link';

const Project = ({ project }) => {
  const { name, description, logo, id } = project;
  return (
    <div className="small-12 medium-6 large-4 cell c-projects-project">
      <Link href="/editions/2019/[project]" as={`/editions/2019/${id}`}>
        <a className="c-projects-image">
          <img src={logo} alt={`Crest of the ${name} project`} />
        </a>
      </Link>
      <div className="c-projects-content">
        <h2 className="h5">
          <Link href="/editions/2019/[project]" as={`/editions/2019/${id}`}>
            <a>{name}</a>
          </Link>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
  }).isRequired
};

export default Project;
