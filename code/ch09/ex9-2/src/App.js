import React, { useState, lazy, Suspense } from 'react';
import Agreement from './components/Agreement';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import GridLoader from 'react-spinners/GridLoader';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorScreen from './components/ErrorScreen';
import Status from './components/Status';

const Main = lazy(() => import('./components/Main'));

function App() {
  const [agree, setAgree] = useState(false);

  if (!agree) return <Agreement onAgree={() => setAgree(true)} />;

  // return (
  //   <ErrorBoundary Fallback={ErrorScreen}>
  //     <Suspense fallback={<ClimbingBoxLoader />}>
  //       <Main />
  //     </Suspense>
  //   </ErrorBoundary>
  // );

  return (
    <Suspense fallback={<GridLoader />}>
      <ErrorBoundary>
        <Status />
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
