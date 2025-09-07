'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
// Image not used on homepage
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { featuredProjects, aboutInfo, collaborations, publications } from '@/data/portfolio';
import { ArrowRight, User, Sparkles, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const HomePage = () => {
  const socialLinks = [
    { name: 'Github', href: 'https://github.com/samridhi-nandwani', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/samridhi-nandwani', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/samridhi_design', icon: Twitter },
    { name: 'Email', href: 'mailto:samridhi@example.com', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center"
                  >
                    <Sparkles className="w-4 h-4 text-primary-foreground" />
                  </motion.div>
                  <Badge variant="secondary" className="text-sm">
                    Available for work
                  </Badge>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight">
                  Hi, I&apos;m{' '}
                  <span className="gradient-text">Samridhi</span>
                </h1>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-muted-foreground">
                  {aboutInfo.role}
                </h2>
                
                <p className="text-xl text-muted-foreground measure leading-relaxed">
                  {aboutInfo.tagline}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link href="/contact">
                    Get In Touch
                  </Link>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
            target="_blank"
            rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl overflow-hidden">
                  <motion.div
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-80 h-80 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <div className="w-60 h-60 bg-gradient-to-br from-primary/40 to-primary/20 rounded-full flex items-center justify-center">
                        <div className="w-40 h-40 bg-gradient-to-br from-primary/60 to-primary/30 rounded-full flex items-center justify-center">
                          <Sparkles className="w-20 h-20 text-primary/80" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              Featured Work
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground measure mx-auto">
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
                      
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground">
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {project.year}
                        </Badge>
                        <motion.div
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        </motion.div>
                      </div>
                      
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <CardDescription className="text-sm mb-4 line-clamp-2">
                        {project.shortDescription}
                      </CardDescription>

                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="w-4 h-4 mr-2" />
                        {project.role}
                      </div>
                    </CardContent>
                  </Link>
                </Card>
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
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* About Preview Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <Badge variant="outline" className="mb-4">
                  About Me
                </Badge>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
                  About Me
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-xl text-muted-foreground measure leading-relaxed">
                  {aboutInfo.bio}
                </p>
                <p className="text-muted-foreground measure leading-relaxed">
                  {aboutInfo.philosophy}
                </p>
              </div>
              
              <Button asChild variant="outline" size="lg">
                <Link href="/about">
                  Learn More About Me
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl overflow-hidden">
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 3, 0, -3, 0]
                  }}
                  transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-64 h-64 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-40 h-40 bg-gradient-to-br from-primary/40 to-primary/20 rounded-full flex items-center justify-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary/60 to-primary/30 rounded-full flex items-center justify-center">
                        <Sparkles className="w-12 h-12 text-primary/80" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Experience Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Experience</Badge>
            <h2 className="text-4xl sm:text-5xl font-display font-bold">Experience</h2>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-6">
            {aboutInfo.experience.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
              >
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-muted-foreground mt-2">{exp.description}</p>
                </div>
                <Badge variant="secondary" className="shrink-0">{exp.duration}</Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Collaborations & Publications Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">Collaborations & Publications</Badge>
            <h2 className="text-4xl sm:text-5xl font-display font-bold">Collaborations & Publications</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Collaborations */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Collaborations</h3>
              {collaborations.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={item.link || '#'}
                  target={item.link ? '_blank' : undefined}
                  rel={item.link ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="block rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-5 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">{item.partner} • {item.year}</p>
                      <h4 className="text-lg font-medium mt-1">{item.title}</h4>
                      <p className="text-muted-foreground mt-2">{item.description}</p>
                    </div>
                    <Badge variant="secondary" className="shrink-0">{item.year}</Badge>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Publications */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Publications</h3>
              {publications.map((pub, idx) => (
                <motion.a
                  key={pub.id}
                  href={pub.link || '#'}
                  target={pub.link ? '_blank' : undefined}
                  rel={pub.link ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="block rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-5 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">{pub.venue} • {pub.year}</p>
                      <h4 className="text-lg font-medium mt-1">{pub.title}</h4>
                      {pub.authors && (
                        <p className="text-muted-foreground mt-2">{pub.authors.join(', ')}</p>
                      )}
                    </div>
                    <Badge variant="secondary" className="shrink-0">{pub.year}</Badge>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;