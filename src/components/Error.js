import React, { useState } from 'react';

function ErrorBoundary({ children }) {
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  const componentDidCatch = (error, errorInfo) => {
    // Catch errors in any components below and re-render with error message
    setError(error);
    setErrorInfo(errorInfo);
    console.error(error); // Log the error to the console
  };

  if (errorInfo) {
    // Error path
    return (
      <div>
        <h2>Something went wrong.</h2>
        <p>We're working on a fix. Please try again later.</p>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {error && error.toString()}
          <br />
          {errorInfo.componentDidCatch}
        </details>
      </div>
    );
  }
  // Normally, just render children
  return children;
}

export default ErrorBoundary;
