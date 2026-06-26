import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable Card component with Framer Motion hover effects
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card contents
 * @param {string} [props.className=""] - Custom classes
 * @param {boolean} [props.hoverEffect=true] - Enable lift-up and shadow transition on hover
 * @param {Function} [props.onClick] - Click handler if card is interactive
 */
const Card = ({ children, className = '', hoverEffect = true, onClick }) => {
  const hoverProps = hoverEffect
    ? {
        whileHover: { y: -8, scale: 1.01, boxShadow: '0px 20px 25px -5px rgba(123, 44, 191, 0.1), 0px 10px 10px -5px rgba(16, 183, 177, 0.04)' },
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }
    : {};

  return (
    <motion.div
      {...hoverProps}
      onClick={onClick}
      className={`bg-white rounded-2xl p-6 shadow-sm border border-purple-100/50 transition-all ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
