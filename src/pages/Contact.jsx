import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import ContactForm from '../components/contact/ContactForm';
import { getContactData } from '../services/api';

/**
 * Contact page styled exactly like Mockup 3
 */
const Contact = () => {
  const contactData = getContactData();
  const { title, subtitle, submitButton, fields } = contactData || {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 bg-[#FAF7FF] min-h-screen relative overflow-hidden"
    >
      <Container>
        {/* Mockup Title Layout */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black font-poppins text-gray-900 tracking-wider">
            CONTACT <span className="text-purple-800">US</span>
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-gray-500 font-poppins font-semibold">
            {subtitle}
          </p>
        </div>

        {/* Card and Purple Overlap Container */}
        <div className="relative w-full max-w-4xl mx-auto mt-12 mb-10">
          {/* Overlapping purple background box at the bottom right */}
          <div className="absolute right-[-20px] bottom-[-25px] w-[95%] h-[200px] bg-[#9C85BF]/60 -z-10" />

          {/* Main White Contact Card */}
          <div className="w-full bg-white border border-gray-400 p-8 sm:p-12 shadow-sm rounded-none">
            <ContactForm
              formDataConfig={fields}
              submitLabel={submitButton?.label}
            />
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Contact;
//
