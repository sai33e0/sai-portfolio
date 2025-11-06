import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../ui/atoms/Icon';
import NavigationItem from '../../ui/molecules/NavigationItem';
import { useActiveSection } from '../../../lib/hooks/useActiveSection';

interface NavigationProps {
  items: Array<{
    name: string;
    href: string;
  }>;
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  // Close mobile menu when section changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [activeSection]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80; // Account for fixed nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleNavigationClick = (href: string) => {
    handleSmoothScroll(href);
    setIsMobileMenuOpen(false);
  };

  // Mobile menu variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: { duration: 0.3 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="nav-desktop hidden lg:block">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo/Name */}
            <div className="flex items-center">
              <h1 className="text-lg lg:text-xl font-bold text-primary">
                SAI KRUPA NAIK D
              </h1>
            </div>

            {/* Navigation Items */}
            <div className="hidden lg:flex items-center space-x-8">
              {items.map((item) => (
                <NavigationItem
                  key={item.name}
                  item={item}
                  isActive={activeSection === item.href.slice(1)}
                  onClick={() => handleNavigationClick(item.href)}
                  variant="desktop"
                />
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <Icon
                name={isMobileMenuOpen ? 'close' : 'menu'}
                size="md"
                className="text-primary"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Bar */}
      <nav className="nav-desktop lg:hidden">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <div className="flex items-center">
              <h1 className="text-lg font-bold text-primary">
                SAI KRUPA NAIK D
              </h1>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <Icon
                name={isMobileMenuOpen ? 'close' : 'menu'}
                size="md"
                className="text-primary"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="nav-overlay lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              variants={menuItemVariants}
              className="flex flex-col items-center justify-center space-y-8"
              onClick={(e) => e.stopPropagation()}
            >
              {items.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={menuItemVariants}
                  custom={index}
                >
                  <NavigationItem
                    item={item}
                    isActive={activeSection === item.href.slice(1)}
                    onClick={() => handleNavigationClick(item.href)}
                    variant="mobile"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;