import React from 'react';
import { motion } from 'framer-motion';
import Text from '../../ui/atoms/Text';
import SocialIcon from '../../ui/molecules/SocialIcon';
import Link from '../../ui/atoms/Link';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      platform: 'github' as const,
      url: 'https://github.com/saikrupanaikd',
      label: 'GitHub',
    },
    {
      platform: 'linkedin' as const,
      url: 'https://linkedin.com/in/saikrupanaikd',
      label: 'LinkedIn',
    },
    {
      platform: 'email' as const,
      url: 'mailto:saikrupanaik.d@example.com',
      label: 'Email',
    },
  ];

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer className="bg-primary text-background py-12 lg:py-16">
      <div className="container-custom">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand/About */}
            <motion.div variants={itemVariants} className="space-y-4">
              <Text variant="h3" weight="semibold" color="primary" className="text-white">
                SAI KRUPA NAIK D
              </Text>
              <Text variant="p" color="secondary" className="text-white/80">
                AI & ML enthusiast passionate about building innovative solutions
                and pushing the boundaries of technology.
              </Text>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <Text variant="h4" weight="semibold" color="primary" className="text-white">
                Quick Links
              </Text>
              <nav className="space-y-2">
                <Link
                  href="#about"
                  className="block text-white/80 hover:text-accent transition-colors duration-200"
                >
                  About
                </Link>
                <Link
                  href="#projects"
                  className="block text-white/80 hover:text-accent transition-colors duration-200"
                >
                  Projects
                </Link>
                <Link
                  href="#skills"
                  className="block text-white/80 hover:text-accent transition-colors duration-200"
                >
                  Skills
                </Link>
                <Link
                  href="#contact"
                  className="block text-white/80 hover:text-accent transition-colors duration-200"
                >
                  Contact
                </Link>
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <Text variant="h4" weight="semibold" color="primary" className="text-white">
                Connect
              </Text>
              <div className="space-y-3">
                <Text variant="p" color="secondary" className="text-white/80">
                  Available for freelance work and collaboration.
                </Text>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <SocialIcon
                      key={social.platform}
                      platform={social.platform}
                      url={social.url}
                      label={social.label}
                      size="md"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="border-t border-white/20 pt-8 mt-8"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              {/* Copyright */}
              <Text variant="small" color="secondary" className="text-white/60">
                © {new Date().getFullYear()} SAI KRUPA NAIK D. All rights reserved.
              </Text>

              {/* Credit */}
              <Text variant="small" color="secondary" className="text-white/60">
                Built with{' '}
                <span className="text-red-500">♥</span> using Next.js, TypeScript &
                TailwindCSS
              </Text>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;