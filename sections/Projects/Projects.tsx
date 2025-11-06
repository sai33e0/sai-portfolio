'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Text from '../../components/ui/atoms/Text';
import ProjectCard from '../../components/ui/molecules/ProjectCard';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const projects = [
    {
      title: 'TIMS - Total Inventory Management System',
      description: 'A comprehensive full-stack inventory management solution built using React, Node.js, Express, and MySQL. Designed for hackathon demonstration with focus on modular architecture, API integration, and efficient UI.',
      thumbnail: '/images/projects/tims.jpg',
      techStack: ['React', 'Node.js', 'Express', 'MySQL', 'JavaScript'],
      projectUrl: 'https://example.com/tims',
      githubUrl: 'https://github.com/sai33e0/tims',
      featured: true,
    },
    {
      title: 'Enterprise AI Knowledge Agent Platform',
      description: 'Production-ready AI-driven knowledge management platform enhancing data access and retrieval in enterprises. Integrated NLP-based search, contextual AI assistants, and dynamic content curation using Python and Next.js.',
      thumbnail: '/images/projects/ai-knowledge-platform.jpg',
      techStack: ['Python', 'Next.js', 'TypeScript', 'NLP', 'AI/ML'],
      projectUrl: 'https://example.com/ai-knowledge-platform',
      githubUrl: 'https://github.com/sai33e0/ai-knowledge-platform',
      featured: true,
    },
    {
      title: 'ShopSmart - Digital Grocery Store Experience',
      description: 'Developed a full-stack grocery e-commerce platform with Angular, Node.js, and MongoDB. Features smart shopping lists, search optimization, and an intuitive, Netflix-themed UI.',
      thumbnail: '/images/projects/shopsmart.jpg',
      techStack: ['Angular', 'Node.js', 'MongoDB', 'TypeScript', 'CSS'],
      projectUrl: 'https://example.com/shopsmart',
      githubUrl: 'https://github.com/sai33e0/shopsmart',
      featured: true,
    },
  ];

  const categories = ['All', 'Web Development', 'AI & ML', 'Full-Stack', 'E-Commerce'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project =>
        project.techStack.some(tech =>
          activeCategory.toLowerCase().includes('machine') && ['TensorFlow', 'Scikit-learn', 'PyTorch'].includes(tech) ||
          activeCategory.toLowerCase().includes('web') && ['React', 'Next.js', 'Node.js', 'TypeScript'].includes(tech) ||
          activeCategory.toLowerCase().includes('vision') && ['OpenCV', 'YOLO', 'Computer Vision'].includes(tech) ||
          activeCategory.toLowerCase().includes('nlp') && ['Transformers', 'NLP', 'Natural Language'].includes(tech)
        )
      );

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <Text variant="h2" size="4xl" weight="bold" color="primary" className="heading-primary">
              Projects
            </Text>
            <Text variant="p" size="lg" color="secondary" className="max-w-2xl mx-auto">
              A collection of my work spanning AI, machine learning, web development, and more
            </Text>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-accent text-primary'
                    : 'bg-muted text-secondary hover:bg-primary hover:text-background border border-secondary/20'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="project-grid"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                thumbnail={project.thumbnail}
                techStack={project.techStack}
                projectUrl={project.projectUrl}
                githubUrl={project.githubUrl}
                featured={project.featured}
              />
            ))}
          </motion.div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <motion.div variants={itemVariants} className="text-center py-12">
              <Text variant="h3" color="secondary">
                No projects found in this category.
              </Text>
              <Text variant="p" color="secondary" className="mt-2">
                Try selecting a different category or check back later for new projects.
              </Text>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Text variant="p" color="secondary" className="mb-6">
              Interested in collaborating or want to know more about these projects?
            </Text>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200"
            >
              Get in Touch
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;