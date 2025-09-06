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

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div>
              <span className="text-xl font-medium text-gray-900">Samridhi Nandwani</span>
            </div>
            <p className="text-gray-600 max-w-sm">
              Interaction Designer crafting meaningful digital experiences through thoughtful design.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 text-gray-600" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-sm text-gray-500">
            © {currentYear} Samridhi Nandwani. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;