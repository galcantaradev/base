import React from 'react';
import { Route, Switch } from 'react-router';

import { Home, NotFound } from '../pages';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
