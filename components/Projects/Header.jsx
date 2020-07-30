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
        {(project.repository || project.website) && (
          <div class="grid-x grid-padding-x">
            {project.repository && (
              <div class="cell medium-4">
                <ButtonLink className="success" isExternal href={project.repository}>
                  Contribute on Github
                </ButtonLink>
              </div>
            )}
            {project.website && (
              <div class="cell medium-4">
                <ButtonLink className="success" isExternal href={project.website}>
                  Project website
                </ButtonLink>
              </div>
            )}
          </div>
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
    repository: PropTypes.string,
    website: PropTypes.string
  }).isRequired
};

export default Header;
