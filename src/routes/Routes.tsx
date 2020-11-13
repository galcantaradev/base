import * as React from 'react';
import { lazy, Suspense, useMemo } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import { CentralizedContainer, Spinner } from '../components';

import { useMeQuery } from '../generated/graphql';
import { ProtectedRoute, RouteWithRedirect } from './';

const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Login/Login'));
const ChangePassword = lazy(() => import('../pages/Password/ChangePassword'));
const ForgotPassword = lazy(() => import('../pages/Password/ForgotPassword'));
const Profile = lazy(() => import('../pages/Profile/Profile'));
const Register = lazy(() => import('../pages/Register/Register'));
const NotFound = lazy(() => import('../pages/Error/NotFound'));
const Unauthorized = lazy(() => import('../pages/Error/Unauthorized'));

const Loading = () => (
  <CentralizedContainer>
    <Spinner />
  </CentralizedContainer>
);

export const Routes = () => {
  const history = useHistory();
  const [{ data }] = useMeQuery();

  const logged = useMemo(() => !!data?.me, [data]);

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" component={Home} exact />
        <RouteWithRedirect
          path="/login"
          component={Login}
          redirectTo="/"
          condition={history.location.pathname === '/login' && logged}
        />
        <RouteWithRedirect
          path="/register"
          component={Register}
          redirectTo="/"
          condition={history.location.pathname === '/register' && logged}
        />
        <ProtectedRoute path="/profile" component={Profile} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/change-password/:token" component={ChangePassword} />
        <Route path="/unauthorized" component={Unauthorized} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  );
};
