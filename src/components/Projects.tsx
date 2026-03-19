import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Number plate detection",
      description: "This project is a web-based application that automatically detects vehicle number plates from images and extracts relevant information such as the registration number, state, and RTO (Regional Transport Office) using Optical Character Recognition (OCR).",
      image: "data:image/jpeg;base64,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",
      technologies: ["React", "Python", "Flask"],
      liveUrl: "#",
      githubUrl: "https://github.com/Naveen06-dev/Number-plate/tree/main"
    },
    {
      title: "Real time recommendation egnine for You tube vedio suggestion",
      description: "This project focuses on building a personalized video recommendation system similar to how YouTube suggests videos to its users. The system uses Machine Learning techniques to analyze user behavior and recommend relevant videos in real time.",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8SDhIQEBQQFRUREBUQFhISEhoTGBUSFREYFhYVFRMYKCkgGRolGxUVITEjJSkrLi4uFx8zODMsNygvLisBCgoKDg0OGxAQGjcmICYvLS02MS0tMi03Li0tKy02Ly0rLS0tMy0wLS0tLS0tLy0tLS0vLy0tLTUtLS0tLS41Lf/AABEIAK4BIgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xABKEAABAwEEBAgJCAkDBQAAAAABAAIDEQQFEiEGMUFRBxMUVGFxkaEWIjI1c4GU0dIXM1KTorLC0xUjQmJ0sbO0wSQ08ENygpLh/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAIBAwQF/8QAKxEBAQACAQIGAAQHAAAAAAAAAAECEQMhMQQSIkFRYQVxkfATIzJCgcHh/9oADAMBAAIRAxEAPwDuKIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMHa2Tcuc6FzatszCWP8l4MkmRIzacsisjYLcJQ7JzXsOF8btbTSuzIg7CMirDP9+/+Fj/qyKSyyATOmqaujZHTZRrnGvX43cokds7NavxElERW4iIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAot43jDAzHM4NFaCuZJ3ADMlSlrmktwOtb2kPDTGCKOFQcVM+vJZlvXRfHMblJndRVdF6x2i1ySQnE0WdjTUFpBEjzqPQVni/duqsFo1cIsjX1djfJSpAoA0agB6ys2GZD/msrMN66q5rj5vR2a9PpjHiLIIZ5XNJFGtoKg06T3Kfcd4zymQTxcURhLWVqcJrmT6lcuVo5OzLXi73Gqu2ahtEvQyLbtrIsm+9qs7hq444/539pyIitwEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEUO97xjs1nltEtcELC91BUkDYBtJ1etBMRchfw1mpw2IUrlW00NOkBhp2qn5bH8yb7Ufy1uqzzR2BW3x1NQaFcj+Wx/Mm+1H8tPlsfzJvtR/LTVNx1+ixmkD7WIhyQAvLgDWmTaHMYstdFzP5bH8yb7Ufy0+Wx/Mm+1H8tZcbYrHOY2Xu6hYLG8WRsMho8xlrnM2OcDUtPQSrOj9xssrHNa5zi92Iudlq1UAXNflsfzJvtR/LT5bH8yb7Ufy1nkbea6s30rsCLj/wAtj+ZN9qP5afLY/mTfaj+Wq1UbjsCLj/y2P5k32o/lp8tj+ZN9qP5aapuOwIuQs4azUYrEKbaWmpp0AsC6lc95R2mzRWmKuCZge2ooRXYRvBqPUmjaYiIsaIvCUDgg9REQEREBERAREQERc04UtILVBa7NZ4rRyaOVuJ8uGuHxnDEcPjEZDIFB0tU8YN47V8/2O85bzbyaW0yMtAyhkc9wimzyilbsJ2PArnQ4sgpGiMV/WK0OjjstpkjD6SQvFI3H6UUzvFDv3mkg7QcqZd+3cjqV9af3bZZHRSyO4xmuMRuxZ6jmACDsNaFTrl0mstrh46zPxjURqcx1PJe3W0/zGYqFir/0RhvGBvKI3RvDasecPGwk5lpLSWuFdbakHroRrui/BZabJOJxbsLhQFsUGT2g+S/G4gtO6mWwg5qZblj8VWpKj6X8Il7WOfi3WezsaTVknjPbI0fRdUZ720BHYTn9GtNILzhdFidDMWHHC2QseBqL4pG0JbqzFCKioFc9nvG4rNaIXQ2hgkY7W128aiCM2kbCDUKLdmh92WdzXw2WBr2GrZCzG9p1VEjquB9aauWPXpTcl6NS0UuO3WO+MUk01ps88EkbZXkucx4LZGiUbDRjgHDI12EgLpS8Xqqb11ZfoWscJnma2eh/G1bOtY4TPM1s9D+Nq1lcN0Qsd2Sm0fpGaSENirFg/afni2Grh4tG7anXRYCOlBiJB6Gg/wCV4i6OS6Gx/Sf9WPiXobF9KT6pvxqyiC9hi+nJ9U3415hi+lJ9U341aRBcLY/pP+rHxKh1NlfWKf5KrbC4sLxqaQDnmK6iRuOeato2zQiIjF2zBmLxyQ2hzDcWdMvFqK59I61ec6DBIA0l3GfqzU04snW4dFB14uhREQS7WIMDOLLi4+UDXLLbXKvVlr6F9D8Gfmax+iP33L5tX0lwZ+ZrH6I/fcpyVi2dW55msFXGi9lfRpO5axaIprU/xiY4q0rtf0N9/wDNS6RFv3TSKIGlTTIU2nr2LHWPhAgPlY2+qo7luVlskcbBHG0Bo2a6neSdZ6So9quWySfOQQO6TE0ntpVc7jle1d8OXjk1cUGx6W2d+qRnUTQ9hzWVhveM7QsJaNB7tf8A9EsO9kj291adygu0Aib8xaLVH0YmuHZQfzT1xtvDfpukdtYdoV5soO1aH4M3kz5u1xSdEsZZ3tJXrY74j1xRydMUw/k/Ct8194m8eF7ZN9BXqwmjlsmeCJo5I3CmTwM67iCQdW9ZtVK45TV0IiLWC45w12cSW+yML2Rh8WHjJThY3x35ucK0HvC7GtK4XIGG63SFrcccsIa+mbQ+djXgHYCMitg4HYoqvdSWKMxsfIHPcQHFgyYwgZudsG1bxcukl+2u1Ns1ntDhRrC57mAtijDGgvedZPRrcd2ZGFic0VxNDvWRTsU2w3o+EOEGOPGcTuLlezEd7sJzK3KX2ZNOo6UaWNu2yNL3Ollc3BE1x8aV4Gb30yDRWpIG0AZkBaNoZfl+XhaCOUuZDG6s0jWNAFc+LjFPLO79kZnYDhZi61SFz4nzvDQC5znylrKmgLjXC2pdroMypcVrtVmiDWNnhjBy4uWRseJx+kw4cRPTVcpjcZrfVdst37N74QNO+QxcTEQ60yN8UHPimauMf066A6yNwKwvB3eN8Wx/KJ7Q8WaMkeS0GZ4NMDTTyQfKO/IZ1ppFstMD3ukmYxz3mrnySFznGlKkk1OQA9Sks0nkaxscU8kbWANa1k7w0NAyaG1oB1LZhlMdS9Weab26ZfOnGC8rLd8Ba577RG2d2sRsLvmx++Rr3A7zlvy4hwT2eCW9y5zY3ltllmBIDiJhPDSSv0/GdnrzK7etmPlmi3YtY4TPM1s9D+Nq2daxwmeZrZ6H8bVrK+bURF0chERAVcAaXtDzRpcA47m1zPYqFN45zYYyzBTxmOrG1xxh2KpLgT5Lmj/xKyrxk71LtVqZxGFob4zGOIB1vq5tDvbGAABtLsRqsOpPLpP3Pqo/hU6Szh1k42SgdWrCGNZVpcG0OGlc2ntrVRPQ7Zfzes9p8MQiIujzCIiAvpLgz8zWP0R++5fNq+kuDPzNY/RH77lOSsWzObUUK1fSbRhlrdBjkezk7y4YQDiBLd+pwwjPZVbSrc0dR0jUpdccrjdxHXiw82ktmZI6OUvjc1xacTCdW0FtahSYb7sj/Jmiz2Fwac+h1Cp8+Pyq8PJJu439E9F5G8OFWkEbwa/yVSpzeIiIK7OPGJ6ANXWpSsWUazvP8sv8K+gIiIC07ha8zy+ms/8AcxrcVp3C15nl9NZ/7mNbO5XG1cs0DpJGRtoDI9sYJzALnBoJ6BWp6lacQBU6hnVQ7DfXF2uGah4uKZr3NGtzA7x8t+GtBvoqvZMZu4IGXna3WRj3xwtgkmiAAcKtfG1r5WZY3uD6uOR2AgABQr4uK8rsl4wijK4RNEMUL2k0wStOVDtY8UNcq61K0Gnhu283m1PpGyxvayQAuEzHviMT4w2uIPa0kdRBpQqTpVwj2m1AwWVroYpP1ZFA+aUOywGlQ2taYW1Jy8bYuPq82p2dOmuvdq182dgdHLE0NjtEQmawZiN2N0csQJzIbJG+h+iW7Vj1lb9oziLLUE2WExyUNQJ3zPllYCMjgMgZ1scsY1tV1nZFdC4C/Osv8DJ/XhXdlwngOyvWWvMZP68K7qCsrXq1jhM8zWz0P42rZ6rWOEzzNbPQ/jasHzaiIujkIiICvWebDVrhia6lW1pmNTgdjhU59JVlEbLq7SRxANf1rv3C1rB1F4cT2AepU2m1vfQOIo3U1oDWjqA6Mt6sIs0q53WoIiLUCIiAvpLgz8zWP0R++5fNq+kuDPzNY/RH77lOSsWzoiKVrc0LHij2tcNzgCOwrFWrRaxP1xNb6Mlnc3LuWZRZcZe8XjyZY/03TT7RoHHWsM0jD+8A7vFCoklwXrF81MXjcJT91+S3tFzvDj7dHeeM5f7uv5xzuS9L2h+cY4je6EEf+zKDvUi6tLZpJo4nRxkve1lWktpU5mhr1rfFZdZIy4PLGFzcw7CKjqOvas/h5Ttkq+I4sp6uOb+ui5G2goqkRdnjEREBadwteZ5fTWf+5jW4rWOEi7prRdcsUDDI/HC8MBALgydjnAVoK0BSDglqimlJjhY9+ChfgaXUr5INOr/lFYFxWzm8/wBW5ZKTQS93El1jmJJrng1n1q9duhV6xTMl5DMcBJoMArVpGuuWtVWItlgvBkfFOsxljBJbHPA54YXeUY3NLXx12hrgCcyCVcDbe0HiLG2zkgjjIYZTKARQhs0rnuZX9wtKobwf3qBTkUvYz3r3wAvXmUvYz3rNN2xzbitYp/p5xu/VkdGSptd2zxNLpIpGAEDE5hAr1lZqXQi9S2JvIZhxUZjr4mdZ5Ja68vnKepWzoHe1aixy9jfeqlTWycCgrekv8DJ/Wgqu2EV9Z/wuUcEWjFvs14SzWmB8TOSuiBeW5vdLG4AAE7GO7l1zCFNrVot6szVa9wleZbZ6H8bVswaFiNL7rfarvtNmjID5Yi1pdqxDMAnYCRRYPmJkLi1zxho3XVzQdVcmk1d6gVf/AEfJvg9ph+JZh2gV7g0Njmy3Fh7w5PAS9+Zz/Y96u/SZr3jD/o6TfB7TD8Sfo6TfB7TD8SzHgJe/M5/se9PAS9+Zz/Y96zr8q9Hxf1/4xNouqVhAcYPGYHj/AFMLcjq8pwrq1io6Va5E/fB7VZ/jWa8A735nP9j3r3wEvfmc/wBj3rZ9put9IwnIn74ParP8acifvg9qs/xrN+Al78zn+x708BL35nP9j3rWaYTkT98HtVn+NORP3we1Wf41m/AS9+Zz/Y96eAl78zn+x70NMJyJ++D2qz/GvWWF5NMUAyr/ALiEjXTWHEepZrwEvfmc/wBj3p4CXvzOf7HvQYWewvZG2QkUdhpk4eVGHjMgA5Eaic+1fRPBn5msfoj99y4g3QK965WObPpYO8uXfdD7rfZbus1mkIL4ogHYcxiJJIB2gE0r0KarFmURFKhERAREQEREBERAREQEREBERAREQEREBERAREQEUWS0n9ntVvj37+4IJyKDyh+/uCcofv7ggnIoPKHb+4Jyh+/uCCcig8ofv7gnKH7+4IJyKDyh+/uCcofv7ggnIoPKH7+4Jyh+/uCCcig8ofv7gnKH7+4IJyKDyh+/uCcofv7ggnIoPKH7+4LCW7Sdwe6OBhlczynVDWtNaUrtz6leHHlndRx5vEcfDN539/UbSi1O7tMKycXaGGM1w1rkDudWhatra6oqE5OPLC6yjPD+J4ueb47t6iIodxERAREQEREBERAREQEREBERAVE/knqVa8IQY1W5BmDSurWK7dh/ZP8A8UqSzkaswqOLduPYgjNLttenLV1ZZ969GKh19gr5R78NFI4t249icW7cexBHoa1FdQ1ilcyrgPX2K5xbtx7E4t249iChFXxbtx7E4t249iChFXxbtx7E4t249iChFXxbtx7E4t249iChFXxbtx7E4t249iChFXxbtx7E4t249iCPbHOEUhb5QjcR1hpp3rnVnewxcU52Dx8YdQkHxaUdTPqOesrpvFu3HsWp3rohIXl1npQmuB1Rh6GnVTrXt8Jy4Y7mV0+H+M+F5uXy58c3rcs/Nhb1s4wRSscHsLGxYtTg9oza5usZaugBdE0ee42SIurUxsJr/wBgzWqXXobKXgz4Q0HNoNS7oJ2DqW9RMDQANQTxfLjlJjjd6Z+EeF5cM8uXPHy71Nf7VoiLxPuiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP/Z",
      technologies: ["React+Vite", "FastAPI(python)"],
      liveUrl: "https://realtime-ntube.vercel.app/",
      githubUrl: "https://github.com/Naveen06-dev/youtube"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "TypeScript", "Tailwind CSS", "PostCSS & Autoprefixer"],
      liveUrl: "https://weather-cyan-chi.vercel.app/",
      githubUrl: "https://github.com/Naveen06-dev/Weather"
    },
    {
      title: "Civic fix",
      description: "The app allows users to capture and upload photos of issues such as broken roads, damaged streetlights, garbage overflow, water leaks, or any other public property damage. Along with the image, users can add a brief description and location details.",
      image: "https://imgs.search.brave.com/o13kSUYRDmjDsG0uXL6H434QJDaFOfUc_1MIdOYzK_E/rs:fit:500:0:1:0/g:ce/aHR0cDovL29sZC5m/YWN0b3JkYWlseS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDkvcm9hZG1h/cHAyLmpwZw",
      technologies: ["Next.js", "Python", "D3.js", "MongoDB"],
      liveUrl: "https://civic-fix-chi.vercel.app/",
      githubUrl: "https://github.com/Naveen06-dev/civic-fix"
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