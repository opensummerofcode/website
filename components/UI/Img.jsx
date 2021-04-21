import PropTypes from 'prop-types';

const Img = ({ src, alt, ...rest }) => {
  return <img src={src} alt={alt} {...rest} />;
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Img;
