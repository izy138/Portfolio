import particlesim from './assets/particlesim.png';
import sponsorstories from './assets/sponsorstories.png';
import intelligentnotes from './assets/intelligentnotes.png';
import kanban from './assets/kanban.png';
import wip from './assets/wip.png';
import shellhacks from './assets/shellhacks.png';
import recipeRecommender from './assets/nutrichoice.png';
import miamiDadeActiveCalls from './assets/miami-dade-active-calls.png';
import bookmarkbuddy from './assets/bookmarkbuddy.png';
import multichoice from './assets/multichoice.png';
import kasiopya1 from './assets/kasiopya1.png';
import kasiopya2 from './assets/kasiopya2.png';
import kasiopya3 from './assets/kasiopya3.png';
import kasiopya4 from './assets/kasiopya4.png';
import nihDashboardOverview from './assets/nih-dashboard-overview.png';
import nihDashboardCharts from './assets/nih-dashboard-charts.png';
import nihTermThemes from './assets/nih-term-themes.png';
import nihDashboardFiltered from './assets/nih-dashboard-filtered.png';
import nihSearchResults from './assets/nih-search-results.png';
import nihProjectDetail from './assets/nih-project-detail.png';
import nihHybridSearch from './assets/nih-hybrid-search.png';
import nihSimilarProjects from './assets/nih-similar-projects.png';
import libraryManagementSystem from './assets/library-system.png';


