import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Platform Logo Component with purple coloring matching the mockup
 * @param {Object} props
 * @param {Object} props.logoData - Logo text configurations
 */
const Logo = ({ logoData }) => {
  const { text = 'Xebia', accentText = '', link = '/' } = logoData || {};

  return (
    <Link to={link} className="flex items-center focus:outline-none select-none">
      <span className="text-3xl font-black tracking-tight text-primary-600 font-poppins">
        {text}
        {accentText && (
          <span className="font-light text-accent-500 ml-1">{accentText}</span>
        )}
      </span>
    </Link>
  );
};

export default Logo;
//
