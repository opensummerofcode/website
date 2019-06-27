import React from 'react';
import Layout from '../components/Layouts/Main';
import Header from '../components/Coaches/Header';
import Info from '../components/Coaches/Info';
import Testimonials from '../components/Coaches/Testimonials';
import FeaturedProjects from '../components/Projects/FeaturedProjects';

const Coaches = () => (
  <Layout>
    <Header />
    <Info />
    <Testimonials />
    <FeaturedProjects />
  </Layout>
);

export default Coaches;
