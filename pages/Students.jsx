import React from 'react';
import Layout from '../components/Layouts/Main';
import Header from '../components/Students/Header';
import Info from '../components/Students/Info';
import Testimonials from '../components/Students/Testimonials';

const Students = () => (
  <Layout>
    <Header />
    <Info />
    <Testimonials />
  </Layout>
);

export default Students;
