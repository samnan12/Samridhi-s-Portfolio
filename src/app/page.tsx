'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { featuredProjects, aboutInfo } from '@/data/portfolio';
import { ArrowRight, ExternalLink } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <h1 className="text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight">
                  Hi, I'm{' '}
                  <span className="text-accent">Samridhi</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-primary-600">
                  {aboutInfo.role}
                </h2>
                <p className="text-lg text-muted max-w-lg">
                  {aboutInfo.tagline}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button href="/projects" size="lg">
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl overflow-hidden">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 1, 0, -1, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-64 h-64 bg-accent/10 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-accent/20 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-accent/30 rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              A selection of my recent work showcasing user-centered design and innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-primary/10">
                    {/* Project Image */}
                    <div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent/5 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-24 h-24 bg-accent/20 rounded-2xl flex items-center justify-center">
                          <div className="w-12 h-12 bg-accent/40 rounded-lg"></div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-accent">
                          {project.category}
                        </span>
                        <span className="text-sm text-muted">
                          {project.year}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-heading font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted text-sm mb-4 line-clamp-2">
                        {project.shortDescription}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted">
                          {project.role}
                        </span>
                        <motion.div
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="w-4 h-4 text-accent" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button href="/projects" size="lg">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary">
                About Me
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                {aboutInfo.bio}
              </p>
              <p className="text-muted leading-relaxed">
                {aboutInfo.philosophy}
              </p>
              <Button href="/about" variant="outline">
                Learn More About Me
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl overflow-hidden">
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 2, 0, -2, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-48 h-48 bg-accent/20 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-accent/30 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-accent/50 rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;