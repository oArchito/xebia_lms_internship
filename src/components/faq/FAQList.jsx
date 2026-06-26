import React, { useState } from 'react';
import FAQItem from './FAQItem';

/**
 * FAQ List container rendering items in a unified bordered container (Mockup 2 style)
 * @param {Object} props
 * @param {Array} props.faqs - FAQs array
 */
const FAQList = ({ faqs = [] }) => {
  const [openId, setOpenId] = useState(1); // Set first item open by default like in image 2

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  if (faqs.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg border border-gray-300">
        <p className="text-gray-500 font-poppins font-light text-base">
          No matches found for your query. Try searching different keywords.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-gray-400 rounded-md overflow-hidden shadow-sm bg-white">
      {faqs.map((faq) => (
        <FAQItem
          key={faq.id}
          faq={faq}
          isOpen={openId === faq.id}
          onToggle={() => handleToggle(faq.id)}
        />
      ))}
    </div>
  );
};

export default FAQList;
//
