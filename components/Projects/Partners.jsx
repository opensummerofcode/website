import PropTypes from 'prop-types';
import ExternalLink from '../UI/ExternalLink';

const Partners = ({ partners }) => {
  // eslint-disable-next-line react/prop-types
  const renderPartner = ({ id, name, url, logo }) => (
    <div key={id} className="small-6 medium-4 large-3 cell">
      <ExternalLink href={url} className="vertical-align-container">
        <img src={logo} alt={`Logo of ${name}`} />
      </ExternalLink>
      <h3 className="h6">
        <ExternalLink href={url} className="vertical-align-container">
          {name}
        </ExternalLink>
      </h3>
    </div>
  );

  const $partners = partners.map(renderPartner);
  return (
    <div className="grid-x grid-padding-x u-margin-large--tb partner-section project-section">
      <div className="small-10 small-offset-1 medium-3 medium-offset-0 large-3 cell text-left">
        <h3 className="h3 u-margin-large--b">
          Our <br /> partners
        </h3>
      </div>

      <div className="small-10 small-offset-1 medium-9 medium-offset-0 large-9 cell">
        <div className="grid-x grid-padding-x u-margin-large--b partner-section">{$partners}</div>
      </div>
    </div>
  );
};

Partners.propTypes = {
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Partners;
