import { createBrowserHistory } from 'history';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Router } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { Provider, createClient } from 'urql';

import { ErrorBoundary } from './pages';
import { Routes } from './routes';
import { themeState } from './state/atoms/themeState';
import { defaultLocale, locale } from './utils';

const client = createClient({
  fetchOptions: {
    credentials: 'include'
  },
  url: 'http://localhost:4000/graphql'
});
const history = createBrowserHistory();

const App = () => {
  const theme = useRecoilValue(themeState);

  return (
    <Provider value={client}>
      <IntlProvider locale={locale} defaultLocale={defaultLocale}>
        <ThemeProvider theme={theme.colors}>
          <Router history={history}>
            <ErrorBoundary>
              <Routes />
            </ErrorBoundary>
          </Router>
        </ThemeProvider>
      </IntlProvider>
    </Provider>
  );
};

export default App;
