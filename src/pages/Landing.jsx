import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import Hero from '../components/hero/Hero';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import { getLandingData } from '../services/api';

/**
 * Landing Page component
 */
const Landing = () => {
  const landingData = getLandingData();
  const { hero, features } = landingData || {};

  // Dynamically resolve react-icons/fa based on string key
  const renderIcon = (iconName) => {
    const IconComponent = FaIcons[iconName];
    if (!IconComponent) return null;
    return <IconComponent className="w-6 h-6 text-purple-800" />;
  };

  // Framer Motion parent container variants for features stagger load
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Card items animations
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero heroData={hero} />

      {/* Feature Cards Section */}
      {features && (
        <section className="py-20 bg-white">
          <Container>
            {/* Section Header */}
            <SectionTitle
              title={features.title}
              subtitle={features.subtitle}
              center
            />

            {/* Features Grid */}
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            >
              {features.items &&
                features.items.map((feature) => (
                  <motion.div key={feature.id} variants={cardVariants}>
                    <Card className="h-full flex flex-col items-start gap-5 p-8 border border-purple-50/50 hover:border-purple-200 transition-colors">
                      {/* Icon Bubble */}
                      <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center border border-purple-100">
                        {renderIcon(feature.icon)}
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 font-poppins mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm font-poppins text-gray-500 font-light leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>
          </Container>
        </section>
      )}
    </div>
  );
};

export default Landing;
//
