import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

/**
 * Hero Content details
 * @param {Object} props
 * @param {Object} props.heroData - Hero text specifications
 * @param {string} props.heroData.heading - Main landing title
 * @param {string} props.heroData.subtitle - Sub description text
 * @param {Object} props.heroData.cta - Call to Action config
 */
const HeroContent = ({ heroData }) => {
  const { heading, subtitle, cta } = heroData || {};
  const navigate = useNavigate();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center text-left max-w-2xl lg:max-w-none"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 font-poppins leading-[1.15]"
      >
        {heading}
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="mt-6 text-base sm:text-lg text-gray-600 font-poppins leading-relaxed font-light"
      >
        {subtitle}
      </motion.p>

      {cta && (
        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate(cta.path)}
            className="w-full sm:w-auto"
          >
            {cta.text}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/faq')}
            className="w-full sm:w-auto"
          >
            Learn More
          </Button>
        </motion.div>
      )}

      {/* Trust Banner/Stats */}
      <motion.div
        variants={itemVariants}
        className="mt-12 pt-8 border-t border-primary-100 flex items-center gap-8 text-gray-500"
      >
        <div>
          <span className="block text-2xl font-bold text-primary-600">10k+</span>
          <span className="text-xs font-poppins font-medium">Students</span>
        </div>
        <div className="w-px h-8 bg-primary-100"></div>
        <div>
          <span className="block text-2xl font-bold text-accent-500">150+</span>
          <span className="text-xs font-poppins font-medium">Cloud Labs</span>
        </div>
        <div className="w-px h-8 bg-primary-100"></div>
        <div>
          <span className="block text-2xl font-bold text-gray-800">98%</span>
          <span className="text-xs font-poppins font-medium">Success Rate</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
//
