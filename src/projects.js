import particlesim from './assets/particlesim.png';
import sponsorstories from './assets/sponsorstories.png';
import intelligentnotes from './assets/intelligentnotes.png';
import kanban from './assets/kanban.png';
import wip from './assets/wip.png';
import shellhacks from './assets/shellhacks.png';
import shellhacks1 from './assets/shellhacks1.png';
import recipeRecommender from './assets/nutrichoice.png';


const projects = [
  {
    slug: "recipe-recommender",
    title: "Recipe Recommender",
    description: "AI-powered recipe recommendation website using K-means clustering to suggest personalized recipes based on dietary preferences.",
    longDescription: `Recipe Recommender is an intelligent recipe discovery platform that uses machine learning to provide personalized recipe recommendations.
`,
    extendedDescription: `
Core Features:
• AI-Powered Recommendations: Uses K-means clustering algorithm to recommend similar recipes based on user preferences and past interactions
• Dietary Preferences: Personalized recommendations tailored to your dietary restrictions and preferences (vegetarian, vegan, gluten-free, keto, etc.)
• Recipe Management: Favorite recipes and mark recipes as tried to improve recommendation accuracy
• Meal Planning: Plan your meals ahead with an integrated meal planning feature
• Nutrition Tracking: Track nutritional information for your meals and recipes
• Smart Search: Search recipes by ingredients, cuisine type, or dietary requirements

Built with React TypeScript for the frontend and Django with Python for the backend, providing a seamless user experience with intelligent recipe discovery.`,
    categories: ["React", "TypeScript", "Django", "Python", "AI", "Machine Learning"],
    tech: ["React", "TypeScript", "Django", "Python", "K-means Clustering", "Machine Learning", "AI"],
    github: "https://github.com/Joaquin54/nutrichoice",
    demo: "",
    image: recipeRecommender,
    imagePosition: "object-left"
  },
  {
    slug: "fiu-panther-planner",
    title: "FIU Panther Planner",
    description: "Chrome extension for FIU students with AI-powered academic planning, course tracking, and campus navigation.",
    longDescription: `FIU Panther Planner is an AI-powered Chrome extension for FIU students.

Core Features:
• Degree Progress Tracking: Visual checklist showing completed vs. required courses for any major
• AI Academic Advisor (Roary): Personalized course recommendations and academic guidance
• Smart Schedule Planning: Intelligent course scheduling with conflict detection
• Campus Navigation: Google Maps integration for optimal routes between classes
• Real-time Data Sync: Automatically extracts course data from FIU's PantherSoft system
• Prerequisite Checking: Validates course eligibility based on completed prerequisites

Built for ShellHacks 2025 in a team of 4 using Chrome Extension Manifest V3, FastAPI, Python 3.13, MongoDB, and Google APIs for AI and navigation features.`,
    categories: ["Chrome Extension", "AI", "Python", "JavaScript", "Hackathon"],
    tech: ["Chrome Extension", "JavaScript", "HTML5", "CSS3", "FastAPI", "Python 3.13", "MongoDB", "Pydantic", "Google Maps API", "Google ADK"],
    github: "https://github.com/izy138/ShellHacks2025",
    demo: "https://devpost.com/software/fiu-panther-planner",
    image: shellhacks,
    projectPageImage: shellhacks1,
    imagePosition: "object-right"
  },
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
    longDescription: `This project was built for the Software Engineering I course at FIU. It uses JavaFX to create a GUI for the notes app. It uses the ClaudeAI API to generate summaries of the notes. It includes note organization, note tagging, and note searching.`,
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