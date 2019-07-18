import PropTypes from 'prop-types';

const Gallery = ({ className, children }) => {
  const classNames = ['u-padding-x-large--tb', className].join(' ');
  return (
    <div className={classNames}>
      <div className="grid-x grid-padding-x">{children}</div>
    </div>
  );
};

Gallery.defaultProps = {
  className: ''
};

Gallery.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Gallery;
