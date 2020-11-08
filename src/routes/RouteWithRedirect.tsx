import * as React from 'react';
import { ComponentType } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export type RouteWithRedirectProps = RouteProps & {
  component: ComponentType<any>;
  condition: boolean;
  redirectTo: string;
};

export const RouteWithRedirect = ({
  condition,
  redirectTo,
  component: Component,
  ...rest
}: RouteWithRedirectProps) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (condition) {
          return <Redirect to={redirectTo} />;
        }

        return <Component {...props} />;
      }}
    />
  );
};
