
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold gradient-text">
              <span className="text-3xl">.</span>dev
            </a>
            <p className="text-gray-400 mt-2">Java Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors hover-target">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors hover-target">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors hover-target">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors hover-target">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm hover-target">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm hover-target">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
