import React, { useState, useEffect } from 'react';
import { Menu, X, Github, ExternalLink, Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import projects from './projects';
import ParticleBackground from './ParticleBackground';
import painting1 from './assets/art/painting1.jpg';
import painting2 from './assets/art/painting2.jpg';
import portfolioResume from './assets/portfolio_resume.pdf';

const categories = ['all', 'React', 'JavaScript', 'Java', 'AI', 'Graphics', 'Interactive', 'Golang'];

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [isScrolled, setIsScrolled] = useState(false);
  const [paintingOffset, setPaintingOffset] = useState(0);
  const [aboutPaintingOffset, setAboutPaintingOffset] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const [isMouseOverSimulation, setIsMouseOverSimulation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about','contact'];
      const scrollPosition = window.scrollY + 100;
      
      // Check if scrolled past hero section
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsScrolled(scrollPosition > heroBottom);
        
        // Calculate painting animation based on scroll position
        const heroHeight = heroSection.offsetHeight;
        const maxOffset = heroHeight * 0.3; // Move painting by 30% of hero height
        const scrollProgress = Math.min(scrollPosition / heroHeight, 1);
        setPaintingOffset(scrollProgress * maxOffset);
      }
      
      // Calculate about section painting animation
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop;
        const aboutHeight = aboutSection.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Start animation when bottom of viewport hits top of about section
        const animationStartPoint = aboutTop - windowHeight;
        const animationEndPoint = aboutTop + aboutHeight;
        
        // Calculate progress from when animation should start to when it should end
        const scrollProgress = Math.max(0, Math.min(1, (scrollPosition - animationStartPoint) / (animationEndPoint - animationStartPoint)));
        const maxAboutOffset = aboutHeight * 0.3;
        setAboutPaintingOffset(scrollProgress * maxAboutOffset);
      }
      
      // Check which projects are visible for animation
      const projectCards = document.querySelectorAll('.project-card');
      const newVisibleProjects = new Set();
      
      projectCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        
        if (isVisible) {
          newVisibleProjects.add(index);
        }
      });
      
      setVisibleProjects(newVisibleProjects);
      
      // Check if we're at the bottom of the page
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const isAtBottom = window.scrollY + windowHeight >= documentHeight - 50; // 50px threshold
      
      if (isAtBottom) {
        setActiveSection('contact');
      } else {
        // Normal section detection
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
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight =60; // Approximate height of the fixed navigation bar
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(project => project.categories.includes(selectedFilter));

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 bg-white/40 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm transition-all duration-500 ease-in-out w-full`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-lg sm:text-xl font-semibold text-gray-900">
              Isabella Correa
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {['home', 'projects', 'about', 'contact'].map((item) => (
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
            <div className="px-4 sm:px-6 py-4 space-y-2">
              {['home', 'projects', 'about', 'contact'].map((item) => (
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
      <section id="home" className="relative h-[45vh] flex items-center justify-center bg-[#1babab]/50 overflow-hidden">
        {/* Animated Painting Background */}
        <div 
          className="absolute left-0 right-0 opacity-20 transition-transform duration-300 ease-out"
          style={{
            backgroundImage: `url(${painting1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            transform: `translateY(${paintingOffset}px)`,
            zIndex: 0,
            filter: 'saturate(0.6)',
            top: '-8%',
            height: '120%'
          }}
        />
        <div className="max-w-2xl text-#011c14 text-center px-4 sm:px-4 relative z-10 mt-16">
          <div className="bg-white/40 backdrop-blur-md rounded-lg p-8 shadow-lg">
            <div className="mb-1">
              {/* <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-[#0e7490] to-[#bbf7d0] flex items-center justify-center text-white text-xl font-bold shadow-lg">
                IC
              </div> */}
            </div>
            {/* <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Isabella Correa
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8">
              Software Developer
            </p> */}
            <p className="text-xl sm:text-xl mb-2 md:mb-4 leading-relaxed">
            A showcase of projects where I've brought ideas to life through code and design.
            </p>
            <div className="flex flex-row gap-4 justify-center">
              {/* <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-[#011c14] text-[#1babab] text-sm font-medium hover:bg-[#011c14]/90 transition-all duration-200 whitespace-nowrap"
              >
                View Work
              </button> */}
              <a
                href={portfolioResume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#1babab]/50 text-[#011c14] text-sm font-medium rounded-md hover:bg-[#1babab]/80 transition-all duration-200 whitespace-nowrap"
              >
                Resume
              </a>
              {/* <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-[#011c14] text-[#011c14] text-sm font-medium hover:bg-[#011c14]/10 transition-colors duration-200 whitespace-nowrap"
              >
                Contact
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-4 sm:py-4 px-4 sm:px-6 bg-[#1babab]/40 ">
        <div className="max-w-7xl mx-auto">
          
          {/* Filter and View Toggle */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 sm:mb-3 gap-4 ">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors duration-200 rounded-md 
                    border-[#1babab] ${selectedFilter === category
                      ? 'bg-[#1babab] text-white'
                      : 'bg-white text-[#011c14] hover:bg-[#1babab]/5 border'
                    }`}
                    //{`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md border text-[#011c14] border-[#1babab]/80 ${viewMode === 'grid' ? 'bg-[#1babab]/50  ': 'bg-white'
                >
                  {category === 'all' ? 'Show All' : category}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md border text-[#011c14] border-[#1babab]/80 ${viewMode === 'grid' ? 'bg-[#1babab]/50  ': 'bg-white'
                  }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md border text-[#011c14] border-[#1babab]/80 ${viewMode === 'list' ? 'bg-[#1babab]/50' : 'bg-white  '
                  }`}
              >
                List
              </button>
            </div>
          </div>
          {/* Projects Grid View */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ">
              {filteredProjects.map((project, index) => (
                <Link 
                  to={`/project/${project.slug}`} 
                  key={project.slug} 
                  className="project-card border-2 border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm group hover:shadow-xl transition-all duration-300 transform"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-md">
                    {project.hasHoverEffect ? (
                      <div className="w-full h-full relative">
                        <img
                          src={project.stillImage}
                          alt={project.title}
                          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 ${project.imagePosition || 'object-center'}`}
                        />
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${project.imagePosition || 'object-center'}`}
                        />
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full rounded-md object-cover group-hover:scale-105 transition-transform duration-300 ${project.imagePosition || 'object-center'}`}
                      />
                    )}
                  </div>
                  <div className="p-3 sm:p-4 pt-2 sm:pt-2">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
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
                        className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 hover:text-gray-900"
                      >
                        <Github size={14} className="sm:w-4 sm:h-4" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 hover:text-gray-900"
                      >
                        <ExternalLink size={14} className="sm:w-4 sm:h-4" />
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
            <div className="space-y-2 py-2">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.slug} 
                  className="project-card border-t border-gray-200 py-4 px-4 rounded-lg group bg-white/80 hover:bg-white/80 transition-all duration-700 transform opacity-0 translate-x-[-20px] animate-slide-in"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Project Image */}
                    <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech && project.tech.map((tech) => (
                          <span key={tech} className="text-sm text-gray-500 uppercase tracking-wide">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      {/* <div className="flex flex-wrap gap-2">
                        {project.categories.map((cat) => (
                          <span key={cat} className="text-sm text-gray-500">
                            {cat}
                          </span>
                        ))}
                      </div> */}
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
            {/* <button className="px-8 py-3 border border-gray-300 text-gray-900 text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
              View Full Portfolio
            </button> */}
          </div>
        </div>
      </section>

      {/* Simulation Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <ParticleBackground onMouseStateChange={setIsMouseOverSimulation} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-center text-white/80 z-10 transition-opacity duration-300 ${isMouseOverSimulation ? 'opacity-0' : 'opacity-100'}`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Interactive Particle Simulation</h2>
            {/* <p className="text-lg">Scroll to explore more</p> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-10 px-6 bg-[#1babab]/50 backdrop-blur-sm overflow-hidden">
        {/* Animated Painting Background */}
        <div 
          className="absolute inset-0 opacity-20 transition-transform duration-300 ease-out"
          style={{
            backgroundImage: `url(${painting2})`,
            backgroundSize: '100% auto',
            backgroundPosition: 'center 30%',
            transform: `translateY(${aboutPaintingOffset}px)`,
            zIndex: 0,
            filter: 'saturate(0.4)',
            top: '-20%',
            height: '150%'
          }}
        />
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="bg-white/60 backdrop-blur-md rounded-lg p-8 shadow-lg">
            <div className="text-center mb-2">
              {/* <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600 mb-6">
                About
              </div> */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About me:
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl text-left">
                Hi, I'm Isabella Correa, a computer science student and software developer passionate about building innovative solutions that solve real problems. Currently pursuing my B.S. in Computer Science at FIU while working as a Front End Intern at Red Peak Corp, I bring a unique perspective combining technical expertise with a creative eye for design.
                <br /><br />
                I love learning new technologies and applying them to real-world problems. I'm currently learning Golang and building my own database from scratch. I loved exploring cutting-edge technologies like WebGPU for performance-driven applications. From AI-powered Note-taking apps to particle physics simulators, I enjoy creating projects that interest me and give me a sense of accomplishment.  
                <br /><br />
                When I'm not coding, you'll find me mentoring fellow students as a Teaching Assistant at FIU. I'm always excited to connect with fellow developers and explore new opportunities to create meaningful digital experiences.
              </p>
              <div className="mt-8">
                <Link
                  to="/some-art"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#011c14] text-white text-sm font-medium hover:bg-[#011c14]/80 transition-all duration-200 rounded-md"
                >
                  View Some Art
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-40 px-4 sm:px-6 bg-[#1babab]/40 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
            I'm always interested in new opportunities and collaborations.<br className="hidden sm:block" />
            Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="mailto:isabellapc97@gmail.com"
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-2 sm:py-3 border-2  border-[#1babab] rounded-md bg-[#1babab]/50 text-[#011c14] text-sm font-medium hover:bg-[#1babab]/80 transition-colors duration-200"
              >
              <Mail size={16} />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/izy138"
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-2 sm:py-3 border-2 border-[#1babab] rounded-md bg-[#1babab]/50 text-[#011c14] text-sm font-medium hover:bg-[#1babab]/80 transition-colors duration-200"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://github.com/izy138"
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-2 sm:py-3 border-2 border-[#1babab] rounded-md bg-[#1babab]/50 text-[#011c14] text-sm font-medium hover:bg-[#1babab]/80 transition-colors duration-200"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-200 bg-[#1babab]/20  backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2025 Isabella Correa. Built with React and deployed on Vercel.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio; 