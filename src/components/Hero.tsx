import { useState, useEffect } from 'react';
import { ArrowDown, Code2, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full-Stack Developer & Creative Problem Solver';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsHomeVisible(window.scrollY < window.innerHeight * 0.5);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 24,
        y: (e.clientY / window.innerHeight - 0.5) * 24,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let index = 0;
    let blinkInterval: ReturnType<typeof setInterval> | null = null;
    const typeTimer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeTimer);
        blinkInterval = setInterval(() => setShowCursor((c) => !c), 530);
      }
    }, 45);
    return () => {
      clearInterval(typeTimer);
      if (blinkInterval) clearInterval(blinkInterval);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const name = "NAVEEN";
  const techStack = ['React', 'Java', 'Python', 'MYSQL'];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-[#FAF9F6] relative overflow-hidden font-display">
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Refined grid - subtle and elegant */}
      <div
        className="absolute inset-0 opacity-[0.4] z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(120,113,108,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(120,113,108,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Animated gradient orbs - warm, professional palette */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none z-0"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-amber-200/30 blur-[100px] animate-mesh-pulse" />
        <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full bg-teal-200/25 blur-[80px] animate-mesh-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-32 right-1/3 w-[350px] h-[350px] rounded-full bg-stone-300/20 blur-[90px] animate-mesh-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] right-[15%] w-20 h-20 border border-amber-300/40 rounded-2xl rotate-12 animate-float opacity-60" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[35%] right-[25%] w-3 h-3 bg-teal-500/40 rounded-full animate-float opacity-80" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[30%] left-[10%] w-16 h-16 border border-stone-400/30 rounded-lg -rotate-12 animate-float opacity-50" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-[60%] right-[8%] w-2 h-2 bg-amber-500/50 rounded-full animate-float opacity-90" style={{ animationDelay: '0.8s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
          {/* Left content - editorial layout */}
          <div className="flex-1 max-w-2xl">
            {/* Badge - glass morphism */}
            <div
              className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-stone-200/80 rounded-full px-4 py-2 shadow-sm mb-8 animate-fade-up opacity-0"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
              <span className="text-sm font-medium text-stone-600">Available for new opportunities</span>
            </div>

            {/* Greeting */}
            <p
              className="text-stone-500 font-medium tracking-wide uppercase text-sm mb-4 animate-fade-up opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              Hi, I'm
            </p>

            {/* Name with letter reveal */}
            <h1 className="mb-6">
              <span className="inline-block whitespace-nowrap">
                {name.split('').map((letter, i) => (
                  <span
                    key={i}
                    className="inline-block font-extrabold text-stone-900 tracking-tight animate-letter-reveal"
                    style={{
                      fontSize: 'clamp(3rem, 5vw, 5rem)',
                      animationDelay: `${0.35 + i * 0.06}s`,
                      animationFillMode: 'forwards',
                      opacity: 0,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </span>



            </h1>

            {/* Tagline with typewriter effect */}
            <div
              className="h-8 text-lg sm:text-xl text-stone-600 font-light mb-8 animate-fade-up opacity-0"
              style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
            >
              <span className="text-stone-500">&gt;</span> {typedText}
              <span
                className={`inline-block w-0.5 h-5 align-middle ml-0.5 bg-teal-500 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
                style={{ transition: 'opacity 0.1s' }}
              />
            </div>

            {/* Tech stack - refined pills */}
            <div
              className="flex flex-wrap gap-2 mb-10 animate-fade-up opacity-0"
              style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
            >
              {techStack.map((tech, i) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-stone-200/80 rounded-lg text-sm font-medium text-stone-700 shadow-sm hover:shadow-md hover:border-teal-200/80 hover:text-teal-700 transition-all duration-300"
                  style={{ animationDelay: `${1.2 + i * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0"
              style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}
            >
              <button
                onClick={scrollToProjects}
                className="group relative bg-stone-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-stone-900/20 hover:-translate-y-0.5 flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <Code2 className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                onClick={scrollToContact}
                className="group px-8 py-4 rounded-xl font-semibold border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl flex items-center gap-2"
              >
                Let's Connect
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right side - floating code/visual card */}
          <div
            className="hidden lg:flex flex-1 justify-center animate-scale-in opacity-0"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            <div
              className="relative w-full max-w-md"
              style={{
                transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              <div className="bg-white/80 backdrop-blur-xl border border-stone-200/80 rounded-2xl shadow-xl shadow-stone-200/50 p-6 overflow-hidden">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-stone-300" />
                  <div className="w-3 h-3 rounded-full bg-stone-300" />
                  <div className="w-3 h-3 rounded-full bg-stone-300" />
                </div>
                <pre className="text-sm font-mono text-stone-600 leading-relaxed">
                  <code>
                    <span className="text-amber-600">const</span> <span className="text-teal-600">developer</span> = {'{'}
                    {'\n'}
                    {'  '}name: <span className="text-amber-700">"Naveen"</span>,
                    {'\n'}
                    {'  '}passion: <span className="text-amber-700">"Building"</span>,
                    {'\n'}
                    {'  '}stack: [<span className="text-amber-700">"React"</span>, <span className="text-amber-700">"TS"</span>],
                    {'\n'}
                    {'  '}approach: <span className="text-amber-700">"Creative"</span>
                    {'\n'}
                    {'}'};
                  </code>
                </pre>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-400/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 text-sm animate-fade-in opacity-0"
          style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}
        >
          <span className="font-medium">Scroll to explore</span>
        </div>
      </div>

      {/* Animated scroll arrow */}
      {isHomeVisible && (
        <button
          onClick={scrollToAbout}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm border-2 border-stone-900 rounded-full flex items-center justify-center text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 hover:shadow-lg z-50 group"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-5 h-5 animate-bounce group-hover:animate-none" />
        </button>
      )}

      <style>{`
        @keyframes mesh-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-mesh-pulse {
          animation: mesh-pulse 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
