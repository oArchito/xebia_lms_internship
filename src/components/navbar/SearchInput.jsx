import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Centered, rectangular search input for the main navigation bar
 * @param {Object} props
 * @param {string} props.placeholder - Input placeholder text
 */
const SearchInput = ({ placeholder = 'Want to learn?' }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/?search=${encodeURIComponent(query.trim())}`);
      setQuery('');
    } else {
      navigate('/');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative hidden md:flex items-center justify-center w-80 lg:w-[450px]"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-400 bg-white font-poppins text-sm text-gray-800 placeholder-gray-500 text-center focus:outline-none focus:ring-1 focus:ring-primary-600 transition-all"
      />
    </form>
  );
};

export default SearchInput;
//
