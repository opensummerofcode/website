import React from 'react';
import OsocDescription from './OsocDescription';
import Braggings from './Braggings';
import HomeHeader from './HomeHeader';

class HomeContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HomeHeader />
        <OsocDescription />
        <Braggings />
      </React.Fragment>
    );
  }
}

export default HomeContainer;
