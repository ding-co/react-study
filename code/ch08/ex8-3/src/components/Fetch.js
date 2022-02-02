import React from 'react';
import { useFetch } from '../hooks/useFetch';

export default function Fetch({
  uri,
  renderSuccess,
  loadingFallback = <p>Loading...</p>,
  renderError = (error) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}) {
  const { loading, data, error } = useFetch(uri);
  if (loading) return loadingFallback;
  if (error) return renderError(error);
  if (data) return renderSuccess({ data });
}
