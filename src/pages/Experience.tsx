
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceItem, { ExperienceData } from '../components/ExperienceItem';
import { BadgeCheck, Download } from 'lucide-react';

const experienceData: ExperienceData[] = [
  {
    id: 'exp1',
    company: 'TechNova',
    role: 'Senior Frontend Developer',
    period: 'Jan 2022 - Present',
    description: 'Lead frontend development for a SaaS platform used by over 10,000 customers. Improved performance by 40% and implemented a new design system.',
    technologies: ['React', 'TypeScript', 'Redux', 'Tailwind CSS']
  },
  {
    id: 'exp2',
    company: 'DigitalHorizon',
    role: 'Full Stack Developer',
    period: 'Mar 2019 - Dec 2021',
    description: 'Developed and maintained multiple client websites and web applications. Collaborated with designers and back-end developers to create seamless user experiences.',
    technologies: ['JavaScript', 'Vue.js', 'Node.js', 'MongoDB']
  },
  {
    id: 'exp3',
    company: 'CreativeSpace',
    role: 'Web Developer',
    period: 'May 2017 - Feb 2019',
    description: 'Designed and developed responsive websites for clients across various industries. Implemented SEO best practices and performance optimizations.',
    technologies: ['HTML/CSS', 'JavaScript', 'WordPress', 'PHP']
  }
];

const educationData = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Stanford University',
    period: '2015 - 2017',
    description: 'Specialized in Human-Computer Interaction and Web Technologies. Thesis on adaptive user interfaces.'
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'MIT',
    period: '2011 - 2015',
    description: 'Graduated with honors. Participated in multiple hackathons and coding competitions.'
  }
];

const Experience: React.FC = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-gradient">Experience</span>
        </motion.h1>
        
        <motion.p
          className="text-cosmos-galaxy max-w-2xl mx-auto mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My professional journey in the world of web development and design. 
          Below is a timeline of my career and educational background.
        </motion.p>
        
        <motion.div
          className="text-right mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a 
            href="/resume.pdf" 
            className="inline-flex items-center gap-2 btn btn-outline"
            download
          >
            <Download size={16} />
            <span>Download Resume</span>
          </a>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Work Experience
          </motion.h2>
          
          <div className="mb-20">
            {experienceData.map((experience, index) => (
              <ExperienceItem key={experience.id} experience={experience} index={index} />
            ))}
          </div>
          
          <motion.h2
            className="text-2xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Education
          </motion.h2>
          
          <div>
            {educationData.map((education, index) => (
              <motion.div
                key={index}
                className="mb-12 relative pl-8 ml-8 before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:w-px before:bg-cosmos-stardust"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-cosmos-blue flex items-center justify-center">
                  <BadgeCheck size={16} className="text-cosmos-space" />
                </div>

                <div className="glassmorphism p-6">
                  <h3 className="text-xl font-semibold mb-1">{education.degree}</h3>
                  <div className="flex items-center text-cosmos-blue mb-4">
                    <span className="font-medium">{education.institution}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-cosmos-galaxy">{education.period}</span>
                  </div>
                  
                  <p className="text-cosmos-galaxy">{education.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
