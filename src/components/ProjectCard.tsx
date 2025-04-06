import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  tags: string[];
  codeUrl?: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="glassmorphism overflow-hidden card-hover"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-cosmos-galaxy mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-cosmos-stardust text-cosmos-star"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.codeUrl && (
          <div className="flex items-center gap-2">
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-cosmos-galaxy hover:text-cosmos-star"
            >
              <Github size={16} />
              <span>Source Code</span>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
