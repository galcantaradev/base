import React, { ComponentType, useMemo } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

import { useMeQuery } from '../generated/graphql';

export type ProtectedRouteProps = RouteProps & {
  component: ComponentType<any>;
};

export const ProtectedRoute = ({
  component: Component,
  ...rest
}: ProtectedRouteProps) => {
  const [{ fetching, data }] = useMeQuery();

  const isAuthenticated = useMemo(() => !!data?.me, [data]);

  if (fetching) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuthenticated) {
          return <Redirect to="/login" />;
        }

        return <Component {...props} />;
      }}
    />
  );
};
