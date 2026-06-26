import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeadphones } from 'react-icons/fa';
import Card from '../common/Card';

/**
 * SupportCard matching Mockup 2 sidebar layout
 * @param {Object} props
 * @param {Object} props.supportData - configuration
 */
const SupportCard = ({ supportData }) => {
  const { title, description, ctaText, ctaPath } = supportData || {};
  const navigate = useNavigate();

  return (
    <Card
      hoverEffect={false}
      className="bg-[#F0EBFC] text-center p-8 flex flex-col items-center gap-4 rounded-none border border-purple-100 shadow-sm"
    >
      {/* Centered Headphone Icon */}
      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary-600 shadow-sm">
        <FaHeadphones className="w-8 h-8" />
      </div>

      {/* Content */}
      <div className="my-2">
        <h3 className="text-xl font-bold font-poppins text-gray-900 mb-1">
          {title}
        </h3>
        <p className="text-xs font-poppins text-gray-500 font-medium">
          {description}
        </p>
      </div>

      {/* Teal Rectangular CTA Button */}
      {ctaText && ctaPath && (
        <button
          onClick={() => navigate(ctaPath)}
          className="w-full py-3 bg-accent-500 hover:bg-accent-600 text-white font-poppins font-bold text-sm tracking-wider uppercase transition-all duration-150 cursor-pointer"
        >
          {ctaText}
        </button>
      )}
    </Card>
  );
};

export default SupportCard;
//
