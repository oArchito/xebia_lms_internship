import React from 'react';

/**
 * Reusable SectionTitle component for standard headings
 * @param {Object} props
 * @param {string} props.title - Main title text
 * @param {string} [props.subtitle=""] - Subtitle helper text
 * @param {boolean} [props.center=false] - Whether to center the text
 * @param {string} [props.className=""] - Additional class overrides
 */
const SectionTitle = ({ title, subtitle = '', center = false, className = '' }) => {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-poppins">
        {title}
        <span className="block h-1 w-20 bg-gradient-to-r from-purple-600 to-teal-400 mt-2 rounded-full duration-300 hover:w-32 transition-all"></span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 font-poppins font-light max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
