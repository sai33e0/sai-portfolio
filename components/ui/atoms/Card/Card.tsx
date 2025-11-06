import React from 'react';

interface CardProps {
  children: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  border?: boolean;
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  padding = 'md',
  hover = false,
  border = true,
  shadow = 'sm',
  className = '',
  onClick,
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const shadowClasses = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };

  const baseClasses = 'bg-background rounded-lg transition-all duration-300';

  const borderClasses = border ? 'border border-secondary/20' : '';

  const hoverClasses = hover
    ? 'hover:shadow-xl hover:scale-[1.02] cursor-pointer'
    : '';

  const classes = `
    ${baseClasses}
    ${paddingClasses[padding]}
    ${shadowClasses[shadow]}
    ${borderClasses}
    ${hoverClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const Component = onClick ? 'div' : 'div';

  return (
    <Component className={classes} onClick={onClick}>
      {children}
    </Component>
  );
};

export default Card;