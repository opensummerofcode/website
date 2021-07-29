import PropTypes from 'prop-types';
import ExternalLink from './ExternalLink';

const DemoDayLink = ({ className, children: text }) => {
  return (
    // href="https://demodayosoc21.eventbrite.be/"
    <ExternalLink href="https://youtu.be/mDbn9Iz0zPI" className={className} target="_blank">
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
