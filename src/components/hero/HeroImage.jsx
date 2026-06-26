import React from 'react';
import heroImg from '../../assets/hero.png';

/**
 * HeroImage component rendering a static image with a custom placeholder fallback
 */
const HeroImage = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center py-6 select-none">
      <img
        src={heroImg}
        alt="Xebia Platform Hero Illustration"
        className="relative z-10 w-full h-auto drop-shadow-lg object-contain rounded-xl max-h-[380px] transition-all"
        // Styled SVG placeholder fallback if image is not present in src/assets/hero.png
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='500' height='380' viewBox='0 0 500 380'><rect width='500' height='380' fill='%23F3F4F6' rx='16' ry='16' stroke='%23D1D5DB' stroke-width='3' stroke-dasharray='10 10'/><g transform='translate(0, 0)'><text x='50%25' y='46%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' font-weight='bold' fill='%236C1D5F'>[ Insert Hero Image Here ]</text><text x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='12' fill='%239CA3AF'>Place your image file in: src/assets/hero.png</text></g></svg>";
        }}
      />
    </div>
  );
};

export default HeroImage;
//
