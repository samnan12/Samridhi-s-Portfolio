'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { aboutInfo } from '@/data/portfolio';
import { ArrowRight, Award, Users, Lightbulb, Heart } from 'lucide-react';

const AboutPage = () => {
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
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-light text-gray-900">
                About Me
              </h1>
              <p className="text-lg text-gray-600">
                {aboutInfo.tagline}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Bio Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-gray-900">My Story</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {aboutInfo.bio}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {aboutInfo.philosophy}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Experience Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-light text-gray-900">Experience</h2>
            <div className="space-y-8">
              {aboutInfo.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-2 border-gray-200 pl-6"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.duration}</p>
                    <p className="text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Skills Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-light text-gray-900">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aboutInfo.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 text-gray-600" />
                    </div>
                    <h3 className="font-medium text-gray-900">
                      {skill}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-light text-gray-900">What Drives Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  User-Centered
                </h3>
                <p className="text-gray-600">
                  Every design decision is made with the user&apos;s needs, goals, and context in mind.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto">
                  <Lightbulb className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  Pushing boundaries and exploring new possibilities to create memorable experiences.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  Empathy
                </h3>
                <p className="text-gray-600">
                  Understanding and connecting with users to create designs that truly resonate.
                </p>
              </motion.div>
            </div>
          </motion.div>
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
                Let&apos;s Create Something Amazing
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                I&apos;m always excited to work on new projects and collaborate with passionate teams. 
                Let&apos;s discuss how we can bring your vision to life.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-gray-600 hover:bg-gray-50">
                <Link href="/projects">
                  View My Work
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

export default AboutPage;