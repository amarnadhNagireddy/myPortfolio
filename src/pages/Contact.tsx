
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in <span className="text-gradient">Touch</span>
        </motion.h1>
        
        <motion.p
          className="text-cosmos-galaxy max-w-2xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Have a project in mind or want to discuss potential opportunities? 
          Feel free to reach out through the form below or using my contact information.
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="glassmorphism p-8 rounded-lg h-full">
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-cosmos-purple mt-1" size={20} />
                  <div>
                    <h3 className="text-sm font-medium mb-1">Email</h3>
                    <a href="mailto:contact@example.com" className="text-cosmos-galaxy hover:text-cosmos-star transition-colors">
                    amarnadh.nagireddy@outlook.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="text-cosmos-purple mt-1" size={20} />
                  <div>
                    <h3 className="text-sm font-medium mb-1">Location</h3>
                    <p className="text-cosmos-galaxy">
                      Rajahmundry, Andhra Pradesh, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-cosmos-purple mt-1" size={20} />
                  <div>
                    <h3 className="text-sm font-medium mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-cosmos-galaxy hover:text-cosmos-star transition-colors">
                      +91 70321 45327
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-sm font-medium mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/amarnadhNagireddy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-cosmos-stardust flex items-center justify-center text-cosmos-star hover:bg-cosmos-purple transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/amarnadhnagireddy/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-cosmos-stardust flex items-center justify-center text-cosmos-star hover:bg-cosmos-purple transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
