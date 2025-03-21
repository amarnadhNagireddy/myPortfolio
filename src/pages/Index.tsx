
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Hero from '../components/Hero';
import ProjectCard, { ProjectData } from '../components/ProjectCard';
import { Link } from 'react-router-dom';

const projectsData: ProjectData[] = [
  {
    id: 'project1',
    title: 'Galaxy Explorer',
    description: 'An interactive web application for exploring galaxies and celestial objects.',
    image: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Three.js', 'WebGL'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com'
  },
  {
    id: 'project2',
    title: 'Nebula Dashboard',
    description: 'A responsive admin dashboard with dark mode and data visualization.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80',
    tags: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com'
  },
  {
    id: 'project3',
    title: 'Stellar E-Commerce',
    description: 'A full-stack e-commerce platform with payment integration and user authentication.',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com'
  }
];

const Index: React.FC = () => {
  return (
    <>
      <Hero />
      
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About <span className="text-gradient">Me</span>
            </motion.h2>
            
            <motion.p
              className="text-cosmos-galaxy mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I'm a passionate developer who loves creating beautiful and functional digital experiences. 
              With a keen eye for design and a commitment to writing clean, efficient code, I build 
              applications that are both visually stunning and technically sound.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/about" className="inline-flex items-center text-cosmos-purple hover:text-opacity-80 transition-colors">
                <span className="mr-1">Read more about me</span>
                <ChevronRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section id="projects" className="py-20 bg-cosmos-nebula bg-opacity-30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            
            <motion.p
              className="text-cosmos-galaxy max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Here are some of my recent works. Each project is a unique journey into problem-solving and creativity.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/projects" className="btn btn-outline">
                View All Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          
          <motion.p
            className="text-cosmos-galaxy max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/contact" className="btn btn-primary">
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
