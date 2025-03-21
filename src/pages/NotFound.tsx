
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
        </motion.div>
        
        <motion.h2 
          className="text-2xl md:text-3xl font-semibold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Lost in space
        </motion.h2>
        
        <motion.p
          className="text-cosmos-galaxy mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The page you are looking for doesn't exist or has been moved to another dimension.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/" className="btn btn-primary inline-flex items-center gap-2">
            <Home size={16} />
            <span>Return to Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
