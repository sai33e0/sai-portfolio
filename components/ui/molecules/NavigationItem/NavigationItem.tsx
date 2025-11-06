import React from 'react';
import { motion } from 'framer-motion';
import Link from '../../atoms/Link';
import Text from '../../atoms/Text';

interface NavigationItemProps {
  item: {
    name: string;
    href: string;
  };
  isActive: boolean;
  onClick: () => void;
  variant?: 'desktop' | 'mobile';
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  isActive,
  onClick,
  variant = 'desktop',
}) => {
  const itemVariants = {
    hidden: { opacity: 0, x: variant === 'mobile' ? -20 : 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const baseClasses = `
    relative transition-all duration-200
    ${variant === 'mobile' ? 'block w-full text-center py-4' : 'inline-block px-4 py-2'}
  `;

  const activeClasses = isActive
    ? variant === 'mobile'
      ? 'text-accent bg-primary/20'
      : 'text-accent'
    : variant === 'mobile'
    ? 'text-white hover:text-accent'
    : 'text-primary hover:text-accent';

  const classes = `${baseClasses} ${activeClasses}`.trim().replace(/\s+/g, ' ');

  // Mobile: Animated entry, Desktop: Simple link with hover effects
  if (variant === 'mobile') {
    return (
      <motion.div
        variants={itemVariants}
        whileHover="hover"
        className={classes}
        onClick={onClick}
      >
        <Text
          variant="span"
          size="lg"
          weight="medium"
          color={isActive ? 'accent' : 'primary'}
          className={isActive ? 'text-accent' : 'text-white hover:text-accent'}
        >
          {item.name}
        </Text>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={itemVariants}
      whileHover="hover"
      className="relative"
    >
      <Link href={item.href} className={classes} onClick={onClick}>
        <Text
          variant="span"
          weight="medium"
          color={isActive ? 'accent' : 'primary'}
        >
          {item.name}
        </Text>

        {/* Active indicator */}
        {isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
            initial={false}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30,
            }}
          />
        )}
      </Link>
    </motion.div>
  );
};

export default NavigationItem;