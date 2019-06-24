import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';

ReactDOM.render(<App />, document.getElementById('root'));

Sentry.init({
  dsn: "https://e2ea021be8314648829b50b337e3f7c2@sentry.io/1487164",
  environment: 'staging',
  release: "sentry-demo@1.0.0"
});

Sentry.captureException(new Error("Something broke"));
Sentry.captureMessage('Something went wrong');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about stervice workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
