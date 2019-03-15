import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ activeTab, label, onClick, style, className }) => {
  function onclickTab(e) {
    e.preventDefault();
    onClick(label);
  }

  let classNames = className;
  if (activeTab === label) {
    classNames = `${className} is-active`;
  }
  const stl = { ...style, cursor: 'pointer' };
  return (
    <li onClick={onclickTab} onKeyDown={onclickTab} className={classNames} style={stl} role="tab">
      <h2>
        <a href={`#${label}`}>{label}</a>
      </h2>
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
