import Gallery from './Gallery';
import Project from './Project';
import projects from '../../assets/data/2019/projects.json';

const Projects = () => {
  const $projects = projects.map(p => <Project key={p.id} project={p} />);
  return <Gallery className="c-projects">{$projects}</Gallery>;
};

export default Projects;
