
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export interface ExperienceData {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

interface ExperienceItemProps {
  experience: ExperienceData;
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, index }) => {
  return (
    <motion.div
      className="mb-12 relative pl-8 ml-8 before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:w-px before:bg-cosmos-stardust"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-cosmos-purple flex items-center justify-center">
        <Calendar size={16} className="text-cosmos-space" />
      </div>

      <div className="glassmorphism p-6">
        <h3 className="text-xl font-semibold mb-1">{experience.role}</h3>
        <div className="flex items-center text-cosmos-purple mb-4">
          <span className="font-medium">{experience.company}</span>
          <span className="mx-2">•</span>
          <span className="text-sm text-cosmos-galaxy">{experience.period}</span>
        </div>
        
        <p className="text-cosmos-galaxy mb-4">{experience.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, i) => (
            <span 
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-cosmos-stardust text-cosmos-star"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
