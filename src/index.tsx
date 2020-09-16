import './assets/style/style.css';
import './icons/IconsLibrary';

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

const rootElement = (
  <StrictMode>
    <App />
  </StrictMode>
);

const container = document.getElementById('root');

ReactDOM.render(rootElement, container);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
