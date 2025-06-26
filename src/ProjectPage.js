import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "./projects";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) return <div className="p-8 text-center">Project not found.</div>;

  return (
    <div className="flex flex-col md:flex-row max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full md:w-1/2 object-cover" />
      <div className="p-8 flex-1 flex flex-col">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 mb-6">{project.longDescription}</p>
        <div className="mt-auto flex gap-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800">View Code</a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-gray-900 text-gray-900 rounded hover:bg-gray-900 hover:text-white">Live Demo</a>
        </div>
        <Link to="/" className="mt-6 text-blue-500 hover:underline">← Back to Portfolio</Link>
      </div>
    </div>
  );
} 