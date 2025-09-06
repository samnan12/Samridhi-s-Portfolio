'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { projects } from '@/data/portfolio';
import { ArrowRight, Calendar, User } from 'lucide-react';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
              My Projects
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              A collection of my design work spanning user experience, interface design, and brand identity. 
              Each project represents a unique challenge and creative solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-primary/10 h-full">
                    {/* Project Image */}
                    <div className="relative h-56 bg-gradient-to-br from-accent/20 to-accent/5 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-32 h-32 bg-accent/20 rounded-2xl flex items-center justify-center">
                          <div className="w-16 h-16 bg-accent/40 rounded-lg"></div>
                        </div>
                      </motion.div>
                      
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-accent">
                          {project.category}
                        </span>
                        <div className="flex items-center text-sm text-muted">
                          <Calendar className="w-4 h-4 mr-1" />
                          {project.year}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-heading font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted text-sm mb-4 flex-grow line-clamp-3">
                        {project.shortDescription}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-muted">
                          <User className="w-4 h-4 mr-2" />
                          {project.role}
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tools.slice(0, 3).map((tool) => (
                            <span
                              key={tool}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                            >
                              {tool}
                            </span>
                          ))}
                          {project.tools.length > 3 && (
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                              +{project.tools.length - 3}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <span className="text-sm text-accent font-medium">
                            View Project
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
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-primary text-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it and explore how we can create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/about" variant="outline" size="lg">
                Learn More About Me
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
