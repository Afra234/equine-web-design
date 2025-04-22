import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// Define types for AnimatedOrb props
interface AnimatedOrbProps {
  style?: React.CSSProperties;
  customAnimation?: { [key: string]: any };
  className?: string;
  parallaxValue?: number | MotionValue<number>;
}

// Reusable AnimatedOrb component
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

// Testimonial card component
interface TestimonialCardProps {
  testimonial: {
    id: number;
    quote: string;
    author: string;
    position: string;
    rating: number;
  };
  isActive: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0.3, y: isActive ? 0 : 20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`flex-shrink-0 w-[90vw] sm:w-[500px] md:w-[600px] mx-auto transition-all duration-300 ${
        isActive ? 'cursor-default scale-100' : 'cursor-pointer scale-95'
      }`}
    >
      <div className="group relative">
        {/* Animated border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3CAAFF] via-[#00E0FF] to-[#3CAAFF] rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-300 animate-gradient-xy"></div>
        
        <div className="relative bg-gradient-to-br from-black/90 to-black/80 p-6 sm:p-8 rounded-xl backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Futuristic grid background */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] bg-repeat"></div>
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3CAAFF]/10 via-transparent to-[#00E0FF]/5 animate-pulse-slow"></div>
          
          <div className="relative z-10">
            {/* Quote Text */}
            <div className="relative mb-6">
              <Quote className="absolute -top-3 -left-2 w-8 h-8 text-[#3CAAFF]/20 group-hover:text-[#3CAAFF]/30 transition-colors" />
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed pl-6 group-hover:text-white transition-colors">
                {testimonial.quote}
              </p>
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <div>
                <p className="text-lg font-semibold bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">
                  {testimonial.author}
                </p>
                <p className="text-base text-[#ABABAB] group-hover:text-white/70 transition-colors">
                  {testimonial.position}
                </p>
              </div>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#3CAAFF] fill-current animate-pulse-slow" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll progress for the entire section (used for orbs)
  const { scrollYProgress: sectionScroll } = useScroll({
    target: testimonialRef,
    offset: ['start end', 'end start']
  });

  // Parallax for orbs
  const smoothScroll = useSpring(sectionScroll, { stiffness: 100, damping: 30 });
  const parallaxUp = useTransform(smoothScroll, [0, 1], [0, 20]);
  const parallaxDown = useTransform(smoothScroll, [0, 1], [20, 0]);

  const testimonials = [
    {
      id: 1,
      company: {
        name: "Equestrian Training Academy",
        logo: "/logos/company1.png",
        industry: "Equestrian Training",
        location: "UK"
      },
      testimonial: {
        quote: "It was such an amazing opportunity to work with Henry. He has a collaborative approach to projects and has the utmost patience for changes, big or small, that you ask for. I'm always nervous going into projects where I feel as though I don't know what I'm doing, but Henry made it very easy to provide feedback and articulate what I wanted. It was such a pleasure working with him!",
        author: "Ben S",
        position: "Hobby Horses LLC",
        rating: 5
      }
    },
    {
      id: 2,
      company: {
        name: "AD Accounting",
        logo: "/logos/company4.png",
        industry: "Accounting Services",
        location: "UK"
      },
      testimonial: {
        quote: "I had the pleasure of working with Henry on a recent web scraping project, and I can confidently say he exceeded all expectations. His technical expertise, attention to detail, and ability to deliver clean, structured data from even the most complex sources were impressive. Henry communicated clearly throughout the project, kept me updated on progress, and was quick to implement any feedback or changes. He delivered everything ahead of schedule and went the extra mile to ensure the final output",
        author: "",
        position: "AD Accounting",
        rating: 5
      }
    },
    {
      id: 3,
      company: {
        name: "Construction Solutions Ltd",
        logo: "/logos/company2.png",
        industry: "Construction",
        location: "UK"
      },
      testimonial: {
        quote: "Henry's creativity and dedication shone through as he designed a new logo from scratch for our construction industry product. He presented several innovative concepts, which we refined together to achieve the final artwork. I am delighted with the outcome and look forward to collaborating with Henry on future projects across different brands. Thank you!",
        author: "Rachel G",
        position: "Rapid Kerb Ltd",
        rating: 5
      }
    },
    {
      id: 4,
      company: {
        name: "Dressage Excellence",
        logo: "/logos/company3.png",
        industry: "Equestrian Sports",
        location: "UK"
      },
      testimonial: {
        quote: "Henry at Equinology really understood what I needed. My previous website had a checkout and basket feature, which didn't make sense for selling horses. He helped create a system that actually worked for my business. It was great to work with someone who understands the equestrian world.",
        author: "Sarah M",
        position: "Owner",
        rating: 5
      }
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="testimonials"
      className="py-16 md:py-24 relative overflow-hidden"
      ref={testimonialRef}
    >
      {/* Animated background orbs */}
      <AnimatedOrb
        className="bg-gradient-to-r from-[#3CAAFF]/10 to-[#00E0FF]/10"
        style={{ width: 350, height: 350, top: "15%", left: "-100px" }}
        customAnimation={{
          scale: [1, 1.02, 1],
          x: [-8, 8, -8],
          opacity: [0.25, 0.35, 0.25],
        }}
        parallaxValue={parallaxUp}
      />
      <AnimatedOrb
        className="bg-gradient-to-r from-[#00E0FF]/10 to-[#3CAAFF]/10"
        style={{ width: 320, height: 320, bottom: "12%", right: "-80px" }}
        customAnimation={{
          scale: [1, 1.01, 1],
          x: [6, -6, 6],
          opacity: [0.3, 0.4, 0.3],
        }}
        parallaxValue={parallaxDown}
      />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">
              Hear From Our Clients
            </span>
          </h2>
          <p className="text-[#ABABAB] max-w-xl mx-auto">
            Discover how we've helped equestrian businesses thrive with tailored digital solutions.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="w-full max-w-4xl mx-auto overflow-hidden">
            <motion.div 
              className="flex items-center"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard
                    testimonial={{
                      id: testimonial.id,
                      ...testimonial.testimonial
                    }}
                    isActive={index === activeIndex}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:border-[#3CAAFF]/50 hover:bg-black/70 transition-all duration-300 group shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white/70 group-hover:text-[#3CAAFF] transition-colors" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:border-[#3CAAFF]/50 hover:bg-black/70 transition-all duration-300 group shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white/70 group-hover:text-[#3CAAFF] transition-colors" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative group ${
                  index === activeIndex ? 'w-10' : 'w-3'
                } h-3 transition-all duration-300`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] rounded-full blur opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                <div className={`relative h-full rounded-full ${
                  index === activeIndex
                    ? 'bg-[#3CAAFF]'
                    : 'bg-white/20 group-hover:bg-white/30'
                } transition-all duration-300`}></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;