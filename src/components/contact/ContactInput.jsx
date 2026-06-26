import React from 'react';

/**
 * Custom Input component designed specifically for Contact Form layouts
 * @param {Object} props
 * @param {string} props.id - element identifier
 * @param {string} props.label - element text label
 * @param {string} [props.type="text"] - text, email, tel, textarea
 * @param {string} [props.placeholder=""] - placeholder text
 * @param {string} props.value - controlled value
 * @param {Function} props.onChange - value change event handler
 * @param {string} [props.error=""] - validation error message
 * @param {boolean} [props.required=false] - is field mandatory
 */
const ContactInput = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error = '',
  required = false,
  ...rest
}) => {
  const inputClass = `w-full px-4 py-3 rounded-xl border font-poppins text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
    error
      ? 'border-red-400 focus:ring-red-400 focus:border-red-400 bg-red-50/10'
      : 'border-purple-100 hover:border-purple-200 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm'
  }`;

  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={id}
        className="mb-1.5 text-xs font-bold text-gray-700 tracking-wide uppercase font-poppins"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows="5"
          className={`${inputClass} resize-none`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          required={required}
          {...rest}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={inputClass}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          required={required}
          {...rest}
        />
      )}

      {error && (
        <span
          id={`${id}-error`}
          className="mt-1 text-xs font-semibold text-red-500 font-poppins"
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default ContactInput;
//
