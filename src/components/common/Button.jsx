import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable Button component with Framer Motion hover effects
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button label / element
 * @param {string} [props.variant="primary"] - Visual style ("primary", "secondary", "outline", "accent", "danger")
 * @param {string} [props.size="md"] - Size ("sm", "md", "lg")
 * @param {boolean} [props.isLoading=false] - Display loading spinner
 * @param {boolean} [props.disabled=false] - Disable button actions
 * @param {string} [props.type="button"] - HTML button type attribute
 * @param {Function} [props.onClick] - Click event handler
 * @param {string} [props.className=""] - Custom classes
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  type = 'button',
  onClick,
  className = '',
}) => {
  const baseStyle =
    'inline-flex items-center justify-center font-poppins font-medium rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const variants = {
    primary:
      'bg-gradient-to-r from-purple-700 to-purple-500 text-white shadow-md shadow-purple-600/20 hover:from-purple-800 hover:to-purple-600 border border-transparent',
    secondary:
      'bg-purple-50 text-purple-700 hover:bg-purple-100 border border-transparent',
    outline:
      'bg-transparent text-purple-700 border border-purple-300 hover:bg-purple-50',
    accent:
      'bg-gradient-to-r from-teal-500 to-teal-400 text-white shadow-md shadow-teal-500/20 hover:from-teal-600 hover:to-teal-500 border border-transparent',
    danger:
      'bg-red-600 text-white hover:bg-red-700 border border-transparent',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  return (
    <motion.button
      whileHover={!disabled && !isLoading ? { scale: 1.03 } : {}}
      whileTap={!disabled && !isLoading ? { scale: 0.98 } : {}}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0/0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default Button;
