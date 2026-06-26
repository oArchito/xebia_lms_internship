import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Container from '../components/common/Container';
import ContactForm from '../components/contact/ContactForm';
import { getContactData } from '../services/api';
import Card from '../components/common/Card';

/**
 * Contact page styled exactly like Mockup 3
 */
const Contact = () => {
  const contactData = getContactData();
  const { title, subtitle, submitButton, fields, successMessage, info } = contactData || {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 bg-[#FAF7FF] min-h-screen relative overflow-hidden"
    >
      {/* Decorative background mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#e9d5ff_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      <Container>
        {/* Mockup Title Layout */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-poppins text-gray-900 tracking-wider">
            CONTACT <span className="text-purple-800">US</span>
          </h1>
          <p className="mt-4 text-sm text-gray-500 font-poppins font-medium max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start max-w-6xl mx-auto relative z-10">
          
          {/* Left Column: Contact Form Card (Columns 1-7) */}
          <div className="lg:col-span-7 relative">
            {/* Overlapping purple background box at the bottom right */}
            <div className="absolute right-[-15px] bottom-[-20px] w-[95%] h-[180px] bg-[#9C85BF]/40 -z-10" />

            {/* Main White Contact Card */}
            <div className="w-full bg-white border border-gray-400 p-8 sm:p-10 shadow-md rounded-none">
              <ContactForm
                formDataConfig={fields}
                submitLabel={submitButton?.label}
                successText={successMessage}
              />
            </div>
          </div>

          {/* Right Column: Office Information (Columns 8-12) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {info && (
              <Card hoverEffect={false} className="border border-purple-200/60 p-8 bg-white/80 backdrop-blur-sm rounded-none">
                <h3 className="text-xl font-bold font-poppins text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-xs font-poppins text-gray-500 font-medium leading-relaxed mb-6">
                  {info.description}
                </p>

                {/* Email and Phone */}
                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex items-center gap-3.5">
                    <span className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-primary-600 border border-purple-100">
                      <FaEnvelope className="w-3.5 h-3.5" />
                    </span>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-poppins">Email Support</p>
                      <a href={`mailto:${info.email}`} className="text-sm font-bold text-gray-800 hover:text-primary-600 font-poppins transition-colors">
                        {info.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <span className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-primary-600 border border-purple-100">
                      <FaPhoneAlt className="w-3.5 h-3.5" />
                    </span>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-poppins">Call Support</p>
                      <p className="text-sm font-bold text-gray-800 font-poppins">
                        {info.phone}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-purple-50/60 my-6"></div>

                {/* Global Offices */}
                <h4 className="text-xs font-black uppercase text-purple-700 tracking-widest mb-4 font-poppins">
                  Our Global Locations
                </h4>
                <div className="flex flex-col gap-4">
                  {info.offices && info.offices.map((office, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="text-accent-500 mt-1 shrink-0">
                        <FaMapMarkerAlt className="w-3 h-3" />
                      </span>
                      <div>
                        <p className="text-xs font-bold text-gray-800 font-poppins leading-none mb-1">{office.city}</p>
                        <p className="text-[11px] text-gray-500 font-poppins font-light leading-normal">{office.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Micro FAQ Prompt */}
            <div className="p-6 bg-purple-950/5 border border-purple-200/30 rounded-none flex flex-col gap-2">
              <p className="text-xs font-bold text-gray-900 font-poppins">Looking for immediate answers?</p>
              <p className="text-xs text-gray-500 font-poppins leading-relaxed">
                Check our Frequently Asked Questions page for details on sandbox limits, billing, and certificates.
              </p>
              <a href="/faq" className="text-xs font-black text-purple-700 hover:text-purple-800 uppercase tracking-wider mt-1 font-poppins">
                Go to FAQ &rarr;
              </a>
            </div>

          </div>

        </div>
      </Container>
    </motion.div>
  );
};

export default Contact;
