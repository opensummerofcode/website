import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ activeTab, label, onClick, style, className }) => {
  function onclickTab() {
    onClick(label);
  }

  let classNames = className;
  if (activeTab === label) {
    classNames = `${className} is-active`;
  }
  const stl = { ...style, cursor: 'pointer' };
  return (
    <li onClick={onclickTab} onKeyDown={onclickTab} className={classNames} style={stl} role="tab">
      {label}
    </li>
  );
};

Tab.defaultProps = {
  style: {},
  className: ''
};

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.instanceOf(Object),
  className: PropTypes.string
};

export default Tab;
