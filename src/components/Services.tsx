import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { PenTool, Layout, Compass, Lightbulb, Ruler, Users } from 'lucide-react';
import { useRef } from 'react';
import React from 'react';
import { useAnimation } from '../contexts/AnimationContext';

// Define types for AnimatedOrb props
interface AnimatedOrbProps {
  style?: React.CSSProperties;
  customAnimation?: { [key: string]: any }; // More specific type for animation object
  className?: string;
  parallaxValue?: number | MotionValue<number>; // Allow MotionValue type
}

// Reusable AnimatedOrb component with subtle animations and smooth parallax.
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

const Services = () => {
  const { disableAnimations } = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Smooth the scroll progress to avoid jittery transitions.
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Reduce amplitude for a subtle parallax effect.
  const parallaxUp = useTransform(smoothScroll, [0, 1], [0, 20]);
  const parallaxDown = useTransform(smoothScroll, [0, 1], [20, 0]);

  // Services array for your content.
  const services = [
    {
      icon: <PenTool className="w-10 h-10 text-[#3CAAFF]" />,
      title: "Equestrian Web Design",
      description: "As equestrian specialists, we speak your language. Our personal web design knowledge allows us to help build your perfect personal website tailored to your specific needs.",
    },
    {
      icon: <Layout className="w-10 h-10 text-[#3CAAFF]" />,
      title: "Software Development",
      description: "We don't just offer specialist websites—we also create specific software that reflects real horse-world knowledge to support your equestrian business.",
    },
    {
      icon: <Compass className="w-10 h-10 text-[#3CAAFF]" />,
      title: "Detailed Planning",
      description: "Our in-depth planning turns your equestrian vision into reality. We carefully map each step—from inspiring concepts to precise timelines—giving you a clear path to success.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-[#3CAAFF]" />,
      title: "Full Transparency",
      description: "We provide clear, upfront pricing with no hidden fees or confusing technical jargon—giving you complete peace of mind.",
    },
    {
      icon: <Ruler className="w-10 h-10 text-[#3CAAFF]" />,
      title: "Personal Touch",
      description: "Your equestrian business deserves a bespoke solution. We handcraft every aspect of your site—no pre-made templates, just design uniquely tailored to you.",
    },
    {
      icon: <Users className="w-10 h-10 text-[#3CAAFF]" />,
      title: "Feedback",
      description: "Our discussions are straightforward and realistic—we say 'no' as openly as we say 'yes'. Expect honest feedback and clear guidance.",
    },
  ];

  // Variants for the service card container.
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 },
    },
  };

  // Variants for each service card.
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.165, 0.84, 0.44, 1] },
    },
  };

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background SVG pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDgwODA4Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMxNTE1MTUiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
      
      {/* Subtle animated background orbs - adjusted opacity and animation */}
      <AnimatedOrb
        className="bg-gradient-to-r from-[#3CAAFF]/15 to-[#00E0FF]/15"
        style={{ width: 400, height: 400, top: "8%", left: "-150px" }}
        customAnimation={{
          scale: [1, 1.03, 1],
          x: [-10, 10, -10],
          opacity: [0.3, 0.4, 0.3],
        }}
        parallaxValue={parallaxUp}
      />

      <AnimatedOrb
        className="bg-gradient-to-r from-[#00E0FF]/15 to-[#3CAAFF]/15"
        style={{ width: 380, height: 380, bottom: "10%", right: "-120px" }}
        customAnimation={{
          scale: [1, 1.02, 1],
          x: [8, -8, 8],
          opacity: [0.35, 0.45, 0.35],
        }}
        parallaxValue={parallaxDown}
      />

      <AnimatedOrb
        className="bg-gradient-to-r from-[#3CAAFF]/10 to-[#00E0FF]/10"
        style={{
          width: 300,
          height: 300,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        customAnimation={{
          scale: [1, 1.04, 1],
          opacity: [0.25, 0.35, 0.25],
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {disableAnimations ? (
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">Our Services</span>
            </h2>
          ) : (
            <motion.h2
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.165, 0.84, 0.44, 1] }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">Our Services</span>
            </motion.h2>
          )}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
            className="text-[#ABABAB] max-w-2xl mx-auto"
          >
            We offer an extensive range of design and personalised services tailored to the unique needs of every individual industry, from equestrian to construction, we have it covered.
          </motion.p>
        </div>

        {disableAnimations ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#111111] to-[#0A0A0A] p-8 rounded-2xl border border-[#222222]/20 transition-all duration-300 group hover:shadow-xl hover:shadow-[#3CAAFF]/10 hover:border-[#3CAAFF]/20"
              >
                <div className="bg-gradient-to-br from-[#0A0A0A]/80 to-[#111111]/30 p-4 rounded-xl inline-block mb-6 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#3CAAFF]/20 group-hover:to-[#0A0A0A]/20 transform group-hover:scale-105">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#F5F5F7] group-hover:text-[#3CAAFF] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#ABABAB] group-hover:text-[#CDCDCD] transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-200px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="bg-gradient-to-br from-[#111111] to-[#0A0A0A] p-8 rounded-2xl border border-[#222222]/20 transition-all duration-300 group hover:shadow-xl hover:shadow-[#3CAAFF]/10 hover:border-[#3CAAFF]/20"
              >
                <div className="bg-gradient-to-br from-[#0A0A0A]/80 to-[#111111]/30 p-4 rounded-xl inline-block mb-6 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#3CAAFF]/20 group-hover:to-[#0A0A0A]/20 transform group-hover:scale-105">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#F5F5F7] group-hover:text-[#3CAAFF] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#ABABAB] group-hover:text-[#CDCDCD] transition-colors duration-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;