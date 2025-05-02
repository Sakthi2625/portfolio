import React, { useState, useRef, useEffect } from 'react';
import { Code, Database, BarChart, Github as Git, FileCode, BookOpen } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const containerRef = useRef<HTMLDivElement>(null);
  
  const skills: Skill[] = [
    { name: 'Python', level: 90, category: 'programming', icon: <Code size={24} /> },
    { name: 'R', level: 85, category: 'programming', icon: <Code size={24} /> },
    { name: 'Machine Learning', level: 88, category: 'ml', icon: <BookOpen size={24} /> },
    { name: 'Deep Learning', level: 80, category: 'ml', icon: <BookOpen size={24} /> },
    { name: 'SQL', level: 75, category: 'data', icon: <Database size={24} /> },
    { name: 'Tableau', level: 70, category: 'visualization', icon: <BarChart size={24} /> },
    { name: 'Git', level: 65, category: 'tools', icon: <Git size={24} /> },
    { name: 'HTML', level: 60, category: 'web', icon: <FileCode size={24} /> },
    { name: 'Excel', level: 75, category: 'tools', icon: <BarChart size={24} /> },
    { name: 'PowerPoint', level: 80, category: 'tools', icon: <BarChart size={24} /> },
    { name: 'Flask', level: 72, category: 'web', icon: <FileCode size={24} /> },
    { name: 'Data Analysis', level: 85, category: 'data', icon: <Database size={24} /> },
  ];

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'programming', name: 'Programming' },
    { id: 'ml', name: 'ML/AI' },
    { id: 'data', name: 'Data' },
    { id: 'visualization', name: 'Visualization' },
    { id: 'web', name: 'Web' },
    { id: 'tools', name: 'Tools' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            
            // Animate skill bars after the container appears
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = `${(bar as HTMLElement).dataset.level}%`;
              }, 300 + index * 100);
            });
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [activeCategory]);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          My Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div 
          ref={containerRef}
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredSkills.map((skill, index) => (
              <div 
                key={skill.name}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-md mr-4 text-purple-600 dark:text-purple-400">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white">{skill.name}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {categories.find(cat => cat.id === skill.category)?.name}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div 
                    className="skill-bar bg-gradient-to-r from-purple-600 to-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out-cubic"
                    style={{ width: '0%' }}
                    data-level={skill.level}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>Beginner</span>
                  <span>Advanced</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;