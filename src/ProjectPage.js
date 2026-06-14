import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import projects, { PROJECT_ORDER } from "./projects";
import Navbar from "./Navbar";

const blogSummaries = {
  "webgpu-particles":
    "Inspired by a Particle Life simulation shared on Twitter, the project began as a vanilla JavaScript and HTML5 Canvas prototype. Performance dropped beyond roughly 800 particles because every particle checked every other particle each frame. Moving to WebGPU with WGSL compute and render shaders improved performance dramatically, enabling up to 12,000 particles at 60fps, along with size, opacity, pause, and reset controls.",
  "kanban-board":
    "Built with React and TypeScript, the board uses react-beautiful-dnd for smooth drag-and-drop between columns. Supabase powers real-time data synchronization, session persistence, and user authentication so tasks stay in sync across devices.",
  "chat-app":
    "Development started with Firebase Authentication and Firestore for real-time messaging. The early focus was setting up the backend infrastructure and building out the user authentication flow for a full messaging platform.",
};

function getAboutContent(project, slug) {
  let content = project.extendedDescription || "";

  const blogSummary = blogSummaries[slug];
  if (blogSummary) {
    content = content
      ? `${content}\n\nDevelopment notes\n${blogSummary}`
      : blogSummary;
  } else if (!content && project.longDescription) {
    content = project.longDescription;
  }

  return content.trim();
}

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setImgIndex(0);
  }, [slug]);

  if (!project) return <div className="p-8 text-center">Project not found.</div>;

  const images = project.images
    ? project.images
    : [project.projectPageImage || project.image];

  const hasMultiple = images.length > 1;

  const prevImg = () => setImgIndex(i => (i - 1 + images.length) % images.length);
  const nextImg = () => setImgIndex(i => (i + 1) % images.length);

  const currentOrderIndex = PROJECT_ORDER.indexOf(slug);
  const prevSlug = currentOrderIndex > 0
    ? PROJECT_ORDER[currentOrderIndex - 1]
    : PROJECT_ORDER[PROJECT_ORDER.length - 1];
  const nextSlug = currentOrderIndex < PROJECT_ORDER.length - 1
    ? PROJECT_ORDER[currentOrderIndex + 1]
    : PROJECT_ORDER[0];
  const prevProject = projects.find(p => p.slug === prevSlug);
  const nextProject = projects.find(p => p.slug === nextSlug);
  const aboutContent = getAboutContent(project, slug);

  return (
    <div className="min-h-screen">
      <Navbar variant="project" />

      {/* Carousel with project nav at page edges */}
      <div className="relative pt-20 mb-4">
        {prevProject && (
          <Link
            to={`/project/${prevSlug}`}
            className="absolute left-4 sm:left-6 lg:left-8 top-20 z-10 text-[#011c14]/60 hover:text-[#011c14] transition-colors group"
            aria-label={`Previous project: ${prevProject.title}`}
          >
            <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
          </Link>
        )}

        {nextProject && (
          <Link
            to={`/project/${nextSlug}`}
            className="absolute right-4 sm:right-6 lg:right-8 top-20 z-10 flex items-center gap-1 text-[#011c14]/60 hover:text-[#011c14] transition-colors group"
            aria-label={`Next project: ${nextProject.title}`}
          >
            <span className="text-sm hidden sm:inline">next project</span>
            <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        )}

        <div className="px-4 sm:px-6 lg:px-8">
          <div className={`relative rounded-lg shadow-lg overflow-hidden select-none w-full max-w-4xl mx-auto ${project.carouselAspect || "aspect-video"} ${project.carouselBg || "bg-neutral-950"}`}>
            <img
              src={images[imgIndex]}
              alt={`${project.title} ${imgIndex + 1}`}
              className={`absolute inset-0 block h-full w-full ${project.carouselFit || "object-cover"} ${project.imagePosition || "object-center"}`}
            />

            {hasMultiple && (
              <>
                <button
                  onClick={prevImg}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImg}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>

                <div className="absolute bottom-3 right-4 text-xs text-white bg-black/50 rounded px-2 py-0.5">
                  {imgIndex + 1} / {images.length}
                </div>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIndex(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${i === imgIndex ? 'bg-white' : 'bg-white/40'}`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="w-full mb-9 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#011c14] text-center mb-3">{project.title}</h1>

        {/* Link buttons */}
        <div className="flex justify-center gap-4 mb-0">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-[#011c14] text-white rounded-lg hover:bg-[#011c14]/80 transition-colors text-sm font-medium">
              Live Demo
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-5 py-2 border border-[#011c14] text-[#011c14] rounded-lg hover:bg-[#011c14]/10 transition-colors text-sm font-medium">
              View Code
            </a>
          )}
        </div>

        {/* Short Description + Tech Stack */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-3">
            <p className="text-[#011c14] leading-relaxed mb-4">{project.description}</p>
            <h3 className="text-sm font-semibold text-[#011c14] mb-3 uppercase tracking-wide">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-[#011c14]/10 text-[#011c14] text-xs px-2.5 py-1 rounded-full font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* About This Project */}
          {aboutContent && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
              <h2 className="text-2xl font-bold mb-4 text-[#011c14]">About This Project</h2>
              <div className="text-[#011c14] whitespace-pre-line leading-relaxed">{aboutContent}</div>
            </div>
          )}
        </div>

        {/* Back link */}
        <div className="mt-4 mb-8 text-center">
          <Link to="/" className="text-[#011c14] hover:underline">← Back to Portfolio</Link>
        </div>
      </div>
    </div>
  );
}
