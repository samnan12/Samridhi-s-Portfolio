'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:samridhi@example.com',
      icon: Mail,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/samridhi-nandwani',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/samridhi-nandwani',
      icon: Github,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/samridhi_design',
      icon: Twitter,
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-primary text-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-heading font-bold">Samridhi Nandwani</h3>
            <p className="text-secondary-300 max-w-sm">
              Interaction Designer crafting meaningful digital experiences through thoughtful design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-primary-800 hover:bg-accent transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-heading font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-heading font-semibold">Let's Connect</h4>
            <div className="space-y-2">
              <p className="text-secondary-300">
                Ready to work together on your next project?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-accent hover:text-accent-300 transition-colors font-medium"
              >
                Get in touch
                <motion.span
                  className="ml-1"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-primary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-secondary-400 text-sm">
            © {currentYear} Samridhi Nandwani. All rights reserved.
          </p>
          <p className="text-secondary-400 text-sm mt-2 md:mt-0">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
