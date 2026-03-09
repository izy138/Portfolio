import particlesim from './assets/particlesim.png';
import sponsorstories from './assets/sponsorstories.png';
import intelligentnotes from './assets/intelligentnotes.png';
import kanban from './assets/kanban.png';
import wip from './assets/wip.png';
import shellhacks from './assets/shellhacks.png';
import shellhacks1 from './assets/shellhacks1.png';
import recipeRecommender from './assets/nutrichoice.png';
import miamiDadeActiveCalls from './assets/miami-dade-active-calls.png';
import bookmarkbuddy from './assets/bookmarkbuddy.png';
import multichoice from './assets/multichoice.png';


const projects = [
  {
    slug: "multichoice",
    title: "MultiChoice",
    description: "AI-powered study practice app for creating and practicing multiple choice questions with spaced repetition ordering based on performance history.",
    longDescription: `MultiChoice is a single-page web app for creating and practicing multiple choice questions with AI-powered spaced repetition ordering.

Create questions manually or generate them from study material using Claude AI. Practice with intelligent ordering that adapts to your performance.`,
    extendedDescription: `Features:
• Question Creation — Manual input or AI generation from study material using Claude. Add/remove answer choices, optional explanations.
• Practice Modes — AI-ordered practice (spaced repetition based on performance) or original order.
• Performance Tracking — Tracks times answered, accuracy per question, score during sessions. Visual correct/incorrect feedback.
• Data Persistence — All data stored locally in browser; no backend required.`,
    categories: ["JavaScript", "AI", "Education"],
    tech: ["JavaScript", "Claude AI", "Local Storage", "Spaced Repetition"],
    github: "",
    demo: "",
    image: multichoice,
    imagePosition: "object-center"
  },
  {
    slug: "bookmarkbuddy",
    title: "BookmarkBuddy",
    description: "A modern Chrome extension for visual bookmark management with smart categorization, favorites, duplicate detection, and X/Twitter integration.",
    longDescription: `BookmarkBuddy is a visual Chrome bookmarks manager with smart categorization, favorites, duplicate detection, and X/Twitter integration.

Features include a card grid layout, auto-categorization by URL, right-click save, search and sort, bulk operations, and both side panel and full-page views.`,
    extendedDescription: `Features:
• Card Grid Layout — Visual bookmark cards with favicons, titles, domains, and category tags. Toggle between grid and list views.
• Smart Auto-Categorization — Bookmarks automatically categorized (Streaming, Development, AI Tools, Education, Social, etc.) based on URL.
• Favorites / Pinned — Star any bookmark to pin it. View all favorites in a dedicated tab.
• Duplicate Detection — Identifies domains with multiple bookmarks for cleanup.
• X/Twitter Integration — Auto-captures posts when you press X's bookmark button. Import from X bookmarks page or likes archive.
• Right-Click Context Menu — Save any page or link via "Save to BookmarkBuddy" or save as favorite.
• Search & Sort — Search across titles, URLs, and categories. Sort by newest, oldest, or alphabetical.
• Bulk Operations — Select multiple bookmarks and delete at once.
• Side Panel & Full Page — Quick access in Chrome's side panel or full-page manager for large collections.`,
    categories: ["Chrome Extension", "JavaScript", "Bookmarks"],
    tech: ["Chrome Extension", "JavaScript", "HTML5", "CSS3", "Chrome APIs"],
    github: "",
    demo: "",
    image: bookmarkbuddy,
    imagePosition: "object-left"
  },
  {
    slug: "miami-dade-active-calls",
    title: "Miami-Dade Active Calls",
    description: "Interactive, real-time map of active Miami-Dade Fire Rescue and FHP calls using OpenStreetMap, with filters by incident type and geocoded markers.",
    longDescription: `Miami-Dade Fire Rescue — Live Dispatch Map

An interactive, real-time map of active Miami-Dade Fire Rescue calls using OpenStreetMap.`,
    extendedDescription: `Features:
• Live data — Scrapes Miami-Dade Fire Rescue active calls; auto-refreshes every 60 seconds
• Geocoded map — Addresses plotted on a dark-theme map (OpenStreetMap + Leaflet)
• Miami-Dade bounds — Pan and zoom constrained to the county
• Filters — By incident type: Fire, Medical, Traffic, FHP (highway patrol only), or All
• Sidebar — All active calls by zone; click a marker or card for details
• Caching — Geocode results cached in Turso (or in-memory) so the daily limit and cache survive server restarts

Alternative: A Google Maps version (with traffic layer) lives in version-googlemaps/.

Data source:
Miami-Dade Fire Rescue CAD Active Calls:
https://www.miamidade.gov/firecalls/calls.html

Florida Highway Patrol — Live Traffic Crash and Road Condition Report (FLHSMV):
https://trafficincidents.flhsmv.gov/SmartWebClient/CadView.aspx

FLHSMV / FHP integration:
The map merges Florida Highway Patrol incidents with MDFR calls. FHP data is scraped from the FLHSMV live report and filtered to Miami-Dade only. Incidents include built-in latitude and longitude, so no geocoding is used for FHP — zero extra API cost. FHP primarily covers highways (e.g. I-95, SR-826, Turnpike); MDFR covers local street-level fire and medical calls. Together the two sources give a fuller picture of what's active in the county.

On the map, FHP incidents use purple markers, a dedicated FHP filter in the sidebar, and their own zone section. Popups show a source badge (MDFR or FHP) and, for FHP, a remarks field (e.g. "ROADBLOCK", "PARTIALLY BLOCKING RIGHT LANE"). Both sources are fetched in parallel; if one fails, the other still loads.

This app uses publicly available data from Miami-Dade Fire Rescue and FLHSMV. Addresses are approximate and incident types may change. Not for emergency use.`,
    categories: ["JavaScript", "Leaflet", "OpenStreetMap", "Real-time Data"],
    tech: ["JavaScript", "Leaflet", "OpenStreetMap", "Node.js", "Turso", "Web Scraping"],
    github: "https://github.com/izy138/MDC-ActiveCalls",
    demo: "https://mdc-activecalls.onrender.com/",
    image: miamiDadeActiveCalls,
    imagePosition: "object-left"
  },
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
    imagePosition: "object-center"
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
    demo: "https://www.youtube.com/watch?v=yBECDuw2gaM",
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

/** Display order for all projects. Reorder this array to change how projects appear on the portfolio. */
export const PROJECT_ORDER = [
  "bookmarkbuddy",
  "fiu-panther-planner",
  "webgpu-particles",
  "miami-dade-active-calls",
  "recipe-recommender",
  "multichoice",
  "intelligent-notes",
  "kanban-board",
  "internship-fullstack",
  "chat-app",
  "go-data",
];

export default projects; 