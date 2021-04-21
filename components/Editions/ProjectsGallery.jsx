import PropTypes from 'prop-types';
import Project from './Project';

const Projects = ({ edition, projects, isDemoDay }) => {
  const $projects = projects.map((p) => (
    <Project isDemoDay={isDemoDay} key={p.id} edition={edition} project={p} />
  ));
  return <div className="c-projects">{$projects}</div>;
};

Projects.propTypes = {
  edition: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape).isRequired,
  isDemoDay: PropTypes.bool.isRequired,
};

export default Projects;
