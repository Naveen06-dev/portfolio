import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", level: 88 },
        { name: "Python", level: 82 },
        { name: "JavaScript", level: 85 },
        { name: "MongoDB", level: 75 },
       
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Github", level: 95 },
        { name: "Figma", level: 85 },
        { name: "Canva", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-emerald-600 h-2 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;