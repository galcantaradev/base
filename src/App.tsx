import { createBrowserHistory } from 'history';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { ErrorBoundary } from './pages';
import { BaseThemeProvider } from './providers';
import { Routes } from './routes';
import rootReducer from './state';
import { defaultLocale, locale } from './utils';

const middlewares = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, middlewares);

const App = () => {
  const history = createBrowserHistory();

  return (
    <Provider store={store}>
      <IntlProvider locale={locale} defaultLocale={defaultLocale}>
        <BaseThemeProvider>
          <Router history={history}>
            <ErrorBoundary>
              <Routes />
            </ErrorBoundary>
          </Router>
        </BaseThemeProvider>
      </IntlProvider>
    </Provider>
  );
};

export default App;
