import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import painting1 from './assets/painting1.jpg';
import painting2 from './assets/painting2.jpg';

const SomeArt = () => {
  return (
    <div className="min-h-screen bg-[#5bb80f]/20">
      {/* Navigation Header */}
      <nav className="bg-white/40 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="text-lg font-semibold">Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Some Art
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            A collection of my artistic work, showcasing creativity beyond code.
          </p>
        </div>
      </section>

      {/* Artwork Grid */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Artwork Item 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={painting1}
                  alt="Artwork 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Digital Painting
                </h3>
                <p className="text-gray-600 mb-4">
                  A digital artwork exploring color theory and composition.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    Digital Art
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    2024
                  </span>
                </div>
              </div>
            </div>

            {/* Artwork Item 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={painting2}
                  alt="Artwork 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Abstract Composition
                </h3>
                <p className="text-gray-600 mb-4">
                  An abstract piece focusing on texture and movement.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    Abstract
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    2024
                  </span>
                </div>
              </div>
            </div>

            {/* Placeholder for more artwork */}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center aspect-[4/3]">
              <div className="text-center">
                <p className="text-gray-500 text-lg font-medium">More Artwork Coming Soon</p>
                <p className="text-gray-400 text-sm mt-2">Stay tuned for new pieces</p>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center aspect-[4/3]">
              <div className="text-center">
                <p className="text-gray-500 text-lg font-medium">More Artwork Coming Soon</p>
                <p className="text-gray-400 text-sm mt-2">Stay tuned for new pieces</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-gray-200 bg-white/40 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Isabella Correa. Artwork and portfolio.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SomeArt; 