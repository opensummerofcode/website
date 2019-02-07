import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoute = ({ layout: Layout, component: Component, ...rest }) => {
  const Content = Layout || Component;
  return (
    <Route
      {...rest}
      render={routeProps => <Content component={Component} {...rest} />}
    />
  );
};

export default PublicRoute;
