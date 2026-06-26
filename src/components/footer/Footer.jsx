import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';
import Container from '../common/Container';
import Logo from '../navbar/Logo';
import { getNavbarData } from '../../services/api';

/**
 * Footer layout component
 */
const Footer = () => {
  const navbarData = getNavbarData();
  const { logo, links } = navbarData || {};

  return (
    <footer className="bg-white border-t border-purple-100/80 mt-auto">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Logo logoData={logo} />
            <p className="text-sm font-poppins text-gray-500 font-light leading-relaxed max-w-sm">
              Xebia Learn is a cutting-edge platform providing developers, DevOps engineers, and cloud architects with state-of-the-art hands-on training labs.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase font-poppins">
              Platform
            </h3>
            <ul className="flex flex-col gap-2.5">
              {links &&
                links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.path}
                      className="text-sm font-poppins text-gray-500 hover:text-purple-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              <li>
                <Link
                  to="/login"
                  className="text-sm font-poppins text-gray-500 hover:text-purple-600 transition-colors"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Contact Info */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase font-poppins">
              Contact
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li className="text-sm font-poppins text-gray-500">
                Email:{' '}
                <a
                  href="mailto:training@xebia.com"
                  className="hover:text-purple-600 transition-colors"
                >
                  training@xebia.com
                </a>
              </li>
              <li className="text-sm font-poppins text-gray-500">
                Support: +1 (800) 555-0199
              </li>
              <li className="text-sm font-poppins text-gray-500 leading-relaxed">
                HQ: Wibautstraat 200, Amsterdam, Netherlands
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-purple-100/50 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-poppins text-gray-400">
            &copy; {new Date().getFullYear()} Xebia Learn. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#terms" className="text-xs font-poppins text-gray-400 hover:text-purple-600 transition-colors">
              Terms of Service
            </a>
            <a href="#privacy" className="text-xs font-poppins text-gray-400 hover:text-purple-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#cookies" className="text-xs font-poppins text-gray-400 hover:text-purple-600 transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
//
