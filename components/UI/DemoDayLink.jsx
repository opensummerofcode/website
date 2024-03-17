import PropTypes from 'prop-types';
import ExternalLink from './ExternalLink';

const DemoDayLink = ({ className, children: text }) => {
  return (
    <ExternalLink
      href="https://www.eventbrite.com/e/open-summer-of-code-2024-demo-day-registration-379659791657"
      className={className}
      target="_blank"
    >
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
