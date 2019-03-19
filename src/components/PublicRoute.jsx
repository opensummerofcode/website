import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoute = ({ layout: Layout, sub: SubLayout, component: Component, ...rest }) => {
  const Content = Layout || Component;
  return (
    <Route
      {...rest}
      render={routeProps => <Content component={Component} sub={SubLayout} {...routeProps} />}
    />
  );
};

export default PublicRoute;
