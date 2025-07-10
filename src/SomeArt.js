import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import painting1 from './assets/art/painting1.jpg';
import painting2 from './assets/art/painting2.jpg';
import painting3 from './assets/art/painting3.jpg';
import painting4 from './assets/art/painting4.jpg';
import pili from './assets/art/pili.jpeg';
import sam from './assets/art/sam.jpeg';
import nadezhda from './assets/art/nadezh1.jpeg';
import leah from './assets/art/lea.jpeg';
import isa from './assets/art/Isa.jpeg';
import gina from './assets/art/gina.jpeg';
import galina from './assets/art/galina1.jpeg';
import galina2 from './assets/art/galina2.jpeg';
import jorly from './assets/art/jorly.jpeg';

// Artwork data array - easy to add/edit
const artworkData = [
  {
    id: 1,
    image: painting1,
    title: "Isa I",
    category: "Oil on Canvas",
    year: "2015",
    imagePosition: "object-center"
  },
  {
    id: 2,
    image: painting2,
    title: "Isa II",
    category: "Oil on Canvas",
    year: "2015",
    imagePosition: "object-[10%_10%]"
  },
  {
    id: 3,
    image: painting3,
    title: "Isa III",
    category: "Oil on Canvas",
    year: "2015",
    imagePosition: "object-[10%_20%]"
  },
  {
    id: 4,
    image: painting4,
    title: "Isa IV",
    category: "Oil on Canvas",
    year: "2015",
    imagePosition: "object-center"
  },
  {
    id: 5,
    image: pili,
    title: "Pili",
    category: "Oil on Canvas",
    year: "2015",
    imagePosition: "object-[10%_20%]"
  },
  {
    id: 6,
    image: sam,
    title: "Sam",
    category: "Oil on Canvas",
    year: "2015",
    imagePosition: "object-[10%_20%]"
  },
  {
    id: 7,
    image: nadezhda,
    title: "Nadezhda",
    category: "Oil on Canvas",
    year: "2015",
    imagePosition: "object-[10%_15%]"
  },
  {
    id: 8,
    image: leah,
    title: "Leah",
    category: "Oil on Canvas",
    year: "2015",
    imagePosition: "object-[10%_40%]"
  },

  {
    id: 9,
    image: gina,
    title: "Gina",
    category: "Oil on Canvas",
    year: "2015",
    imagePosition: "object-[10%_30%]"
  },
  {
    id: 10,
    image: galina,
    title: "Galina",
    category: "Oil on Canvas",
    year: "2015",
    imagePosition: "object-center"
  },
  {
    id: 11,
    image: galina2,
    title: "Galina II",
    category: "Oil on Canvas",
    year: "2015",
    imagePosition: "object-[10%_30%]"
  },
  {
    id: 12,
    image: jorly,
    title: "Jorly",
    category: "Oil on Canvas",
    year: "2016",
    imagePosition: "object-[10%_60%]"
  },
  {
    id: 13,
    image: isa,
    title: "Isa",
    category: "Oil on Canvas",
    year: "2015",
    imagePosition: "object-center"
  },
];

// Reusable ArtworkCard component
const ArtworkCard = ({ artwork, onImageClick }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
    <div className="aspect-[4/3] overflow-hidden cursor-pointer" onClick={() => onImageClick(artwork)}>
      <img
        src={artwork.image}
        alt={artwork.title}
        className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${artwork.imagePosition || 'object-center'}`}
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {artwork.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
          {artwork.category}
        </span>
        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
          {artwork.year}
        </span>
      </div>
    </div>
  </div>
);

// Modal component for full image view with zoom and navigation
const ImageModal = ({ artwork, isOpen, onClose, onPrevious, onNext, hasPrevious, hasNext }) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  // Reset zoom and position when artwork changes
  useEffect(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [artwork]);

  // Handle wheel zoom
  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const newZoom = Math.max(0.5, Math.min(5, zoom * delta));
    setZoom(newZoom);
  };

  // Handle mouse down for dragging
  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  // Handle mouse move for dragging
  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  // Handle mouse up
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (hasPrevious) onPrevious();
          break;
        case 'ArrowRight':
          if (hasNext) onNext();
          break;
        case '+':
        case '=':
          setZoom(prev => Math.min(5, prev * 1.2));
          break;
        case '-':
          setZoom(prev => Math.max(0.5, prev * 0.8));
          break;
        case '0':
          setZoom(1);
          setPosition({ x: 0, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, hasPrevious, hasNext, onClose, onPrevious, onNext]);

  if (!isOpen || !artwork) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-start justify-center p-4"
      onClick={onClose}
    >
      <div className="relative w-full h-full flex items-start justify-center pt-16 pb-20">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
        >
          <X size={24} />
        </button>

        {/* Zoom controls */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <button
            onClick={() => setZoom(prev => Math.min(5, prev * 1.2))}
            className="text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
          >
            <ZoomIn size={20} />
          </button>
          <button
            onClick={() => setZoom(prev => Math.max(0.5, prev * 0.8))}
            className="text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
          >
            <ZoomOut size={20} />
          </button>
          <button
            onClick={() => {
              setZoom(1);
              setPosition({ x: 0, y: 0 });
            }}
            className="text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
          >
            <RotateCcw size={20} />
          </button>
        </div>

        {/* Navigation arrows */}
        {hasPrevious && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-3"
          >
            <ChevronLeft size={32} />
          </button>
        )}
        
        {hasNext && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-3"
          >
            <ChevronRight size={32} />
          </button>
        )}
        
        {/* Image container */}
        <div 
          className="relative w-full h-full flex items-center justify-center"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            ref={imageRef}
            src={artwork.image}
            alt={artwork.title}
            className="max-w-full max-h-full object-contain transition-transform duration-200"
            style={{
              transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
              cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
            }}
          />
        </div>

        {/* Image info */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 rounded-lg p-4 text-white">
          <h3 className="text-xl font-bold mb-1">
            {artwork.title}
          </h3>
          <div className="flex gap-2 text-sm">
            <span className="px-2 py-1 bg-white/20 rounded">
              {artwork.category}
            </span>
            <span className="px-2 py-1 bg-white/20 rounded">
              {artwork.year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SomeArt = () => {
  const [selectedArtworkIndex, setSelectedArtworkIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageClick = (artwork) => {
    const index = artworkData.findIndex(item => item.id === artwork.id);
    setSelectedArtworkIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArtworkIndex(null);
  };

  const goToPrevious = () => {
    if (selectedArtworkIndex > 0) {
      setSelectedArtworkIndex(selectedArtworkIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedArtworkIndex < artworkData.length - 1) {
      setSelectedArtworkIndex(selectedArtworkIndex + 1);
    }
  };

  const selectedArtwork = selectedArtworkIndex !== null ? artworkData[selectedArtworkIndex] : null;

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
          <p className="text-lg text-gray-600 mb-[-60px] max-w-2xl mx-auto">
            A collection of my painting work.
          </p>
        </div>
      </section>

      {/* Artwork Grid */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworkData.map((artwork) => (
              <ArtworkCard 
                key={artwork.id} 
                artwork={artwork} 
                onImageClick={handleImageClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal 
        artwork={selectedArtwork}
        isOpen={isModalOpen}
        onClose={closeModal}
        onPrevious={goToPrevious}
        onNext={goToNext}
        hasPrevious={selectedArtworkIndex > 0}
        hasNext={selectedArtworkIndex < artworkData.length - 1}
      />

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-gray-200 bg-white/40 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Isabella Correa
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SomeArt; 