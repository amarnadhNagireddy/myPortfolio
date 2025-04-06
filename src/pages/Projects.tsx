
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { ProjectData } from '../components/ProjectCard';

const projectsData: ProjectData[] = [
  {
    id: 'project1',
    title: 'Image Encryption & Decryption',
    description: 'The app processes the uploaded image, applies a manipulation (encryption or decryption), and then displays both the original and manipulated images.',
    tags: ['Python', 'Flask'],
    codeUrl: 'https://github.com/amarnadhNagireddy/image_encryption_decryption.git'
  },
  {
    id: 'project2',
    title: 'Todo List',
    description: 'simple To-Do web application built using Django that allows users to manage tasks efficiently. ',
    tags: ['Django', 'Postgresql', 'CSS'],
    codeUrl: 'https://github.com/amarnadhNagireddy/todo_list.git'
  },
  {
    id: 'project3',
    title: 'Portfolio',
    description: 'Developed a personal portfolio website to showcase my skills, projects, and professional experience.',
    tags: ['Typescript', 'React', 'Tailwind CSS'],
    codeUrl: 'https://github.com/amarnadhNagireddy/myPortfolio.git'
  },
];

// Get all unique tags from projects
const allTags = Array.from(new Set(projectsData.flatMap(project => project.tags)));

const Projects: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  const filteredProjects = selectedTag 
    ? projectsData.filter(project => project.tags.includes(selectedTag))
    : projectsData;

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-gradient">Projects</span>
        </motion.h1>
        
        <motion.p
          className="text-cosmos-galaxy max-w-2xl mx-auto mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A showcase of my work, ranging from web applications to design projects. 
          Each project represents a unique challenge and solution.
        </motion.p>
        
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              selectedTag === null 
                ? 'bg-cosmos-purple text-white' 
                : 'bg-cosmos-stardust text-cosmos-star hover:bg-cosmos-comet'
            }`}
            onClick={() => setSelectedTag(null)}
          >
            All
          </button>
          
          {allTags.map((tag, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedTag === tag 
                  ? 'bg-cosmos-purple text-white' 
                  : 'bg-cosmos-stardust text-cosmos-star hover:bg-cosmos-comet'
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-cosmos-galaxy">No projects found with the selected tag.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
