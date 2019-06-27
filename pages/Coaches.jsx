import React from 'react';
import Layout from '../components/Layouts/Main';
import Header from '../components/Coaches/Header';
import Info from '../components/Coaches/Info';
import Testimonials from '../components/Coaches/Testimonials';

const Coaches = () => (
  <Layout>
    <Header />
    <Info />
    <Testimonials />
  </Layout>
);

export default Coaches;
