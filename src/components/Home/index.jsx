import React from 'react';
import OsocDescription from './OsocDescription';
import Braggings from './Braggings';
import HomeHeader from './HomeHeader';

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
