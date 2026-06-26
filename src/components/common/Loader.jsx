import React from 'react';

/**
 * Reusable Loader spinner component
 * @param {Object} props
 * @param {string} [props.size="medium"] - size of loader (small, medium, large)
 * @param {string} [props.className=""] - Additional custom classes
 */
const Loader = ({ size = 'medium', className = '' }) => {
  const sizeClasses = {
    small: 'w-6 h-6 border-2',
    medium: 'w-12 h-12 border-4',
    large: 'w-16 h-16 border-4',
  };

  return (
    <div className={`flex justify-center items-center py-8 ${className}`}>
      <div
        className={`${sizeClasses[size]} border-t-purple-600 border-purple-200 rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
