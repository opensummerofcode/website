import PropTypes from 'prop-types';
import ExternalLink from '../../UI/ExternalLink';

const Partner = ({ partner, className }) => {
  const { logo, semanticName, url } = partner;
  const classNames = ['small-3 medium-2 cell', className].join(' ');
  return (
    <div className={classNames}>
      <ExternalLink href={url} className="vertical-align-container">
        <img src={logo} alt={`Logo of ${semanticName}`} />
      </ExternalLink>
    </div>
  );
};

Partner.defaultProps = {
  className: ''
};

Partner.propTypes = {
  partner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    semanticName: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  className: PropTypes.string
};

export default Partner;
