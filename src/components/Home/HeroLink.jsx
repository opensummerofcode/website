import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeroLink = ({ to, name }) => {
  return (
    <div className="small-12 medium-4 large-4 cell">
      <h2 className="h3">
        <Link to={to}>{name}</Link>
      </h2>
    </div>
  );
};

HeroLink.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default HeroLink;
