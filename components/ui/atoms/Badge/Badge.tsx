import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200';

  const variantClasses = {
    primary: 'bg-primary text-background',
    secondary: 'bg-secondary text-background',
    accent: 'bg-accent text-primary',
    outline: 'border border-primary text-primary',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return <span className={classes}>{children}</span>;
};

export default Badge;