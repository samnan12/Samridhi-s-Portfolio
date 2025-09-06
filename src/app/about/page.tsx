'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { aboutInfo } from '@/data/portfolio';
import { ArrowRight, Award, Users, Lightbulb, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              {aboutInfo.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary">
                My Story
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                {aboutInfo.bio}
              </p>
              <p className="text-muted leading-relaxed">
                {aboutInfo.philosophy}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl overflow-hidden">
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
                  <div className="w-64 h-64 bg-accent/20 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-accent/30 rounded-full flex items-center justify-center">
                      <Heart className="w-16 h-16 text-accent/60" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              A comprehensive toolkit for creating exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutInfo.skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-primary">
                    {skill}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              Experience
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              My professional journey in design and user experience.
            </p>
          </motion.div>

          <div className="space-y-8">
            {aboutInfo.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl p-8 border border-primary/10"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-primary mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <span className="text-muted text-sm mt-2 md:mt-0">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-muted leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              What Drives Me
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              The principles and values that guide my design process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary">
                User-Centered
              </h3>
              <p className="text-muted">
                Every design decision is made with the user's needs, goals, and context in mind.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto">
                <Lightbulb className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary">
                Innovation
              </h3>
              <p className="text-muted">
                Pushing boundaries and exploring new possibilities to create memorable experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary">
                Empathy
              </h3>
              <p className="text-muted">
                Understanding and connecting with users to create designs that truly resonate.
              </p>
            </motion.div>
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
              Let's Create Something Amazing
            </h2>
            <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with passionate teams. 
              Let's discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/projects" variant="outline" size="lg">
                View My Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
