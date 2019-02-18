import React from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';
import Team from './Team';
import Partners from './Partners';

const Project = () => {
  return (
    <React.Fragment>
      <Header />
      <Team />
      <Partners />
    </React.Fragment>
  );
};

/* Project.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}; */
export default Project;
