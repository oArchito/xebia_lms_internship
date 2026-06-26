import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import LoginCard from '../components/auth/LoginCard';
import { getLoginData } from '../services/api';
import heroImg from '../assets/hero.png';

/**
 * Login Page with full screen background image and overlay
 */
const Login = () => {
  const loginData = getLoginData();
  const navigate = useNavigate();

  const handleLoginSuccess = (loginDetails) => {
    navigate('/');
  };

  return (
    <div 
      className="min-h-screen w-full relative flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Dark Translucent Purple Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/95 via-purple-900/90 to-[#0B0F19]/95 -z-10" />

      {/* Floating Home Link */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 z-30 flex items-center gap-2 px-4 py-2 border border-purple-800/40 bg-white/10 backdrop-blur-md hover:bg-white/20 text-xs font-poppins font-bold text-white transition-all focus:outline-none rounded-xl"
        aria-label="Back to home"
      >
        <FaChevronLeft className="w-2.5 h-2.5" />
        <span>Home</span>
      </button>

      {/* Centered Login Card wrapper */}
      <div className="w-full max-w-md z-10 flex flex-col items-center gap-6 mt-12 mb-8">
        {/* Integrated Headline above Card */}
        <div className="text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-black font-poppins tracking-wider leading-tight text-white select-none">
            UP YOUR <span className="text-accent-100">SKILLS</span> TO ADVANCE YOUR <span className="text-accent-100">CAREER</span>
          </h2>
          <p className="text-xs text-purple-200 mt-2 font-poppins font-medium">
            Access your interactive workspace and sandboxes
          </p>
        </div>

        {/* Card itself */}
        <div className="w-full bg-white/95 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl overflow-hidden">
          <LoginCard loginData={loginData} onSuccess={handleLoginSuccess} />
        </div>
      </div>
    </div>
  );
};

export default Login;
