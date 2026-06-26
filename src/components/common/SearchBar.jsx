import React from 'react';
import { FaSearch } from 'react-icons/fa';

/**
 * SearchBar matching mockup 2 (with attached purple square button)
 * @param {Object} props
 * @param {string} props.value - input text
 * @param {Function} props.onChange - onChange callback
 * @param {string} [props.placeholder="Search your question..."] - placeholder
 */
const SearchBar = ({ value, onChange, placeholder = 'Search your question...' }) => {
  return (
    <div className="flex w-full max-w-2xl">
      {/* Left Input Field */}
      <div className="relative flex-grow">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <FaSearch className="w-4 h-4" />
        </span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 bg-white border border-gray-400 font-poppins text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary-600"
        />
      </div>

      {/* Right Search Button */}
      <button
        type="button"
        className="px-5 bg-primary-600 hover:bg-primary-700 text-white border border-l-0 border-gray-400 flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Search"
      >
        <FaSearch className="w-4 h-4" />
      </button>
    </div>
  );
};

export default SearchBar;
//
