import React from 'react';
import Container from '../common/Container';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

/**
 * Composite Hero component wrapping landing content and animations
 * @param {Object} props
 * @param {Object} props.heroData - Hero text specifications
 */
const Hero = ({ heroData }) => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-purple-50/40 via-white to-transparent">
      {/* Subtle Dot Mesh Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e9d5ff_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content (Columns 1-7) */}
          <div className="lg:col-span-7 z-10 order-2 lg:order-1">
            <HeroContent heroData={heroData} />
          </div>

          {/* Graphic (Columns 8-12) */}
          <div className="lg:col-span-5 z-10 order-1 lg:order-2">
            <HeroImage />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
//
