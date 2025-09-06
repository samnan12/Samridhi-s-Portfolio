'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { projects } from '@/data/portfolio';
import { ArrowRight, Calendar, User } from 'lucide-react';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl font-light text-gray-900">
              Portfolio
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              A collection of my design work spanning user experience, interface design, and brand identity. 
              Each project represents a unique challenge and creative solution.
            </p>
          </motion.div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="border-0 shadow-none hover:shadow-sm transition-shadow">
                  <Link href={`/projects/${project.id}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Project Image */}
                      <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                            <div className="w-12 h-12 bg-gray-300 rounded"></div>
                          </div>
                        </div>
                        
                        {project.featured && (
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-gray-900 text-white border-0">
                              Featured
                            </Badge>
                          </div>
                        )}
                      </div>

                      {/* Project Content */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{project.category}</span>
                          <span>•</span>
                          <span>{project.year}</span>
                        </div>
                        
                        <h3 className="text-2xl font-light text-gray-900 group-hover:text-gray-700 transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {project.shortDescription}
                        </p>

                        <div className="space-y-3">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="w-4 h-4 mr-2" />
                            {project.role}
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {project.tools.slice(0, 4).map((tool) => (
                              <Badge
                                key={tool}
                                variant="secondary"
                                className="bg-gray-100 text-gray-700 border-0 text-xs"
                              >
                                {tool}
                              </Badge>
                            ))}
                            {project.tools.length > 4 && (
                              <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-0 text-xs">
                                +{project.tools.length - 4}
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <span className="text-sm text-gray-500">
                              View Project
                            </span>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-light text-gray-900">
                Let&apos;s Work Together
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have a project in mind? I&apos;d love to hear about it and explore how we can create something amazing together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-gray-600 hover:bg-gray-50">
                <Link href="/about">
                  Learn More About Me
                </Link>
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