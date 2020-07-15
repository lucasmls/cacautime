import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks';

const PublicRoute = ({ component: Component, ...rest }: any): JSX.Element => {
  const [{ isSignedIn }] = useAuth();

  return (
    <Route
      {...rest}
      render={(properties): JSX.Element => {
        if (!isSignedIn) {
          return <Component {...properties} />;
        }

        return <Redirect to={{ pathname: '/duties', state: { from: properties.location } }} />;
      }}
    />
  );
};

export default PublicRoute;