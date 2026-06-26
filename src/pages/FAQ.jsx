import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import SearchBar from '../components/common/SearchBar';
import FAQList from '../components/faq/FAQList';
import SupportCard from '../components/faq/SupportCard';
import { getFaqData } from '../services/api';

/**
 * FAQ page styled exactly like Mockup 2
 */
const FAQ = () => {
  const faqData = getFaqData();
  const { title, subtitle, searchPlaceholder, supportCard, items = [] } = faqData || {};

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const queryParam = searchParams.get('q');
    if (queryParam) {
      setSearchQuery(queryParam);
    }
  }, [searchParams]);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      setSearchParams({ q: query });
    } else {
      setSearchParams({});
    }
  };

  const filteredFaqs = items.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-20 bg-white min-h-screen"
    >
      <Container>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading, Search, FAQ List (Columns 1-7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Mockup Title style */}
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-black font-poppins text-gray-900 leading-none">
                Frequently Asked
              </h1>
              <h1 className="text-4xl md:text-5xl font-black font-poppins text-purple-800 mt-2">
                Questions
              </h1>
              <p className="mt-4 text-sm text-gray-500 font-poppins font-semibold">
                {subtitle}
              </p>
            </div>

            {/* Search Bar */}
            <SearchBar
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder={searchPlaceholder}
            />

            {/* Accordion list */}
            <FAQList faqs={filteredFaqs} />
          </div>

          {/* Right Column: Bubble Illustration & Support Card (Columns 8-12) */}
          <div className="lg:col-span-5 flex flex-col gap-6 items-center">
            
            {/* Circular Speech Bubble Illustration (Mockup 2 Style) */}
            <div className="w-full max-w-[280px] flex justify-center items-center">
              <svg viewBox="0 0 200 200" className="w-full h-auto drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Large Background circle */}
                <circle cx="100" cy="100" r="70" fill="#FAF5FF" />
                <circle cx="115" cy="115" r="50" fill="#E2D5FC" opacity="0.6" />
                
                {/* Primary speech bubble */}
                <path d="M70 70 C70 45, 130 45, 130 70 C130 85, 110 95, 105 105 L102 115 H98 L95 105 C90 95, 70 85, 70 70 Z" fill="#7B2CBF" />
                <circle cx="100" cy="125" r="5" fill="#7B2CBF" />
                <text x="94" y="82" fill="white" fontSize="32" fontWeight="black" fontFamily="sans-serif">?</text>
                
                {/* Smaller secondary bubbles */}
                <circle cx="45" cy="115" r="16" fill="#bbf7f4" opacity="0.8" />
                <text x="41" y="121" fill="#0d9691" fontSize="16" fontWeight="bold">?</text>
                
                <circle cx="145" cy="65" r="12" fill="#ebe0ff" />
                <text x="142" y="69" fill="#7B2CBF" fontSize="12" fontWeight="bold">?</text>
              </svg>
            </div>

            {/* Support Card */}
            <div className="w-full max-w-sm">
              <SupportCard supportData={supportCard} />
            </div>
          </div>

        </div>
      </Container>
    </motion.div>
  );
};

export default FAQ;
//
