import React from 'react';
import NextLink from 'next/link';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  underline?: boolean;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

const Link: React.FC<LinkProps> = ({
  href,
  children,
  variant = 'accent',
  underline = true,
  external = false,
  className = '',
  onClick,
}) => {
  const baseClasses = 'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 rounded';

  const variantClasses = {
    primary: 'text-primary hover:text-accent',
    secondary: 'text-secondary hover:text-primary',
    accent: 'text-accent hover:text-accent/80',
  };

  const underlineClasses = underline ? 'hover:underline' : '';

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${underlineClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const isExternal = external || href.startsWith('http') || href.startsWith('mailto:');

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={classes} onClick={onClick}>
      {children}
    </NextLink>
  );
};

export default Link;