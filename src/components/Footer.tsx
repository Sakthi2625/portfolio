import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Sakthi Pandi
            </p>
            <p className="text-sm mt-1">Machine Learning Engineer & Data Scientist</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm flex items-center">
              Made with <Heart size={16} className="text-red-500 mx-1" /> using React & TailwindCSS
            </p>
            <p className="text-sm mt-1">
              &copy; {year} All Rights Reserved contact rajeshofficial320@gmail.com for portfolio
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-4 text-center">
          <p className="text-xs">
            This portfolio was created to showcase the journey in AI and Machine Learning.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;