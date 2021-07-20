import PropTypes from 'prop-types';
import ExternalLink from '../UI/ExternalLink';

const DemoDayLink = ({ className, children: text }) => {
  return (
    <ExternalLink href="https://demodayosoc21.eventbrite.be/" className={className} target="_blank">
      {text}
    </ExternalLink>
  );
};

DemoDayLink.defaultProps = {
  className: '',
};

DemoDayLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default DemoDayLink;
