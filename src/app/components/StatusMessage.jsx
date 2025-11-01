// src/app/components/StatusMessage.jsx
'use client';

// Shows correct message based on state(Loading, Error, Empty)
export default function StatusMessage({ status, error }) {
  if (status === 'loading') {
    return <p className="status loading">Loading products...</p>;
  }

  if (status === 'error') {
    return (
      <p className="status error">
        Failed to load products{error ? `: ${error}` : ''}.
      </p>
    );
  }

  if (status === 'empty') {
    return <p className="status empty">No products found.</p>;
  }

  return null; // If status is 'success' or not set, show nothing
}