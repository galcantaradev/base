import { createBrowserHistory } from 'history';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Router } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { ErrorBoundary } from './pages';
import { Routes } from './routes';
import { themeState } from './state/atoms/themeState';
import { defaultLocale, locale } from './utils';

const App = () => {
  const history = createBrowserHistory();
  const theme = useRecoilValue(themeState);

  return (
    <IntlProvider locale={locale} defaultLocale={defaultLocale}>
      <ThemeProvider theme={theme.colors}>
        <Router history={history}>
          <ErrorBoundary>
            <Routes />
          </ErrorBoundary>
        </Router>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
