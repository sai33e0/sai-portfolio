import React from 'react';
import { motion } from 'framer-motion';
import Text from '../../components/ui/atoms/Text';
import Card from '../../components/ui/atoms/Card';
import Badge from '../../components/ui/atoms/Badge';

const Fun: React.FC = () => {
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

  const hobbies = [
    {
      title: '🎮 Gaming',
      description: 'Strategic games and problem-solving puzzles that keep my mind sharp',
      details: 'Chess, Sudoku, Strategy games',
      icon: '🎯',
    },
    {
      title: '📚 Reading',
      description: 'Tech blogs, AI research papers, and sci-fi novels',
      details: 'Machine Learning, Space Exploration, Future Tech',
      icon: '📖',
    },
    {
      title: '🎵 Music',
      description: 'Music helps me focus and find creative solutions',
      details: 'Lo-fi beats, Classical, Electronic',
      icon: '🎧',
    },
    {
      title: '🏃‍♂️ Fitness',
      description: 'Staying active helps maintain work-life balance',
      details: 'Running, Yoga, Home workouts',
      icon: '💪',
    },
    {
      title: '🍳 Cooking',
      description: 'Experimenting with recipes and culinary creativity',
      details: 'Italian, Asian, Fusion cuisine',
      icon: '👨‍🍳',
    },
    {
      title: '✈️ Travel',
      description: 'Exploring new places and experiencing different cultures',
      details: 'Road trips, Heritage sites, Nature',
      icon: '🌍',
    },
  ];

  const funFacts = [
    '☕ Can code for hours with just coffee',
    '🌙 Night owl programmer',
    '🧩 Love solving complex problems',
    '🎯 Goal-oriented and focused',
    '🤝 Believe in collaborative success',
    '🚀 Always ready for new challenges',
  ];

  const interests = [
    'Space Exploration',
    'Quantum Computing',
    'Robotics',
    'Sustainable Technology',
    'Bioinformatics',
    'Cybersecurity',
    'Blockchain',
    'AR/VR Development',
  ];

  return (
    <section id="fun" className="section-padding">
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
              Beyond Code
            </Text>
            <Text variant="p" size="lg" color="secondary" className="max-w-2xl mx-auto">
              A glimpse into my hobbies, interests, and what makes me who I am
            </Text>
          </motion.div>

          {/* Hobbies Grid */}
          <motion.div variants={itemVariants}>
            <Text variant="h3" weight="semibold" className="text-center mb-8">
              Hobbies & Interests
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card hover={true} padding="lg" className="text-center space-y-4 h-full">
                    <div className="text-4xl">{hobby.icon}</div>
                    <div className="space-y-2">
                      <Text variant="h4" weight="semibold">
                        {hobby.title}
                      </Text>
                      <Text variant="p" color="secondary" size="sm">
                        {hobby.description}
                      </Text>
                      <Badge variant="outline" size="sm">
                        {hobby.details}
                      </Badge>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Facts */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card padding="lg">
              <Text variant="h3" weight="semibold" className="mb-6">
                Fun Facts About Me
              </Text>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {funFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-secondary p-2 rounded-lg bg-muted/50"
                  >
                    <span>{fact.split(' ')[0]}</span>
                    <span>{fact.split(' ').slice(1).join(' ')}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card padding="lg">
              <Text variant="h3" weight="semibold" className="mb-6">
                Curious About
              </Text>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge
                    key={index}
                    variant="accent"
                    size="sm"
                    className="hover:bg-primary hover:text-background transition-colors duration-200 cursor-default"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Personal Philosophy */}
          <motion.div variants={itemVariants}>
            <Card padding="lg" className="text-center">
              <Text variant="h3" weight="semibold" className="mb-6">
                My Philosophy
              </Text>
              <div className="space-y-4 max-w-3xl mx-auto">
                <Text variant="p" color="secondary" className="text-body">
                  "I believe that the intersection of technology and creativity is where
                  innovation happens. Whether I'm coding an AI model or experimenting in
                  the kitchen, I'm always looking for ways to combine logic with imagination
                  to create something meaningful."
                </Text>
                <Text variant="p" color="secondary" className="text-body">
                  "Continuous learning isn't just about staying updated with technology –
                  it's about growing as a person, understanding different perspectives,
                  and finding inspiration in unexpected places."
                </Text>
              </div>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <Text variant="p" color="secondary" className="mb-6">
              Life is too short for boring projects and uninteresting conversations.
            </Text>
            <Text variant="p" color="accent" weight="medium">
              If you share similar interests or have something exciting to work on – let's talk!
            </Text>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Fun;