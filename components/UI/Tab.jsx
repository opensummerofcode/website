import PropTypes from 'prop-types';
import Link from 'next/link';

const Tab = ({ href, className, children, ...rest }) => {
  const classNames = ['button link lowercase u-margin--right', className].join(' ');
  return (
    <Link href={href}>
      <a {...rest} className={classNames}>
        {children}
      </a>
    </Link>
  );
};

Tab.defaultProps = {
  className: '',
};

Tab.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Tab;
