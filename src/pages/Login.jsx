import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import LoginCard from '../components/auth/LoginCard';
import HeroImage from '../components/hero/HeroImage';
import { getLoginData } from '../services/api';

/**
 * Login Page matching Mockup 1 split screen
 */
const Login = () => {
  const loginData = getLoginData();
  const navigate = useNavigate();

  const handleLoginSuccess = (loginDetails) => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#FAF7FF] pt-16 lg:pt-0">
      {/* Floating Home Link */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-20 left-4 sm:left-8 z-30 flex items-center gap-2 px-4 py-2 border border-gray-300 bg-white hover:bg-gray-50 text-sm font-poppins font-bold text-gray-700 transition-all focus:outline-none"
        aria-label="Back to home"
      >
        <FaChevronLeft className="w-3 h-3" />
        <span>Home</span>
      </button>

      {/* Left Screen: Light Lavender Panel with Laptop and Alternating Text */}
      <div className="lg:w-1/2 relative bg-[#E2D5FC] flex flex-col justify-between px-8 py-16 sm:px-16 lg:px-20 min-h-[450px] lg:min-h-screen">
        {/* Title Block */}
        <div className="mt-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-poppins leading-[1.15] tracking-wide text-white select-none">
            UP YOUR <span className="text-primary-600">SKILLS</span> TO <span className="text-primary-600">ADVANCE</span> YOUR <span className="text-primary-600">CAREER PATH</span>
          </h1>
        </div>

        {/* Laptop Illustration */}
        <div className="w-full max-w-md mx-auto mt-6">
          <HeroImage />
        </div>
      </div>

      {/* Right Screen: Form Panel */}
      <div className="lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-20 relative bg-white">
        <div className="w-full max-w-md">
          <LoginCard loginData={loginData} onSuccess={handleLoginSuccess} />
        </div>
      </div>
    </div>
  );
};

export default Login;
//
