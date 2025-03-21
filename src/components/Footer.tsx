
import React from 'react';
import { GitHub, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-cosmos-stardust">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-xl">
              <span className="text-gradient">Cosmo</span>Folio
            </h3>
            <p className="mt-2 text-cosmos-galaxy text-sm">
              Designed with precision, built with passion.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cosmos-galaxy hover:text-cosmos-star transition-colors duration-300"
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cosmos-galaxy hover:text-cosmos-star transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cosmos-galaxy hover:text-cosmos-star transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-cosmos-galaxy hover:text-cosmos-star transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-cosmos-galaxy text-sm">
          <p>© {new Date().getFullYear()} CosmoFolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
