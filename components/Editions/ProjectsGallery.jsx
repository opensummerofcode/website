import PropTypes from 'prop-types';
import Gallery from './Gallery';
import Project from './Project';

const Projects = ({ projects }) => {
  const $projects = projects.map(p => <Project key={p.id} project={p} />);
  return <Gallery className="c-projects">{$projects}</Gallery>;
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape).isRequired
};

export default Projects;
