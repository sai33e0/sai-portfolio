import React from 'react';

interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

// Import from react-icons
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaGoogle,
  FaDatabase,
  FaMobileAlt,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTensorflow,
  SiScikitlearn,
  SiAngular,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiLinux,
  SiWindows,
  SiMacos,
  SiVisualstudiocode,
  SiFigma,
} from 'react-icons/si';
import { HiMenu, HiX, HiArrowDown, HiSun, HiMoon } from 'react-icons/hi';

const iconMap: Record<string, React.ElementType> = {
  // Social
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  email: FaEnvelope,
  phone: FaPhone,
  location: FaMapMarkerAlt,
  external: FaExternalLinkAlt,

  // Tech
  react: FaReact,
  nextjs: SiNextdotjs,
  node: FaNodeJs,
  python: FaPython,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  angular: SiAngular,
  mongodb: SiMongodb,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  database: FaDatabase,
  tensorflow: SiTensorflow,
  scikit: SiScikitlearn,
  git: FaGitAlt,
  docker: FaDocker,
  aws: FaAws,
  google: FaGoogle,
  mobile: FaMobileAlt,

  // Deployment
  vercel: SiVercel,
  netlify: SiNetlify,
  heroku: SiHeroku,

  // OS
  linux: SiLinux,
  windows: SiWindows,
  macos: SiMacos,

  // Tools
  vscode: SiVisualstudiocode,
  figma: SiFigma,

  // UI
  menu: HiMenu,
  close: HiX,
  arrow: HiArrowDown,
  sun: HiSun,
  moon: HiMoon,
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  className = '',
  onClick,
}) => {
  const IconComponent = iconMap[name.toLowerCase()];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  };

  const classes = `
    ${sizeClasses[size]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const props = {
    className: classes,
    onClick,
  };

  return <IconComponent {...props} />;
};

export default Icon;