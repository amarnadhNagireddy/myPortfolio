
import React, { useEffect } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    // Smooth scroll to anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (
        anchor &&
        anchor.hash &&
        anchor.pathname === window.location.pathname &&
        anchor.hostname === window.location.hostname
      ) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
          
          // Update URL but don't scroll to it
          window.history.pushState({}, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
