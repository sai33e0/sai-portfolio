import React from 'react';
import { motion } from 'framer-motion';
import Card from '../../atoms/Card';
import Badge from '../../atoms/Badge';
import Icon from '../../atoms/Icon';
import Text from '../../atoms/Text';
import Link from '../../atoms/Link';

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  projectUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  thumbnail,
  techStack,
  projectUrl,
  githubUrl,
  featured = false,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card hover={true} className="overflow-hidden group relative">
        {/* Thumbnail */}
        <div className="relative h-48 lg:h-56 overflow-hidden bg-muted">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            whileHover="visible"
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6"
          >
            <div className="text-white space-y-2">
              <Text variant="h4" weight="semibold" color="primary" className="text-white">
                {title}
              </Text>
              <Text variant="small" className="text-white/90 line-clamp-2">
                {description}
              </Text>

              {/* Links */}
              <div className="flex gap-3 pt-2">
                {projectUrl && (
                  <Link
                    href={projectUrl}
                    external
                    className="text-white hover:text-accent flex items-center gap-1"
                  >
                    <Icon name="external" size="sm" />
                    <Text variant="small">View</Text>
                  </Link>
                )}
                {githubUrl && (
                  <Link
                    href={githubUrl}
                    external
                    className="text-white hover:text-accent flex items-center gap-1"
                  >
                    <Icon name="github" size="sm" />
                    <Text variant="small">Code</Text>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>

          {featured && (
            <div className="absolute top-4 right-4">
              <Badge variant="accent" size="sm">
                Featured
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <Text variant="h4" weight="semibold" className="mb-3">
            {title}
          </Text>

          <Text variant="p" color="secondary" className="mb-4 line-clamp-3">
            {description}
          </Text>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.slice(0, 4).map((tech, index) => (
              <Badge key={index} variant="outline" size="sm">
                {tech}
              </Badge>
            ))}
            {techStack.length > 4 && (
              <Badge variant="secondary" size="sm">
                +{techStack.length - 4} more
              </Badge>
            )}
          </div>

          {/* Action Links */}
          <div className="flex gap-3">
            {projectUrl && (
              <Link href={projectUrl} external>
                <Icon name="external" size="md" className="text-accent" />
              </Link>
            )}
            {githubUrl && (
              <Link href={githubUrl} external>
                <Icon name="github" size="md" className="text-primary hover:text-accent" />
              </Link>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;