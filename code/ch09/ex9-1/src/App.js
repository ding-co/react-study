import React from 'react';
import SiteLayout from './layouts/SiteLayout';
import Callout from './components/Callout';
import BreakThings from './components/BreakThings';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorScreen from './components/ErrorScreen';

function App() {
  return (
    <SiteLayout
      menu={
        <ErrorBoundary Fallback={ErrorScreen}>
          <p>Site Layout Menu</p>
        </ErrorBoundary>
      }
    >
      <ErrorBoundary Fallback={ErrorScreen}>
        <Callout>Callout</Callout>
      </ErrorBoundary>
      <ErrorBoundary Fallback={ErrorScreen}>
        <h1>Contents</h1>
        <BreakThings />
        <p>This is the main part of the example layout</p>
      </ErrorBoundary>
    </SiteLayout>
  );
}

export default App;
