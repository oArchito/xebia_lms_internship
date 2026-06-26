import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import Input from '../common/Input';

/**
 * Controlled ContactForm matching mockup 3 layout
 * @param {Object} props
 * @param {Object} props.formDataConfig - field settings
 * @param {string} props.submitLabel - submit text
 * @param {string} props.successText - success text
 */
const ContactForm = ({
  formDataConfig = {},
  submitLabel = 'SEND MESSAGE',
  successText = 'Thank you! Your message has been received.',
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName.trim()) tempErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) tempErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setIsSuccess(false);
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Split Grid for Left Column and Right Column (Mockup 3 Style) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              {/* Left Column: First Name, Email, Subject, Message */}
              <div className="flex flex-col gap-5">
                {formDataConfig.firstName && (
                  <Input
                    id="firstName"
                    label={formDataConfig.firstName.label}
                    placeholder={formDataConfig.firstName.placeholder}
                    value={formData.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    error={errors.firstName}
                    required
                  />
                )}
                {formDataConfig.email && (
                  <Input
                    id="email"
                    label={formDataConfig.email.label}
                    placeholder={formDataConfig.email.placeholder}
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    error={errors.email}
                    required
                  />
                )}
                {formDataConfig.subject && (
                  <Input
                    id="subject"
                    label={formDataConfig.subject.label}
                    placeholder={formDataConfig.subject.placeholder}
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    error={errors.subject}
                    required
                  />
                )}
                {formDataConfig.message && (
                  <Input
                    id="message"
                    label={formDataConfig.message.label}
                    placeholder={formDataConfig.message.placeholder}
                    type="textarea"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    error={errors.message}
                    required
                  />
                )}
              </div>

              {/* Right Column: Last Name, Phone Number */}
              <div className="flex flex-col gap-5">
                {formDataConfig.lastName && (
                  <Input
                    id="lastName"
                    label={formDataConfig.lastName.label}
                    placeholder={formDataConfig.lastName.placeholder}
                    value={formData.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    error={errors.lastName}
                    required
                  />
                )}
                {formDataConfig.phone && (
                  <Input
                    id="phone"
                    label={formDataConfig.phone.label}
                    placeholder={formDataConfig.phone.placeholder}
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    error={errors.phone}
                  />
                )}
              </div>

            </div>

            {/* Teal Rectangular Send Message button centered/aligned below left column */}
            <div className="w-full md:w-1/2 mt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-accent-500 hover:bg-accent-600 text-white font-poppins font-bold text-sm tracking-widest uppercase transition-all duration-150 cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isLoading ? 'SENDING...' : submitLabel}
              </button>
            </div>

          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center py-12"
          >
            <div className="w-16 h-16 bg-teal-50 text-[#00A89F] rounded-full flex items-center justify-center border border-teal-100 mb-6 shadow-sm">
              <FaCheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 font-poppins mb-2">
              Message Sent!
            </h3>
            <p className="text-sm font-poppins text-gray-500 font-light leading-relaxed max-w-sm mb-6">
              {successText}
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2 border border-gray-400 bg-white hover:bg-gray-50 text-xs font-poppins font-bold uppercase"
            >
              Send another message
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
//
