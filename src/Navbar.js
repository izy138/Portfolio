import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar({ variant = 'home', activeSection, onScrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (variant === 'project') {
    return (
      <nav className="fixed top-0 left-0 bg-white/40 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-lg sm:text-xl font-semibold text-gray-900 hover:text-gray-600 transition-colors duration-200">
              Isabella Correa
            </Link>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <Link
                to="/"
                className="capitalize transition-colors duration-200 text-sm font-medium text-gray-800 hover:text-gray-900"
              >
                Home
              </Link>
            </div>
            <button
              className="md:hidden text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 sm:px-6 py-4 space-y-2">
              <Link
                to="/"
                className="block w-full text-left py-2 text-gray-600 hover:text-gray-900 capitalize transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </div>
          </div>
        )}
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 bg-white/40 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm transition-all duration-500 ease-in-out w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => onScrollToSection('home')}
            className="text-lg sm:text-xl font-semibold text-gray-900 hover:text-gray-600 transition-colors duration-200"
          >
            Isabella Correa
          </button>
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {['home', 'projects', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => onScrollToSection(item)}
                className={`capitalize transition-colors duration-200 text-sm font-medium ${
                  activeSection === item
                    ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
                    : 'text-gray-800 hover:text-gray-900'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 sm:px-6 py-4 space-y-2">
            {['home', 'projects', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  onScrollToSection(item);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-gray-600 hover:text-gray-900 capitalize transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