const projects = [
  {
    slug: "nih-search-dashboard",
    title: "NIH Search and Analytics Dashboard",
    description: "Full-stack search for NIH-funded research grants (2020-25). Users can use keyword or semantic search, filter, and explore funding trends through an interactive dashboard with maps and charts.",
    about: `Built during my KBR internship to help analysts explore NIH grant portfolios. Ingests multi-year grant data from CSV files, indexes records into OpenSearch with optional semantic embeddings, and serves a React frontend.

Search & discovery
• Keyword search (BM25) across title, abstract, terms, PI names, organization, and institute—with filters for PI, institute/center, organization, state, activity code, fiscal year range, and project terms
• Advanced boolean search with up to 8 AND/OR/NOT clauses
• Semantic search using sentence-transformer embeddings to find projects by meaning, not just exact keywords
• Hybrid search fusing BM25 and k-NN results with Reciprocal Rank Fusion (RRF)
• Similar projects for any grant, with deduplication of multi-year award variants and background prefetching

Analytics dashboard
• KPI cards, US choropleth map, bar charts for institutes and organizations, time-series trends, activity funding pie chart, and project-term theme cloud

Data pipeline
• CSV loading and cleaning (Pandas/Jupyter), bulk indexing into OpenSearch, optional 384-dim embeddings (all-MiniLM-L6-v2), GPU-accelerated embedding workflow, term statistics precomputation

Infrastructure
Three Docker Compose services (React, FastAPI, OpenSearch) with hot-reload. Data covers NIH grant CSVs (2020–2025) with 46 indexed fields per record.`,
    categories: ["React", "TypeScript", "FastAPI", "OpenSearch", "Machine Learning"],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "FastAPI", "OpenSearch", "Docker", "Recharts", "sentence-transformers", "PyTorch", "Pandas", "DuckDB"],
    github: "https://github.com/izy138/KBR-search",
    demo: "https://nih-search.onrender.com/",
    image: nihDashboardOverview,
    images: [
      nihDashboardOverview,
      nihDashboardCharts,
      nihDashboardFiltered,
      nihTermThemes,
      nihSearchResults,
      nihProjectDetail,
      nihHybridSearch,
      nihSimilarProjects,
    ],
    imagePosition: "object-center",
    carouselAspect: "aspect-[1024/577]",
    carouselBg: "bg-[#edf2f7]",
    carouselFit: "object-contain",
  },
  {
    slug: "multichoice",
    title: "MultiChoice",
    description: "AI-powered study practice app for creating and practicing multiple choice questions with spaced repetition ordering based on performance history.",
    about: `Create questions manually or generate them from study material using Claude AI. All data stays in the browser—no backend required.

• Question creation — manual input or AI generation, with add/remove answer choices and optional explanations
• Practice modes — AI-ordered spaced repetition or original order
• Performance tracking — times answered, accuracy per question, session score, and visual correct/incorrect feedback`,
    categories: ["JavaScript", "AI", "Education"],
    tech: ["JavaScript", "Claude AI", "Local Storage", "Spaced Repetition"],
    github: "https://github.com/izy138/MultiChoice",
    demo: "https://izy138.github.io/MultiChoice/",
    image: multichoice,
    imagePosition: "object-center"
  },
  {
    slug: "bookmarkbuddy",
    title: "BookmarkBuddy",
    description: "A modern Chrome extension for visual bookmark management with smart categorization, favorites, duplicate detection, and X/Twitter integration.",
    about: `Visual bookmark cards with favicons, titles, domains, and category tags. Toggle between grid and list views, or use Chrome's side panel for quick access.

• Auto-categorization by URL (Streaming, Development, AI Tools, Education, Social, etc.)
• Favorites tab and duplicate detection for cleanup
• X/Twitter integration — auto-captures posts on bookmark, import from bookmarks page or likes archive
• Right-click context menu to save any page or link
• Search across titles, URLs, and categories; sort by date or alphabetically; bulk delete`,
    categories: ["Chrome Extension", "JavaScript", "Bookmarks"],
    tech: ["Chrome Extension", "JavaScript", "HTML5", "CSS3", "Chrome APIs"],
    github: "https://github.com/izy138/BookmarkBuddy",
    demo: "",
    image: bookmarkbuddy,
    imagePosition: "object-left"
  },
  {
    slug: "miami-dade-active-calls",
    title: "Miami-Dade Active Calls",
    description: "Interactive, real-time map of active Miami-Dade Fire Rescue and FHP calls using OpenStreetMap, with filters by incident type and geocoded markers.",
    about: `Live data scraped from Miami-Dade Fire Rescue and Florida Highway Patrol, auto-refreshing every 60 seconds. Addresses geocoded and plotted on a dark-theme Leaflet map constrained to county bounds.

• Filters by incident type: Fire, Medical, Traffic, FHP (highway patrol only), or All
• Sidebar lists active calls by zone; click a marker or card for details
• Geocode results cached in Turso so the daily limit survives server restarts

FHP integration
FHP incidents are scraped from FLHSMV and filtered to Miami-Dade. They include built-in coordinates (no geocoding cost), covering highways while MDFR handles local calls. Purple markers, dedicated FHP filter, and parallel fetching—if one source fails, the other still loads.

A Google Maps version with a traffic layer lives in version-googlemaps/.

Disclaimer: Uses publicly available data. Addresses are approximate. Not for emergency use.`,
    categories: ["JavaScript", "Leaflet", "OpenStreetMap", "Real-time Data"],
    tech: ["JavaScript", "Leaflet", "OpenStreetMap", "Node.js", "Turso", "Web Scraping"],
    github: "https://github.com/izy138/MDC-ActiveCalls",
    demo: "https://mdc-activecalls.onrender.com/",
    image: miamiDadeActiveCalls,
    imagePosition: "object-left"
  },
  {
    slug: "library-management-system",
    title: "Library Database Management System",
    description: "Library management system using Flask, MySQL, and JavaScript. Includes database triggers, views, and query tables.",
    about: `Staff manage books, members, checkouts, returns, and fines from a single-page vanilla JavaScript dashboard with search, modals, and dark mode.

Database
Normalized MySQL schema (5 tables) with foreign keys, check constraints, views, and four triggers for overdue fines, damage charges, inventory updates, and rental restrictions.

Backend & reports
Flask REST API with CRUD endpoints for all entities, plus ten analytical SQL reports: overdue titles, availability, popularity, fine balances, and more.

Infrastructure
Docker Compose (MySQL + Flask) for one-command local setup and database initialization.`,
    categories: ["Python", "Flask", "MySQL", "SQL", "Docker"],
    tech: ["Python", "Flask", "MySQL 8", "SQL", "HTML", "CSS", "JavaScript", "Docker"],
    github: "https://github.com/izy138/STIQ-Library",
    demo: "https://www.youtube.com/watch?v=Zqswyf4bDio&t=396s",
    image: libraryManagementSystem,
    imagePosition: "object-top",
    carouselAspect: "aspect-[2880/1508]",
    carouselFit: "object-contain",
  },
  {
    slug: "recipe-recommender",
    title: "Recipe Recommender",
    description: "AI-powered recipe recommendation website using K-means clustering to suggest personalized recipes based on dietary preferences.",
    about: `React TypeScript frontend with Django/Python backend.

• K-means clustering recommends similar recipes based on preferences and past interactions
• Dietary filters (vegetarian, vegan, gluten-free, keto, etc.), favorites, and "tried" tracking improve accuracy over time
• Meal planning, nutrition tracking, and search by ingredients, cuisine, or dietary requirements`,
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
    about: `Real-time particle life simulation running entirely on the GPU via WebGPU. Thousands of particles interact through attraction and repulsion forces, producing emergent behaviors from clustering to chaotic flow. Inspired by Particle Life by Sandbox Science.

Started as a vanilla JavaScript and Canvas prototype, but performance dropped beyond ~800 particles due to O(n²) checks each frame. Moving to WebGPU with WGSL compute and render shaders enabled up to 20,000 particles at 60fps.

How it works
Each frame runs a compute pass (net forces via spatial binning, velocity/position integration) and a render pass (colored points). Force follows a piecewise model between particle types with double-buffered GPU state.

Features
• 2–8 particle types with configurable force relationships, friction, and simulation speed
• Mouse attract/repel, save/load .json configs, keyboard shortcuts (Space, P, R, N, Ctrl+F, Tab)
• WebGPU required — recent Chrome/Safari with hardware acceleration enabled

Run locally: python3 -m http.server 8080 — file:// URLs won't work due to shader loading restrictions.`,
    categories: ["Graphics", "WebGPU", "Interactive"],
    tech: ["WebGPU", "JavaScript", "WGSL"],
    github: "https://github.com/izy138/ParticleSim",
    demo: "https://izy138.github.io/ParticleSim",
    image: particlesim,
    imagePosition: "object-center"
  },
  {
    slug: "fiu-panther-planner",
    title: "FIU Panther Planner",
    description: "Chrome extension for FIU students with AI-powered academic planning, course tracking, and campus navigation.",
    about: `Built for ShellHacks 2025 in a team of four. Chrome extension (Manifest V3) with FastAPI/Python backend, MongoDB, and Claude 3.5 Sonnet / Gemini 2.0 Flash for AI features.

Once a student selects their major, the extension generates a degree checklist, recommends next courses via an AI advisor (Roary), detects schedule conflicts, validates prerequisites, and integrates Google Maps for walking routes between classes. Course data syncs from FIU's PantherSoft portal.

Stack: HTML/CSS/JS frontend, FastAPI + MongoDB backend, Google Maps APIs (Static, Places, Geocoding, Routes).

Run backend: python -m uvicorn app.main:app --reload
Load extension: chrome://extensions → Load Unpacked → frontend folder`,
    categories: ["Chrome Extension", "AI", "Python", "JavaScript", "Hackathon"],
    tech: ["Chrome Extension", "JavaScript", "HTML5", "CSS3", "FastAPI", "Python 3.13", "MongoDB", "Pydantic", "Google Maps API", "Google ADK"],
    github: "https://github.com/izy138/ShellHacks2025",
    demo: "https://devpost.com/software/fiu-panther-planner",
    image: shellhacks,
    imagePosition: "object-right"
  },
  {
    slug: "intelligent-notes",//"react-dashboard", 
    title: "Intelligent Notes",
    description: "Note taking app using AI to summarize and organize notes.",
    about: `Built for Software Engineering I at FIU. Led a team of four as project manager and lead developer.

• AI summaries for individual notes or entire folders via Claude API (bring your own key)
• AI-suggested tags, folder organization, auto-save, and search by title, content, or tag
• JavaFX UI with Maven build`,
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
    about: `Task board with priority, due dates, and tags. Built with React and TypeScript using react-beautiful-dnd for drag-and-drop between columns. Supabase handles real-time sync, session persistence, and authentication.`,
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
    about: `Frontend internship at Red Peak Corp on Sponsor Stories — an AI platform that generates personalized books for sponsors.

• React/TypeScript/Tailwind frontend with page animations and responsive components
• Google Gemini integration for personalized book content from sponsor data
• Python/Pillow pipeline for theme-matched book cover generation
• Backend script optimization to fix prompt-content mismatches in AI output`,
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
    about: `Real-time messaging app in development. Firebase Authentication and Firestore for messaging infrastructure; early work focused on auth flow and backend setup.`,
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
    about: `Relational database project in Go. Currently in development.`,
    categories: ["Development", "Golang"],
    tech: ["Golang", "Database", "SQL"],
    github: "https://github.com/yourusername/react-dashboard",
    demo: "https://your-dashboard.vercel.app",
    image: wip,
    imagePosition: "object-center"
  },

  {
    slug: "kasiopya",
    title: "Kasiopya.com",
    description: "Custom Shopify storefront for Kasiopya — a silk fashion brand — featuring a horizontal image carousel, variant-based image filtering, and polished UI.",
    about: `Custom Shopify storefront on the Dawn theme for Kasiopya, a silk fashion brand — far beyond default platform capabilities.

Image carousel (desktop)
Horizontal strip gallery with peek effect, smooth transitions, custom arrows, and responsive breakpoints—replacing Shopify's stacked gallery.

Variant-based filtering
Selecting a color filters the carousel to that variant's images via product JSON mapping, data attributes, and updated counters. On mobile, native touch-swipe is preserved with filtering layered on top; viewport crossing 750px triggers a clean reload.

Also built custom swatches, sticky product media, header/grid spacing, a three-column tutorials video layout, and a Liquid popup template. Carousel and variant logic unified in one script to avoid DOM race conditions.`,
    categories: ["Shopify", "JavaScript", "Liquid"],
    tech: ["Shopify", "Liquid", "JavaScript", "CSS3", "Dawn Theme"],
    github: "https://github.com/izy138/Kasiopya.com",
    demo: "https://kasiopya.com",
    image: kasiopya1,
    images: [kasiopya1, kasiopya2, kasiopya3, kasiopya4],
    imagePosition: "object-top"
  },

  // ...add the rest of your projects here, following the same structure
];

/** Display order for all projects. Reorder this array to change how projects appear on the portfolio. */
export const PROJECT_ORDER = [
  "nih-search-dashboard",
  "bookmarkbuddy",
  "miami-dade-active-calls",
  "webgpu-particles",
  "fiu-panther-planner",
  "library-management-system",
  "recipe-recommender",
  "multichoice",
  "intelligent-notes",
  "kanban-board",
  "kasiopya",
  "internship-fullstack",
  "chat-app",
  "go-data",
];

export default projects; 