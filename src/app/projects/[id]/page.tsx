'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { projects } from '@/data/portfolio';
import { ArrowLeft, ExternalLink, Calendar, User, Tag, CheckCircle } from 'lucide-react';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Project Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/projects"
              className="inline-flex items-center text-accent hover:text-accent-600 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium">
                {project.category}
              </span>
              <span className="text-muted">{project.year}</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary">
              {project.title}
            </h1>

            <p className="text-xl text-muted leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-muted">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {project.role}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {project.year}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Images */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-accent/20 rounded-2xl flex items-center justify-center">
                    <div className="w-32 h-32 bg-accent/40 rounded-lg"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Process */}
              {project.process && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
                    Process
                  </h3>
                  <div className="space-y-4">
                    {project.process.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <p className="text-muted">{step}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Challenges */}
              {project.challenges && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
                    Challenges
                  </h3>
                  <div className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <p className="text-muted">{challenge}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Results */}
              {project.results && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
                    Results
                  </h3>
                  <div className="space-y-4">
                    {project.results.map((result, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="flex-shrink-0 w-5 h-5 text-accent mt-0.5" />
                        <p className="text-muted">{result}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tools */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                  Tools Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-2 bg-primary/10 text-primary text-sm rounded-lg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* External Link */}
              {project.externalLink && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Button
                    href={project.externalLink}
                    variant="outline"
                    className="w-full"
                  >
                    View Full Project
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              )}

              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-primary/5 rounded-2xl p-6"
              >
                <h4 className="font-heading font-semibold text-primary mb-4">
                  Project Details
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted">Category:</span>
                    <span className="text-primary font-medium">{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Year:</span>
                    <span className="text-primary font-medium">{project.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Role:</span>
                    <span className="text-primary font-medium">{project.role}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-between"
          >
            <Button href="/projects" variant="outline">
              <ArrowLeft className="mr-2 w-4 h-4" />
              All Projects
            </Button>
            <Button href="/contact" size="lg">
              Start a Project
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectPage;
