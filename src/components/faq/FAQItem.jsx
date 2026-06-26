import React from 'react';
import Accordion from './Accordion';

/**
 * FAQItem component mapping FAQ question data
 * @param {Object} props
 * @param {Object} props.faq - Single FAQ data item (id, question, answer)
 * @param {boolean} props.isOpen - Open state
 * @param {Function} props.onToggle - Toggle click callback
 */
const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <Accordion title={faq.question} isOpen={isOpen} onToggle={onToggle}>
      {faq.answer}
    </Accordion>
  );
};

export default FAQItem;
//
