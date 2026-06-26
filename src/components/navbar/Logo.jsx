import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Platform Logo Component with purple coloring matching the mockup
 * @param {Object} props
 * @param {Object} props.logoData - Logo text configurations
 */
const Logo = ({ logoData }) => {
  const { text = 'Xebia', link = '/' } = logoData || {};

  return (
    <Link to={link} className="flex items-center focus:outline-none">
      <span className="text-3xl font-bold tracking-tight text-primary-600 font-poppins">
        {text}
      </span>
    </Link>
  );
};

export default Logo;
//
