import React from 'react';
import { motion } from 'framer-motion';
import Text from '../../components/ui/atoms/Text';
import Button from '../../components/ui/atoms/Button';
import Icon from '../../components/ui/atoms/Icon';

interface HeroProps {
  name?: string;
  title?: string;
  subtitle?: string;
  profileImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  name = 'Sai Krupa Naik D',
  title = 'AI & ML Developer',
  subtitle = '3rd Year B.Tech CSE (AI & ML)',
  profileImage = '/images/profile.jpg',
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: 0.6,
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 1.2,
      },
    },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
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

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-6 lg:space-y-8"
        >
          {/* Profile Image */}
          <motion.div variants={imageVariants} className="relative">
            <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-accent shadow-xl">
              <img
                src={profileImage}
                alt={name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    name
                  )}&size=200&background=00C8FF&color=000000`;
                }}
              />
            </div>

            {/* Animated ring around profile */}
            <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-ping" />
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-2">
            <Text variant="h1" size="5xl" weight="bold" color="primary" className="responsive-heading">
              Hi, I'm{' '}
              <span className="text-gradient">{name}</span>
            </Text>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants}>
            <Text
              variant="h2"
              size="2xl"
              weight="semibold"
              color="accent"
              className="text-xl lg:text-3xl"
            >
              {title}
            </Text>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <Text
              variant="p"
              size="lg"
              color="secondary"
              className="responsive-subheading"
            >
              {subtitle}
            </Text>
          </motion.div>

          {/* Brief Description */}
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <Text variant="p" color="secondary" className="text-body">
              Driven and detail-oriented Computer Science student specializing in
              AI & ML. Passionate about building scalable, intelligent systems that
              enhance productivity and user experience.
            </Text>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={ctaVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="group"
            >
              View Projects
              <Icon name="arrow" size="sm" className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('#contact')}
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={ctaVariants} className="flex gap-4 pt-2">
            <a
              href="https://github.com/sai33e0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Icon name="github" size="lg" />
            </a>
            <a
              href="https://linkedin.com/in/saikrupanaikd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Icon name="linkedin" size="lg" />
            </a>
            <a
              href="mailto:dhungathusaikrupanaik@gmail.com"
              className="text-primary hover:text-accent transition-colors duration-200"
              aria-label="Email"
            >
              <Icon name="email" size="lg" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            delay: 1.5,
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-secondary cursor-pointer"
            onClick={() => scrollToSection('#about')}
          >
            <Icon name="arrow" size="lg" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;