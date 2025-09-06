'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { featuredProjects, aboutInfo } from '@/data/portfolio';
import { ArrowRight, ExternalLink, Calendar, User } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                Hey, I&apos;m{' '}
                <span className="font-medium">Samridhi</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-600 font-light">
                {aboutInfo.role}
              </h2>
            </div>

            <div className="space-y-6 max-w-2xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutInfo.bio}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {aboutInfo.philosophy}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-gray-600 hover:bg-gray-50">
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">About</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Experience</h3>
                    <p className="text-gray-700">4+ years</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Location</h3>
                    <p className="text-gray-700">India</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Specialization</h3>
                    <p className="text-gray-700">UX/UI Design</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Experience Includes:</h3>
                  <div className="flex flex-wrap gap-2">
                    {aboutInfo.skills.slice(0, 8).map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-gray-100 text-gray-700 border-0">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-2">Portfolio</h2>
              <p className="text-gray-600">A selection of my recent work</p>
            </div>

            <div className="space-y-12">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
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

                          <div className="flex items-center justify-between pt-4">
                            <span className="text-sm text-gray-500">
                              {project.role}
                            </span>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Button asChild variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">Let&apos;s Connect</h2>
              <p className="text-gray-600 max-w-2xl">
                I&apos;m always excited to work on new projects and collaborate with passionate teams. 
                Whether you have a specific project in mind or just want to discuss design, 
                I&apos;d love to hear from you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-gray-600 hover:bg-gray-50">
                <Link href="/about">
                  Learn More
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

export default HomePage;