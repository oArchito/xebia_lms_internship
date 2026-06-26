import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Accordion item styled exactly like Mockup 2
 * @param {Object} props
 * @param {string} props.title - Question title
 * @param {React.ReactNode} props.children - Answer text
 * @param {boolean} props.isOpen - Open state
 * @param {Function} props.onToggle - Toggle click callback
 */
const Accordion = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className={`border-b border-gray-300 last:border-b-0 ${isOpen ? 'bg-[#F2E8FA]' : 'bg-white'}`}>
      {/* Header Button */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left font-poppins font-bold text-gray-800 focus:outline-none transition-colors"
      >
        <span className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
          <span className="text-primary-600 font-extrabold">•</span>
          {title}
        </span>
        <span className="text-primary-600 font-black text-lg select-none">
          {isOpen ? '<' : '+'}
        </span>
      </button>

      {/* Content wrapper */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 text-xs sm:text-sm md:text-base font-poppins text-gray-600 font-light leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
//
