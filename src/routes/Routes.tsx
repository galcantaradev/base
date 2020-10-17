import React from 'react';
import { Route, Switch } from 'react-router';

import {
  ChangePassword,
  ForgotPassword,
  Home,
  Login,
  NotFound,
  Profile,
  Register,
  YouAreLoggedIn
} from '../pages';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/change-password/:token" component={ChangePassword} />
      <Route path="/profile" component={Profile} />
      <Route path="/logged-in" component={YouAreLoggedIn} />
      <Route path="/unauthorized" component={YouAreLoggedIn} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
