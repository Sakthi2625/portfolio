import React, { useRef, useEffect } from 'react';
import { User, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

    const children = containerRef.current?.children;
    if (children) {
      Array.from(children).forEach((child) => {
        observer.observe(child);
      });
    }

    return () => {
      if (children) {
        Array.from(children).forEach((child) => {
          observer.unobserve(child);
        });
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div className="opacity-0 translate-y-10 transition-all duration-1000 ease-out">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Aspiring Data Scientist & AI/ML Engineer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Machine Learning enthusiast with expertise in Python, R, and various ML frameworks. My journey in AI began during my Bachelor's studies in Artificial Intelligence & Data Science at Kings Engineering College, Chennai.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With a strong background in biological data analysis, I have experience handling gene expression, ChIP-seq data, and high-dimensional datasets. I'm passionate about leveraging AI for real-world problem-solving, with hands-on experience in Flask-based web applications, deepfake detection, and predictive modeling.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Whether it's building innovative ML models or creating data-driven solutions, I'm always excited to take on new challenges and contribute to the evolving field of artificial intelligence.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg p-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-600 pb-2">
              Personal Details
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <User className="mr-3 text-purple-600 dark:text-purple-400" size={20} />
                <span>Sakthi Pandi M</span>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <Calendar className="mr-3 text-purple-600 dark:text-purple-400" size={20} />
                <span>Student, B.Tech AI & Data Science (2022-26)</span>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="mr-3 text-purple-600 dark:text-purple-400" size={20} />
                <span>Chennai, India</span>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <Phone className="mr-3 text-purple-600 dark:text-purple-400" size={20} />
                <span>6381467367</span>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail className="mr-3 text-purple-600 dark:text-purple-400" size={20} />
                <span>sakthipandi.mm@gmail.com</span>
              </li>
            </ul>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Education
              </h3>
              <div>
                <p className="font-medium text-gray-800 dark:text-white">Bachelor of Technology (B.Tech)</p>
                <p className="text-purple-600 dark:text-purple-400">Artificial Intelligence & Data Science</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Kings Engineering College, Chennai | 2022-26</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;