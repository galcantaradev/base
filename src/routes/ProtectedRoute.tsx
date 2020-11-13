import * as React from 'react';
import { ComponentType, useMemo } from 'react';
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

  const authorized = useMemo(() => !!data?.me, [data]); // or role

  if (fetching) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={props => {
        if (!authorized) {
          return <Redirect to="/unauthorized" />;
        }

        return <Component {...props} />;
      }}
    />
  );
};
