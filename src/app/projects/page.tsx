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
import { ArrowRight, Calendar, User, Sparkles, ExternalLink } from 'lucide-react';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center"
              >
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </motion.div>
              <Badge variant="secondary">Portfolio</Badge>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of my design work spanning user experience, interface design, and brand identity. 
              Each project represents a unique challenge and creative solution.
            </p>
          </motion.div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] bg-card/50 backdrop-blur-sm">
                  <Link href={`/projects/${project.id}`}>
                    {/* Project Image */}
                    <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-32 h-32 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary/50 to-primary/20 rounded-lg flex items-center justify-center">
                            <Sparkles className="w-8 h-8 text-primary/80" />
                          </div>
                        </div>
                      </motion.div>
                      
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary text-primary-foreground">
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>

                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3 mr-1" />
                          {project.year}
                        </div>
                      </div>
                      
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <CardDescription className="text-sm mb-4 line-clamp-3">
                        {project.shortDescription}
                      </CardDescription>

                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <User className="w-4 h-4 mr-2" />
                          {project.role}
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tools.slice(0, 3).map((tool) => (
                            <Badge
                              key={tool}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tool}
                            </Badge>
                          ))}
                          {project.tools.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{project.tools.length - 3}
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <span className="text-sm text-primary font-medium">
                            View Project
                          </span>
                          <motion.div
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="w-4 h-4 text-primary" />
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold">
                  Let&apos;s Work Together
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Have a project in mind? I&apos;d love to hear about it and explore how we can create something amazing together.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start a Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">
                    Learn More About Me
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;