import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16"
    >
      <div 
        ref={textRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center opacity-0 translate-y-4 transition-all duration-1000"
      >
        <div className="mb-6 overflow-hidden rounded-full border-4 border-purple-600 p-1 w-48 h-48 md:w-56 md:h-56 shadow-lg">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center">
            <span className="text-white text-5xl md:text-6xl font-bold">SP</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 bg-clip-text text-transparent">
          Sakthi Pandi
        </h1>
        <h2 className="text-xl sm:text-2xl mb-8 text-gray-600 dark:text-gray-300">
          Machine Learning Engineer & Data Scientist
        </h2>
        <p className="max-w-2xl text-lg mb-8 text-gray-600 dark:text-gray-400">
          Specializing in AI/ML solutions, Python development, and data analysis with a passion for solving complex problems through innovative technology.
        </p>
        
        <div className="flex space-x-6 mb-12">
          <a
            href="https://github.com/Sakthi2625"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-300"
            aria-label="GitHub"
          >
            <Github 
              size={28} 
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400" 
            />
          </a>
          <a
            href="http://www.linkedin.com/in/sakthi-pandi-320a31268"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin 
              size={28} 
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400" 
            />
          </a>
          <a
            href="mailto:sakthipandi.mm@gmail.com"
            className="transform hover:scale-110 transition-transform duration-300"
            aria-label="Email"
          >
            <Mail 
              size={28} 
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400" 
            />
          </a>
        </div>
        
        <a
          href="#about"
          className="animate-bounce p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown 
            size={24} 
            className="text-purple-600 dark:text-purple-400" 
          />
        </a>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;