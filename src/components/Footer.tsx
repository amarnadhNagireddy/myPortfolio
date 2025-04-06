
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-cosmos-stardust">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-xl">
              <span className="text-gradient">Amarnadh </span>Nagireddy
            </h3>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/amarnadhNagireddy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cosmos-galaxy hover:text-cosmos-star transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/amarnadhnagireddy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cosmos-galaxy hover:text-cosmos-star transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            
            <a 
              href="mailto:amarnadh.nagireddy@outlook.com" 
              className="text-cosmos-galaxy hover:text-cosmos-star transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-cosmos-galaxy text-sm">
          <p>© {new Date().getFullYear()} Amarnadh Nagireddy All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
