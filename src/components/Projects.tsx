import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, Lock, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  details: string;
  github?: string;
  demo?: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 'deepfake',
      title: 'Deepfake Tracking System',
      description: 'Flask-based AI web application for detecting deepfake videos',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
      tech: ['Python', 'Flask', 'OpenCV', 'Deep Learning', 'SQLite'],
      details: 'Developed a comprehensive Flask-based web application for detecting manipulated deepfake videos. The system includes video processing, frame extraction, and database storage for AI analysis. Features a responsive UI with JavaScript for real-time progress tracking and video preview. The system uses convolutional neural networks to analyze facial inconsistencies and detect potential deepfakes.',
      github: 'https://github.com/Sakthi2625/DeepFake-Tracking',
    },
    {
      id: 'gesture',
      title: 'Gesture-based Controller',
      description: 'Control system using Python and MediaPipe for hand tracking',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
      tech: ['Python', 'MediaPipe', 'OpenCV', 'PyAutoGUI'],
      details: 'Built an intuitive gesture-based control system using Python and MediaPipe. The application enables mouse, volume, and brightness control via hand tracking and gesture recognition. Applied OpenCV for real-time gesture recognition and system automation. The system detects hand landmarks and converts specific gestures into computer control commands with minimal latency.',
      github: 'https://github.com/Sakthi2625/Gesture-Controller',
    },
    {
      id: 'churn',
      title: 'Customer Churn Prediction',
      description: 'ML model to predict customer churn based on transaction history',
      image: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg',
      tech: ['Python', 'Scikit-learn', 'XGBoost', 'Neural Networks', 'Tableau'],
      details: 'Developed a sophisticated classification model to predict customer churn based on transaction history and behavior patterns. Applied ensemble methods including Random Forest, XGBoost, and Neural Networks to improve prediction accuracy. Visualized churn trends and customer behavior insights using Seaborn and Tableau, providing actionable business intelligence for retention strategies.',
      github: 'https://github.com/Sakthi2625',
    },
    {
      id: 'audio-sign',
      title: 'Audio to Sign Language',
      description: 'Translation system for enhancing communication accessibility',
      image: 'https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg',
      tech: ['Python', 'NLP', 'Computer Vision', 'ML'],
      details: 'Proposed an innovative Audio-to-Sign Language Translation System at Smart India Hackathon to enhance communication accessibility for the hearing impaired. The system uses speech recognition to convert spoken language into text, which is then translated into animated sign language gestures. This project aims to bridge communication gaps and promote inclusivity through technology.',
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
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

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          My Projects
        </h2>

        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => openModal(project)}
                  className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <span className="mr-2">View Details</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-56 md:h-72 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-300"
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <button
                    onClick={handlePrevProject}
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-300"
                    aria-label="Previous project"
                  >
                    <ChevronLeft size={24} />
                  </button>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <button
                    onClick={handleNextProject}
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-300"
                    aria-label="Next project"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.details}
                </p>
                <div className="flex flex-wrap gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-300 flex items-center"
                    >
                      <Github size={18} className="mr-2" />
                      View Code
                    </a>
                  )}
                  {selectedProject.demo ? (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300 flex items-center"
                    >
                      <Cpu size={18} className="mr-2" />
                      Live Demo
                    </a>
                  ) : (
                    <button
                      className="px-4 py-2 bg-gray-400 text-white rounded-md cursor-not-allowed flex items-center"
                      disabled
                    >
                      <Lock size={18} className="mr-2" />
                      Demo Unavailable
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;