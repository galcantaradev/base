import React from 'react';
import { Route, Switch } from 'react-router';

import { Home, NotFound, Register } from '../pages';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/register" component={Register} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
