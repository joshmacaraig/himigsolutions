import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-20 px-4 text-center">
      <h1 className="text-6xl font-serif font-bold text-primary mb-6">404</h1>
      <h2 className="text-2xl font-medium mb-4">Page Not Found</h2>
      <p className="text-neutral-dark/80 max-w-md mb-8">
        The invitation you're looking for doesn't exist or may have been removed.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button to="/" variant="primary">
          Back to Home
        </Button>
        <Button to="/portfolio" variant="outline">
          View Our Portfolio
        </Button>
      </div>
    </div>
  );
};

export default NotFound;