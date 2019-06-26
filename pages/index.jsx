import React from 'react';
import OsocDescription from '../components/Home/OsocDescription';
import Braggings from '../components/Home/Braggings';
import HomeHeader from '../components/Home/HomeHeader';

const HomeContainer = () => {
  return (
    <React.Fragment>
      <HomeHeader />
      <OsocDescription />
      <Braggings />
    </React.Fragment>
  );
};

export default HomeContainer;
