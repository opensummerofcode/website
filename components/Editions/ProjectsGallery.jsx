import PropTypes from 'prop-types';
import slugify from 'slugify';
import Project from './Project';

const Projects = ({ edition, projects, isDemoDay }) => {
  const $projects = projects.map((p) => {
    const slug = slugify(p.name, { lower: true });
    return <Project isDemoDay={isDemoDay} key={p.id ?? slug} edition={edition} project={p} />;
  });
  return <div className="c-projects">{$projects}</div>;
};

Projects.propTypes = {
  edition: PropTypes.number.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape).isRequired,
  isDemoDay: PropTypes.bool.isRequired,
};

export default Projects;
