import particlesim from './assets/particlesim.png';
import sponsorstories from './assets/sponsorstories.png';
import intelligentnotes from './assets/intelligentnotes.png';
import kanban from './assets/kanban.png';
import wip from './assets/wip.png';


const projects = [
  {
    slug: "webgpu-particles",
    title: "WebGPU Particle Simulation",
    description: "High-performance particle physics simulation using WebGPU compute shaders with real-time particle dynamics.",
    longDescription: `This is a detailed writeup about the WebGPU Particle Simulation project. You can write about your process, challenges, and what you learned here.`,
    categories: ["Graphics", "WebGPU", "Interactive"],
    tech: ["WebGPU", "JavaScript", "WGSL", "SQLite"],
    github: "https://github.com/izy138/ParticleSim",
    demo: "https://izy138.github.io/ParticleSim",
    image: particlesim,
    imagePosition: "object-center"
  },
  {
    slug: "intelligent-notes",//"react-dashboard", 
    title: "Intelligent Notes",
    description: "Note taking app using AI to summarize and organize notes.",
    longDescription: `This is a detailed writeup about the React Analytics Dashboard project.`,
    categories: ["AI","Java", "JavaFX", "Maven"],
    tech: ["Java", "Maven", "JavaFX", "AI"],
    github: "https://github.com/izy138/Intelligent-Notes/",
    demo: "https://youtu.be/hVVNb0Lfw4I?si=qC5AGLoeRv5qOs_5&t=652",
    image: intelligentnotes,
    imagePosition: "object-left"
  },
  {
    slug: "kanban-board",//"react-dashboard", 
    title: "Kanban Board",
    description: "Task tracking with board and list views.",
    longDescription: `Includes priority, due date, and tags.`,
    categories: ["React", "TypeScript", "TailwindCSS", "Node.js" ],
    tech: ["React", "TypeScript", "TailwindCSS", "Node.js", "Express"],
    github: "https://github.com/yourusername/react-dashboard",
    demo: "https://izy138-kanban.vercel.app",
    image: kanban,
    imagePosition: "object-top"
  },

  {
    slug: "internship-fullstack",//"react-dashboard", 
    title: "Internship: Frontend Dev",
    description: "Interning at Red Peak Corp's Sponsor Stories, using AI to generate personalized book content.",
    longDescription: `Worked on the frontend of the Sponsor Stories website, using React, TypeScript, and TailwindCSS to create a responsive and user-friendly interface and Gemini's api.
    Maintained python backend and scripts for AI generation. Enhanced the book cover generation process and its design using pillow and Gemini's api.`,
    categories: ["Python", "React", "AI", "Typescript", "TailwindCSS"],
    tech: ["React", "TypeScript", "TailwindCSS", "Node.js", "AI", "Python", "Pillow", "Docker"],
    // github: "https://github.com/yourusername/react-dashboard",
    demo: "https://red-peak.ai",
    image: sponsorstories,
    imagePosition: "object-left"
  },
  {
    slug: "chat-app",//"react-dashboard", 
    title: "Chat App",
    description: "Currently in development",
    longDescription: `Currently in development.`,
    categories: ["Development", "React"],
    tech: ["React", "TypeScript", "TailwindCSS", "Node.js", "Express", "Firebase"],
    github: "https://github.com/yourusername/react-dashboard",
    demo: "https://your-dashboard.vercel.app",
    image: wip,
    imagePosition: "object-center"
  },
  {
    slug: "go-data",//"react-dashboard", 
    title: "Relational Database in Go",
    description: "Currently in development",
    longDescription: `Currently in development.`,
    categories: ["Development", "Golang"],
    tech: ["Golang", "Database", "SQL"],
    github: "https://github.com/yourusername/react-dashboard",
    demo: "https://your-dashboard.vercel.app",
    image: wip,
    imagePosition: "object-center"
  },

  // ...add the rest of your projects here, following the same structure
];

export default projects; 