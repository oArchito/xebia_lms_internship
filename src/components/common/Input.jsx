import React from 'react';

/**
 * Reusable input and textarea component supporting 'nested' and 'outline' layouts
 * @param {Object} props
 * @param {string} props.id - input ID for accessibility
 * @param {string} props.label - input label text
 * @param {string} [props.type="text"] - text, email, password, tel, textarea
 * @param {string} [props.placeholder=""] - input placeholder
 * @param {string} props.value - controlled value
 * @param {Function} props.onChange - value change event handler
 * @param {string} [props.error=""] - error text
 * @param {boolean} [props.required=false] - is field mandatory
 * @param {string} [props.variant="outline"] - style variant ("outline" or "nested")
 */
const Input = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error = '',
  required = false,
  variant = 'outline',
  ...rest
}) => {
  const isTextarea = type === 'textarea';

  if (variant === 'nested') {
    // Nested label style (gray box, label inside above text)
    return (
      <div className="flex flex-col w-full mb-4">
        <div
          className={`flex flex-col w-full px-4 py-2 bg-gray-100 border-none transition-all ${
            error
              ? 'bg-red-50/50 border-b-2 border-red-500'
              : 'focus-within:bg-gray-100/80 focus-within:ring-1 focus-within:ring-purple-700'
          }`}
        >
          <label
            htmlFor={id}
            className="text-[10px] font-semibold text-gray-500 font-poppins lowercase tracking-wider text-left mb-0.5"
          >
            {label}
            {required && <span className="text-red-500 ml-0.5">*</span>}
          </label>
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full bg-transparent font-poppins text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            required={required}
            {...rest}
          />
        </div>
        {error && (
          <span
            id={`${id}-error`}
            className="mt-1 text-xs font-semibold text-red-500 text-left font-poppins"
          >
            {error}
          </span>
        )}
      </div>
    );
  }

  // Default Outline style (label above, input with border)
  const inputClass = `w-full px-4 py-3 border font-poppins text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-all ${
    error
      ? 'border-red-400 focus:ring-red-400 focus:border-red-400 bg-red-50/10'
      : 'border-gray-400 hover:border-gray-500 focus:ring-1 focus:ring-purple-700 focus:border-transparent bg-white shadow-sm'
  }`;

  return (
    <div className="flex flex-col w-full mb-4 text-left">
      <label
        htmlFor={id}
        className="mb-1.5 text-xs font-bold text-gray-700 tracking-wide uppercase font-poppins"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {isTextarea ? (
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

export default Input;
//
