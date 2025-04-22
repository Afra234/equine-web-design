import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

interface NavItemsProps {
  navItems: NavItem[];
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const NavItems: React.FC<NavItemsProps> = ({ navItems }) => (
  <nav className="hidden md:flex items-center space-x-8">
    {navItems.map((item, index) => (
      <motion.a
        key={item.label}
        href={item.href}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 + index * 0.1 }}
        whileHover={{ y: -2 }}
        className="text-[#ABABAB] hover:text-[#F5F5F7] transition-colors duration-200 text-sm tracking-wide"
      >
        {item.label}
      </motion.a>
    ))}
    <motion.button 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-[#3CAAFF]/25 transition-all duration-300 text-[#0A0A0A]"
    >
      Contact Us
      <ChevronRight className="inline-block ml-1 w-4 h-4" />
    </motion.button>
  </nav>
);

export default NavItems; 