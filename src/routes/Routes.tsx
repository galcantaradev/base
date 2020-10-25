import React from 'react';
import { Route, Switch, useHistory } from 'react-router';

import { useMeQuery } from '../generated/graphql';
import {
  ChangePassword,
  ForgotPassword,
  Home,
  Login,
  NotFound,
  Profile,
  Register,
  Unauthorized,
  YouAreLoggedIn
} from '../pages';
import { ProtectedRoute, RouteWithRedirect } from './';

export const Routes = () => {
  const history = useHistory();
  const [{ data }] = useMeQuery();

  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <RouteWithRedirect
        path="/login"
        component={Login}
        redirectTo="/logged-in"
        condition={history.location.pathname === '/login' && !!data?.me}
      />
      <RouteWithRedirect
        path="/register"
        component={Register}
        redirectTo="/logged-in"
        condition={history.location.pathname === '/register' && !!data?.me}
      />
      <ProtectedRoute path="/profile" component={Profile} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/change-password/:token" component={ChangePassword} />
      <Route path="/logged-in" component={YouAreLoggedIn} />
      <Route path="/unauthorized" component={Unauthorized} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
