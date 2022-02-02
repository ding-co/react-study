import React, { Component } from 'react';
import ErrorScreen from './ErrorScreen';

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children, Fallback } = this.props;
    if (error && !Fallback) return <ErrorScreen error={error} />;
    if (error) return <Fallback error={error} />;
    return children;
  }
}
