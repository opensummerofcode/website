import PropTypes from 'prop-types';
import { ButtonLink } from '../UI/Buttons';

const Header = ({ project }) => (
  <header className="hero-detail u-padding-x-large--tb">
    <div className="grid-x grid-padding-x small-offset-1 medium-offset-0">
      <div className="small-10 medium-3 medium-offset-0 large-4 cell u-margin-medium--b">
        <img className="crest" src={project.logo} alt={`Crest of the ${project.name} project`} />
        <h1 className="hero-head project-title">{project.name}</h1>
      </div>

      <div className="small-10 medium-7 medium-offset-1 large-5 cell large-offset-0 flex-text">
        <p>{project.description}</p>
        {project.repository && (
          <p>
            <ButtonLink className="success" isExternal href={project.repository}>
              Contribute on Github
            </ButtonLink>
          </p>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  project: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    repository: PropTypes.string
  }).isRequired
};

export default Header;
