import React from 'react';
import { motion } from 'framer-motion';
import Link from '../../atoms/Link';
import Icon from '../../atoms/Icon';

interface SocialIconProps {
  platform: 'github' | 'linkedin' | 'twitter' | 'email';
  url: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  platform,
  url,
  label,
  size = 'md',
  showLabel = false,
}) => {
  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const getIconColor = (platformName: string) => {
    switch (platformName) {
      case 'github':
        return 'text-primary hover:text-accent';
      case 'linkedin':
        return 'text-blue-600 hover:text-blue-700';
      case 'twitter':
        return 'text-sky-500 hover:text-sky-600';
      case 'email':
        return 'text-red-500 hover:text-red-600';
      default:
        return 'text-primary hover:text-accent';
    }
  };

  const getBgColor = (platformName: string) => {
    switch (platformName) {
      case 'github':
        return 'hover:bg-primary/10';
      case 'linkedin':
        return 'hover:bg-blue-50';
      case 'twitter':
        return 'hover:bg-sky-50';
      case 'email':
        return 'hover:bg-red-50';
      default:
        return 'hover:bg-muted';
    }
  };

  const displayLabel = label || platform.charAt(0).toUpperCase() + platform.slice(1);

  return (
    <motion.div
      variants={socialVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <Link
        href={url}
        external={platform !== 'email'}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${getBgColor(
          platform
        )}`}
      >
        <Icon
          name={platform}
          size={size}
          className={`${getIconColor(platform)} transition-colors duration-200`}
        />
        {showLabel && (
          <span className="text-sm font-medium text-primary hover:text-accent transition-colors duration-200">
            {displayLabel}
          </span>
        )}
      </Link>
    </motion.div>
  );
};

export default SocialIcon;