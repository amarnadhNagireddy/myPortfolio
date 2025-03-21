
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        isScrolled ? 'bg-cosmos-space bg-opacity-80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <NavLink 
          to="/" 
          className="font-bold text-2xl text-cosmos-star"
        >
          <span className="text-gradient">Cosmo</span>Folio
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Projects
          </NavLink>
          <NavLink to="/experience" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Experience
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-cosmos-star focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 z-50 bg-cosmos-space bg-opacity-95 flex flex-col justify-center items-center md:hidden transition-opacity duration-300 ease-in-out ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col items-center space-y-6">
            <NavLink to="/" className="text-2xl font-medium text-cosmos-star hover:text-cosmos-purple transition-colors">
              Home
            </NavLink>
            <NavLink to="/about" className="text-2xl font-medium text-cosmos-star hover:text-cosmos-purple transition-colors">
              About
            </NavLink>
            <NavLink to="/projects" className="text-2xl font-medium text-cosmos-star hover:text-cosmos-purple transition-colors">
              Projects
            </NavLink>
            <NavLink to="/experience" className="text-2xl font-medium text-cosmos-star hover:text-cosmos-purple transition-colors">
              Experience
            </NavLink>
            <NavLink to="/contact" className="text-2xl font-medium text-cosmos-star hover:text-cosmos-purple transition-colors">
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
