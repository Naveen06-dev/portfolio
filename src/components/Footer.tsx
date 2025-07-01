import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Naveen06-dev" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200 p-2"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/feed/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200 p-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <div className="relative group">
              <div className="text-slate-400 hover:text-white transition-colors duration-200 p-2 cursor-pointer">
                <Mail size={24} />
              </div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-white text-slate-800 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                naveenkvg8@gmail.com
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-slate-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>by NAVEEN</span>
          </div>
          
          <div className="text-slate-400 text-sm">
            © {currentYear} NAVEEN. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;