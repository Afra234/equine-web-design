import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import logo from "../images/logo.webp";
import { useAnimation } from '../contexts/AnimationContext';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate(); 
  const location = useLocation(); 
  
  // Use useTransform for more efficient scroll calculations
  const { scrollY } = useScroll();
  const bgOpacityValue = useTransform(scrollY, [0, 300], [0.7, 0.95]);
  const blurValue = useTransform(scrollY, [0, 300], [4, 12]);
  const shadowOpacity = useTransform(scrollY, [0, 300], [0, 0.2]);

  // Convert opacity to rgba string
  const bgOpacity = useTransform(bgOpacityValue, (latest) => `rgba(0, 0, 0, ${latest})`);

  const { disableAnimations } = useAnimation();

  // Memoize navigation handlers
  const handleNavigation = useCallback((sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname, navigate]);

  // Memoize nav items to prevent unnecessary re-renders
  const navItems = useMemo(() => [
    { 
      label: "Services", 
      action: () => {
        navigate("/services");
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } 
    },
    { label: "Testimonials", action: () => handleNavigation("testimonials") },
    { 
      label: "Articles", 
      action: () => {
        navigate("/articles");
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } 
    },
  ], [handleNavigation, navigate]);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  return (
    <div className="motion-container">
      {disableAnimations ? (
        <header className="fixed w-full z-50 transition-all duration-300" style={{
          backgroundColor: bgOpacity,
          backdropFilter: `blur(${blurValue.get()}px)`,
          boxShadow: shadowOpacity.get() > 0.1 ? `0 4px 30px rgba(0, 0, 0, ${shadowOpacity.get()})` : 'none'
        }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
            <a href="/" className="flex items-center">
              <img src={logo} className="w-40 h-auto drop-shadow-lg" alt="Logo" />
            </a>

            <div className="hidden md:flex space-x-6">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="text-white text-md font-medium tracking-wide hover:text-[#3CAAFF] transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:shadow-[#3CAAFF]/25 transition-all duration-300 text-[#0A0A0A]"
              onClick={() => navigate("/contact")}
            >
              Contact Us
              <ChevronRight className="inline-block ml-1 w-4 h-4" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="md:hidden text-[#ABABAB] hover:text-[#F5F5F7] transition-colors duration-200 p-2 rounded-full bg-black/50 backdrop-blur-sm"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>

          <AnimatePresence>
            {isSidebarOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                  onClick={() => setIsSidebarOpen(false)}
                />

                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="fixed top-0 left-0 w-[85%] max-w-sm min-h-screen bg-black/90 backdrop-blur-md z-50 flex flex-col p-6 shadow-lg rounded-r-3xl"
                >
                  <button
                    className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full bg-gray-800/50"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <nav className="mt-16 flex flex-col space-y-6">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={index}
                        onClick={() => {
                          setIsSidebarOpen(false);
                          item.action();
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="text-white text-lg font-medium tracking-wide hover:text-[#3CAAFF] transition-colors duration-300 text-left border-b border-gray-800/50 pb-2"
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </nav>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-auto w-full bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] px-6 py-3.5 rounded-2xl text-lg font-medium shadow-lg hover:shadow-xl hover:shadow-[#3CAAFF]/25 transition-all duration-300 text-[#0A0A0A]"
                    onClick={() => {
                      setIsSidebarOpen(false);
                      navigate("/contact");
                    }}
                  >
                    Contact Us
                    <ChevronRight className="inline-block ml-2 w-5 h-5" />
                  </motion.button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </header>
      ) : (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed w-full z-50 transition-all duration-300"
          style={{
            backgroundColor: bgOpacity,
            backdropFilter: `blur(${blurValue.get()}px)`,
            boxShadow: shadowOpacity.get() > 0.1 ? `0 4px 30px rgba(0, 0, 0, ${shadowOpacity.get()})` : 'none'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
            <a href="/" className="flex items-center">
              <img src={logo} className="w-40 h-auto drop-shadow-lg" alt="Logo" />
            </a>

            <div className="hidden md:flex space-x-6">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="text-white text-md font-medium tracking-wide hover:text-[#3CAAFF] transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:shadow-[#3CAAFF]/25 transition-all duration-300 text-[#0A0A0A]"
              onClick={() => navigate("/contact")}
            >
              Contact Us
              <ChevronRight className="inline-block ml-1 w-4 h-4" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="md:hidden text-[#ABABAB] hover:text-[#F5F5F7] transition-colors duration-200 p-2 rounded-full bg-black/50 backdrop-blur-sm"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>

          <AnimatePresence>
            {isSidebarOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                  onClick={() => setIsSidebarOpen(false)}
                />

                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="fixed top-0 left-0 w-[85%] max-w-sm min-h-screen bg-black/90 backdrop-blur-md z-50 flex flex-col p-6 shadow-lg rounded-r-3xl"
                >
                  <button
                    className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full bg-gray-800/50"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <nav className="mt-16 flex flex-col space-y-6">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={index}
                        onClick={() => {
                          setIsSidebarOpen(false);
                          item.action();
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="text-white text-lg font-medium tracking-wide hover:text-[#3CAAFF] transition-colors duration-300 text-left border-b border-gray-800/50 pb-2"
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </nav>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-auto w-full bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] px-6 py-3.5 rounded-2xl text-lg font-medium shadow-lg hover:shadow-xl hover:shadow-[#3CAAFF]/25 transition-all duration-300 text-[#0A0A0A]"
                    onClick={() => {
                      setIsSidebarOpen(false);
                      navigate("/contact");
                    }}
                  >
                    Contact Us
                    <ChevronRight className="inline-block ml-2 w-5 h-5" />
                  </motion.button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </div>
  );
};

export default Header;
