'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Text from '../../components/ui/atoms/Text';
import SkillIcon from '../../components/ui/molecules/SkillIcon';
import Card from '../../components/ui/atoms/Card';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
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

  const skills = {
    languages: [
      { name: 'HTML', icon: 'html', level: 'expert', category: 'Language' },
      { name: 'CSS', icon: 'css', level: 'expert', category: 'Language' },
      { name: 'JavaScript', icon: 'javascript', level: 'advanced', category: 'Language' },
      { name: 'TypeScript', icon: 'typescript', level: 'advanced', category: 'Language' },
      { name: 'Python', icon: 'python', level: 'advanced', category: 'Language' },
      { name: 'C', icon: 'c', level: 'intermediate', category: 'Language' },
      { name: 'C++', icon: 'cpp', level: 'intermediate', category: 'Language' },
      { name: 'Unix', icon: 'linux', level: 'intermediate', category: 'Language' },
    ],
    frameworks: [
      { name: 'TailwindCSS', icon: 'tailwind', level: 'expert', category: 'Framework' },
      { name: 'Bootstrap', icon: 'bootstrap', level: 'advanced', category: 'Framework' },
      { name: 'React', icon: 'react', level: 'advanced', category: 'Framework' },
      { name: 'Next.js', icon: 'nextjs', level: 'advanced', category: 'Framework' },
      { name: 'Angular', icon: 'angular', level: 'intermediate', category: 'Framework' },
      { name: 'Node.js', icon: 'node', level: 'intermediate', category: 'Framework' },
      { name: 'Express', icon: 'express', level: 'intermediate', category: 'Framework' },
    ],
    databases: [
      { name: 'MySQL', icon: 'mysql', level: 'intermediate', category: 'Database' },
      { name: 'MongoDB', icon: 'mongodb', level: 'intermediate', category: 'Database' },
      { name: 'PostgreSQL', icon: 'postgresql', level: 'beginner', category: 'Database' },
    ],
    tools: [
      { name: 'Git', icon: 'git', level: 'advanced', category: 'Tool' },
      { name: 'GitHub', icon: 'github', level: 'advanced', category: 'Tool' },
      { name: 'Figma', icon: 'figma', level: 'intermediate', category: 'Tool' },
      { name: 'Canva', icon: 'canva', level: 'intermediate', category: 'Tool' },
      { name: 'VS Code', icon: 'vscode', level: 'expert', category: 'Tool' },
    ],
    'ai-ml': [
      { name: 'TensorFlow', icon: 'tensorflow', level: 'intermediate', category: 'AI/ML' },
      { name: 'Scikit-learn', icon: 'scikit', level: 'intermediate', category: 'AI/ML' },
      { name: 'Pandas', icon: 'pandas', level: 'intermediate', category: 'AI/ML' },
      { name: 'NumPy', icon: 'numpy', level: 'intermediate', category: 'AI/ML' },
      { name: 'OpenCV', icon: 'opencv', level: 'beginner', category: 'AI/ML' },
    ],
    softskills: [
      { name: 'Communication', icon: 'communication', level: 'expert', category: 'Soft Skill' },
      { name: 'Problem-Solving', icon: 'problemsolving', level: 'expert', category: 'Soft Skill' },
      { name: 'Adaptability', icon: 'adaptability', level: 'advanced', category: 'Soft Skill' },
      { name: 'Learning Agility', icon: 'learning', level: 'expert', category: 'Soft Skill' },
      { name: 'Teamwork', icon: 'teamwork', level: 'advanced', category: 'Soft Skill' },
      { name: 'Creativity', icon: 'creativity', level: 'advanced', category: 'Soft Skill' },
      { name: 'Focus', icon: 'focus', level: 'expert', category: 'Soft Skill' },
    ],
  };

  const [activeCategory, setActiveCategory] = React.useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: 'grid' },
    { id: 'languages', name: 'Languages', icon: 'code' },
    { id: 'frameworks', name: 'Frameworks', icon: 'layers' },
    { id: 'databases', name: 'Databases', icon: 'database' },
    { id: 'ai-ml', name: 'AI/ML', icon: 'brain' },
    { id: 'tools', name: 'Tools', icon: 'tools' },
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.values(skills).flat();
    }
    return skills[activeCategory as keyof typeof skills] || [];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="section-padding bg-muted/50">
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
              Skills & Technologies
            </Text>
            <Text variant="p" size="lg" color="secondary" className="max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and the technologies I work with
            </Text>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-accent text-primary'
                    : 'bg-background text-secondary hover:bg-primary hover:text-background border border-secondary/20'
                }`}
              >
                {/* Icon placeholder - you would need to add appropriate icons */}
                <span>{category.name}</span>
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="skill-grid"
          >
            {filteredSkills.map((skill, index) => (
              <SkillIcon
                key={`${skill.name}-${index}`}
                name={skill.name}
                icon={skill.icon}
                level={skill.level}
                category={skill.category}
              />
            ))}
          </motion.div>

          {/* Skills Overview */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Technical Proficiency */}
            <Card padding="lg">
              <Text variant="h3" weight="semibold" className="mb-6">
                Technical Proficiency
              </Text>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Text variant="p" color="secondary">Frontend Development</Text>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-accent" />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Text variant="p" color="secondary">Backend Development</Text>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-accent" />
                    ))}
                    <div className="w-2 h-2 rounded-full bg-secondary/30" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Text variant="p" color="secondary">Machine Learning</Text>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-accent" />
                    ))}
                    <div className="w-2 h-2 rounded-full bg-secondary/30" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Text variant="p" color="secondary">Database Management</Text>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-accent" />
                    ))}
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-secondary/30" />
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Learning Goals */}
            <Card padding="lg">
              <Text variant="h3" weight="semibold" className="mb-6">
                Currently Learning
              </Text>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <Text variant="p" color="secondary">Advanced Deep Learning architectures</Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <Text variant="p" color="secondary">Cloud deployment strategies</Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <Text variant="p" color="secondary">System design and architecture</Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <Text variant="p" color="secondary">Advanced NLP techniques</Text>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Text variant="p" color="secondary" className="mb-4">
              Always eager to learn new technologies and take on challenging projects.
            </Text>
            <Text variant="p" color="accent" weight="medium">
              Let's create something innovative together!
            </Text>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;