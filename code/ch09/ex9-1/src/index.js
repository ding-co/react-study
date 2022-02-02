import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import ErrorBoundary from './components/ErrorBoundary';
// import ErrorScreen from './components/ErrorScreen';

ReactDOM.render(
  <React.StrictMode>
    {/* <ErrorBoundary Fallback={ErrorScreen}> */}
    <App />
    {/* </ErrorBoundary> */}
  </React.StrictMode>,
  document.getElementById('root')
);
