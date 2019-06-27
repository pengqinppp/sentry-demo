import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';
import ExampleBoundary from './ExampleBoundary'

Sentry.init({
  dsn: "https://e2ea021be8314648829b50b337e3f7c2@sentry.io/1487164",
  environment: 'production',
  release: "1.0.8",
  beforeSend(event, hint) {
    const error = hint.originalException;
    if (error && error.message && error.message.match(/database unavailable/i)) {
      event.fingerprint = ['database-unavailable'];
    }
    return event;
  },
  beforeBreadcrumb(breadcrumb, hint) {
    if (breadcrumb.category === 'ui.click') {
      const { target } = hint.event;
      if (target.ariaLabel) {
        breadcrumb.message = target.ariaLabel;
      }
    }
    return breadcrumb;
  },
});

ReactDOM.render(<ExampleBoundary><App/></ExampleBoundary>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about stervice workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
