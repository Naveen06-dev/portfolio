import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      // company: "TechCorp Solutions",
      // location: "San Francisco, CA",
      // period: "2022 - Present",
      description: [
        "Led development of a microservices architecture serving 100K+ daily users",
        "Mentored junior developers and established coding standards",
        "Reduced application load time by 40% through optimization strategies"
      ]
    },
    {
      title: "Full-Stack Developer",
      // company: "StartupXYZ",
      // location: "Remote",
      // period: "2020 - 2022",
      description: [
        "Built and maintained React-based web applications",
        "Developed RESTful APIs using Node.js and Express",
        "Collaborated with design team to implement responsive UI/UX"
      ]
    },
    {
      title: "Frontend Developer",
      // company: "Digital Agency",
      // location: "New York, NY",
      // period: "2019 - 2020",
      description: [
        "Created responsive websites for 20+ clients",
        "Implemented modern JavaScript frameworks and libraries",
        "Optimized websites for performance and SEO"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            My journey through various roles and companies
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <div className="md:ml-16 w-full">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
                        <h4 className="text-lg text-blue-600 font-medium">{exp.company}</h4>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0 space-y-1">
                        <div className="flex items-center text-slate-600">
                          <Calendar size={16} className="mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <MapPin size={16} className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-slate-600 flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;