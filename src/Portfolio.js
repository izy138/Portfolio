import React, { useState, useEffect } from 'react';
import { Menu, X, Github, ExternalLink, Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import projects from './projects';
import ParticleBackground from './ParticleBackground';

const categories = ['all', 'Internship', 'React', 'JavaScript', 'Java', 'AI', 'Graphics', 'Interactive', 'Golang'];

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      // Check if scrolled past hero section
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsScrolled(scrollPosition > heroBottom);
      }
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(project => project.categories.includes(selectedFilter));

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 bg-white/40 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm transition-all duration-500 ease-in-out ${
        isScrolled ? 'w-full' : 'w-1/2'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-semibold text-gray-900">
              Portfolio
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 text-sm font-medium ${activeSection === item
                      ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
                      : 'text-gray-800 hover:text-gray-900'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-4 space-y-2">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 text-gray-600 hover:text-gray-900 capitalize transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex">
        <ParticleBackground />
        {/* Left side - Text content */}
        <div className="w-1/2 flex items-center bg-[#0fb82b]/30 justify-center px-12 relative z-10">
          <div className="max-w-lg text-#011c14">
            <div className="mb-6">
              {/* <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-[#0e7490] to-[#bbf7d0] flex items-center justify-center text-white text-xl font-bold shadow-lg">
                IC
              </div> */}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 ">
              Isabella Correa
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Software Developer
            </p>
            <p className="text-base mb-12 leading-relaxed">
              I craft beautiful digital experiences through code, specializing in modern web technologies,
              performance optimization, and innovative user interfaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-[#011c14] text-[#a2fab2]/100 text-sm font-medium hover:bg-[#011c14]/50 transition-all duration-200"
              >
                View Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-[#011c14] text-[#011c14] text-sm font-medium hover:bg-[#011c14]/10 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        {/* Right side - Particle simulation background */}
        <div className="w-1/2 relative">
          {/* The ParticleBackground component will render here */}
        </div>
      </section>
      {/* About Section
      <section id="about" className="py-16 px-6 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600 mb-6">
              About
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A few samples of my work,<br />development, design, and artwork.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Crafting culture-aware interactions with a crisp eye for<br />
              engaging artistic, brand and websites.
            </p>
          </div>
        </div>
      </section> */}
      {/* Projects Section */}
      <section id="projects" className="py-16 px-6  bg-[#0fb82b]/20 ">
        <div className="max-w-7xl mx-auto">
          {/* Filter and View Toggle */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${selectedFilter === category
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-400'
                    }`}
                >
                  {category === 'all' ? 'Show All' : category}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 text-sm font-medium ${viewMode === 'grid' ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 border border-gray-200'
                  }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 text-sm font-medium ${viewMode === 'list' ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 border border-gray-200'
                  }`}
              >
                List
              </button>
            </div>
          </div>
          {/* Projects Grid View */}
          {viewMode === 'grid' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <Link to={`/project/${project.slug}`} key={project.slug} className="bg-white/90 backdrop-blur-sm group hover:shadow-xl transition-all duration-300 border border-[#011c14]/20">
                  <div className="aspect-[4/3] overflow-hidden">
                    {project.hasHoverEffect ? (
                      <div className="w-full h-full relative">
                        <img
                          src={project.stillImage}
                          alt={project.title}
                          className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                        />
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                        />
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.categories.map((cat) => (
                        <span key={cat} className="text-xs text-gray-500">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
                      >
                        <Github size={16} />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {/* Projects List View */}
          {viewMode === 'list' && (
            <div className="space-y-0">
              {filteredProjects.map((project, index) => (
                <div key={project.slug} className="border-t border-gray-200 py-8 group hover:bg-white/80 transition-colors duration-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="text-sm text-gray-500 uppercase tracking-wide">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.categories.map((cat) => (
                          <span key={cat} className="text-sm text-gray-500">
                            {cat}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          Code
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          View
                          <ArrowUpRight size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border border-gray-300 text-gray-900 text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
              View Full Portfolio
            </button>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-[#0fb82b]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            I'm always interested in new opportunities and collaborations.<br />
            Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:isabellapc97@gmail.com"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md"
            >
              <Mail size={16} />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/izy138"
              className="flex items-center justify-center gap-2 px-8 py-3 border border-gray-300 text-gray-900 text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://github.com/izy138"
              className="flex items-center justify-center gap-2 px-8 py-3 border border-gray-300 text-gray-900 text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 bg-[#0fb82b]/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Isabella Correa. Built with React and deployed on Vercel.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio; 