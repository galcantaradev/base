import * as React from 'react';
import { lazy, Suspense } from 'react';
import { Route, Switch, useHistory } from 'react-router';

import { useMeQuery } from '../generated/graphql';
import { LoadingRoutes, ProtectedRoute, RouteWithRedirect } from './';

const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Login/Login'));
const ChangePassword = lazy(() => import('../pages/Password/ChangePassword'));
const ForgotPassword = lazy(() => import('../pages/Password/ForgotPassword'));
const Profile = lazy(() => import('../pages/Profile/Profile'));
const Register = lazy(() => import('../pages/Register/Register'));
const NotFound = lazy(() => import('../pages/Error/NotFound'));
const Unauthorized = lazy(() => import('../pages/Error/Unauthorized'));
const YouAreLoggedIn = lazy(() => import('../pages/Error/YouAreLoggedIn'));

export const Routes = () => {
  const history = useHistory();
  const [{ data }] = useMeQuery();

  return (
    <Suspense fallback={<LoadingRoutes />}>
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
    </Suspense>
  );
};
