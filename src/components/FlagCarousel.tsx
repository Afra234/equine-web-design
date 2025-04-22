import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe } from 'lucide-react';
import { useAnimation as useAnimationContext } from '../contexts/AnimationContext';

const countries = [
  { name: 'United Kingdom', flag: '🇬🇧', region: 'Europe' },
  { name: 'United States', flag: '🇺🇸', region: 'North America' },
  { name: 'Australia', flag: '🇦🇺', region: 'Oceania' },
  { name: 'Germany', flag: '🇩🇪', region: 'Europe' },
  { name: 'France', flag: '🇫🇷', region: 'Europe' },
  { name: 'Netherlands', flag: '🇳🇱', region: 'Europe' },
  { name: 'Canada', flag: '🇨🇦', region: 'North America' },
  { name: 'New Zealand', flag: '🇳🇿', region: 'Oceania' },
  { name: 'Ireland', flag: '🇮🇪', region: 'Europe' },
  { name: 'Sweden', flag: '🇸🇪', region: 'Europe' },
  { name: 'Denmark', flag: '🇩🇰', region: 'Europe' },
  { name: 'Belgium', flag: '🇧🇪', region: 'Europe' },
];

// Duplicate the countries array to create a seamless loop
const duplicatedCountries = [...countries, ...countries];

const FlagCarousel = () => {
  const { disableAnimations } = useAnimationContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const renderDesktopVersion = () => (
    <div 
      className="relative h-[500px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 flex items-center"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        style={{
          animationPlayState: isHovered ? 'paused' : 'running'
        }}
      >
        <div className="flex gap-6">
          {duplicatedCountries.map((country, index) => (
            <motion.div
              key={`${country.name}-${index}`}
              className="relative group flex-shrink-0"
              whileHover={{ scale: 1.05, zIndex: 1 }}
            >
              <div className="bg-[#111111]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#3CAAFF]/20 group-hover:border-[#3CAAFF]/50 transition-all duration-300 h-full flex flex-col items-center justify-center">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {country.flag}
                </div>
                <div className="text-white text-sm font-medium mb-1 text-center">
                  {country.name}
                </div>
                <div className="text-[#3CAAFF] text-xs text-center">
                  {country.region}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  const renderMobileVersion = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {countries.map((country) => (
        <div
          key={country.name}
          className="bg-[#111111]/50 backdrop-blur-sm p-4 rounded-xl border border-[#3CAAFF]/20 transition-all duration-300 h-full flex flex-col items-center justify-center"
        >
          <div className="text-4xl mb-2">
            {country.flag}
          </div>
          <div className="text-white text-xs font-medium mb-1 text-center">
            {country.name}
          </div>
          <div className="text-[#3CAAFF] text-[10px] text-center">
            {country.region}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.webp')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {disableAnimations ? (
            <>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">Global Reach</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                Trusted by equestrian businesses across the globe, from small yards to international brands
              </p>
            </>
          ) : (
            <>
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.165, 0.84, 0.44, 1] }}
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">Global Reach</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
              >
                Trusted by equestrian businesses across the globe, from small yards to international brands
              </motion.p>
            </>
          )}
        </div>

        {disableAnimations ? renderMobileVersion() : renderDesktopVersion()}

        {disableAnimations && (
          <div className="mt-8 sm:mt-16 text-center">
            <p className="text-gray-400 text-sm mb-4 sm:mb-6">
              And many more countries worldwide...
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FlagCarousel; 