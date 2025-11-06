import React from 'react';
import { motion } from 'framer-motion';
import Card from '../../atoms/Card';
import Icon from '../../atoms/Icon';
import Text from '../../atoms/Text';

interface SkillIconProps {
  name: string;
  icon: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category?: string;
  color?: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({
  name,
  icon,
  level = 'intermediate',
  category,
  color,
}) => {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.3 },
    },
  };

  const getLevelColor = (skillLevel: string) => {
    switch (skillLevel) {
      case 'expert':
        return 'bg-accent/20 border-accent';
      case 'advanced':
        return 'bg-primary/10 border-primary/50';
      case 'intermediate':
        return 'bg-muted border-secondary/30';
      case 'beginner':
        return 'bg-muted/50 border-secondary/20';
      default:
        return 'bg-muted border-secondary/30';
    }
  };

  return (
    <motion.div
      variants={iconVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="group"
    >
      <Card
        padding="md"
        hover={false}
        className={`flex flex-col items-center justify-center space-y-3 cursor-pointer transition-all duration-300 ${getLevelColor(
          level
        )} group-hover:shadow-lg`}
      >
        {/* Icon */}
        <div className="relative">
          <Icon
            name={icon}
            size="xl"
            className={`${color ? '' : 'text-primary group-hover:text-accent'} transition-colors duration-300`}
          />

          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-full bg-accent/20 scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </div>

        {/* Name */}
        <Text
          variant="small"
          weight="medium"
          align="center"
          className="text-primary group-hover:text-accent transition-colors duration-300"
        >
          {name}
        </Text>

        {/* Category */}
        {category && (
          <Text
            variant="small"
            color="secondary"
            align="center"
            className="text-xs"
          >
            {category}
          </Text>
        )}

        {/* Level indicator */}
        <div className="flex gap-1">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${
                i < getLevelStars(level)
                  ? 'bg-accent'
                  : 'bg-secondary/30'
              }`}
            />
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

// Helper function to convert level to stars
const getLevelStars = (level: string): number => {
  switch (level) {
    case 'expert':
      return 4;
    case 'advanced':
      return 3;
    case 'intermediate':
      return 2;
    case 'beginner':
      return 1;
    default:
      return 2;
  }
};

export default SkillIcon;