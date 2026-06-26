import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Single navigation link with clean, simple text-underline active styling
 * @param {Object} props
 * @param {string} props.label - Link name
 * @param {string} props.path - Route path
 * @param {Function} [props.onClick] - Click callback
 */
const NavItem = ({ label, path, onClick }) => {
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        `text-sm font-poppins font-semibold transition-all duration-150 pb-1 focus:outline-none ${
          isActive
            ? 'text-primary-600 border-b-2 border-primary-600'
            : 'text-gray-700 hover:text-primary-600'
        }`
      }
    >
      {label}
    </NavLink>
  );
};

export default NavItem;
//
