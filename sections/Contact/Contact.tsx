import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Text from '../../components/ui/atoms/Text';
import Input from '../../components/ui/atoms/Input';
import Button from '../../components/ui/atoms/Button';
import SocialIcon from '../../components/ui/molecules/SocialIcon';
import Card from '../../components/ui/atoms/Card';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission (replace with actual implementation)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Here you would normally send the data to your backend/service
      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      platform: 'email' as const,
      url: 'mailto:saikrupanaik.d@example.com',
      label: 'Email',
    },
    {
      platform: 'linkedin' as const,
      url: 'https://linkedin.com/in/saikrupanaikd',
      label: 'LinkedIn',
    },
    {
      platform: 'github' as const,
      url: 'https://github.com/saikrupanaikd',
      label: 'GitHub',
    },
    {
      platform: 'twitter' as const,
      url: 'https://twitter.com/saikrupanaikd',
      label: 'Twitter',
    },
  ];

  const contactInfo = [
    {
      icon: 'email',
      label: 'Email',
      value: 'saikrupanaik.d@example.com',
      href: 'mailto:saikrupanaik.d@example.com',
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
      href: 'tel:+91XXXXX',
    },
    {
      icon: 'location',
      label: 'Location',
      value: 'India',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/50">
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
              Get In Touch
            </Text>
            <Text variant="p" size="lg" color="secondary" className="max-w-2xl mx-auto">
              Whether you want to discuss a project, share ideas, or just say hello – I'd love to hear from you!
            </Text>
          </motion.div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card padding="lg">
                <Text variant="h3" weight="semibold" className="mb-6">
                  Send a Message
                </Text>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Name"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                  />

                  <Input
                    label="Email"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />

                  <div className="w-full">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-primary mb-2"
                    >
                      Message
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello..."
                      required
                      rows={6}
                      className="form-textarea"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary/30 border-t-accent rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm"
                    >
                      Thank you for your message! I'll get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
                    >
                      Oops! Something went wrong. Please try again or contact me directly.
                    </motion.div>
                  )}
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Quick Contact */}
              <Card padding="lg">
                <Text variant="h3" weight="semibold" className="mb-6">
                  Contact Information
                </Text>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className={`flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors duration-200 ${
                        info.href === '#' ? 'cursor-default' : ''
                      }`}
                      onClick={(e) => info.href === '#' && e.preventDefault()}
                    >
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Text variant="span" className="text-accent">
                          {info.icon === 'email' && '✉️'}
                          {info.icon === 'phone' && '📞'}
                          {info.icon === 'location' && '📍'}
                        </Text>
                      </div>
                      <div>
                        <Text variant="small" color="secondary">
                          {info.label}
                        </Text>
                        <Text variant="p" weight="medium">
                          {info.value}
                        </Text>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card padding="lg">
                <Text variant="h3" weight="semibold" className="mb-6">
                  Connect With Me
                </Text>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <SocialIcon
                      key={social.platform}
                      platform={social.platform}
                      url={social.url}
                      label={social.label}
                      size="md"
                      showLabel={true}
                    />
                  ))}
                </div>
              </Card>

              {/* Availability */}
              <Card padding="lg">
                <Text variant="h3" weight="semibold" className="mb-4">
                  Availability
                </Text>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <Text variant="small" color="secondary">
                      Available for freelance projects
                    </Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <Text variant="small" color="secondary">
                      Open to collaboration
                    </Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <Text variant="small" color="secondary">
                      Response time: 24-48 hours
                    </Text>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Closing Message */}
          <motion.div variants={itemVariants} className="text-center">
            <Card padding="lg" className="max-w-2xl mx-auto">
              <Text variant="h3" weight="semibold" className="mb-4">
                Let's Create Something Amazing Together
              </Text>
              <Text variant="p" color="secondary" className="mb-6">
                Whether you have a project in mind, want to discuss opportunities, or simply want to connect – I'm excited to hear from you!
              </Text>
              <Text variant="p" color="accent" weight="medium">
                Your next project could be just one message away.
              </Text>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;