import React from 'react';

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'accent' | 'muted';
  align?: 'left' | 'center' | 'right' | 'justify';
  className?: string;
  onClick?: () => void;
}

const Text: React.FC<TextProps> = ({
  children,
  variant = 'p',
  size,
  weight = 'normal',
  color = 'secondary',
  align = 'left',
  className = '',
  onClick,
}) => {
  const baseClasses = 'transition-colors duration-200';

  // Size mappings based on variant
  const defaultSizes: Record<string, string> = {
    h1: 'text-4xl lg:text-6xl',
    h2: 'text-3xl lg:text-5xl',
    h3: 'text-2xl lg:text-4xl',
    h4: 'text-xl lg:text-2xl',
    h5: 'text-lg lg:text-xl',
    h6: 'text-base lg:text-lg',
    p: 'text-base lg:text-lg',
    span: 'text-sm lg:text-base',
    small: 'text-xs lg:text-sm',
  };

  const sizeClasses = size
    ? {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-4xl',
        '5xl': 'text-5xl',
        '6xl': 'text-6xl',
      }[size]
    : defaultSizes[variant] || defaultSizes.p;

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  }[weight];

  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    muted: 'text-muted',
  }[color];

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  }[align];

  const classes = `
    ${baseClasses}
    ${sizeClasses}
    ${weightClasses}
    ${colorClasses}
    ${alignClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const Component = variant;

  return (
    <Component className={classes} onClick={onClick}>
      {children}
    </Component>
  );
};

export default Text;