import { ChevronRight, Code, Palette, ShoppingBag, Camera, Globe, MessageSquare, Users, Award, Heart, ArrowRight, Check, Star, Clock, Zap, Smartphone, Share2, Search, GripVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const handleScroll = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
    
    return () => {
      // Cleanup function to reset any ongoing animations
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ opacity }}
        className="relative min-h-screen flex items-center justify-center"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-[#0A0A0A]"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-b from-blue-400/5 to-transparent"
        />
        
        <div className="relative z-10 px-4 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-4xl sm:text-6xl font-light text-white tracking-wide mb-6"
            >
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-gray-400 text-lg mb-8 max-w-2xl"
            >
              Elevating businesses through innovative digital solutions. 
              From custom web development to comprehensive branding, we create 
              sophisticated digital experiences that drive growth and success.
              With specialised expertise in equestrian and lifestyle industries.
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              onClick={handleScroll}
              className="px-8 py-3 bg-transparent border border-blue-400/30 text-blue-300 rounded-full font-light tracking-wide group flex items-center justify-center gap-2 hover:bg-blue-400/10 transition-colors duration-200"
            >
              Explore Our Services
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

const BrandingIdentitySection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const items = [
    {
      title: "Logo Design",
      desc: "We create unique, eye-catching logos that capture the essence of what you. Whether you run a riding school, competition yard or from another industry we design highly technical logos that seamlessly intertwine text and icons or opt for a more simplistic, elegant approach tailored to your brand.",
      image: "https://i.ibb.co/HLZ3VMKb/GALLOP.webp",
      icon: <Palette className="w-8 h-8 text-blue-400" />,
      features: [
        "Custom logo design",
        "Multiple design concepts",
        "Brand guidelines",
        "File formats for all uses"
      ]
    },
    {
      title: "Brand Collateral",
      desc: "We design high-quality business cards, signage, and digital assets tailored to the equestrian industry. Our branding materials ensure a sophisticated and professional presence across print and digital platforms, maintaining a consistent identity for your equestrian business.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600",
      icon: <Award className="w-8 h-8 text-blue-400" />,
      features: [
        "Business cards",
        "Signage design",
        "Social media templates",
        "Email signatures"
      ]
    },
    {
      title: "Visual Identity",
      desc: "A strong visual identity sets your brand apart. We develop sophisticated branding systems, including color palettes, typography, and imagery, ensuring that your equestrian business maintains a professional and recognizable presence across all platforms.",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600",
      icon: <Heart className="w-8 h-8 text-blue-400" />,
      features: [
        "Color palette development",
        "Typography system",
        "Imagery guidelines",
        "Brand voice definition"
      ]
    }
  ];

  return (
    <motion.section 
      style={{ opacity }}
      className="py-32 px-4 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-5xl font-semibold text-center mb-16 text-white tracking-wide"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Branding & Identity
          </span>
        </motion.h2>

        <div className="space-y-32">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-12 items-center"
            >
              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-300/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto max-h-[400px] object-cover rounded-2xl shadow-2xl relative z-10 group-hover:scale-[1.01] transition-all duration-500 ease-in-out filter grayscale group-hover:grayscale-0"
                  />
                </div>
              </div>
              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#0A0A0A] p-4 rounded-xl border border-blue-400/20">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-medium text-white tracking-wide">{item.title}</h3>
                </div>
                <p className="text-[#ABABAB] text-lg leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="space-y-3">
                  {item.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-[#ABABAB]">
                      <Check className="w-5 h-5 text-blue-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const ServicesSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  const services = [
    {
      title: 'Custom Web Development',
      description: 'We create bespoke websites tailored to your specific needs. Our expertise spans across various industries, with particular strength in equestrian and lifestyle sectors.',
      icon: <Code className="w-6 h-6" />,
      category: 'web',
      features: ['Responsive Design', 'Custom CMS', 'SEO Ready', 'Fast Loading']
    },
    {
      title: 'E-commerce Solutions',
      description: 'We build powerful e-commerce platforms that connect businesses with their customers. Our solutions include advanced search filters, detailed listings, and secure payment systems.',
      icon: <ShoppingBag className="w-6 h-6" />,
      category: 'web',
      features: ['Advanced Search', 'Media Gallery', 'Direct Messaging', 'Secure Payments']
    },
    {
      title: 'Software Development',
      description: 'We develop custom software solutions that streamline your business operations. Our expertise in business management systems helps optimise your workflow.',
      icon: <Camera className="w-6 h-6" />,
      category: 'software',
      features: ['Booking Systems', 'Client Management', 'Inventory Tracking', 'Reporting Tools']
    },
    {
      title: 'SEO Optimisation',
      description: 'We help businesses improve their online visibility and reach their target audience. Our specialised knowledge ensures your business stands out in search results.',
      icon: <Globe className="w-6 h-6" />,
      category: 'marketing',
      features: ['Keyword Research', 'Content Strategy', 'Technical SEO', 'Local SEO']
    },
    {
      title: 'Social Media Management',
      description: 'We help businesses build and maintain a strong social media presence. Our experience helps create engaging content that resonates with your audience.',
      icon: <MessageSquare className="w-6 h-6" />,
      category: 'marketing',
      features: ['Content Creation', 'Community Management', 'Analytics', 'Campaign Strategy']
    },
    {
      title: 'Client Management Systems',
      description: 'We create custom client management solutions that streamline your business operations. Our expertise in business management helps optimise your workflow.',
      icon: <Users className="w-6 h-6" />,
      category: 'software',
      features: ['Client Database', 'Appointment Scheduling', 'Payment Processing', 'Communication Tools']
    }
  ];

  return (
    <motion.section 
      style={{ opacity }}
      id="services" 
      className="py-32 px-4 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-5xl font-semibold text-center mb-16 text-white tracking-wide"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Our Services
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0A0A0A] p-8 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#0A0A0A] p-4 rounded-xl border border-blue-400/20">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-medium text-white tracking-wide">{service.title}</h3>
              </div>
              <p className="text-[#ABABAB] text-lg leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-[#ABABAB]">
                    <Check className="w-5 h-5 text-blue-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const globalReachItems = [
  {
    title: "Digital Presence",
    description: "Establish a strong online presence that works for you 24/7, reaching potential clients worldwide.",
    icon: <Globe className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Mobile Accessibility",
    description: "Ensure your services are accessible to clients on any device, anywhere in the world.",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Social Media Integration",
    description: "Seamlessly connect your website with social platforms to expand your reach and engagement.",
    icon: <Share2 className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Search Visibility",
    description: "Optimise your online presence to be easily found by those searching for your services.",
    icon: <Search className="w-6 h-6 text-blue-400" />
  }
];

function GlobalReachSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#111111] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Digital Reach & Connectivity
          </h2>
          <p className="text-gray-300 text-lg">
            Expand your influence and connect with clients globally through a powerful digital presence
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />
          
          <div className="flex overflow-x-auto pb-8 gap-8 scrollbar-hide">
            {globalReachItems.map((item, index) => (
              <div 
                key={index}
                className="group flex-shrink-0 w-[300px] p-6 rounded-lg bg-[#111111] border border-gray-800 hover:border-blue-400/30 transition-colors duration-200"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-blue-400/10 flex items-center justify-center mb-4 group-hover:bg-blue-400/20 transition-colors duration-200">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ContactSection = ({ navigate }: { navigate: (path: string) => void }) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  return (
    <motion.section 
      style={{ opacity }}
      className="py-32 px-4 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-semibold mb-8 text-white tracking-wide">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let's create something extraordinary together. Contact us today to discuss your project and discover how we can help elevate your business, whether you're in the equestrian industry or beyond.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#ABABAB]">
                <Star className="w-5 h-5 text-blue-400" />
                <span>Free initial consultation</span>
              </div>
              <div className="flex items-center gap-3 text-[#ABABAB]">
                <Zap className="w-5 h-5 text-blue-400" />
                <span>Quick response time</span>
              </div>
              <div className="flex items-center gap-3 text-[#ABABAB]">
                <Check className="w-5 h-5 text-blue-400" />
                <span>No-obligation quote</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button 
              onClick={() => {
                navigate('/contact');
                setTimeout(() => window.scrollTo(0, 0), 100);
              }}
              className="inline-flex items-center px-10 py-4 rounded-full bg-blue-400 text-[#0A0A0A] font-medium text-lg hover:bg-blue-400/90 transition-colors duration-200 group"
            >
              Contact Us Now
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

function ServicesPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('custom');

  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
    
    return () => {
      // Cleanup function to reset any ongoing animations
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-[#0A0A0A] text-[#F5F5F7]"
      >
        <HeroSection />
        <BrandingIdentitySection />
        <ServicesSection />
        <GlobalReachSection />
        <section className="py-16 md:py-32 px-4 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-semibold text-center mb-8 md:mb-16 text-white tracking-wide"
            >
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Custom vs WordPress Solutions
              </span>
            </motion.h2>
            
            <div className="max-w-4xl mx-auto">
              {/* Tap to Compare Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-4 sm:hidden"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20">
                  <GripVertical className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-blue-400">Tap to Compare</span>
                </div>
              </motion.div>

              {/* Tab Navigation */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 md:mb-12">
                <button
                  className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-all duration-200 ${
                    activeTab === 'custom' 
                      ? 'bg-blue-400 text-[#0A0A0A]' 
                      : 'bg-[#0A0A0A] text-blue-400 border border-blue-400/20 hover:border-blue-400/40'
                  }`}
                  onClick={() => setActiveTab('custom')}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Custom Solutions</span>
                  </div>
                </button>
                <button
                  className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-all duration-200 ${
                    activeTab === 'wordpress' 
                      ? 'bg-blue-400 text-[#0A0A0A]' 
                      : 'bg-[#0A0A0A] text-blue-400 border border-blue-400/20 hover:border-blue-400/40'
                  }`}
                  onClick={() => setActiveTab('wordpress')}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">WordPress Solutions</span>
                  </div>
                </button>
              </div>

              {/* Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0A0A0A] p-4 sm:p-8 rounded-2xl border border-blue-400/20"
              >
                {activeTab === 'custom' ? (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="bg-[#0A0A0A] p-3 sm:p-4 rounded-xl border border-blue-400/20">
                        <Code className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-medium text-white tracking-wide">Custom Solutions</h3>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start gap-3 text-[#ABABAB] text-sm sm:text-base">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-1" />
                        <span>Tailored specifically to your business needs</span>
                      </div>
                      <div className="flex items-start gap-3 text-[#ABABAB] text-sm sm:text-base">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-1" />
                        <span>Complete control over design and functionality</span>
                      </div>
                      <div className="flex items-start gap-3 text-[#ABABAB] text-sm sm:text-base">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-1" />
                        <span>Optimised performance and security</span>
                      </div>
                      <div className="flex items-start gap-3 text-[#ABABAB] text-sm sm:text-base">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-1" />
                        <span>Scalable as your business grows</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="bg-[#0A0A0A] p-3 sm:p-4 rounded-xl border border-blue-400/20">
                        <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-medium text-white tracking-wide">WordPress Solutions</h3>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start gap-3 text-[#ABABAB] text-sm sm:text-base">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-1" />
                        <span>Quick setup and deployment</span>
                      </div>
                      <div className="flex items-start gap-3 text-[#ABABAB] text-sm sm:text-base">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-1" />
                        <span>User-friendly content management</span>
                      </div>
                      <div className="flex items-start gap-3 text-[#ABABAB] text-sm sm:text-base">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-1" />
                        <span>Cost-effective for smaller businesses</span>
                      </div>
                      <div className="flex items-start gap-3 text-[#ABABAB] text-sm sm:text-base">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-1" />
                        <span>Large ecosystem of plugins and themes</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 md:mt-16 text-center px-4"
            >
              <p className="text-gray-400 text-base md:text-lg mb-4 md:mb-6">
                Not sure which solution is right for your business? Read our detailed comparison in our article:
              </p>
              <Link 
                to="/articles/wordpress-vs-custom-web-development-making-the-right-choice"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group text-sm md:text-base"
              >
                WordPress vs Custom Web Development: Making the Right Choice
                <ArrowRight className="ml-2 h-4 w-4 md:h-6 md:w-6 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>
        <ContactSection navigate={navigate} />
      </motion.div>
    </AnimatePresence>
  );
}

export default ServicesPage;
