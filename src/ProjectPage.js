import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import projects from "./projects";
import BlogSection from "./BlogSection";
import Navbar from "./Navbar";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setImgIndex(0);
  }, [slug]);

  if (!project) return <div className="p-8 text-center">Project not found.</div>;

  // Build the images array: use project.images if provided, otherwise fall back to single image
  const images = project.images
    ? project.images
    : [project.projectPageImage || project.image];

  const hasMultiple = images.length > 1;

  const prev = () => setImgIndex(i => (i - 1 + images.length) % images.length);
  const next = () => setImgIndex(i => (i + 1) % images.length);

  return (
    <div className="min-h-screen">
      <Navbar variant="project" />
      <div className="max-w-6xl mx-auto my-9 pt-16 bg-[#0fb82b]/10 p-8 rounded-lg">
        {/* Project Details Section */}
        <div className="flex flex-col md:flex-row bg-white text-#011c14 rounded-lg shadow-lg overflow-hidden mb-8">

          {/* Image carousel */}
          <div className="relative w-full md:w-1/2 bg-black flex items-center justify-center select-none">
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img
                  src={images[imgIndex]}
                  alt={`${project.title} ${imgIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </a>
            ) : (
              <img
                src={images[imgIndex]}
                alt={`${project.title} ${imgIndex + 1}`}
                className="w-full h-full object-cover object-left"
              />
            )}

            {/* Prev / Next buttons */}
            {hasMultiple && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={22} />
                </button>

                {/* Counter */}
                <div className="absolute bottom-2 right-3 text-xs text-white bg-black/40 rounded px-2 py-0.5">
                  {imgIndex + 1} / {images.length}
                </div>

                {/* Dot indicators */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIndex(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${i === imgIndex ? 'bg-white' : 'bg-white/40'}`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Info panel */}
          <div className="p-8 flex-1 flex flex-col">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <div className="text-#011c14 mb-6 whitespace-pre-line">{project.longDescription}</div>
            <div className="mt-auto flex gap-4">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#011c14] text-white rounded hover:bg-[#011c14]/80">Live Demo</a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-[#011c14] text-#011c14 rounded hover:bg-[#011c14]/20 hover:text-[#011c14]">View Code</a>
              )}
            </div>
            <Link to="/" className="mt-6 text-[#011c14] hover:underline">← Back to Portfolio</Link>
          </div>
        </div>

        {/* Extended Description Section */}
        {project.extendedDescription && (
          <div className="bg-white text-#011c14 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">About This Project</h2>
            <div className="whitespace-pre-line leading-relaxed">{project.extendedDescription}</div>
          </div>
        )}

        {/* Blog Section */}
        <BlogSection projectSlug={slug} />
      </div>
    </div>
  );
}
