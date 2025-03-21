
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { ProjectData } from '../components/ProjectCard';

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
  },
  {
    id: 'project4',
    title: 'Cosmic Blog Platform',
    description: 'A modern blog platform with markdown support and search functionality.',
    image: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'GraphQL', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com'
  },
  {
    id: 'project5',
    title: 'Orbit Weather App',
    description: 'A beautiful weather application with detailed forecasts and animations.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Weather API', 'CSS Animations'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com'
  },
  {
    id: 'project6',
    title: 'Solar System Visualizer',
    description: 'An educational 3D visualization of our solar system with accurate scales and orbits.',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80',
    tags: ['Three.js', 'JavaScript', 'WebGL'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com'
  }
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
