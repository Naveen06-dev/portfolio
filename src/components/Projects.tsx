import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Number plate detection",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "data:image/jpeg;base64,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",
      technologies: ["React", "Python", "Flask"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.pexels.com/photos/7319066/pexels-photo-7319066.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Vue.js", "Firebase", "Vuex", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media performance tracking with data visualization and reporting features.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Next.js", "Python", "D3.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;