import React from 'react';
import Layout from '../components/Layouts/Main';
import OsocDescription from '../components/Home/OsocDescription';
import Braggings from '../components/Home/Braggings';
import HomeHeader from '../components/Home/HomeHeader';

const HomeContainer = () => (
  <Layout>
    <HomeHeader />
    <OsocDescription />
    <Braggings />
  </Layout>
);

export default HomeContainer;
