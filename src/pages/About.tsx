
import React from 'react';
import { motion } from 'framer-motion';
import { Code, PenTool, Database, Globe, Lightbulb, Clock } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Frontend Development', icon: <Code size={24} /> },
    { name: 'Backend Development', icon: <Database size={24} /> },
    { name: 'Responsive Web Design', icon: <Globe size={24} /> },
    { name: 'Problem Solving', icon: <Lightbulb size={24} /> },
    { name: 'Time Management', icon: <Clock size={24} /> }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-gradient">Me</span>
        </motion.h1>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="glassmorphism p-8 md:p-10 rounded-lg">
            <motion.div 
              className="flex flex-col md:flex-row gap-10 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-cosmos-purple">
                  <img 
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-semibold mb-4">Hello there, I'm John Doe</h2>
                <p className="text-cosmos-galaxy mb-4">
                  I'm a passionate web developer with over 5 years of experience creating interactive 
                  and responsive web applications. My journey in web development began with a curiosity 
                  about how websites worked, and it evolved into a career where I get to build digital 
                  experiences that people love to use.
                </p>
                <p className="text-cosmos-galaxy">
                  Based in San Francisco, I specialize in frontend development with React and TypeScript, 
                  though I'm comfortable working across the full stack. I love the intersection of design 
                  and development, creating solutions that are both beautiful and functional.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>
          
          <div className="glassmorphism p-8 md:p-10 rounded-lg">
            <p className="text-cosmos-galaxy mb-6">
              My journey into web development started when I was in college studying Computer Science. 
              I was fascinated by the way websites could be both functional and beautiful, and I wanted to 
              learn how to create them myself.
            </p>
            
            <p className="text-cosmos-galaxy mb-6">
              After graduating, I joined a small web agency where I got to work on a variety of projects 
              for different clients. This experience was invaluable as it taught me how to adapt to different 
              requirements and work effectively under pressure.
            </p>
            
            <p className="text-cosmos-galaxy">
              Today, I work as a full-stack developer at a tech startup, where I'm responsible for building 
              and maintaining our web platform. I'm constantly learning new technologies and techniques to 
              improve my skills and deliver better products.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="glassmorphism p-6 rounded-lg flex items-center gap-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-cosmos-purple">{skill.icon}</div>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
