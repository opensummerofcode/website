import React from 'react';
import PropTypes from 'prop-types';
import Meta from '../Meta';
import Navigation from '../Common/Navigation';
import Footer from '../Common/Footer';

const MainLayout = ({ children }) => (
  <>
    <Meta />
    <Navigation />
    {children}
    <Footer />
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;
