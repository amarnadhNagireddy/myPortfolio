
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Hero from '../components/Hero';
import ProjectCard, { ProjectData } from '../components/ProjectCard';
import { Link } from 'react-router-dom';



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
