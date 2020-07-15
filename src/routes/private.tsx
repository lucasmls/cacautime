import React  from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks';

const PrivateRoute = ({ component: Component, render: Render, ...rest }: any): JSX.Element => {
  const [{ isSignedIn }] = useAuth();

  return (
    <Route
      {...rest}
      render={(properties): JSX.Element => {
        if (isSignedIn) {
          return (
            Boolean(Render) ? <Render {...properties} /> : <Component {...properties} />
          )
        }

        return <Redirect to={{ pathname: '/login', state: { from: properties.location } }} />;
      }}
    />
  );
};

export default PrivateRoute;