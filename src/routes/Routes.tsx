import React from 'react';
import { Route, Switch } from 'react-router';

import { Home, Login, NotFound, Register, YouAreLoggedIn } from '../pages';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/logged-in" component={YouAreLoggedIn} />
      <Route path="/unauthorized" component={YouAreLoggedIn} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
