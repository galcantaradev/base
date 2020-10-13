import { createBrowserHistory } from 'history';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Router } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'urql';

import { NavBar } from './components';
import { ErrorBoundary } from './pages';
import { Routes } from './routes';
import { themeState } from './state/atoms';
import { urqlClient } from './urqlClient';
import { defaultLocale, locale } from './utils';

const history = createBrowserHistory();

const App = () => {
  const theme = useRecoilValue(themeState);

  return (
    <Provider value={urqlClient}>
      <IntlProvider locale={locale} defaultLocale={defaultLocale}>
        <ThemeProvider theme={theme.colors}>
          <Router history={history}>
            <ErrorBoundary>
              <NavBar />
              <Routes />
            </ErrorBoundary>
          </Router>
        </ThemeProvider>
      </IntlProvider>
    </Provider>
  );
};

export default App;
