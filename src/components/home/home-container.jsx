import React from 'react';
import OsocDescription from './osoc-description';
import HomeStatistics from './home-statistics';
import HomeHeader from './home-header';

class HomeContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HomeHeader />
        <OsocDescription />
        <HomeStatistics />
      </React.Fragment>
    );
  }
}

export default HomeContainer;
