import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projects from "./projects";
import BlogSection from "./BlogSection";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <div className="p-8 text-center">Project not found.</div>;

  return (
    <div className="max-w-4xl mx-auto my-12 bg-[#0fb82b]/10 p-8 rounded-lg">
      {/* Project Details Section */}
      <div className="flex flex-col md:flex-row bg-white text-#011c14 rounded-lg shadow-lg overflow-hidden mb-8">
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-full md:w-1/2 cursor-pointer hover:opacity-90 transition-opacity">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </a>
        <div className="p-8 flex-1 flex flex-col">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-#011c14 mb-6">{project.longDescription}</p>
          <div className="mt-auto flex gap-4">
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#011c14] text-white rounded hover:bg-[#011c14]/80">Live Demo</a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-[#011c14] text-#011c14 rounded hover:bg-[#011c14]/20 hover:text-[#011c14]">View Code</a>
          </div>
          <Link to="/" className="mt-6 text-[#011c14] hover:underline">← Back to Portfolio</Link>
        </div>
      </div>
      
      {/* Blog Section */}
      <BlogSection projectSlug={slug} />
    </div>
  );
} 