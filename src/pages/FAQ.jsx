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
              <img
                src="/faq.webp"
                alt="Frequently Asked Questions Illustration"
                className="w-full h-auto object-contain"
              />
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
