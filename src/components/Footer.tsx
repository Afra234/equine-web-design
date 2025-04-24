import { motion } from 'framer-motion';
import { Compass, Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { useNavigate, useLocation } from "react-router-dom";
import { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal navigation

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const handleNavigation = useCallback((sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView();
      }, 500);
    } else {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView();
    }
  }, [location.pathname, navigate]);

  const navItems = useMemo(() => [
    {
      label: "Home",
      action: () => {
        navigate("/");
        window.scrollTo(0, 0);
      }
    },
    {
      label: "Services",
      action: () => {
        navigate("/services");
        window.scrollTo(0, 0);
      }
    },
    {
      label: "Facilities",
      action: () => handleNavigation("facilites")
    },
    { label: "Testimonials", action: () => handleNavigation("testimonials") },
    {
      label: "Articles",
      action: () => {
        navigate("/articles");
        window.scrollTo(0, 0);
      }
    },
    {
      label: "Blog",
      action: () => {
        navigate("/blog");
        window.scrollTo(0, 0);
      }
    },
    {
      label: "Contact",
      action: () => {
        navigate("/contact");
        window.scrollTo(0, 0);
      }
    },
  ], [handleNavigation, navigate]);

  return (
    <footer className="bg-[#050505] text-[#ABABAB] pt-20 pb-10 mt-24 relative overflow-hidden footer-noise-bg">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#222222] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* Column 1: Brand & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-flex items-center mb-6 group">
              <Compass className="w-8 h-8 mr-2 text-[#3CAAFF] group-hover:text-[#00E0FF] transition-colors duration-300" />
              <span className="text-2xl font-light tracking-wider bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent group-hover:opacity-80 transition-opacity duration-300">
                EQUINOLOGY
              </span>
            </Link>
            <p className="text-[#777777] text-sm leading-relaxed">
              Expert equine web design services for horse businesses worldwide. Specializing in custom websites, equine sales platforms, and software solutions that combine equestrian expertise with modern web design.
            </p>
          </div>

          {/* Column 2: Site Navigation */}
          <div>
            <h3 className="text-[#F5F5F7] font-medium mb-4 text-base tracking-wide">Navigation</h3>
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <li className="text-[#777777] hover:text-[#AABBDD] transition-colors duration-200 text-sm relative group cursor-pointer" key={index} onClick={item.action}>
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#3CAAFF]/0 to-[#3CAAFF] group-hover:w-full transition-all duration-300 ease-out"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info & Socials */}
          <div>
            <h3 className="text-[#F5F5F7] font-medium mb-4 text-base tracking-wide">Get In Touch</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="mailto:enquiries@equinology.co.uk" className="inline-flex items-center text-[#777777] hover:text-[#3CAAFF] transition-colors duration-200 text-sm">
                  <Mail className="w-4 h-4 mr-2" />
                  enquiries@equinology.co.uk
                </a>
              </li>
              <li>
                <a href="tel:+447493303857" className="inline-flex items-center text-[#777777] hover:text-[#3CAAFF] transition-colors duration-200 text-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  +44 7493 303857
                </a>
              </li>
            </ul>
            {/* Social Media Links */}
            <h3 className="text-[#F5F5F7] font-medium mb-4 text-base tracking-wide">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/equinology.co.uk"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#777777] hover:text-[#3CAAFF] transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-8 pt-8 border-t border-[#111111]/50 text-center text-xs text-[#555555]">
          <p>&copy; {currentYear} Equinology. All rights reserved.</p>
          {/* Optional: Add Privacy Policy / Terms links here */}
          {/* <p className="mt-2">
            <Link to="/privacy" className="hover:text-[#3CAAFF] transition-colors">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-[#3CAAFF] transition-colors">Terms of Service</Link>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
