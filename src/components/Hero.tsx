import { ArrowRight, Star, Compass } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'framer-motion';
import image from "../images/Hero-Image.webp"
import ClientThreeBackground from './ClientThreeBackground';

const Hero = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="relative min-h-screen overflow-hidden" ref={ref}>
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/50 via-[#111111]/30 to-[#0A0A0A]/50 z-30">
        <Suspense fallback={<div className="absolute inset-0 bg-[#0A0A0A]" />}>
          <ClientThreeBackground />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#111111]/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#3CAAFF]/30">
              <Compass className="w-4 h-4 text-[#3CAAFF]" />
              <span className="text-sm text-[#ABABAB]">Equestrian Experts</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight relative">
              <span className="block text-[#F5F5F7]">Transform Ideas</span>
              <span className="block mt-2 bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent pb-2">
                Digital Reality
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-[#ABABAB] max-w-3xl">
              Get in touch today for a no-obligation, one-to-one consultation about your project. Depending on the scope of the project, we aim to deliver your perfect website within approximately a week. We won't consider it complete until you're 100% satisfied, and we offer a transparent, fixed and affordable price. No business is complete without a professional website
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] text-[#0A0A0A] font-medium hover:shadow-lg hover:shadow-[#3CAAFF]/25 transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/services')}
                className="inline-flex items-center px-8 py-3 rounded-full border border-[#3CAAFF]/30 hover:border-[#3CAAFF]/60 text-[#ABABAB] hover:text-[#F5F5F7] transition-colors duration-300"
              >
                Explore Services
              </button>
            </div>

            {/* Social proof */}
            <div className="pt-8 border-t border-[#222222]/30">
              <div className="flex items-center justify-center lg:justify-start space-x-8">
                <div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.5,
                          delay: i * 0.2,
                          ease: "easeOut"
                        }}
                      >
                        <Star className="w-5 h-5 text-[#3CAAFF] fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-[#777777]">Trusted by 100+ equestrians</p>
                </div>
                <div className="h-12 w-px bg-[#222222]/30"></div>
                <div>
                  <p className="text-2xl font-bold text-[#F5F5F7]">6</p>
                  <p className="text-sm text-[#777777]">Years of excellence</p>
                </div>
                <div className="h-12 w-px bg-[#222222]/30"></div>
                <div>
                  <p className="text-2xl font-bold text-[#F5F5F7]">£200</p>
                  <p className="text-sm text-[#777777]">Prices starting from</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero image/illustration */}
          <div className="mt-12 lg:mt-0 relative hidden lg:block">
            <div className="relative mx-auto max-w-[500px]">
              <div className="aspect-w-5 aspect-h-3 rounded-2xl overflow-hidden bg-gradient-to-br from-[#3CAAFF]/10 to-[#00E0FF]/10 backdrop-blur-3xl">
                <img
                  src={image}
                  alt="Elegant Horse"
                  className="object-cover w-full h-full rounded-2xl mix-blend-luminosity opacity-80"
                  loading="lazy"
                  width={500}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A] via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;