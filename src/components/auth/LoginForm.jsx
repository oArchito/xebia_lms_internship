import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

/**
 * Controlled LoginForm matching the exact screenshot layout
 * @param {Object} props
 * @param {Object} props.fields - fields config
 * @param {string} props.buttonLabel - submit label
 * @param {Function} props.onSubmit - submit callback
 */
const LoginForm = ({ fields = {}, buttonLabel = 'Login', onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (fieldName, val) => {
    setFormData((prev) => ({ ...prev, [fieldName]: val }));
    if (errors[fieldName]) {
      setErrors((prev) => ({ ...prev, [fieldName]: '' }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      tempErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      tempErrors.password = 'Password is required';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (onSubmit) {
        onSubmit(formData);
      }
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-5">
      {/* Simple outline fields */}
      {Object.entries(fields).map(([fieldName, config]) => (
        <Input
          key={fieldName}
          id={fieldName}
          label={config.label}
          type={config.type}
          placeholder={config.placeholder}
          value={formData[fieldName]}
          onChange={(e) => handleChange(fieldName, e.target.value)}
          error={errors[fieldName]}
          required
        />
      ))}

      {/* Solid purple, rounded-xl submit button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3.5 mt-2 bg-primary-600 hover:bg-primary-700 text-white font-poppins font-bold text-sm tracking-wider uppercase rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Processing...
          </>
        ) : (
          buttonLabel
        )}
      </button>
    </form>
  );
};

export default LoginForm;
//
