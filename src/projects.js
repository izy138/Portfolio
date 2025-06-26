import particlesimGif from './assets/particlesim.gif';
import particlesimStill from './assets/particlesim-still.png';

const projects = [
  {
    slug: "webgpu-particles",
    title: "WebGPU Particle Simulation",
    description: "High-performance particle physics simulation using WebGPU compute shaders with real-time particle dynamics.",
    longDescription: `This is a detailed writeup about the WebGPU Particle Simulation project. You can write about your process, challenges, and what you learned here.`,
    categories: ["Development", "Graphics", "WebGPU"],
    tech: ["WebGPU", "JavaScript", "WGSL", "SQLite"],
    github: "https://github.com/izy138/ParticleSim",
    demo: "https://izy138.github.io/ParticleSim",
    image: particlesimGif,
    stillImage: particlesimStill,
    hasHoverEffect: true
  },
  {
    slug: "intelligent-notes",//"react-dashboard", 
    title: "Intelligent Notes",
    description: "Modern analytics dashboard with real-time data visualization and responsive design.",
    longDescription: `This is a detailed writeup about the React Analytics Dashboard project.`,
    categories: ["Development", "Design", "React"],
    tech: ["Java", "Maven", ""],
    github: "https://github.com/izy138/Intelligent-Notes/",
    demo: "https://youtu.be/hVVNb0Lfw4I?si=qC5AGLoeRv5qOs_5&t=652",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  },
  {
    slug: "kanban-board",//"react-dashboard", 
    title: "Kanban Board",
    description: "Modern analytics dashboard with real-time data visualization and responsive design.",
    longDescription: `This is a detailed writeup about the React Analytics Dashboard project.`,
    categories: ["Development", "Design", "React"],
    tech: ["React", "TypeScript", "TailwindCSS", "Node.js", "Express", ""],
    github: "https://github.com/yourusername/react-dashboard",
    demo: "https://your-dashboard.vercel.app",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  },
  {
    slug: "kanban-board",//"react-dashboard", 
    title: "Personalized AI Books",
    description: "Modern analytics dashboard with real-time data visualization and responsive design.",
    longDescription: `This is a detailed writeup about the React Analytics Dashboard project.`,
    categories: ["Development", "Design", "React"],
    tech: ["React", "TypeScript", "TailwindCSS", "Node.js", "Express", ""],
    github: "https://github.com/yourusername/react-dashboard",
    demo: "https://your-dashboard.vercel.app",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  },

  // ...add the rest of your projects here, following the same structure
];

export default projects; 