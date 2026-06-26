import React from 'react';
import { motion } from 'framer-motion';

/**
 * PartnerBrands component displaying supported technologies
 */
const PartnerBrands = () => {
  const brands = [
    {
      name: 'Amazon Web Services',
      svg: (
        <svg className="w-24 h-8 fill-current" viewBox="0 0 79 47" xmlns="http://www.w3.org/2000/svg">
          <path d="M38.2 24c0-5.7-3.9-9.3-9.5-9.3-4.5 0-8.3 2.7-9.3 7h4.8c.8-2 2.5-3.2 4.5-3.2 3.1 0 4.7 1.9 4.7 5v1.2c-1.3-.2-3.1-.4-4.9-.4-6.3 0-10.7 2.9-10.7 8.2 0 4.8 3.5 7.8 8.1 7.8 4 0 7.2-2.1 8.3-5.3h.2c.2 1.4 1 2.3 2.2 3 .9.6 2.2.8 3.1.8h1.6V34c0-6.1-4-10-10-10zm-4.7 9.8c0 3-2.1 4.7-4.9 4.7-2.6 0-4.3-1.4-4.3-3.9 0-2.8 2.2-4.2 6.4-4.2 1.1 0 2 .1 2.8.2v3.2zM55.8 14.7H51l-4.9 16.9-4-16.9h-4.9L43.1 39h4.8l7.9-24.3zm19.1 14.8c-.2-4.1-2.9-6.3-6.6-6.3-3 0-5 1.5-5.9 3.5h-.2v-3H58v25.3h4.9V33.6h.2c1 1.9 2.9 3.2 5.7 3.2 4.1 0 6.6-2.5 6.6-6.8l-.5-.5zm-4.8.4c0 2.5-1.4 3.9-3.7 3.9-2.1 0-3.6-1.4-3.6-3.8v-1.1c0-2.4 1.5-3.8 3.6-3.8 2.3 0 3.7 1.4 3.7 3.8v1z"/>
          <path d="M2.3 43.6c17.2 9.5 42.4 9.5 59.3 0 1.9-1.1 3.5.7 2.1 1.9-18.4 15.3-48.4 13.5-63.5.2-1-1-1.3-3.2 2.1-2.1z"/>
          <path d="M60.6 37.6c-1-.9-5.1-.3-6.8.2-1.7.5-1.9-.3-1-.9 6.2-4 10.9-1.5 10.1 2-.8 3.4-3.6 1.9-4.8.7.5-.7 3.5-1.1 2.5-2z"/>
        </svg>
      )
    },
    {
      name: 'Kubernetes',
      svg: (
        <svg className="w-28 h-8 fill-current" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
          <text x="35" y="21" fontFamily="sans-serif" fontWeight="bold" fontSize="16">Kubernetes</text>
          <path d="M15 2.1L2.8 6.5v12.2L15 27.9l12.2-9.2V6.5L15 2.1zm0 2.7l9.4 3.4v4.4L15 9.2v-4.4zm0 6.7l9.4 3.4v4.4L15 15.9v-4.4zm-9.4-4l9.4-3.4v4.4L5.6 11.4V7.5zm0 6.7l9.4-3.4v4.4L5.6 18.1v-3.9z"/>
        </svg>
      )
    },
    {
      name: 'Terraform',
      svg: (
        <svg className="w-28 h-8 fill-current" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
          <text x="35" y="21" fontFamily="sans-serif" fontWeight="bold" fontSize="16">Terraform</text>
          <path d="M2.5 1.5h10.4v10.4H2.5zm12.5 0h10.4v10.4H15zm-12.5 12.5h10.4v10.4H2.5zm12.5 0h10.4v10.4H15z" fillOpacity="0.4"/>
          <path d="M2.5 1.5h10.4v10.4H2.5z" />
          <path d="M15 1.5h10.4v10.4H15z" />
          <path d="M15 14h10.4v10.4H15z" />
          <path d="M2.5 14h10.4v10.4H2.5z" fillOpacity="0.7" />
        </svg>
      )
    },
    {
      name: 'Docker',
      svg: (
        <svg className="w-24 h-8 fill-current" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
          <text x="30" y="21" fontFamily="sans-serif" fontWeight="bold" fontSize="16">docker</text>
          <path d="M1.3 12.8c.2-.5.7-.9 1.3-.9H5v2.5H2.6c-.6 0-1.1-.4-1.3-.9zm4.4-3.4c.2-.5.7-.9 1.3-.9h2.4v2.5H7c-.6 0-1.1-.4-1.3-.9zm4.4 0c.2-.5.7-.9 1.3-.9h2.4v2.5h-2.4c-.6 0-1.1-.4-1.3-.9zm4.4-3.4c.2-.5.7-.9 1.3-.9H18v2.5h-2.4c-.6 0-1.1-.4-1.3-.9zm4.4 0c.2-.5.7-.9 1.3-.9h2.4v2.5h-2.4c-.6 0-1.1-.4-1.3-.9z"/>
        </svg>
      )
    },
    {
      name: 'Google Cloud',
      svg: (
        <svg className="w-28 h-8 fill-current" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
          <text x="32" y="21" fontFamily="sans-serif" fontWeight="bold" fontSize="16">Google Cloud</text>
          <path d="M13.6 2.3l-8.5 4.9c-.8.5-1.3 1.3-1.3 2.2v9.8c0 .9.5 1.7 1.3 2.2l8.5 4.9c.8.5 1.8.5 2.6 0l8.5-4.9c.8-.5 1.3-1.3 1.3-2.2V9.4c0-.9-.5-1.7-1.3-2.2l-8.5-4.9c-.8-.5-1.8-.5-2.6 0zm-1.6 5.8l6.9 4v7.9l-6.9 4-6.9-4V12.1l6.9-4z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-[#FAF7FF]/60 border-y border-purple-100/50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-xs font-poppins font-bold tracking-widest text-purple-400 uppercase mb-8">
          Enterprise Hands-On Architectures For Modern Stacks
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-20 text-purple-800/40">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, color: '#6C1D5F' }}
              className="transition-colors duration-200 cursor-pointer flex items-center justify-center"
              title={brand.name}
            >
              {brand.svg}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerBrands;
