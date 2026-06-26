import React from 'react';
import NavItem from './NavItem';

/**
 * List of navigation items
 * @param {Object} props
 * @param {Array} props.links - Navigation links configs
 * @param {Function} [props.onItemClick] - Link click callback
 * @param {string} [props.className=""] - Wrapper classes
 */
const NavLinks = ({ links = [], onItemClick, className = '' }) => {
  return (
    <nav className={`flex ${className}`}>
      {links.map((link, idx) => (
        <NavItem
          key={idx}
          label={link.label}
          path={link.path}
          onClick={onItemClick}
        />
      ))}
    </nav>
  );
};

export default NavLinks;
