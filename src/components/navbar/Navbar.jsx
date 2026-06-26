import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import NavLinks from './NavLinks';
import SearchInput from './SearchInput';
import Button from '../common/Button';
import Container from '../common/Container';
import { getNavbarData } from '../../services/api';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const data = getNavbarData();
  const { logo, searchPlaceholder, links, loginButton } = data || {};

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-purple-100 py-4 shadow-sm">
      <Container>
        <div className="flex items-center justify-between gap-4">
          {/* Left: Logo */}
          <Logo logoData={logo} />

          {/* Center: Search Input */}
          <div className="flex-grow flex justify-center">
            <SearchInput placeholder={searchPlaceholder} />
          </div>

          {/* Right: Links & Login CTA */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks
              links={links}
              className="flex items-center gap-6"
            />

            {loginButton && (
              <button
                onClick={() => navigate(loginButton.path)}
                className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-poppins font-bold text-sm tracking-wider uppercase transition-all duration-200"
              >
                {loginButton.label}
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden text-gray-700 hover:text-primary-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden w-full bg-white border-b border-primary-100 overflow-hidden shadow-md"
          >
            <Container className="py-6 flex flex-col gap-5">
              {/* Mobile links */}
              <div className="flex flex-col gap-4 pl-2">
                {links &&
                  links.map((link, idx) => (
                    <NavLinks
                      key={idx}
                      links={[link]}
                      onItemClick={() => setIsOpen(false)}
                    />
                  ))}
              </div>

              {/* Mobile CTA */}
              {loginButton && (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate(loginButton.path);
                  }}
                  className="w-full py-3 bg-primary-600 text-white font-poppins font-bold text-sm tracking-wider uppercase"
                >
                  {loginButton.label}
                </button>
              )}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
//
