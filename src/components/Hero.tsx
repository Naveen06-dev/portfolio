import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're at the top of the page (home section)
      setIsHomeVisible(window.scrollY < window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                NAVEEN
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Full-Stack Developer passionate about creating beautiful, functional web experiences
              that make a difference.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View My Work
            </button>
            {/* <button className="border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-all duration-200">
              Download Resume
            </button> */}
          </div>
        </div>
      </div>

      {/* Fixed position arrow that stays at bottom of viewport */}
      {isHomeVisible && (
        <button
          onClick={scrollToAbout}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-slate-600 hover:text-blue-600 transition-colors duration-200 animate-bounce z-50"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={24} />
        </button>
      )}
    </section>
  );
};

export default Hero;