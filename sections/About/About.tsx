import React from 'react';
import { motion } from 'framer-motion';
import Text from '../../components/ui/atoms/Text';
import Card from '../../components/ui/atoms/Card';
import Badge from '../../components/ui/atoms/Badge';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
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

  const highlights = [
    '🎯 Target: 60 LPA within 3 years',
    '🤖 AI & ML Enthusiast',
    '💡 Problem Solver',
    '🚀 Fast Learner',
    '👥 Team Player',
    '📚 Continuous Learning',
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      specialization: 'Artificial Intelligence & Machine Learning',
      institution: 'University Name',
      year: '2022 - 2026 (Expected)',
      current: '3rd Year',
    },
  ];

  const interests = [
    'Machine Learning',
    'Deep Learning',
    'Natural Language Processing',
    'Web Development',
    'Cloud Computing',
    'Competitive Programming',
  ];

  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
            <Text variant="h2" size="4xl" weight="bold" color="primary" className="heading-primary">
              About Me
            </Text>
            <Text variant="p" size="lg" color="secondary" className="max-w-2xl mx-auto">
              Passionate about AI, ML, and creating innovative solutions that make a difference
            </Text>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card padding="lg">
                <Text variant="h3" weight="semibold" className="mb-4">
                  My Journey
                </Text>
                <Text variant="p" color="secondary" className="space-y-4">
                  <p>
                    Hello! I'm SAI KRUPA NAIK D, a 3rd-year Computer Science Engineering
                    student specializing in Artificial Intelligence and Machine Learning.
                    My journey into tech started with curiosity about how things work and has
                    evolved into a passion for creating innovative solutions.
                  </p>
                  <p>
                    I'm particularly fascinated by the potential of AI and ML to solve
                    real-world problems and improve people's lives. Whether it's developing
                    predictive models, building intelligent systems, or creating user-friendly
                    applications, I love tackling challenges that push the boundaries of
                    what's possible.
                  </p>
                  <p>
                    My goal is to become a high-impact developer with a target of achieving
                    a 60 LPA package within the next 3 years. I'm constantly learning,
                    experimenting with new technologies, and working on projects that help
                    me grow both technically and professionally.
                  </p>
                </Text>
              </Card>
            </motion.div>

            {/* Highlights & Education */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Education */}
              <Card padding="lg">
                <Text variant="h3" weight="semibold" className="mb-4">
                  Education
                </Text>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="space-y-2">
                      <Text variant="h4" weight="semibold">
                        {edu.degree}
                      </Text>
                      <Text variant="p" color="accent" size="sm">
                        {edu.specialization}
                      </Text>
                      <Text variant="p" color="secondary" size="sm">
                        {edu.institution}
                      </Text>
                      <div className="flex gap-2">
                        <Badge variant="outline" size="sm">
                          {edu.year}
                        </Badge>
                        <Badge variant="accent" size="sm">
                          {edu.current}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Key Highlights */}
              <Card padding="lg">
                <Text variant="h3" weight="semibold" className="mb-4">
                  Key Highlights
                </Text>
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-secondary"
                    >
                      <span className="text-accent">{highlight.split(' ')[0]}</span>
                      <span>{highlight.split(' ').slice(1).join(' ')}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Areas of Interest */}
          <motion.div variants={itemVariants} className="mt-12">
            <Card padding="lg">
              <Text variant="h3" weight="semibold" className="mb-6 text-center">
                Areas of Interest
              </Text>
              <div className="flex flex-wrap justify-center gap-3">
                {interests.map((interest, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    size="md"
                    className="hover:bg-accent hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Text variant="p" color="secondary" className="mb-6">
              I'm always open to discussing new opportunities, interesting projects,
              or just having a chat about technology and innovation.
            </Text>
            <Text variant="p" color="accent" weight="medium">
              Let's build something amazing together!
            </Text>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;