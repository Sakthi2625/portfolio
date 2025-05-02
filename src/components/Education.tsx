import React, { useRef, useEffect } from 'react';
import { Calendar, Award, BookOpen } from 'lucide-react';

interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
}

interface CourseItem {
  id: string;
  title: string;
  institution: string;
  date: string;
}

interface AchievementItem {
  id: string;
  title: string;
  description: string;
}

const Education: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const educationItems: EducationItem[] = [
    {
      id: 'btech',
      title: 'Bachelor of Technology (B.Tech)',
      institution: 'Kings Engineering College, Chennai',
      period: '2022-26',
      description: 'Specializing in Artificial Intelligence & Data Science. Relevant coursework includes Data Science, Machine Learning, Python Programming, R for Bioinformatics, and Statistical Analysis.'
    }
  ];

  const courseItems: CourseItem[] = [
    {
      id: 'r-prog',
      title: 'R programming',
      institution: 'Guvi Geek Networks, IITM Research Park',
      date: 'Feb 2025'
    },
    {
      id: 'ds-python',
      title: 'Data Science using Python',
      institution: 'SWAYAM MHRD',
      date: 'Oct 2024'
    }
  ];

  const achievementItems: AchievementItem[] = [
    {
      id: 'deepfake',
      title: 'Deepfake Detection System',
      description: 'Built a prototype using AI/ML technologies to identify manipulated media content.'
    },
    {
      id: 'audio-sign',
      title: 'Audio-to-Sign Language Translation System',
      description: 'Proposed an innovative solution at Smart India Hackathon (College Level) to enhance communication accessibility.'
    }
  ];

  const activities = [
    'Data Science Hackathons & Competitions - Participated in Kaggle challenges and AI hackathons.',
    'Graphic Design - Specializes in poster making and YouTube thumbnail design.'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-item');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('opacity-100', 'translate-y-0');
              }, index * 200);
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
  }, []);

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Education & Achievements
        </h2>

        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center text-gray-800 dark:text-white">
              <BookOpen className="mr-3 text-purple-600 dark:text-purple-400" size={24} />
              Education & Courses
            </h3>

            <div className="space-y-8">
              {educationItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-purple-600 dark:before:bg-purple-400"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-purple-600 dark:bg-purple-400 rounded-full transform -translate-x-1.5"></div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-white">{item.title}</h4>
                  <p className="text-purple-600 dark:text-purple-400">{item.institution}</p>
                  <p className="text-gray-500 dark:text-gray-400 flex items-center mt-1">
                    <Calendar size={16} className="mr-2" /> {item.period}
                  </p>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}

              <h4 className="text-xl font-medium text-gray-800 dark:text-white mt-12 mb-6 animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out">
                Additional Courses
              </h4>

              {courseItems.map((item, index) => (
                <div 
                  key={item.id}
                  className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-purple-600 dark:before:bg-purple-400"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 bg-purple-600 dark:bg-purple-400 rounded-full transform -translate-x-1.5"></div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.institution}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    {item.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center text-gray-800 dark:text-white">
              <Award className="mr-3 text-purple-600 dark:text-purple-400" size={24} />
              Achievements & Activities
            </h3>

            <div className="space-y-8">
              {achievementItems.map((item, index) => (
                <div 
                  key={item.id}
                  className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-3">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}

              <h4 className="text-xl font-medium text-gray-800 dark:text-white mt-12 mb-6 animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out">
                Extra-Curricular Activities
              </h4>

              <div className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <ul className="space-y-4">
                  {activities.map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-600 dark:text-gray-300">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;