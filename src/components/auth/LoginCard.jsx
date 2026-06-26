import React from 'react';
import Card from '../common/Card';
import GoogleButton from './GoogleButton';
import LoginForm from './LoginForm';

/**
 * LoginCard matching mockup 1 layout
 * @param {Object} props
 * @param {Object} props.loginData - Full login.json data
 * @param {Function} props.onSuccess - Success login callback
 */
const LoginCard = ({ loginData, onSuccess }) => {
  const {
    title,
    subtitle,
    googleButton,
    dividerText,
    fields,
    loginButton,
    signUpPrompt,
    signUpLinkText,
  } = loginData || {};

  const handleGoogleSignIn = () => {
    alert('Google login successful!');
    if (onSuccess) onSuccess({ provider: 'google' });
  };

  const handleFormSubmit = (data) => {
    alert(`Email login successful for: ${data.email}`);
    if (onSuccess) onSuccess({ provider: 'email', data });
  };

  return (
    <Card
      hoverEffect={false}
      className="w-full max-w-md p-8 sm:p-10 border border-gray-100 shadow-lg rounded-none"
    >
      {/* Centered Xebia Logo */}
      <div className="flex justify-center mb-4">
        <span className="text-3xl font-black tracking-tight text-primary-600 font-poppins">
          Xebia
        </span>
      </div>

      {/* Title & Subtitle */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-poppins tracking-wide">
          {title}
        </h2>
        <p className="mt-1 text-sm text-gray-400 font-poppins font-medium">
          {subtitle}
        </p>
      </div>

      {/* Login Form */}
      <LoginForm
        fields={fields}
        buttonLabel={loginButton?.label}
        onSubmit={handleFormSubmit}
      />

      {/* Divider */}
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="flex-shrink mx-4 text-sm font-poppins text-black font-semibold uppercase">
          {dividerText}
        </span>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      {/* Google Button */}
      {googleButton && (
        <GoogleButton
          label={googleButton.label}
          onClick={handleGoogleSignIn}
        />
      )}

      {/* Signup Prompt footer */}
      {signUpPrompt && (
        <div className="mt-8 text-center text-sm font-poppins text-gray-600">
          <span>{signUpPrompt} </span>
          <a
            href="#signup"
            className="font-bold text-primary-600 hover:text-primary-700 transition-colors"
          >
            {signUpLinkText}
          </a>
        </div>
      )}
    </Card>
  );
};

export default LoginCard;
//
