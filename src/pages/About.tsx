
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
    src="/profile.webp" 
    alt="Profile" 
    className="w-full h-full object-cover"
  />
</div>
              </div>

              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-semibold mb-4">Hello there, I'm Amarnadh Nagireddy</h2>
                <p className="text-cosmos-galaxy mb-4 text-justify">
                  I'm a passionate web developer with over 2 years of experience creating interactive 
                  and responsive web applications. My journey in web development began with a curiosity 
                  about how websites worked, and it evolved into a career where I get to build digital 
                  experiences that people love to use.
                </p>
                <p className="text-cosmos-galaxy text-justify">
                I’m a frontend development specialist with expertise in React and TypeScript, complemented by strong skills in Django for backend work. I thrive at the crossroads of design and development, crafting full-stack solutions that seamlessly blend aesthetics with functionality.
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
            During my studies, I took on some side projects that threw me into the deep end of real-world coding. It was a whirlwind, but it taught me how to roll with the punches and meet all kinds of challenges head-on.
            
            </p>
            
            <p className="text-cosmos-galaxy">
    Now, as I’m graduating, I’m ready to jump into the tech world as a full-stack developer. I’m excited to keep learning, tackle new tools, and create web experiences that make a difference.
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
