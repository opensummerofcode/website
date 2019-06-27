import React from 'react';
import PropTypes from 'prop-types';
import Meta from '../Meta';
import Navigation from '../Common/Navigation';
import Footer from '../Common/Footer';

import '../../assets/scss/app.scss';

const MainLayout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;
