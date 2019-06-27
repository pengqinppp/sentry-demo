import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Sentry from '@sentry/browser';

function App() {
  // Sentry.captureException(new Error("Something broke"));
  // Sentry.captureMessage('Something went wrong');
  Sentry.captureMessage('1.0.8 error');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
