
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceItem, { ExperienceData } from '../components/ExperienceItem';
import { BadgeCheck, Download } from 'lucide-react';

const experienceData: ExperienceData[] = [
  {
    id: 'exp1',
    company: 'Pragmatics',
    role: 'Python Full Stack Intern',
    period: 'Aug 2022 - Dec 2022',
    description: 'Gained hands-on experience with Python programming including libraries such as NumPy and Pandas. Worked with MySQL to design databases, write queries, and manipulate data effectively.',
    technologies: ['Python', 'NumPy', 'Pandas', 'MySQL']
  },
  {
    id: 'exp2',
    company: 'Krify Software Solutions',
    role: 'Cybersecurity Intern',
    period: 'June 2024 - July 2024',
    description: 'Learned to identify and mitigate web vulnerabilities such as SQL Injection and Cross-Site Scripting (XSS). Applied best practices to enhance the security of web applications.',
    technologies: ['Cybersecurity', 'Web Security']
  }
];


const educationData = [
  {
    degree: 'Bachelor of Technology',
    institution: 'G M R Institute of Technology',
    period: '2023 - present',
    description: 'Currently pursuing  in Computer Science and Engineering, with a strong focus on Web development, Data Structures and Computer Networks'
  },
  {
    degree: 'Diploma',
    institution: 'GIET, Rajahmundry',
    period: '2020 - 2023',
    description: "Completed a three-year Diploma in Computer Engineering, gaining knowledge in core areas such as programming, networks, and databases."
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
            href="https://drive.usercontent.google.com/download?id=1uVT10YjYBhYbhHPd0j4g6_fBxjOBntuX&export=download&authuser=0&confirm=t&uuid=afd8d092-4c6b-41a8-a240-7e7c07ece54b&at=APcmpozTPjdnmD2WEL2A1oDUZLFM:1743957459878" 
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
