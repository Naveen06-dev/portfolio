import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import profileImg from '../assets/naveen.jpg'; // Adjust the path if needed

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design Focus",
      description: "Creating intuitive interfaces with attention to user experience"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience building 
              web applications that users love. My journey started with a curiosity about how 
              things work on the web, and it's evolved into a career focused on creating 
              meaningful digital experiences.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe 
              in continuous learning and staying at the forefront of web development trends.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">What I Focus On</h3>
              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800">{item.title}</h4>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-96 object-cover rounded-2xl shadow-lg filter grayscale transition-all duration-300 hover:grayscale-0 hover:scale-105 hover:shadow-2xl"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;