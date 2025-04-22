import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useAnimation } from '../contexts/AnimationContext';

// Define types for AnimatedOrb props (copied from Services.tsx)
interface AnimatedOrbProps {
  style?: React.CSSProperties;
  customAnimation?: { [key: string]: any };
  className?: string;
  parallaxValue?: number | MotionValue<number>;
}

// Reusable AnimatedOrb component (copied from Services.tsx)
const AnimatedOrb: React.FC<AnimatedOrbProps> = ({ style, customAnimation, className, parallaxValue = 0 }) => {
  return (
    <motion.div
      className={`absolute rounded-full filter blur-[100px] ${className}`}
      animate={customAnimation}
      transition={{
        duration: 15,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "linear",
      }}
      style={{ ...style, y: parallaxValue }}
    />
  );
};

const Facilities = () => {
  const { disableAnimations } = useAnimation();
  const navigate = useNavigate();
  const facilitiesRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: facilitiesRef,
    offset: ["start end", "end start"],
    layoutEffect: false
  });
  
  // Simplified parallax effect
  const parallax = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const facilities = [
    {
      title: "Photography Websites",
      description: "Sell and showcase your equestrian photography with high-resolution galleries, secure image purchasing, instant downloads, and seamless client access.",
      image: "https://i.postimg.cc/zXFSVZW7/temp-Image83v-NOK.avif"
    },
    {
      title: "Equine Sales Platforms",
      description: "Whether you need a full classified platform or a custom site for your horse sales business, we create tailored solutions with search filters, detailed listings, high-quality media, and direct buyer enquiries.",
      image: "https://images.unsplash.com/photo-1506696495449-78c912b30e10?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Riding School Websites",
      description: "Manage bookings, showcase your facilities, and attract new clients with a professional, user-friendly website. Include class schedules, rider registration, pricing, and easy contact options.",
      image: "https://plus.unsplash.com/premium_photo-1664304525253-156489378204?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section 
      className="relative py-32 overflow-hidden" 
      ref={facilitiesRef} 
      style={{ position: 'relative' }}
    >
      {/* Simplified Animated Orbs */}
      <AnimatedOrb
        className="bg-gradient-to-r from-[#3CAAFF]/10 to-[#00E0FF]/10"
        style={{ width: 450, height: 450, top: "10%", left: "-200px" }}
        customAnimation={{
          scale: [1, 1.02, 1],
          opacity: [0.2, 0.25, 0.2],
        }}
        parallaxValue={parallax}
      />
      <AnimatedOrb
        className="bg-gradient-to-r from-[#00E0FF]/10 to-[#3CAAFF]/10"
        style={{ width: 400, height: 400, bottom: "5%", right: "-150px" }}
        customAnimation={{
          scale: [1, 1.02, 1],
          opacity: [0.25, 0.3, 0.25],
        }}
        parallaxValue={parallax}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          {disableAnimations ? (
            <>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">Our Examples</span>
              </h2>
              <p className="text-[#ABABAB] max-w-2xl mx-auto">
                Explore our tailored services designed specifically for equestrian businesses. See what's possible for your project.
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
                <span className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">Our Examples</span>
              </motion.h2>
              <motion.p
                initial={{ nacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
                className="text-[#ABABAB] max-w-2xl mx-auto"
              >
                Explore our tailored services designed specifically for equestrian businesses. See what's possible for your project.
              </motion.p>
            </>
          )}
        </div>

        <div className="space-y-32">
          {facilities.map((facility, index) => (
            disableAnimations ? (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden group shadow-lg shadow-black/20">
                    <div className="aspect-w-16 aspect-h-9">
                      <img 
                        src={facility.image} 
                        alt={`${facility.title} - Equinology Service`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent opacity-80"></div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[#F5F5F7]">
                    {facility.title}
                  </h3>
                  <p className="text-[#ABABAB] mb-8 text-lg leading-relaxed">
                    {facility.description}
                  </p>
                  <button 
                    className="flex items-center text-[#3CAAFF] hover:text-[#F5F5F7] transition-colors duration-300 group"
                    onClick={() => navigate('/services')}
                  >
                    <span className="font-medium">Learn more</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            ) : (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.9,
                  ease: [0.165, 0.84, 0.44, 1]
                }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0.8 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: "0 20px 40px rgba(60, 170, 255, 0.15)",
                      transition: { duration: 0.4 }
                    }}
                    className="relative rounded-2xl overflow-hidden group shadow-lg shadow-black/20"
                  >
                    <div className="aspect-w-16 aspect-h-9">
                      <img 
                        src={facility.image} 
                        alt={`${facility.title} - Equinology Service`}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent opacity-80"></div>
                    
                    {/* Animated border effect */}
                    <motion.div 
                      className="absolute inset-0 border-2 border-[#3CAAFF]/0 rounded-2xl"
                      animate={{ 
                        borderColor: ['rgba(60, 170, 255, 0)', 'rgba(60, 170, 255, 0.1)', 'rgba(60, 170, 255, 0)'],
                      }}
                      transition={{ 
                        duration: 4, 
                        ease: "easeInOut", 
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>
                </div>
                
                <div className="lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[#F5F5F7]">
                      {facility.title}
                    </h3>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, delay: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
                      className="text-[#ABABAB] mb-8 text-lg leading-relaxed"
                    >
                      {facility.description}
                    </motion.p>
                    <motion.button 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, delay: 0.5, ease: [0.165, 0.84, 0.44, 1] }}
                      whileHover={{ 
                        x: 5, 
                        textShadow: "0 0 10px rgba(60, 170, 255, 0.5)" 
                      }}
                      className="flex items-center text-[#3CAAFF] hover:text-[#F5F5F7] transition-colors duration-300 group"
                      onClick={() => navigate('/services')}
                    >
                      <span className="font-medium">Learn more</span>
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:ml-3 transition-all duration-300" />
                      </motion.div>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>

      {/* New section for other businesses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16">
        {disableAnimations ? (
          <div className="text-center">
            <p className="text-[#ABABAB] text-lg">
              We also work with a variety of other businesses beyond the equestrian industry. 
              <br className="hidden sm:block" />
              <Link to="/contact" className="text-[#3CAAFF] font-medium hover:text-[#F5F5F7] transition-colors duration-300">Contact us</Link> to discuss your project.
            </p>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.165, 0.84, 0.44, 1] }}
            className="text-center"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
              className="text-[#ABABAB] text-lg"
            >
              We also work with a variety of other businesses beyond the equestrian industry. 
              <br className="hidden sm:block" />
              <Link to="/contact" className="text-[#3CAAFF] font-medium hover:text-[#F5F5F7] transition-colors duration-300">Contact us</Link> to discuss your project.
            </motion.p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Facilities;
