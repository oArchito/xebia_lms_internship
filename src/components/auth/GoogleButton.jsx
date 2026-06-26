import React from 'react';
import { FcGoogle } from 'react-icons/fc';

/**
 * Reusable Google Sign In Button with custom sharp corners and thin border matching mockup 1
 * @param {Object} props
 * @param {string} props.label - Button text label
 * @param {Function} [props.onClick] - Click handler
 */
const GoogleButton = ({ label, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 px-5 py-3 border border-black bg-white hover:bg-gray-50 text-black font-poppins text-sm font-medium transition-all duration-150 cursor-pointer focus:outline-none"
    >
      <FcGoogle className="w-5 h-5 flex-shrink-0" />
      <span>{label}</span>
    </button>
  );
};

export default GoogleButton;
//
